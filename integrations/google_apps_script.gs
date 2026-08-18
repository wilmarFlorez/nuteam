const SHEET_NAME = "Leads";
const ALLOWED_FIELDS = [
  "name", "company", "role", "email", "phone", "process", "volume",
  "impact", "source", "utm", "attribution",
];
const REQUIRED_FIELDS = [
  "name", "company", "role", "email", "phone", "process", "volume", "impact",
];
const ALLOWED_UTM_FIELDS = ["source", "medium", "campaign", "term", "content"];
const ALLOWED_ATTRIBUTION_FIELDS = [
  "source", "medium", "campaign", "term", "content", "landing_page", "referrer", "timestamp",
];

function doGet() {
  return jsonResponse({ success: true, message: "Endpoint activo." });
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

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      sheet.appendRow([
        new Date(), data.name, data.company, data.role, data.email,
        data.phone, data.process, data.volume, data.impact, data.source || "landing",
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

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({
      success: false,
      error: error instanceof Error ? error.message : "Error al guardar el lead.",
    });
  }
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
