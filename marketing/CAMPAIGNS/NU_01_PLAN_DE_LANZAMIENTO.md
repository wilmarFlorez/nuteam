# Plan de lanzamiento — NU_01 Google Search para NuTeam

**Estado:** listo para configurar después de cerrar pendientes; no activado.  
**Versión:** 1.0 · 1 de octubre de 2026.  
**Identificador propuesto en Google Ads:** `CO_Search_NuTeam_Automatizacion_01`.  
**Documentos relacionados:** [brief de campaña](NU_01_GOOGLE_SEARCH_AUTOMATIZACION.md), [checklist de lanzamiento](NU_01_CHECKLIST_LANZAMIENTO.md), [experimento entre landings](../EXPERIMENTS/EX_01_WILMAR_VS_NUTEAM.md).

## Decisión que se propone

Crear una campaña de Búsqueda separada para NuTeam en la cuenta actual de Google Ads. Enviar sus anuncios a `nuteam.ai`, medir su formulario y leads en los sistemas propios de NuTeam, y no mezclar sus contactos con la hoja del portafolio personal.

La campaña personal todavía tiene una ventana de observación programada hasta el **5 de octubre**, con revisión prevista el **6 de octubre**. La recomendación por defecto es completar esa revisión y después decidir si se pausa la campaña personal de automatización antes de lanzar NU_01. Ambas pueden coexistir solo si se aprueban presupuesto combinado y tratamiento del solapamiento de búsquedas. Mantener dos campañas no crea por sí solo una prueba A/B.

## Objetivo, audiencia y oferta

### Objetivo único

**Meta propuesta, pendiente de aprobación:** conseguir **3 conversaciones cualificadas en 30 días de pauta activa**. Reutiliza la meta de la primera campaña, pero no es una promesa de resultado ni un benchmark validado para NuTeam.

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

No usar como resultados de clientes la interfaz estática del hero (`Live agent` / `Running`, CRM verificado, ticket creado y respuesta enviada). El contenido está codificado como ejemplo visual. Antes de pagar tráfico, rotularlo en español e inglés como ilustración —por ejemplo, **“Ejemplo ilustrativo · Flujo de atención” / “Illustrative example · Support workflow”**— o sustituirlo por una demostración cuyo estado real pueda verificarse.

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

### Escenario propuesto, pendiente de aprobación

Como punto de partida comparable, considerar **COP 34.000 diarios promedio durante hasta 30 días de pauta activa**, con un **límite operativo de gasto total de COP 1.000.000**. Es una propuesta basada en la escala orientativa usada en la campaña personal, no dinero ya aprobado ni gasto garantizado. El presupuesto diario promedio no es un tope diario rígido ni configura por sí solo un límite total automático en la cuenta; Wilmar debe revisar el gasto acumulado y pausar antes de superar el límite operativo aprobado.

- Si solo NU_01 está activa, ese es el tope propuesto para la prueba.
- Si ambas campañas corren a la vez, aprobar un **límite combinado** antes de habilitar la segunda; no sumar automáticamente otros COP 34.000/día.
- Si el presupuesto disponible no permite una prueba completa de 30 días, fijar antes el gasto máximo operativo y describir el período como piloto reducido.
- No ampliar presupuesto por CTR, recomendaciones automáticas de Google o falta de conversiones sin una decisión documentada.

La primera campaña usó Maximizar clics con límite CPC de COP 6.000 y el evento de formulario no mide calificación comercial. Por eso no cambiar NU_01 a Maximizar conversiones basándose en el único formulario del corte inicial.

En el corte del 29–30 de septiembre, el término visible `automatizaciones para empresas` se asoció a un formulario real bajo una variante de `[automatización empresarial]`. Es una señal inicial para revisar en NU_01; el contacto no estaba cualificado y un solo registro no valida la keyword ni predice rendimiento.

### Calendario

| Momento | Acción | Responsable |
| --- | --- | --- |
| 1–5 oct. 2026 | Mantener la ventana de observación vigente de wlanding; preparar assets y corregir bloqueadores de NuTeam sin cambiar la campaña comparada. | Wilmar aprueba; apoyo prepara y revisa |
| 6 oct. 2026 | Cerrar la revisión documentada de wlanding; decidir pausa/continuidad, presupuesto combinado y fecha de NU_01. | Wilmar |
| Antes del inicio | Completar checklist, configurar campaña en borrador, probar URL, formulario y conversiones; obtener aprobación final del gasto. | Wilmar; apoyo técnico según tarea |
| Día de activación | Activar solo tras checklist completo; guardar captura/exportación de configuración y hora de inicio. | Wilmar |
| Primeras 48 h | Confirmar estado apto, destino, impresiones, gasto, envío a Sheets y conversión; corregir de inmediato cualquier fallo técnico. No hacer clic en anuncios propios. | Wilmar |
| Diario | Revisar estado, gasto acumulado y nuevos formularios para respetar el límite operativo; registrar, sin optimizar copy por fluctuaciones de un día. | Wilmar |
| Día 7 y semanal | Revisar términos visibles, grupos y calidad de formularios; cambiar solo ante evidencia suficiente, fallo o tráfico inequívocamente irrelevante. | Wilmar; apoyo en análisis |
| Día 30 o al alcanzar el tope | Cerrar ventana, calificar contactos, calcular costo por lead cualificado cuando el denominador exista y documentar decisión. | Wilmar |

La fecha de activación es **pendiente**: no está fijada hasta que se aprueben los pendientes de la revisión del 6 de octubre y el presupuesto.

## Medición, conversiones y Sheets

### Google Ads

Registrar por campaña: impresiones, clics, CTR, CPC, costo, grupos/keywords, términos visibles y conversiones. Mantener autoetiquetado habilitado y verificar URL final y UTMs con las herramientas de Google Ads; no generar `gclid` manual ni hacer clic en anuncios propios.

Sufijo UTM propuesto:

```text
utm_source=google&utm_medium=cpc&utm_campaign=nuteam_automatizacion_co_01&utm_content={adgroupid}_{creative}&utm_term={keyword}
```

Probar la sustitución de ValueTrack y que los valores llegan a la URL/hoja. No sobrescribir parámetros configurados en otro nivel de la cuenta.

### GA4 y acciones de conversión

El código de NuTeam contempla `page_view`, `cta_click`, `form_start`, `form_submit`, `scroll_50` y `scroll_90`. `form_start` se dispara al primer foco dentro del formulario; no confirma que el visitante haya diligenciado campos. `form_submit` se dispara después de una respuesta exitosa del endpoint. Confirmar la variable `NEXT_PUBLIC_GA_MEASUREMENT_ID` en producción y validar eventos con GA4 DebugView. Los eventos no registran errores de formulario; si se requiere esa métrica, agregarla en otra iteración y no reportarla como si ya existiera.

Configurar una conversión primaria de Ads de NuTeam —por ejemplo, `NU_Lead_Form_Success`— que se dispare después de la respuesta exitosa del formulario/Apps Script, no al clic de CTA ni al inicio del formulario. Para leads, revisar que el recuento esté configurado como una conversión por interacción cuando esa opción esté disponible. Mantener el evento GA4 como diagnóstico o elegir una sola fuente importada; no contar dos conversiones primarias para el mismo envío. No asignar valor monetario inventado. Asegurar que la campaña NU_01 optimice a la acción de NuTeam, no por accidente a una acción de la landing personal.

### Google Sheets y calificación

Los envíos de NuTeam deben llegar a su hoja `Leads`, separada de la hoja de wlanding. El código captura UTMs, landing, referrer y timestamp; no se encontró captura de `gclid`/`gbraid` en el contrato actual. Esto no sustituye la conversión de Ads; si se quiere reconciliar cada fila con el clic en Sheets, decidir y probar la captura de identificadores en un cambio aparte.

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
