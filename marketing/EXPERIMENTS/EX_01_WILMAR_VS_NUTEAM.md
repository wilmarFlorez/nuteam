# Experimento EX_01 — landing personal frente a NuTeam

**Estado:** hipótesis registrada; hay un primer corte de NU_01, pero no es un experimento A/B activo ni concluido.
**Propósito:** comparar recorridos para la misma intención de automatización, sin confundir una conversión de formulario con un lead cualificado.

## Pregunta

Para personas que buscan ayuda para automatizar procesos operativos en Colombia, ¿la landing enfocada de NuTeam genera conversaciones más cualificadas que el portafolio personal de Wilmar?

La prueba mide el ajuste entre búsqueda, anuncio, landing y conversión. No demuestra por sí sola que un cliente prefiera una sociedad constituida ni que el registro legal sea la razón por la que otra visita no contactó.

## Fuentes y línea base disponible

Fuente detallada: repositorio `wlanding`, `marketing_firts_campaing/`, en particular `CAMPAIGN_01_COLABORACIONES_AUTOMATIZACION.md`, `CIERRE_DIA_7_28_SEPTIEMBRE_2026.md` y `informes_terminos_de_busqueda/REVISION_29_30_SEPTIEMBRE_2026.md`.

- **21–27 sep. 2026, antes de la reestructuración:** las capturas registran 1.052 impresiones, 80 clics, 7,60 % de CTR, COP 273.250 y 0 conversiones. El CSV del mismo período registra 996 impresiones, 79 clics, 7,93 % de CTR, COP 269.070 y 0 conversiones. Conservar las fuentes separadas; no se determinó la causa de la diferencia.
- **29–30 sep. 2026, después de cambios de estructura/anuncios:** 299 impresiones, 18 clics, 6,02 % de CTR, COP 60.147 y una conversión real de formulario. El contacto aún no estaba calificado; el registro documenta 0 leads cualificados confirmados.
- El segundo corte es solo de dos días y siguió a cambios en anuncios y estructura. No atribuir la conversión a una nueva landing, un cambio de marca o una variable específica.
- **NuTeam, 7–8 oct. 2026:** 230 impresiones, 15 clics, 6,52 % de CTR, COP 58.676 y 0 conversiones de Ads; Wilmar confirmó 0 envíos comerciales en `Leads`. GA4 muestra el 7: 8 sesiones de campaña, 4 con interacción y 0 CTA/inicios/envíos; el 8: 1 sesión, 0 con interacción y 0 de esos eventos en una captura preliminar. Fuente: [revisión de NU_01](../CAMPAIGNS/NU_01_REVISION_2026-10-07_08.md). Es un primer corte de poco volumen, no una prueba controlada ni base para concluir que una landing sea mejor.
- El 6 de octubre Wilmar confirmó que la campaña personal estaba pausada y que NuTeam sería la siguiente; NU_01 inició el 7 de octubre. El cierre de resultados de la campaña personal corresponde a `wlanding`; no reescribirlo desde NuTeam. La comparación sigue sin concluirse.

## Diseño recomendado

### Si el objetivo es aislar la página

Usar un experimento de Google Ads, si la configuración disponible permite repartir de forma controlada tráfico comparable entre las dos páginas. Mantener constantes keywords, anuncios, ubicación, fechas, puja y gasto total; cambiar únicamente la landing. Confirmar cómo se asigna la conversión a cada variante y calificar todos los contactos con el mismo criterio.

No activar dos campañas idénticas y con presupuesto independiente para llamarlas una prueba A/B. Si no es posible una división controlada, documentar la comparación como observacional y direccional.

### Si se prioriza una campaña NuTeam independiente

NU_01 ya se creó como campaña identificable para NuTeam en la misma cuenta de Google Ads y usa su conversión y hoja `Leads`. Esta separación facilita operar y reportar cada destino, pero, si cambian también keywords, anuncios, puja o fechas, los resultados no prueban que la landing de NuTeam causó la diferencia.

Wilmar confirmó el 6 de octubre que la campaña personal estaba pausada y que NuTeam sería la siguiente; NU_01 empezó el 7 de octubre. La decisión registrada fue no correrlas simultáneamente. Si esa decisión cambiara, registrar la superposición y el gasto combinado; no suponer reparto aleatorio del tráfico ni añadir otra vez COP 34.000 diarios sin autorización. La operación secuencial hace que la comparación sea observacional, no una prueba A/B, y puede reflejar diferencias de fecha, anuncios, keywords, puja y landing.

## Calificación comparable

Aplicar a los dos sitios el criterio ya usado en `wlanding`: proceso real, entradas identificables, interés en explorar implementación/colaboración técnica y contacto con capacidad de decidir o presentar el caso a quien decide.

Añadir a la revisión —no asumir a partir de un formulario— si el prospecto indicó que exige un proveedor constituido. Registrar conteos y motivos anonimizados, nunca los datos personales en este archivo. Así se podrá evaluar directamente esa objeción.

## Instrumentación que debe verificarse

- En wlanding, Google Ads tiene una acción de conversión web que se dispara tras una respuesta exitosa del formulario; su hoja y captura de atribución son independientes.
- En NuTeam, el código contempla eventos GA4 y envía atribución al formulario/hoja `Leads`. Vercel muestra la variable para Production y Preview; capturas de DebugView/Tag Assistant del 5–6 de octubre confirman recepción de eventos durante QA. `form_submit` se importó como acción principal bajo Contactos antes del inicio; los reportes GA4 del 7–8 muestran sesiones asignadas a NU_01 pero ningún CTA/inicio/envío en esa fila. La lectura del día 8 es preliminar y Wilmar confirma que no hubo formularios comerciales. Confirmar que la campaña use el objetivo Contactos y revisar si Preview mezcla datos con Production. Wilmar decidió que aplazar aviso, Términos y formalización no bloquea comercialmente la campaña; los asuntos legales permanecen pendientes, no validados.
- Antes de comparar, verificar ambos recorridos de extremo a extremo, incluyendo UTM, envío exitoso, conversión Ads y fila de la hoja respectiva. Elegir una conversión primaria por envío para evitar duplicados.
- wlanding no tiene, en la evidencia revisada, medición de sesiones, CTA o inicio de formulario; NuTeam tiene un primer corte GA4 por campaña, pero falta actualizar el día 8 tras el procesamiento y confirmar definiciones compatibles. No comparar esas métricas entre marcas todavía.

## Criterios de lectura

- **Más clics o mejor CTR** no significa más intención cualificada.
- **Formulario enviado** indica éxito técnico y contacto; no necesariamente oportunidad comercial.
- **Lead cualificado** requiere revisión del contexto y el criterio común.
- **Requisito de sociedad constituida** es una causa de descalificación que debe anotarse, no ocultarse ni generalizarse desde una sola respuesta.
- Si hay poco volumen o cero oportunidades cualificadas, declarar el resultado inconcluso y revisar calidad de términos, tracking y fricción antes de cambiar varias variables juntas.

## Cierre del experimento

Al terminar la ventana aprobada, guardar un reporte por variante/campaña siguiendo [`../TEMPLATES/REVISION_DE_CAMPANA.md`](../TEMPLATES/REVISION_DE_CAMPANA.md). La decisión debe indicar qué evidencia se observó, qué quedó sin medir, si la meta de leads cualificados se alcanzó y cuál es el siguiente cambio único que se probará.
