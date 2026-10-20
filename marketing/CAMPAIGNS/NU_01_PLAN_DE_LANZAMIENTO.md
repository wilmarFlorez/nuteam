# Plan de lanzamiento — NU_01 Google Search para NuTeam

**Estado:** objetivo y presupuesto aprobados por Wilmar. Inicio real confirmado: 7 de octubre de 2026. En Ads, el corte 7–8 registra 230 impresiones, 15 clics, COP 58.676 de gasto y cero conversiones. GA4 registra el día 7 ocho sesiones de NU_01 y el día 8 una sesión en una captura preliminar; no hay `cta_click`, `form_start` ni `form_submit` en las filas de campaña. Wilmar confirma cero envíos comerciales en `Leads` y eliminación de las filas QA. La campaña no tiene fecha final; el tope de COP 1.000.000 requiere seguimiento y pausa manual. Ver [revisión inicial](NU_01_REVISION_2026-10-07_08.md). Términos y formalización siguen diferidos por decisión de Wilmar; no afirmar que NuTeam ya está constituida.

**Versión:** 1.8 · 8 de octubre de 2026.

**Identificador en Google Ads:** `CO_Search_NuTeam_Automatizacion_01`.
**Documentos relacionados:** [brief de campaña](NU_01_GOOGLE_SEARCH_AUTOMATIZACION.md), [checklist de lanzamiento](NU_01_CHECKLIST_LANZAMIENTO.md), [revisión del 7–8 de octubre](NU_01_REVISION_2026-10-07_08.md), [experimento entre landings](../EXPERIMENTS/EX_01_WILMAR_VS_NUTEAM.md).

## Decisión de campaña

NU_01 se creó como campaña de Búsqueda separada para NuTeam en la cuenta actual de Google Ads y se envió a revisión el 6 de octubre. Wilmar confirma inicio real el 7 de octubre. La captura de Ads del 7–8 de octubre muestra aptitud (en aprendizaje) y entrega; el primer corte está en [revisión inicial](NU_01_REVISION_2026-10-07_08.md). Sus anuncios dirigen a `nuteam.ai`; los leads de NuTeam se miden por separado de la hoja del portafolio personal.

El **6 de octubre**, Wilmar confirmó que la campaña personal estaba pausada y que NU_01 sería la siguiente, sin solapamiento. El inicio real fue el **7 de octubre de 2026**. La captura de Ads del 7–8 muestra la campaña habilitada y apta (en aprendizaje), con 230 impresiones, 15 clics, COP 58.676 y cero conversiones. En la captura diaria de Ads del 7, hubo 121 impresiones, 8 clics y COP 35.522; GA4 muestra 8 sesiones atribuidas a NU_01, 4 con interacción y cero `cta_click`, `form_start` y `form_submit`. Para el 8, GA4 muestra una sesión de campaña y cero de esos eventos, pero se capturó ese mismo día y sigue preliminar. La diferencia de Ads para el día 8 (109 impresiones, 7 clics y COP 23.154) se calculó restando la captura del día 7 al total 7–8; no es un reporte diario independiente. Wilmar confirma cero formularios comerciales y eliminación de las filas QA. El CSV de términos solo expone totales agregados y no consultas individuales; no inferir intención ni añadir negativas a partir de “Otros términos”. La prueba de destino del 6 de octubre encontró la página y expandió `{adgroupid}` y `{creative}`; `utm_term` quedó vacío en esa muestra. La coincidencia de clics/sesiones del día 7 es agregada y no prueba correspondencia uno a uno. Ads no tiene fecha de finalización establecida: Wilmar debe vigilar el gasto y pausar antes del tope de COP 1.000.000 o al completar 30 días de pauta activa. Términos y formalización siguen diferidos por decisión de Wilmar; no afirmar que NuTeam ya está constituida.

## Objetivo, audiencia y oferta

### Objetivo único

**Meta aprobada por Wilmar el 2 de octubre de 2026:** conseguir **3 conversaciones cualificadas en 30 días de pauta activa**. Es una meta de negocio, no una conversión automática de Google Ads ni una promesa de resultado o benchmark validado para NuTeam.

Una conversión de formulario indica que el envío llegó correctamente. La conversación se marca como cualificada solo después de verificar un proceso real, entradas identificables, interés en evaluar una implementación y acceso del contacto a la decisión o a quien la toma.

### Audiencia prioritaria

Personas que participan en operaciones, servicio al cliente, back office, ventas u otros equipos de empresas en Colombia y buscan contratar ayuda para automatizar un proceso repetitivo o conectar información entre sistemas. La primera prueba será en **español**. El inglés de la landing se conserva, pero no se compra tráfico en inglés dentro de esta campaña.

### Oferta y siguiente paso

Invitar al prospecto a describir un proceso real para evaluar si automatizarlo es viable. Si se explora una solución, el trabajo define entradas, reglas, excepciones, integraciones, controles humanos cuando hagan falta y salida al siguiente responsable/sistema.

El formulario actual pide empresa, cargo, email corporativo, proceso, volumen e impacto; teléfono es opcional en el frontend. No prometer una evaluación gratuita, tarifa, calendario, plazo de respuesta, ahorro o ROI que no se haya definido.

### Hipótesis

Una búsqueda de intención comercial que lleva a una landing especializada en operaciones, con un CTA único de evaluación del proceso, debería producir conversaciones más pertinentes que una landing personal con recorridos de roles y automatización. La prueba valida el ajuste entre búsqueda, anuncio y landing; no prueba que la falta de registro legal haya causado los abandonos previos.

## Posicionamiento y límites de credibilidad

**Mensaje central:** NuTeam evalúa un proceso operativo y construye automatizaciones e integraciones cuando son viables; la IA se usa cuando aporta al flujo y no reemplaza las reglas, controles o revisión humana que el proceso requiere.

**Evidencia disponible para esta prueba:** capacidades técnicas verificables y Freight Pilot como demo de portafolio. Freight Pilot no es cliente ni producto comercial validado, y no calcula precios, genera cotizaciones ni asigna vehículos.

NuTeam puede anunciarse como marca mientras avanza su formalización, sin afirmar que ya está constituida. Si un prospecto pregunta o tiene requisitos de proveedor, explicar antes de una propuesta cuál es el estado y qué forma de contratación/facturación se puede ofrecer. Registrar si la constitución de una sociedad es requisito de compra; no inferirlo por el clic ni ocultarlo hasta el cierre.

El panel estático del hero con “Live agent” / “Running”, CRM, cliente y ticket fue retirado del código actual de la landing; la captura de producción aportada el 6 de octubre no lo muestra. No reutilizar esa interfaz como resultado de cliente ni como prueba de operación real.

## Responsables

- **Wilmar:** dueño de la campaña; aprueba objetivo y gasto, configura y activa Google Ads, confirma el flujo legal/contractual disponible, revisa leads y determina su calidad.
- **Apoyo de marketing/IA:** prepara borradores y análisis, revisa reportes que Wilmar comparta y documenta decisiones. No tiene acceso implícito a la cuenta Ads, la hoja de leads ni datos personales; no activa ni modifica gasto sin aprobación.
- **Colaborador full-stack junior:** puede apoyar entregas técnicas según alcance y disponibilidad acordados. No se le asignan marketing, seguimiento de leads ni compromisos de capacidad sin una decisión explícita.

## Canal, geografía y configuración inicial

| Configuración | Propuesta para NU_01 |
| --- | --- |
| Tipo | Google Ads · Red de Búsqueda |
| Cuenta | Cuenta actual; campaña separada y nombre propio de NuTeam |
| Ubicación | Colombia; presencia de personas en Colombia, no solo interés por Colombia |
| Idioma | Español |
| Red de Display | Desactivada durante la prueba |
| Partners de búsqueda | Desactivados durante la prueba inicial, salvo aprobación posterior |
| Horario | Todo el día al inicio; no restringir horas sin evidencia |
| URL final | `https://www.nuteam.ai/` en español; comprobar versión publicada y redirecciones en Ads |
| Destino del CTA | Sección `#contacto`; probar que el ancla funciona en móvil y escritorio |
| Puja inicial | Maximizar clics con límite CPC de COP 6.000 como configuración heredada provisional; comprobar estado de cuenta, entrega y aprobación antes de aplicar |
| Concordancias | Frase y exacta; no empezar con amplia |

Google Ads no convierte una campaña separada en una asignación aleatoria de las búsquedas. Si la campaña de Wilmar sigue activa sobre los mismos términos, revisar el solapamiento y decidir cuál se pausa o si se ejecutará un experimento de tráfico dividido compatible con la cuenta.

## Estructura de grupos y palabras clave

Las keywords vienen de la investigación y los términos documentados en `wlanding/marketing_firts_campaing/keyword_grupo_a/` y la campaña anterior. **Son candidatas para revisar en la interfaz antes de cargarlas**, no una lista activa verificada para NuTeam.

### Grupo `AG_NuTeam_Automatizacion_General`

```text
"automatización de procesos"
[automatización de procesos]
"automatización empresarial"
[automatización empresarial]
"servicios de automatización"
[servicios de automatización]
```

### Grupo `AG_NuTeam_Documentos`

```text
"automatización documental"
[automatización documental]
```

En wlanding, el grupo documental registró 11 impresiones y 0 clics en el corte del 29–30 de septiembre; no alcanza para evaluar la intención ni descartar este grupo. No afirmar volumen de búsqueda donde Keyword Planner no lo mostró. Revisar términos de búsqueda al menos semanalmente; la agrupación “Otros términos de búsqueda” no revela la intención de sus clics.

### Negativas

Revisar primero las negativas vigentes de la campaña personal. Como candidatas iniciales, valorar búsquedas inequívocamente educativas o laborales: `curso`, `cursos`, `tutorial`, `capacitación`, `certificación`, `empleo`, `empleos`, `vacante`, `vacantes`, `salario`, `hoja de vida`, `CV`, `gratis` y variantes de definición/beneficios.

No cargar automáticamente toda la lista previa. Evitar excluir de forma amplia `pdf` (puede ser pertinente para documentos), `trabajo` (puede aparecer en “flujo de trabajo”), `n8n`, `RPA` o `industrial` sin revisar consultas concretas: pueden intersectar con necesidades de implementación legítimas. Añadir una negativa solo con evidencia y anotar el motivo.

## Anuncios de Búsqueda

Crear un anuncio responsivo por grupo, con recursos propios por intención. Los titulares de abajo respetan el máximo de **30 caracteres** y las descripciones el máximo de **90**; cargarlos después de verificar el anuncio en la interfaz. No fijar posiciones al inicio salvo que una limitación real de comprensión lo requiera.

### Anuncio general — titulares candidatos

```text
Automatización operativa
Evalúa un proceso real
Conecta tus sistemas
Automatiza tareas repetitivas
Flujos con reglas claras
IA aplicada a procesos
Integraciones para operar
Automatización empresarial
Evalúa antes de automatizar
Procesos con control humano
Mensajes, datos y sistemas
Cuéntanos tu proceso
```

### Anuncio general — descripciones candidatas

```text
Evaluamos tu proceso para definir qué conviene automatizar y qué no.
Conectamos mensajes, documentos y sistemas con reglas y controles claros.
Cuéntanos qué tarea se repite y qué ocurre si se retrasa o falla.
Usamos IA cuando aporta y dejamos excepciones para revisión humana.
```

### Anuncio documental — titulares candidatos

```text
Automatización documental
Organiza datos de documentos
Extrae y valida información
Detecta datos faltantes
De solicitudes a datos claros
Revisión humana de casos
Evalúa tu flujo documental
Conecta datos y sistemas
Revisa tu proceso documental
Procesa documentos con reglas
Datos listos para revisión
Documentos con trazabilidad
```

### Anuncio documental — descripciones candidatas

```text
Estructura solicitudes y documentos, valida campos y señala datos por revisar.
Cuéntanos qué datos recibes y a qué sistema o persona deben llegar.
Evaluamos si una parte del flujo documental se puede automatizar con controles.
La IA extrae información cuando aporta; las ambigüedades pasan a revisión.
```

### Recursos adicionales

Enlaces de sitio hacia secciones existentes de la landing:

| Texto | URL |
| --- | --- |
| Soluciones | `https://www.nuteam.ai/#soluciones` |
| Casos de uso | `https://www.nuteam.ai/#casos-de-uso` |
| Cómo funciona | `https://www.nuteam.ai/#como-funciona` |
| Evaluar un proceso | `https://www.nuteam.ai/#contacto` |

Textos destacados candidatos: `Evaluación del proceso`, `Reglas y validaciones`, `Revisión humana`, `Integra tus sistemas`, `IA cuando aporta`. No usar extensiones de llamada, ubicación o dirección sin un canal y una ubicación reales, aprobados y monitoreados.

### Correspondencia con la landing

La versión en español ya tiene el titular **“¿Cuánto trabajo manual se acumula en tu operación?”**, el CTA **“Evaluar un proceso”** y contenido sobre evaluación de procesos y sistemas. Usar la página española como destino de esta campaña; no crear un mensaje de ahorro o resultados que el anuncio y la página no puedan respaldar.

La landing es bilingüe. La campaña inicial se configura en español para Colombia. Si se cambian textos compartidos del sitio, actualizar también la versión inglesa de manera equivalente; no usar anuncios en inglés en esta prueba.

## Presupuesto, duración y decisión frente a la campaña actual

### Presupuesto aprobado para NU_01

Wilmar aprobó para NU_01 **COP 34.000 diarios promedio** y un **tope operativo de COP 1.000.000 para esta campaña**, durante hasta 30 días de pauta activa. Es un presupuesto independiente: no se toma del presupuesto personal ni lo comparte. El presupuesto diario promedio no es un tope diario rígido ni configura por sí solo un límite total automático; Wilmar debe revisar el gasto acumulado de NU_01 y pausarla antes de superar su tope operativo. Estos valores no son un límite total de gasto de la cuenta si otra campaña también está activa.

- El tope de COP 1.000.000 corresponde solo a NU_01; el presupuesto de la campaña personal se administra por separado en su proyecto.
- Si ambas campañas corren a la vez en la misma cuenta, revisar el gasto diario y acumulado combinado de la cuenta para entender la exposición total. No interpretar el tope de NU_01 como tope de cuenta ni alterar el presupuesto personal desde este plan.
- Si el presupuesto disponible no permite una prueba completa de 30 días, fijar antes el gasto máximo operativo y describir el período como piloto reducido.
- No ampliar presupuesto por CTR, recomendaciones automáticas de Google o falta de conversiones sin una decisión documentada.

La primera campaña usó Maximizar clics con límite CPC de COP 6.000 y el evento de formulario no mide calificación comercial. Por eso no cambiar NU_01 a Maximizar conversiones basándose en el único formulario del corte inicial.

En el corte del 29–30 de septiembre, el término visible `automatizaciones para empresas` se asoció a un formulario real bajo una variante de `[automatización empresarial]`. Es una señal inicial para revisar en NU_01; el contacto no estaba cualificado y un solo registro no valida la keyword ni predice rendimiento.

### Calendario

| Momento | Acción | Responsable |
| --- | --- | --- |
| 6 oct. 2026 | NU_01 se envió a revisión. La prueba de destino encontró la página; la muestra dejó `utm_term` vacío. | Wilmar; evidencia archivada en el historial de campaña |
| 7 oct. 2026 | Inicio real confirmado por Wilmar. La campaña personal estaba pausada según la última confirmación, sin solapamiento previsto. | Wilmar |
| Corte diario del 7 oct. | Ads: 121 impresiones, 8 clics, COP 35.522; GA4: 8 sesiones de campaña, 4 con interacción y 0 CTA/inicios/envíos de formulario en la fila de NU_01. | Wilmar; apoyo documenta |
| Corte 7–8 oct. | Ads: 230 impresiones, 15 clics, COP 58.676 y cero conversiones. Wilmar confirma cero formularios comerciales y eliminación de filas QA. Ver [revisión](NU_01_REVISION_2026-10-07_08.md). | Wilmar; apoyo documenta |
| GA4 del 8 oct. | Captura del mismo día: una sesión de campaña y 0 CTA/inicios/envíos. Volver a consultar tras el procesamiento; los datos son preliminares y pueden cambiar. | Wilmar |
| Control de primeras 48 h | Reconciliar los datos GA4 actualizados del 7–8 con Ads para el mismo intervalo y confirmar el objetivo Contactos de NU_01. No hacer clic en anuncios propios ni cambiar configuración a partir del dato parcial. | Wilmar |
| Diario | Revisar estado y gasto acumulado para respetar el tope manual; registrar nuevos formularios y no optimizar por fluctuaciones de un día. Ads no tiene fecha de finalización establecida. | Wilmar |
| Semanal; primera revisión alrededor del 14 oct. | Revisar términos visibles, grupos y calidad de formularios. El CSV actual no incluye consultas individuales; no añadir negativas basadas en “Otros términos”. Cambiar solo ante evidencia suficiente, fallo o tráfico inequívocamente irrelevante. | Wilmar; apoyo en análisis |
| 30 días de pauta activa o al alcanzar el tope | Cerrar la ventana, pausar manualmente, calificar contactos y calcular costo por conversación cualificada solo si hay denominador verificable. | Wilmar |

El aviso de privacidad, Términos y formalización se difieren por decisión de Wilmar y no son bloqueos comerciales según esa decisión; esto no implica revisión legal ni permite afirmar que NuTeam ya está constituida.

## Medición, conversiones y Sheets

### Google Ads

Registrar por campaña: impresiones, clics, CTR, CPC, costo, grupos/keywords, términos visibles y conversiones. Mantener autoetiquetado habilitado y verificar URL final y UTMs con las herramientas de Google Ads; no generar `gclid` manual ni hacer clic en anuncios propios.

Sufijo UTM configurado y confirmado por Wilmar:

```text
utm_source=google&utm_medium=cpc&utm_campaign=nuteam_automatizacion_co_01&utm_content={adgroupid}_{creative}&utm_term={keyword}
```

El 6 de octubre, Google Ads informó 1 de 1 muestras completadas y encontró la página de destino. La URL de clic copiada fue `https://www.nuteam.ai/?utm_source=google&utm_medium=cpc&utm_campaign=nuteam_automatizacion_co_01&utm_content=199565095814_827230638644&utm_term=`. La muestra sustituyó `{adgroupid}` y `{creative}`; `utm_term` quedó vacío. La documentación de Google indica que `{keyword}` puede quedar vacío cuando el anuncio no se activa mediante una palabra clave; la prueba no fue un clic real de búsqueda y no valida la llegada a Leads. Mantener el sufijo y no hacer clic en anuncios propios. Fuente: [parámetros de ValueTrack](https://support.google.com/google-ads/answer/6305348?hl=es), consultada el 6 de octubre de 2026.

### GA4 y acciones de conversión

El código de NuTeam contempla `page_view`, `cta_click`, `form_start`, `form_submit`, `scroll_50` y `scroll_90`. `form_start` se dispara al primer foco dentro del formulario; no confirma que el visitante haya diligenciado campos. `form_submit` se dispara después de una respuesta exitosa del endpoint. Las capturas de Tag Assistant/DebugView del 5–6 de octubre confirman recepción de eventos de QA en producción, no resultados comerciales. Las capturas GA4 del 7 muestran 8 sesiones de NU_01, 4 con interacción y 0 `cta_click`, `form_start` y `form_submit`; las del 8 muestran 1 sesión, 0 interacción y 0 de esos eventos, como dato preliminar del mismo día. Reconsultar el día 8 tras el procesamiento y no tomar el evento `form_submit` de Referral del día 7 como lead: no corresponde a NU_01 y Wilmar confirma que no hay formularios comerciales. También falta revisar si Preview mezcla datos con Production. La revisión de privacidad/consentimiento está diferida por decisión de Wilmar y no se considera validada. Los eventos no registran errores de formulario; si se requiere esa métrica, agregarla en otra iteración.

El evento GA4 `form_submit`, que el frontend envía tras `success: true`, fue importado como acción principal dentro de Contactos, con recuento de una y sin valor monetario. El resumen de NU_01 del 6 de octubre mostraba Contactos. En la captura de acciones del 8 de octubre, `form_submit` no está incluido en objetivos a nivel de cuenta; esto puede ser coherente con el uso de un objetivo específico de campaña. Confirmar que NU_01 siga usando Contactos, sin cambiarlo si ya está configurado. La captura también muestra cero conversiones y una acción separada de formularios de clientes potenciales con “Configuración incorrecta”, que no se debe asumir como conversión de NuTeam. La campaña registra clics, pero Ads y Wilmar reportan cero conversiones/formularios reales en el corte 7–8 oct. No contar un clic de CTA o `form_start` como conversión ni instalar una acción directa duplicada.

### Google Sheets y calificación

Los envíos de NuTeam deben llegar a su hoja `Leads`, separada de la hoja de wlanding. Wilmar confirma que no hay envíos comerciales hasta el 8 de octubre y que las filas de QA se eliminaron; por ello todavía no se ha validado en un registro comercial la llegada de UTMs desde un clic de Ads. El código captura UTMs, landing, referrer y timestamp; no se encontró captura de `gclid`/`gbraid` en el contrato actual. Esto no sustituye la conversión de Ads; si se quiere reconciliar cada fila con el clic en Sheets, decidir y probar la captura de identificadores en un cambio aparte.

Añadir o mantener en un registro operativo separado (no en este repo) los campos de seguimiento: estado, fecha de contacto, cualificación, motivo de no calificación y requisito de proveedor constituido. No reordenar los encabezados que consume Apps Script sin migración comprobada. No almacenar en reportes de Git nombres, emails, teléfonos ni detalles confidenciales del proceso.

### Embudo observable

| Paso | Fuente | Qué confirma / límite |
| --- | --- | --- |
| Impresión, clic, costo y término | Google Ads | Entrega y gasto; algunos términos pueden quedar agrupados como “Otros”. |
| Sesión, CTA y profundidad | GA4, si está configurado | Visita y navegación; no demuestra intención de compra. |
| Inicio de formulario | Evento GA4 `form_start` | Primer foco del formulario, no que se haya completado ningún campo. |
| Envío exitoso | Respuesta correcta del Apps Script, GA4 `form_submit` y conversión primaria de Ads | El contacto llegó; aún requiere respuesta y calificación manual. |
| Lead cualificado | Hoja de NuTeam / seguimiento manual | Cumple la definición de oportunidad; este estado no está instrumentado automáticamente hoy. |

## Métricas y criterios de decisión

**Métrica principal:** leads cualificados y gasto por lead cualificado. Si no hay leads cualificados, registrar “ninguno en la ventana”; no reportar costo cero ni llamar costo por lead al costo por formulario.

**Métricas secundarias:** formularios reales y costo por formulario, sesiones y CTA si GA4 está activo, inicios y envíos de formulario, grupos, términos visibles, porcentaje agregado como “Otros términos”, y calificación/respuesta del contacto.

| Señal observada | Siguiente lectura/acción |
| --- | --- |
| Impresiones insuficientes | Revisar elegibilidad, volumen y estado de keywords; no declarar fallo de landing. |
| Clics sin inicio de formulario | Revisar consulta, anuncio, correspondencia del titular y claridad/credibilidad de la página. Las sesiones y CTA son necesarias para aislar el paso. |
| Inicios sin envíos | Revisar fricción y errores; revisar la discrepancia opcional/obligatoria de teléfono antes de interpretar el abandono. |
| Formularios sin conversaciones cualificadas | Revisar términos, expectativas del CTA, criterios y seguimiento; registrar motivos, incluido el requisito de sociedad. |
| Conversaciones cualificadas | Revisar alcance y capacidad antes de prometer tiempos, resultados, equipo o condiciones comerciales. |

Un solo formulario o una ventana breve no permite declarar ganadora una marca. No es una prueba A/B si cambian al mismo tiempo landing, keywords, anuncios, puja o fechas.
