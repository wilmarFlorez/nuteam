# Plan: Política de Privacidad de NuTeam Landing

- **Estado:** política bilingüe implementada en el repositorio y verificada localmente;
  pendiente desplegarla en la landing para que sea pública.
- **Responsable del plan y aprobación:** Wilmar.
- **Proyecto:** repo `nuteam`, landing pública `www.nuteam.ai`.
- **Borrador temporal:** eliminado tras trasladar su contenido a las páginas públicas.
- **Última actualización:** 2026-11-13

## Alcance

Crear y publicar una Política de Privacidad que describa el **uso actual de NuTeam
Landing** en sus rutas `/` y `/en`. Debe cubrir el formulario de evaluación, la analítica
y atribución que ya se ejecutan en el sitio, y el widget de Ana embebido en `/`.

No cubre el uso autenticado de la plataforma privada `app.nuteam.ai`, sus cuentas u
operaciones internas; no incluye funcionalidades o tratamientos futuros, una política
de cookies separada, los Términos ni documentos corporativos que no describan el uso
actual de esta landing. Que el widget use infraestructura de NuTeam Platform no amplía
el alcance a las cuentas de esa plataforma; sí deben describirse los proveedores y el
tratamiento de los datos enviados por visitantes desde la landing.

La política se redactará en NuTeam con base en el funcionamiento real del proyecto,
información confirmada por Wilmar, referencias públicas y fuentes oficiales aplicables.
No se copiarán textos, datos de responsables, proveedores, leyes o compromisos de los
ejemplos.

## Estado actual que debe reflejarse

La revisión de código confirma estas superficies; los destinos, configuración activa,
retención y detalles del tratamiento deben verificarse antes de redactar:

| Superficie | Funcionamiento actual observado |
| --- | --- |
| Formulario de evaluación | Solicita nombre, empresa, cargo, email, descripción del proceso, volumen e impacto; teléfono es opcional. El envío incluye fuente y, cuando están disponibles, UTM, página de llegada, referente y fecha de atribución. Apps Script agrega también la fecha de recepción y guarda los datos en `Leads`; la notificación por correo incluye esos mismos datos. |
| Analítica y atribución | GA4 está activo en producción. La landing mide interacciones y carga el Google tag; la atribución de campaña se guarda temporalmente en el almacenamiento del navegador y se adjunta al lead. La política lo describirá de forma general, sin inventariar cada parámetro, cookie o vencimiento técnico. La captura reciente confirma `form_submit` de GA4 activo y principal en Google Ads, bajo Contactos. |
| Widget de Ana | Está embebido en `/`, no en `/en`. Al abrirlo se crea una sesión anónima y una conversación. Antes de enviar mensajes, la interfaz pide nombre, email y consentimiento específico para usar esos datos en el seguimiento. Los mensajes se guardan en la conversación, se procesan con IA y el equipo autorizado puede revisar y responder en el mismo chat. |
| Footer | `components/landing/footer.tsx` muestra marca y copyright; todavía no tiene una sección `Legal` ni enlaza una política de privacidad. El footer compartido se usa en `/` y `/en`. |

## Tratamientos y destinatarios que la política describirá

La política debe nombrar los proveedores y las categorías de destinatarios que participan
en los flujos actuales, junto con su función. No describirá listas de usuarios, permisos
internos, pasos de atención de solicitudes ni detalles de configuración que no forman
parte de la política pública.

| Tratamiento actual | Proveedores/categorías que se explicarán en la política |
| --- | --- |
| Leads del formulario y atribución | Google Apps Script/Sheets recibe los campos del formulario y la atribución; MailApp envía una copia con esos mismos datos al personal autorizado de NUTEAM. Los datos identificables se conservarán mientras la solicitud siga activa y por un máximo de 12 meses tras la última interacción significativa; luego se eliminarán o anonimizarán. |
| Analítica del sitio | Google Analytics 4 mide uso e interacciones; el código no añade las respuestas del formulario a los parámetros de evento, aunque Google tag puede tratar identificadores técnicos y datos de navegación. Google Ads recibe la conversión `form_submit` importada desde GA4 para medir campañas. |
| Hosting y widget | Vercel sirve el loader; Supabase gestiona la sesión anónima y guarda contactos, consentimiento, conversaciones y mensajes; su región productiva es Estados Unidos (Oregón). Render aloja la API y OpenAI procesa mensajes para generar respuestas. Los datos identificables de conversación seguirán el criterio aprobado; solo se conservarán métricas posteriores si están agregadas y ya no identifican a una persona. La política usará el país, no la región técnica ni el plan del proyecto. |
| Atención humana | Personal autorizado de NUTEAM puede revisar las conversaciones derivadas al equipo. No se publican nombres individuales. |

El chat procesa los mensajes de texto libre con IA y permite revisión humana. La política
describirá ese tratamiento sin prometer que todo dato personal incluido espontáneamente
en un mensaje queda eliminado antes de procesarse. La casilla actual se refiere al uso del
nombre y el email para seguimiento; no sustituye la explicación del tratamiento de los
mensajes y del uso de IA.

La lista final de proveedores y finalidades se confirmará con la configuración de
producción antes de publicar la política. Las ubicaciones, si se incluyen, se expresarán
por país; no se publicarán regiones de centros de datos ni el plan de cada servicio. No se
incluirá un inventario individual de cookies, sus vencimientos ni la configuración interna
de retención de cada proveedor.

## Referencias de estructura

Usar estas páginas solo para orientar la organización y claridad del documento:

- [Yavendio — Política de privacidad](https://yavendio.com/co/privacidad): cubre
  landing, plataforma y operación en varios países; su alcance es mucho mayor que el de
  NuTeam Landing. Su inventario de cookies y vencimientos corresponde a sus propias
  superficies y no se debe trasladar a este documento.
- [Ceiba — Aviso de privacidad](https://www.ceiba.com.co/aviso-de-privacidad/) y
  [Política de tratamiento](https://www.ceiba.com.co/politica-de-tratamiento-de-datos/):
  referencias para explicar responsable, finalidades, derechos y canales de consulta.
- [PITZ — Aviso de Privacidad Integral](https://www.pitz.com.mx/legal/notice):
  su sección de cookies es una referencia de redacción general, no una fuente legal
  colombiana; el aviso está dirigido a México.
- [Decreto 1377 de 2013 — Gestor Normativo de Función Pública](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=53646):
  el artículo 11 regula la conservación razonable y necesaria; el artículo 13 requiere
  incluir contacto del responsable, derechos y procedimiento, y el numeral 13.6 exige
  informar el período de vigencia de la base de datos.

No tomar estas páginas como asesoría ni como prueba de que sus afirmaciones aplican a
NuTeam. Confirmar la legislación y los datos propios en fuentes oficiales y en la
configuración real de la landing.

Para esta landing se describirán de forma general las cookies y tecnologías de
almacenamiento similar, las categorías de información y sus finalidades, junto con la
forma de gestionarlas desde el navegador. No se publicará un inventario de cada cookie ni
los vencimientos técnicos de GA4 o Google Ads, salvo que una norma aplicable lo requiera.

## Plan de trabajo

### Fase 1 — Confirmar los hechos actuales

- [x] Registrar los datos empresariales proporcionados por Wilmar: NUTEAM S.A.S.,
  NIT 902125810-9 y domicilio CL 14 10 23, Calima, Valle del Cauca, Colombia.
- [x] Confirmar que NUTEAM S.A.S. es el responsable del tratamiento de NuTeam Landing.
- [x] Registrar que la publicidad pagada se dirige a Colombia; la página es pública en
  internet y puede recibir solicitudes de personas ubicadas en otros países.
- [x] Confirmar en `contact_form.tsx` y `google_apps_script.gs` los datos que se guardan
  en Sheets y se incluyen en la notificación: nombre, empresa, cargo, email, teléfono
  opcional, proceso, volumen, impacto, fuente, cinco campos UTM, página de llegada,
  referente, fecha de atribución y fecha de recepción generada por Apps Script.
- [x] Registrar el criterio aprobado por Wilmar para datos identificables de leads y
  conversaciones: mientras la solicitud siga activa y hasta 12 meses después de la última
  interacción significativa; después, eliminación o anonimización. Incluye las copias de
  notificación por correo.
- [x] Registrar que el formulario y el widget no se usarán para enviar promociones por
  correo. La finalidad es responder a la solicitud recibida.
- [x] Registrar que GA4 está activo en producción, confirmado por Wilmar.
- [x] Confirmar en código que la atribución de campaña se guarda temporalmente en el
  navegador y se adjunta al lead; la política lo describirá de forma general, sin
  detallar el mecanismo técnico ni cada parámetro.
- [x] Las capturas de Wilmar confirman la vinculación GA4–Google Ads completada,
  personalización de anuncios inhabilitada y la acción `NuTeam (web) form_submit`
  importada desde GA4 como conversión principal de Contactos. La captura más reciente la
  muestra activa, con conversiones en los últimos 7 días y última conversión el 9 nov.
  La política describirá solo medición de conversiones, no remarketing personalizado.
- [x] Confirmar en los repositorios que el widget crea una sesión anónima y una
  conversación; exige nombre, email y consentimiento de seguimiento antes de enviar
  mensajes; persiste el contacto, consentimiento y mensajes, usa IA y permite revisión
  y respuesta humana en el mismo chat.
- [x] Confirmar en los repositorios la función general de cada proveedor del widget:
  Supabase para sesión/contactos/conversaciones, Render para la API, Vercel para el loader
  y OpenAI para procesar mensajes. No se detallarán cláusulas ni vencimientos técnicos.
- [x] Wilmar confirmó en el panel la región productiva de Supabase: West US (Oregon),
  `us-west-2`. Para la política se usará solo el país, Estados Unidos.
- [x] No se encontró integración de Sentry en el código de `nuteam`; no se incluirá como
  proveedor de la landing salvo que se confirme una integración externa de producción.
- [x] Evitar afirmar que Analytics no recibe ningún dato personal: el código no añade
  los campos diligenciados del formulario a los eventos, pero Google tag puede tratar
  identificadores técnicos y datos de navegación.

**Salida:** inventario confirmado de datos, propósitos, destinatarios, canales,
retención y tecnologías que efectivamente utiliza la landing.

### Información empresarial necesaria antes de cerrar el borrador

#### Confirmado por Wilmar

- Razón social: **NUTEAM S.A.S.**
- NIT: **902125810-9**.
- Domicilio: **CL 14 10 23, Calima, Valle del Cauca, Colombia**.
- Responsable del tratamiento confirmado: **NUTEAM S.A.S.**
- Alcance indicado: la publicidad pagada de la landing se dirige a Colombia; el sitio
  es público y NuTeam puede recibir solicitudes de otros países.
- Contacto de privacidad confirmado: **wflorezsamudio@gmail.com**.
- Teléfono público de contacto confirmado: **+57 323 683 5590**.
- [x] Incluir el teléfono público de contacto de NUTEAM S.A.S. junto con su dirección y
  correo, según el artículo 13.1 del Decreto 1377 de 2013.
- La política identificará a **NUTEAM S.A.S.** y describirá los destinatarios internos
  como **personal autorizado de NUTEAM**, sin nombres individuales.
- No se enviarán promociones por correo electrónico. Si ese uso cambia posteriormente,
  habrá que actualizar la política antes de hacerlo.
- Retención aprobada para datos identificables de leads y conversaciones: mientras estén
  activos y hasta 12 meses después de la última interacción significativa; después,
  eliminación o anonimización. Métricas solo podrán conservarse más tiempo si son
  agregadas y ya no permiten identificar a una persona.

#### Solicitudes y derechos que se describirán en la política

- [x] Publicar el canal `wflorezsamudio@gmail.com`, identificar a NUTEAM S.A.S. como
  responsable y describir a los destinatarios internos como personal autorizado de
  NUTEAM, sin nombres individuales ni pasos internos.
- [x] Distinguir los términos colombianos para consultas y reclamos: consultas, máximo
  **10 días hábiles** desde su recibo; reclamos, máximo **15 días hábiles** desde el día
  siguiente a su recibo. Si no es posible responder dentro del término inicial, la ley
  permite informar los motivos y la fecha de respuesta, con una ampliación máxima de
  **5 días hábiles** para consultas y **8 días hábiles** para reclamos, contados desde el
  vencimiento del término inicial. El artículo 14 permite que normas especiales fijen
  un término menor cuando corresponda.
- [x] Verificar esos términos en los artículos 14 y 15 de la [Ley Estatutaria 1581 de
  2012 — Gestor Normativo de Función Pública](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981).
- [x] Confirmar que esos artículos no establecen términos diferentes según el país de
  residencia del titular. Esta verificación no determina si otras leyes extranjeras
  resultan aplicables a personas de otras jurisdicciones.

#### Aún por definir o confirmar

- [x] Mantener la política en español e inglés, según las dos rutas actuales `/` y `/en`;
  las páginas están disponibles en `/privacidad` y `/en/privacy`.

Texto base para el canal y los términos legales de solicitudes:

> Para ejercer tus derechos y presentar consultas o reclamos sobre tus datos personales,
> escribe a `wflorezsamudio@gmail.com`. Las consultas se atenderán en un máximo de 10 días
> hábiles contados desde su recepción. Los reclamos de corrección, actualización o
> supresión de datos, o por presunto incumplimiento, se atenderán en un máximo de 15 días
> hábiles contados desde el día siguiente a su recepción. Si no es posible responder
> dentro del término inicial, se informarán los motivos y la fecha de respuesta; la
> ampliación no superará 5 días hábiles para consultas ni 8 para reclamos, contados desde
> el vencimiento del término inicial, de acuerdo con la Ley 1581 de 2012, sin perjuicio de
> términos menores aplicables.

No hacen falta nombres, correos ni mensajes de leads individuales, credenciales, valores
de variables de entorno ni accesos a cuentas para completar el plan.

### Fase 2 — Redactar la política del sitio

- [x] Preparar el borrador bilingüe temporal; su contenido se trasladó a las páginas
  públicas y el archivo temporal se eliminó después de implementarlas.
- [x] Contrastar los plazos de consultas y reclamos y los criterios de conservación con
  la [Ley 1581 de 2012, artículos 8, 12, 14 y 15](https://www.funcionpublica.gov.co/eva/gestornormativa/norma.php?i=49981) y el
  [Decreto 1377 de 2013, artículos 11 y 13](https://www.funcionpublica.gov.co/eva/gestornormativa/norma.php?i=53646).
- [x] Preparar un primer borrador, en lenguaje claro, sobre el responsable, datos tratados,
  finalidades, proveedores, conservación, derechos, tecnologías del navegador y cambios.
- [x] Describir que el chat usa IA y puede pasar a revisión humana; explicar que pide
  nombre, email y consentimiento de seguimiento antes de enviar mensajes.
- [x] Preparar los primeros borradores en español e inglés con contenido equivalente.
- [x] Wilmar revisó y aprobó el borrador bilingüe.
- [x] Revalidar con capturas que la vinculación GA4–Google Ads está completada y que
  `NuTeam (web) form_submit` está importada desde GA4, **Activa** y **Principal** bajo
  **Contactos**. La captura muestra conversiones en los últimos 7 días.

**Salida:** política en español e inglés aprobada por el responsable del producto,
basada en el inventario y en información propia confirmada.

### Fase 3 — Publicar y comprobar el acceso

- [x] Crear la página pública en `app/privacidad/page.tsx` para español y
  `app/en/privacy/page.tsx` para la traducción inglesa, con rutas `/privacidad` y
  `/en/privacy`.
- [x] Añadir al footer compartido una sección **Legal** con un único enlace: “Política
  de privacidad” en español y “Privacy Policy” en inglés. Mantener la marca y el
  copyright actuales; no agregar enlaces vacíos para otros documentos.
- [x] Pasar la versión de idioma a `Footer` desde `app/page.tsx` y `app/en/page.tsx` para
  que el título y el enlace apunten a la política correcta.
- [x] Mantener intactos el CTA, los campos del formulario y la UI interna del widget;
  la política se abre como una página pública del sitio.
- [x] Verificar en navegador de escritorio y móvil que `/privacidad` y `/en/privacy`
  cargan y que el footer `Legal` muestra solo el enlace de esta tarea en el idioma
  correcto.
- [x] Eliminar el borrador temporal una vez implementada la política en las dos rutas
  públicas de la landing.

**Salida:** páginas implementadas y verificadas localmente; serán accesibles desde las dos
versiones públicas de la landing tras desplegar los cambios.

## Criterios de aceptación

- El contenido describe únicamente el tratamiento actual de `www.nuteam.ai`, incluidas
  su analítica/atribución, formulario y widget.
- El responsable, sus canales, proveedores, datos, propósitos y plazos están verificados
  antes de publicarse; no se copian afirmaciones de los ejemplos.
- La página existe en `/privacidad` y `/en/privacy`; el footer compartido tiene una
  sección `Legal` con solo el enlace a la Política de Privacidad.
- La política está disponible en español e inglés y se abre desde el footer de `/` y
  `/en`.
- No se incluye la plataforma `app.nuteam.ai`, futuros productos ni prácticas no
  implementadas en la landing.
- La última versión publicada y su fecha pueden consultarse sin iniciar sesión.
