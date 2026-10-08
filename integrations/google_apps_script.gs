const SHEET_NAME = "Leads";
const NOTIFICATION_EMAIL_PROPERTY = "LEAD_NOTIFICATION_EMAIL";
const ALLOWED_FIELDS = [
  "name", "company", "role", "email", "phone", "process", "volume",
  "impact", "source", "utm", "attribution",
];
const REQUIRED_FIELDS = [
  "name", "company", "role", "email", "process", "volume", "impact",
];
const ALLOWED_UTM_FIELDS = ["source", "medium", "campaign", "term", "content"];
const ALLOWED_ATTRIBUTION_FIELDS = [
  "source", "medium", "campaign", "term", "content", "landing_page", "referrer", "timestamp",
];

function doGet() {
  return jsonResponse({ success: true, message: "Endpoint activo." });
}

function authorizeLeadNotificationEmail() {
  getLeadNotificationEmail();
  MailApp.getRemainingDailyQuota();
  Logger.log("Autorización de notificaciones por email completada.");
}

function doPost(event) {
  try {
    if (!event || !event.postData || !event.postData.contents) {
      throw new Error("El cuerpo de la solicitud es obligatorio.");
    }

    const data = JSON.parse(event.postData.contents);
    validateLead(data);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error("No existe la hoja Leads.");

    const receivedAt = new Date();
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      sheet.appendRow([
        receivedAt, data.name, data.company, data.role, data.email,
        data.phone ? data.phone.trim() : "", data.process, data.volume, data.impact,
        data.source || "landing",
        data.utm ? data.utm.source || "" : "",
        data.utm ? data.utm.medium || "" : "",
        data.utm ? data.utm.campaign || "" : "",
        data.utm ? data.utm.term || "" : "",
        data.utm ? data.utm.content || "" : "",
        data.attribution ? data.attribution.landing_page || "" : "",
        data.attribution ? data.attribution.referrer || "" : "",
        data.attribution ? data.attribution.timestamp || "" : "",
      ]);
    } finally {
      lock.releaseLock();
    }

    let notificationSent = false;
    try {
      sendLeadNotification(data, receivedAt);
      notificationSent = true;
    } catch (notificationError) {
      const message = notificationError && notificationError.message
        ? notificationError.message
        : String(notificationError);
      Logger.log("No se pudo enviar la notificación del lead: " + message);
    }

    return jsonResponse({ success: true, notificationSent: notificationSent });
  } catch (error) {
    return jsonResponse({
      success: false,
      error: error instanceof Error ? error.message : "Error al guardar el lead.",
    });
  }
}

function getLeadNotificationEmail() {
  const recipient = PropertiesService.getScriptProperties()
    .getProperty(NOTIFICATION_EMAIL_PROPERTY);
  if (!recipient || !/^\S+@\S+\.\S+$/.test(recipient.trim())) {
    throw new Error("Configura un email válido en la propiedad LEAD_NOTIFICATION_EMAIL.");
  }
  return recipient.trim();
}

function sendLeadNotification(data, receivedAt) {
  const recipient = getLeadNotificationEmail();
  const utm = data.utm || {};
  const attribution = data.attribution || {};
  const timezone = Session.getScriptTimeZone();
  const lines = [
    "Se recibió un nuevo lead en NuTeam.",
    "",
    "Fecha: " + Utilities.formatDate(receivedAt, timezone, "yyyy-MM-dd HH:mm:ss"),
    "Nombre: " + data.name,
    "Empresa: " + data.company,
    "Cargo: " + data.role,
    "Email: " + data.email,
    "Teléfono: " + (data.phone || "No indicado"),
    "Proceso: " + data.process,
    "Volumen: " + data.volume,
    "Impacto: " + data.impact,
    "Fuente: " + (data.source || "landing"),
    "Fuente UTM: " + (utm.source || ""),
    "Medio UTM: " + (utm.medium || ""),
    "Campaña UTM: " + (utm.campaign || ""),
    "Término UTM: " + (utm.term || ""),
    "Contenido UTM: " + (utm.content || ""),
    "Landing page: " + (attribution.landing_page || ""),
    "Referrer: " + (attribution.referrer || ""),
    "Timestamp de atribución: " + (attribution.timestamp || ""),
  ];

  MailApp.sendEmail(
    recipient,
    "Nuevo lead recibido — NuTeam",
    lines.join("\n"),
  );
}

function validateLead(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    throw new Error("Los datos del lead no son válidos.");
  }
  Object.keys(data).forEach(function (key) {
    if (ALLOWED_FIELDS.indexOf(key) === -1) throw new Error("Campo no permitido: " + key);
  });
  REQUIRED_FIELDS.forEach(function (field) {
    if (typeof data[field] !== "string" || !data[field].trim()) {
      throw new Error("El campo " + field + " es obligatorio.");
    }
  });
  if (
    data.phone !== undefined &&
    (typeof data.phone !== "string" || data.phone.length > 50)
  ) {
    throw new Error("El teléfono no es válido.");
  }
  if (!/^\S+@\S+\.\S+$/.test(data.email.trim())) throw new Error("El email no es válido.");
  if (data.source !== undefined && (typeof data.source !== "string" || !data.source.trim())) {
    throw new Error("La fuente no es válida.");
  }
  if (data.utm !== undefined && (typeof data.utm !== "object" || Array.isArray(data.utm))) {
    throw new Error("Los parámetros UTM no son válidos.");
  }
  if (data.utm !== undefined) {
    Object.keys(data.utm).forEach(function (key) {
      if (ALLOWED_UTM_FIELDS.indexOf(key) === -1) {
        throw new Error("Parámetro UTM no permitido: " + key);
      }
      if (typeof data.utm[key] !== "string") {
        throw new Error("El parámetro UTM " + key + " no es válido.");
      }
    });
  }
  if (data.attribution !== undefined) {
    if (typeof data.attribution !== "object" || Array.isArray(data.attribution)) {
      throw new Error("La atribución no es válida.");
    }
    Object.keys(data.attribution).forEach(function (key) {
      if (ALLOWED_ATTRIBUTION_FIELDS.indexOf(key) === -1) {
        throw new Error("Campo de atribución no permitido: " + key);
      }
      if (typeof data.attribution[key] !== "string") {
        throw new Error("El campo de atribución " + key + " no es válido.");
      }
    });
  }
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
