# Checklist de lanzamiento — NU_01

**Objetivo y presupuesto de NU_01 aprobados por Wilmar el 2 de octubre de 2026. Wilmar revisa la campaña personal al cierre del 5 de octubre y decide si continúa o cambia a NuTeam. Si elige NuTeam, el 6 de octubre es una fecha posible de inicio, sujeta a verificaciones operativas y de Ads pendientes. Wilmar decidió que aplazar el aviso de privacidad no es un bloqueo comercial; el asunto sigue pendiente y no se declara revisado.**

El plan detallado está en [`NU_01_PLAN_DE_LANZAMIENTO.md`](NU_01_PLAN_DE_LANZAMIENTO.md).

Estados sugeridos: `pendiente`, `en curso`, `bloqueado`, `verificado`. Registrar fecha/evidencia de producción fuera de este archivo, sin PII ni credenciales.

## Decisiones de negocio antes de configurar Ads

- [x] **Objetivo:** Wilmar aprobó 3 conversaciones cualificadas en 30 días de pauta activa. Es la meta de negocio; la conversión técnica de Ads sigue siendo el envío exitoso del formulario y cada contacto requiere calificación manual.
- [x] **Presupuesto NU_01:** Wilmar aprobó COP 34.000 diarios promedio y un tope operativo de COP 1.000.000 para esta campaña, administrados aparte del presupuesto personal.
- [x] **Evidencia histórica de exposición y decisión de no simultaneidad:** capturas del período 25 de septiembre–1 de octubre muestran `Campaign #1` habilitada/apta, COP 34.000 diarios promedio y keywords coincidentes con candidatas de NU_01. No confirman el estado actual de Ads. Wilmar confirmó el 5 de octubre que no dejará las campañas activas al mismo tiempo.
- [ ] **Decisión al cierre del 5 de octubre:** revisar el período completo del 29 de septiembre al 5 de octubre y decidir si continúa la campaña personal o cambia a NuTeam. Los reportes guardados revisados llegan solo al 30 de septiembre; falta el corte actualizado de Ads.
- [x] **No simultaneidad:** Wilmar confirmó el 5 de octubre que las campañas no estarán activas al mismo tiempo. Antes de un cambio, pausar la campaña saliente antes de activar la entrante; no cambiar desde NuTeam el presupuesto personal.
- [ ] **Fecha de activación:** fijarla solo después del `GO`, con las verificaciones operativas y de Ads definidas para salida completas y la campaña personal pausada. El aviso de privacidad permanece pendiente, pero Wilmar decidió que no sea bloqueo comercial.
- [ ] **Registro legal:** NuTeam puede promocionarse como marca mientras se formaliza, pero no afirmar que ya es una sociedad constituida. Definir cómo se explica el estado de contratación/facturación antes de una propuesta formal.
- [ ] **Responsables de lead:** Wilmar confirma quién revisará y responderá los formularios y cómo se actualizará su calificación. No publicar un plazo de respuesta no confirmado.

## Estado de página, formulario y tratamiento de datos

- [x] **Teléfono opcional en producción:** Wilmar confirmó que copió `integrations/google_apps_script.gs`, desplegó una nueva versión de Apps Script y probó el formulario con teléfono vacío y diligenciado. La captura de `Leads` muestra ambos casos guardados. Son filas de QA; excluirlas de métricas comerciales. No se copiaron datos personales a este repositorio.
- [x] **Pruebas de producción — recepción técnica y confirmación visual (capturas de Wilmar, 5 oct. 2026):** las llamadas `exec` respondieron `success: true`; la landing mostró “Solicitud recibida”; las capturas de Sheets muestran las filas de prueba en `Leads`, con teléfono vacío y campos recibidos. Son filas de QA, no leads comerciales. No se copian aquí datos personales.
- [x] **Verificación general del formulario y la hoja (confirmación de Wilmar, 5 oct. 2026):** la hoja mostrada es el `Leads` de NuTeam, separada de wlanding. Wilmar es el único responsable actual del seguimiento y no requiere notas en Sheets para estas pruebas; excluirlas manualmente de métricas comerciales y no tratarlas como prospectos.
- [x] **Enlaces muertos del footer retirados del código actual:** ya no aparecen los enlaces `#` de Privacidad/Términos en la fuente revisada el 2 de octubre de 2026. La publicación no está verificada.
- [ ] **Aviso de privacidad y tratamiento de datos (pendiente, no bloqueo comercial por decisión de Wilmar del 5 oct. 2026):** no se ha publicado ni revisado en esta sesión. Retirar enlaces no lo resuelve. No afirmar revisión legal ni conformidad validada. No guardar PII en Git ni reponer automáticamente una página de Términos sin confirmar que sea necesaria.
- [x] **Panel estático del hero retirado del código actual:** ya no está en `hero.tsx` según revisión del 2 de octubre de 2026. Verificar que tampoco aparezca en la versión publicada antes del lanzamiento.
- [ ] Revisar móvil y escritorio, navegación a `#contacto`, selectores de idioma y todos los enlaces de los anuncios.
- [ ] Confirmar que la explicación de la oferta no sugiere una entidad constituida, clientes, operación productiva, volúmenes, ahorro o resultados no comprobados.

### Procedimiento de prueba de producción del formulario

La prueba crea un registro real en producción. Si otra persona revisa la hoja, avisarle para que no contacte el registro como si fuera un prospecto. Usar solo datos de prueba controlados por Wilmar; no introducir nombres de clientes, información operacional real ni datos personales de terceros. Si Wilmar es el único responsable de revisar leads, no hace falta añadir una nota QA a la fila: excluirla manualmente de métricas comerciales. No incluir resultados de prueba en reportes comerciales.

1. Wilmar decidió que el aviso pendiente no es un bloqueo comercial de campaña; eso no cambia el estado de revisión de privacidad. Para QA, usar solo valores sintéticos y no introducir datos personales reales, de clientes o terceros.
2. Abrir directamente `https://www.nuteam.ai/` en una ventana normal, ir a `#contacto` y comprobar que se ve la versión publicada esperada. No llegar desde un anuncio ni hacer clic en anuncios propios.
3. Para comprobar atribución sin generar clic publicitario, abrir el destino en una sesión nueva o eliminar primero `nuteam_attribution` de `sessionStorage` en DevTools → Application → Session Storage. El código conserva la primera atribución por pestaña; si reutilizas una sesión vieja, puede ignorar los nuevos parámetros. Usar una URL como `https://www.nuteam.ai/?utm_source=qa&utm_medium=manual&utm_campaign=qa_nuteam_YYYYMMDD&utm_term=qa_keyword&utm_content=qa_creative#contacto` (sustituir la fecha). No inventar `gclid`/`gbraid` ni usar parámetros de una campaña comercial real.
4. Enviar una sola prueba con valores sintéticos, sin datos de personas o procesos reales (por ejemplo, email `qa@example.com`, empresa `QA NuTeam` y textos de prueba). Dejar teléfono vacío; no usar una fila de prospecto real para la validación.
5. En las herramientas de desarrollo del navegador, comprobar en la solicitud `exec` que el cuerpo incluya los cinco valores UTM y la respuesta sea `success: true`; la landing debe mostrar “Solicitud recibida”. Revisar la hoja `Leads` de NuTeam y validar el mapeo: fuente `qa`; fuente UTM `qa`; medio `manual`; campaña `qa_nuteam_YYYYMMDD`; término `qa_keyword`; contenido `qa_creative`; landing con la URL de prueba y timestamp. No guardar ni compartir el cuerpo completo, el endpoint o capturas con datos personales.
6. Solo si se necesita revalidar el teléfono diligenciado o cambió el despliegue, hacer una segunda prueba marcada QA con un número controlado. La prueba previa de Wilmar ya confirmó el campo vacío y diligenciado.
7. La validación de GA4 puede generar eventos reales de QA en la propiedad. Si Wilmar decide ejecutarla mientras el aviso sigue pendiente, evitar PII en parámetros y excluir esos eventos de resultados comerciales. Nunca probar haciendo clic en un anuncio. La decisión de hacer esta validación no equivale a una revisión legal del tratamiento.
8. Guardar únicamente fecha, navegador/dispositivo, resultado y evidencia redactada (sin PII, credenciales, endpoint ni contenido del proceso) fuera de este repositorio. No es obligatorio anotar la fila en Sheets mientras Wilmar sea el único responsable de revisarla; si cambia quién tiene acceso o hace seguimiento, acordar cómo distinguir pruebas antes de repetirlas. Eliminar filas solo mediante un procedimiento autorizado y consistente con la política de retención.

**Criterio de aprobación:** formulario y Apps Script confirman éxito, aparece exactamente una fila de QA correcta en la hoja NuTeam, los casos probados con/sin teléfono se comportan según lo esperado y el evento de Analytics (si está autorizado) no contiene PII. Esto valida funcionamiento técnico, no calidad comercial ni convierte la fila QA en lead.

No provoques errores cambiando el endpoint o enviando datos malformados a producción. Si se requiere validar el estado de error del formulario, hacerlo con un endpoint/entorno de prueba controlado.

## Medición técnica

- [x] **Google Sheets — recepción y destino:** la prueba de producción llegó a la hoja `Leads` de NuTeam, separada de wlanding, según confirmación de Wilmar el 5 de octubre de 2026.
- [x] **UTM manuales de QA en Sheets (capturas de Wilmar, 5 oct. 2026):** los cinco valores UTM aparecieron en la petición y en las columnas correspondientes de `Leads`; la respuesta fue `success: true`. Esto valida captura manual → formulario → Apps Script → Sheets. No valida todavía el sufijo ni la sustitución de ValueTrack de Google Ads.
- [x] **Variable GA4 en Vercel:** captura de Wilmar del 5 de octubre muestra `NEXT_PUBLIC_GA_MEASUREMENT_ID` en los ámbitos Production y Preview. No se registró ni compartió su valor.
- [x] **Recepción de eventos de depuración en GA4 (captura de Wilmar, 5 oct. 2026, 10:18):** DebugView muestra 13 eventos en los últimos 30 minutos: `cta_click` (4), `user_engagement` (4), `scroll` (2), `scroll_50` (2) y `scroll_90` (1). Confirma que los eventos de esta sesión de QA llegaron a DebugView; no son conversiones ni resultados comerciales.
- [ ] **Evento `page_view` en DebugView:** no aparece entre los 15 eventos de la captura del 5 oct. 2026, aunque Wilmar confirmó que Tag Assistant estaba **“Conectado”** en el último intento. DevTools encontró una petición `td?id=…` con estado 204, pero el recorte de Headers no identifica el evento; el filtro `collect` no aplica a la ruta observada. El código local desactiva el `page_view` automático y lo envía manualmente desde `AnalyticsTracker`. Se ajustó localmente la inicialización de `gtag` para establecer la cola antes de la hidratación; el cambio no se ha desplegado ni verificado en producción. Tras el despliegue autorizado, comprobar si aparece `page_view` en Hits enviados/DebugView. No enviar el formulario para esta prueba.
- [ ] **Separación Production/Preview:** la variable está asignada a ambos ámbitos. Confirmar que los eventos de preview no se mezclen con la propiedad que se usará para decisiones comerciales; no se ha validado su comportamiento en una URL preview.
- [ ] **Conversión Google Ads:** configurar/confirmar una acción propia de NuTeam para el envío exitoso. El código de NuTeam revisado no muestra una conversión directa de Ads equivalente a la de wlanding; no asumir que el evento GA4, por estar en código, ya optimiza la campaña.
- [ ] **Vinculación GA4–Google Ads (si se importará `form_submit` o se necesitan informes de Ads en GA4):** identificar la cuenta de Ads elegida para NU_01 y vincularla con la propiedad GA4 de NuTeam. No es necesario que compartan el mismo login de Google; para crear el vínculo, quien lo gestione requiere rol Editor o superior en GA4 y acceso de administrador en Ads. No se ha confirmado aún qué cuenta Ads se utilizará ni si se elegirá importación.
- [ ] Elegir una sola acción primaria por envío. Si se importa `form_submit` desde GA4 y también se instala conversión directa, evitar que ambas se cuenten como primarias para la misma solicitud.
- [ ] Asegurar que NU_01 usa la conversión de NuTeam y que una conversión de wlanding no se atribuye/usa como objetivo de NU_01 por configuración general de cuenta.
- [ ] **UTM de Google Ads/ValueTrack:** probar el sufijo configurado y que `{adgroupid}`, `{creative}` y `{keyword}` se sustituyan correctamente en URL/landing y lleguen a la fila de QA. La prueba manual anterior no verifica esos reemplazos. No sobrescribir parámetros definidos a nivel de cuenta ni hacer clic en anuncios propios.
- [ ] Confirmar autoetiquetado de Google Ads. No inventar un `gclid` ni hacer clic en anuncios propios. La hoja de NuTeam actualmente no captura `gclid`/`gbraid`; anotar esta limitación o aprobar un cambio específico y probarlo antes de depender de esos campos.
- [ ] Mantener pendiente la revisión de privacidad/consentimiento y del comportamiento de las etiquetas. Wilmar decidió que no es un bloqueo comercial para lanzar; no se marca como revisado. La variable en Vercel no demuestra qué datos recibe la propiedad.

## Configuración de Google Ads

- [ ] Confirmar en la misma cuenta de Google Ads el nombre `CO_Search_NuTeam_Automatizacion_01`; no llamar a esta campaña `Campaign #1`.
- [ ] Aplicar la decisión del 5 de octubre: solo una campaña activa. Si continúa la personal, mantener NU_01 pausada; si se elige NuTeam, pausar primero la personal y activar NU_01 únicamente después de completar las verificaciones operativas y de Ads definidas como requisitos de salida. El aviso de privacidad se mantiene pendiente, no como bloqueo comercial según la decisión de Wilmar.
- [ ] Crear campaña de Búsqueda para Colombia, español, ubicación por presencia; Display y partners de búsqueda desactivados para la prueba inicial.
- [ ] Confirmar en la interfaz el presupuesto aprobado para NU_01 (COP 34.000 diarios promedio y tope operativo de COP 1.000.000), las fechas y que esos valores pertenecen solo a esta campaña; no modificar el presupuesto personal.
- [ ] Cargar grupos, keywords frase/exacta, negativas revisadas y anuncios aprobados del plan.
- [ ] Cargar enlaces de sitio a las secciones verificadas `#soluciones`, `#casos-de-uso`, `#como-funciona` y `#contacto`; no añadir recursos de llamada o dirección no confirmados.
- [ ] Probar URL final `https://www.nuteam.ai/`, redirección, idioma español, anchors y sufijo UTM con herramientas de Ads sin activar un clic de anuncio real.
- [ ] Guardar configuración y fecha de lanzamiento en un reporte, sin secretos.

## Aprobación final (go/no-go)

| Control de salida / seguimiento | Estado / evidencia | Aprobado por |
| --- | --- | --- |
| Objetivo y criterios de calificación |  |  |
| Presupuesto diario, tope y solapamiento |  |  |
| Formulario y Sheets en producción |  |  |
| Aviso de privacidad (seguimiento pendiente; no bloqueo comercial por decisión de Wilmar; no validado) |  |  |
| Panel del hero retirado en código y versión publicada |  |  |
| GA4 y conversión Ads verificados |  |  |
| URL, UTMs y campaña Ads revisados |  |  |
| Copy, anuncios y claims aprobados |  |  |
| Responsable de calificar y dar seguimiento |  |  |

**Decisión final:** `GO / NO-GO` · **Fecha:** · **Responsable:**
