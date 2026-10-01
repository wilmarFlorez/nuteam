# Estrategia de marketing de NuTeam

**Estado:** base de trabajo; validar oferta, presupuesto y estado legal antes de publicar claims nuevos.  
**Actualizado:** 1 de octubre de 2026.

## Propósito

Validar si existe demanda para conversaciones con empresas que quieren evaluar la automatización de un proceso operativo. La landing debe atraer a prospectos con un flujo real y ayudar a determinar si una colaboración técnica tiene sentido; no presentar NuTeam como un SaaS listo para comprar ni como una agencia con resultados ya comprobados.

## Posicionamiento de trabajo

NuTeam es una marca enfocada en evaluar y construir automatizaciones operativas que conectan información, reglas y sistemas. La IA se aplica cuando aporta al flujo; no se presenta como requisito para todo problema ni como ejecución autónoma sin controles.

La experiencia y capacidad técnica de Wilmar pueden respaldar la conversación. La colaboración de otro desarrollador puede describirse según su participación real y disponibilidad en cada proyecto; no inferir a partir de ello una plantilla permanente o capacidad ilimitada.

NuTeam todavía no está constituida como empresa. Se puede promocionar la marca mientras avanza su formalización, pero el sitio, los anuncios y las conversaciones no deben afirmar que ya existe una entidad legal registrada. Aclarar la forma de contratación/facturación aplicable antes de preparar una propuesta formal y confirmar que cumple los requisitos del prospecto. No registrar datos legales, fiscales ni fechas de constitución en este documento hasta que se verifiquen.

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

Antes de usar la interfaz de “agente en vivo” como prueba, aclarar si es una ilustración o una ejecución real. No mostrar una traza ilustrativa como si acreditara una operación de cliente.

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

- Usar nombres distintos y explícitos; por ejemplo, `CO_Search_NuTeam_Automatizacion_01` para la campaña borrador de este repositorio.
- Mantener el presupuesto de la campaña personal como dato histórico. Aprobar el presupuesto total combinado antes de activar dos campañas; una segunda campaña no recibe otros COP 34.000/día por defecto.
- Si dos campañas quedan habilitadas para las mismas búsquedas, audiencias y fechas, no asumir que el tráfico queda repartido de manera controlada. Para probar solo la landing, valorar un experimento de Google Ads o un diseño de comparación explícito. Una comparación entre campañas distintas es direccional si también cambian anuncios, keywords, puja o fechas.
- Las campañas de contratación y las de automatización deben conservar objetivos, anuncios, destinos y calificación separados.

## Medición común, registros separados

El código de NuTeam contiene eventos GA4 para `page_view`, `cta_click`, `form_start`, `form_submit`, `scroll_50` y `scroll_90`. `form_submit` se dispara después de una respuesta exitosa del endpoint. Los eventos dependen de `NEXT_PUBLIC_GA_MEASUREMENT_ID`; el código por sí solo no confirma que la variable esté desplegada en producción.

El formulario de NuTeam captura UTMs y atribución y envía el lead a su hoja `Leads`. La hoja del portafolio personal sigue siendo distinta. Conservar los dos registros, pero aplicar los mismos estados de calificación para poder comparar agregados.

Google Ads debe contar como conversión de NuTeam un envío exitoso, no un clic en CTA. Confirmar si se configurará una acción directa de Ads o se importará `form_submit` desde GA4. Evitar contar ambas como conversiones primarias para el mismo envío. La configuración productiva actual de GA4, Ads y Sheets queda pendiente de verificación.

### Criterio heredado para calificar una conversación

Marcar como cualificada cuando se confirme que:

- existe un flujo real, propio o dentro de una empresa, y no es búsqueda de empleo o aprendizaje;
- el proceso tiene entradas identificables;
- existe interés en explorar una implementación o colaboración técnica, no solo comprar un software listo;
- el contacto puede decidir o llevar el contexto a la persona que decide.

Registrar por separado el estado legal requerido por el comprador. “Necesita proveedor constituido” es una razón de encaje/procurement, no una razón para ocultar la situación de NuTeam ni un lead cualificado por sí sola.
