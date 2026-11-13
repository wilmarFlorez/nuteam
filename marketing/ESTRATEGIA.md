# Estrategia de marketing de NuTeam

**Estado:** base de trabajo; validar oferta y presupuesto antes de publicar claims nuevos. NUTEAM S.A.S. figura constituida e inscrita según el certificado descrito abajo; la corrección registral señalada por la Cámara sigue pendiente de confirmación.
**Actualizado:** 12 de noviembre de 2026.

## Propósito

Validar si existe demanda para conversaciones con empresas que quieren evaluar la automatización de un proceso operativo. La landing debe atraer a prospectos con un flujo real y ayudar a determinar si una colaboración técnica tiene sentido; no presentar NuTeam como un SaaS listo para comprar ni como una agencia con resultados ya comprobados.

## Posicionamiento de trabajo

NuTeam es una marca enfocada en evaluar y construir automatizaciones operativas que conectan información, reglas y sistemas. La IA se aplica cuando aporta al flujo; no se presenta como requisito para todo problema ni como ejecución autónoma sin controles.

La experiencia y capacidad técnica de Wilmar pueden respaldar la conversación. La colaboración de otro desarrollador puede describirse según su participación real y disponibilidad en cada proyecto; no inferir a partir de ello una plantilla permanente o capacidad ilimitada.

El certificado de existencia y representación legal de la Cámara de Comercio, expedido el 4 de noviembre de 2026, indica que NUTEAM S.A.S. fue constituida e inscrita en el Libro IX en esa fecha. El mismo certificado advierte que hay peticiones en trámite y refleja una inscripción de situación de control en el Libro XIII; la Cámara comunicó que debe corregirla mediante revocatoria y nueva inscripción en el Libro IX. No afirmar que esa corrección ya terminó ni que el contenido registral está libre de asuntos pendientes. Antes de una propuesta formal, confirmar la forma de contratación y facturación disponible y que cumpla los requisitos del prospecto. No incluir identificadores fiscales, documentos personales ni datos de contacto en estos materiales.

## Audiencia y exclusiones

### Prioritaria

Equipos y empresas —inicialmente Colombia y búsquedas en español— que evalúan construir una automatización para un proceso repetitivo, con datos que entran por mensajes, correo, formularios, documentos u otros sistemas.

La conversación es más prometedora cuando el prospecto puede describir el proceso, sus entradas y el siguiente paso esperado, y puede decidir sobre el trabajo o presentar el caso a quien decide.

### No mezclar con

- Reclutadores o equipos que buscan contratar a Wilmar para un rol. Ese recorrido corresponde a su portafolio personal.
- Personas que buscan cursos, definiciones, ejemplos para aprender, software listo para usar o una consulta académica.
- Consultas sobre cálculos, cotizaciones o asignación de vehículos de Freight Pilot: esas funciones no forman parte de la demo.

La logística y el transporte son un ejemplo visible de aplicación, no una restricción de NuTeam a ese sector.

## Oferta y recorrido

La oferta inicial es conversar sobre un proceso concreto y evaluar su viabilidad. Si se explora una implementación, definir el flujo con:

- **Entrada:** mensajes, correos, formularios, documentos u otros datos identificables.
- **Procesamiento:** extracción, clasificación, reglas e integraciones; IA solo cuando aporte.
- **Controles:** validación determinista, datos faltantes, excepciones y revisión humana cuando corresponda.
- **Entrega:** información o acción para el siguiente sistema o responsable.

El CTA actual de la landing, `Evaluar un proceso`, solo debe mantenerse si ese análisis inicial realmente se ofrece. No añadir gratuidad, plazos de respuesta, ahorros, ROI ni compromisos de implementación sin confirmación.

## Evidencia y límites

Puede utilizarse la experiencia profesional de Wilmar y sus capacidades verificables. Freight Pilot puede presentarse como **demo desplegada de portafolio**, no como producto comercial validado, cliente, implementación productiva o prueba de resultado económico. No calcula precios, crea cotizaciones ni asigna vehículos.

El panel estático del hero que simulaba un agente “en vivo” se retiró del código actual de la landing, según la revisión del 2 de octubre de 2026. La captura de producción aportada por Wilmar el 6 de octubre tampoco lo muestra. No reutilizar una traza ilustrativa como si acreditara una operación de cliente.

No inventar clientes, logos, testimonios, cifras, ahorro, ROI, usuarios, tiempos, certificaciones, sector atendido ni estado legal.

## Aprendizajes heredados de la campaña de wlanding

La fuente completa —incluidos CSV y capturas— es `wlanding/marketing_firts_campaing/`; NuTeam no reemplaza ni altera ese registro.

- La primera campaña se dirigió a automatización y tuvo clics antes de obtener un formulario atribuido. Esto justifica seguir probando, pero no prueba por qué otras visitas no contactaron.
- En el corte del 29–30 de septiembre se confirmó un formulario real, todavía sin calificación comercial. El envío no debe tratarse como lead cualificado.
- CTR y clics no bastan para determinar calidad. Google Ads agrupó buena parte de las consultas como “Otros términos de búsqueda”; no atribuirles intención que el informe no muestra.
- Entre los términos visibles hubo búsquedas educativas, ejemplos y herramientas. Revisar consultas reales y añadir solo negativas inequívocas. No importar automáticamente las negativas del portafolio: `pdf`, por ejemplo, podría excluir búsquedas pertinentes para una campaña documental.
- La landing personal combina audiencias de roles y automatización. NuTeam ofrece un recorrido más enfocado; comprobar el efecto con medición y calificación, no asumir que la marca empresarial por sí sola lo causará.

## Arquitectura de campañas y cuenta de Ads

Se puede usar la misma cuenta de Google Ads y mantener campañas separadas por marca, destino, audiencia y conversión. No hace falta abrir otra cuenta para organizar esta prueba.

- Usar nombres distintos y explícitos. NU_01 se creó en Google Ads como `CO_Search_NuTeam_Automatizacion_01`; no llamarla `Campaign #1`, que pertenece al historial del portafolio personal.
- Wilmar confirmó el 6 de octubre que la campaña personal está pausada y que NuTeam será la siguiente campaña; no correrán simultáneamente según esa decisión. Verificar el estado de la campaña saliente si cambia el calendario; no duplicar presupuestos ni asumir que se hereda su configuración. La comparación secuencial será observacional, no una prueba A/B.
- Si dos campañas quedan habilitadas para las mismas búsquedas, audiencias y fechas, no asumir que el tráfico queda repartido de manera controlada. Para probar solo la landing, valorar un experimento de Google Ads o un diseño de comparación explícito. Una comparación entre campañas distintas es direccional si también cambian anuncios, keywords, puja o fechas.
- Las campañas de contratación y las de automatización deben conservar objetivos, anuncios, destinos y calificación separados.

## Medición común, registros separados

El código de NuTeam contiene eventos GA4 para `page_view`, `cta_click`, `form_start`, `form_submit`, `scroll_50` y `scroll_90`. `form_submit` se dispara después de una respuesta exitosa del endpoint. Wilmar confirmó el ID de medición en Vercel para Production y Preview, y las capturas de DebugView/Tag Assistant del 5–6 de octubre confirman que `page_view`, `form_submit`, CTA y scroll llegan desde la sesión de prueba en producción. Son eventos QA, no resultados comerciales. Aún falta comprobar que Preview no mezcle sus datos con Production. En el código revisado no se observa una barrera de consentimiento; Wilmar decidió que el aviso pendiente no es bloqueo comercial, pero el tratamiento/consentimiento siguen sin revisión ni validación legal.

El formulario de NuTeam captura UTMs y atribución y envía el lead a su hoja `Leads`. La hoja del portafolio personal sigue siendo distinta. Conservar los dos registros, pero aplicar los mismos estados de calificación para poder comparar agregados.

Google Ads debe contar como conversión de NuTeam un envío exitoso, no un clic en CTA. `form_submit` se recibió en DebugView, se marcó como evento clave, se importó a la cuenta Ads vinculada y Wilmar lo guardó como principal dentro del objetivo **Contacto** el 6 de octubre. El resumen de NU_01 mostraba ese objetivo; no crear una conversión directa que duplique el mismo envío. En la ventana Ads 9–12 nov. se reporta 1 conversión. La fila única de `Leads` del mismo período coincide por fecha y atribución Google/CPC/campaña; el informe de términos identifica la búsqueda asociada. Wilmar envió un email inicial y un seguimiento el 12 de noviembre; no se ha reportado respuesta al seguimiento. Esta conciliación acredita un formulario/lead del período, no su calidad. Sin respuesta no se verifican proceso, entradas, interés en evaluar implementación ni acceso a decisión; no contar aún una conversación cualificada. La fila `NuTeam (web) form_submit` aparece activa y principal, lo que acredita configuración, no calidad del prospecto. El ID de medición identifica un flujo web de GA4, no el usuario de Google que administra el sitio; revisar si Preview mezcla sus datos con Production. La verificación de privacidad/consentimiento y los Términos siguen sin revisión documentada.

### Criterio heredado para calificar una conversación

Marcar como cualificada cuando se confirme que:

- existe un flujo real, propio o dentro de una empresa, y no es búsqueda de empleo o aprendizaje;
- el proceso tiene entradas identificables;
- existe interés en explorar una implementación o colaboración técnica, no solo comprar un software listo;
- el contacto puede decidir o llevar el contexto a la persona que decide.

Registrar por separado el estado legal requerido por el comprador. “Necesita proveedor constituido” es una razón de encaje/procurement, no una razón para ocultar la situación de NuTeam ni un lead cualificado por sí sola.
