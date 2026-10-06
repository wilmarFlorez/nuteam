# Brief NU_01 — Google Ads Search para automatización operativa

**Estado:** objetivo y presupuesto aprobados. Wilmar envió NU_01 a revisión en Google Ads el 6 de octubre; la captura muestra la campaña habilitada, pero no apta mientras está en revisión, sin confirmar aprobación, entrega o gasto. La fecha prevista de inicio es el 7 de octubre de 2026. Google Ads encontró el destino en la prueba de URL; `{adgroupid}` y `{creative}` se expandieron, `utm_term` quedó vacío en la muestra. Revisar el estado de aprobación al inicio previsto.
**Actualizado:** 6 de octubre de 2026.
**Cuenta:** se usa la cuenta actual de Google Ads, con una campaña y conversión identificables para NuTeam.

El plan completo y el seguimiento están en [`NU_01_PLAN_DE_LANZAMIENTO.md`](NU_01_PLAN_DE_LANZAMIENTO.md) y en el [`checklist`](NU_01_CHECKLIST_LANZAMIENTO.md). NU_01 ya se envió a revisión; usar el checklist para confirmar aprobación y entrega en Ads antes de interpretar actividad. Wilmar difiere aviso de privacidad, Términos y formalización; decidió que no sean bloqueos comerciales, pero no se registran como revisados ni como entidad legal completada.

## Decisiones de campaña

| Elemento | Propuesta / estado |
| --- | --- |
| Objetivo único | Generar conversaciones cualificadas sobre un proceso operativo que podría automatizarse. |
| Audiencia | Empresas y equipos en Colombia que buscan evaluar o implementar automatización de procesos, documentos, mensajes o integraciones. |
| Canal | Google Ads, Red de Búsqueda, en español. |
| Landing | `https://www.nuteam.ai/`; la prueba de URL de Google Ads encontró el destino el 6 de octubre. La verificación de macros y del flujo de un clic Ads a `Leads` sigue limitada; las pruebas manuales de formulario/GA4 en producción fueron QA, no resultados comerciales. |
| Conversación/CTA | Evaluar un proceso operativo concreto. Mantener `Evaluar un proceso` solo si NuTeam entregará realmente esa evaluación inicial. |
| Presupuesto NU_01 | Aprobado por Wilmar el 2 de octubre: COP 34.000 diarios promedio y tope operativo de COP 1.000.000 para esta campaña. Es independiente del presupuesto personal; Wilmar confirmó que las campañas no correrán simultáneamente. |
| Duración | Hasta 30 días de pauta activa o hasta alcanzar el tope operativo; fecha prevista de inicio 7 de octubre de 2026. NU_01 se envió a revisión el 6 de octubre; verificar aprobación y medición antes de que empiece a servir. |
| Responsable | Wilmar Florez Samudio aprueba segmentación, anuncios, gasto y calificación de leads. |

### Meta cuantitativa aprobada

Wilmar aprobó el **2 de octubre de 2026** la meta de **3 conversaciones cualificadas en 30 días de pauta activa** para NU_01. Es una meta de negocio, no un resultado esperado, garantía ni conversión automática de Google Ads.

El formulario enviado y la conversión reportada por Google Ads son señales de embudo, no sustitutos de este objetivo de calidad.

## Hipótesis

Si personas que buscan servicios de automatización en Colombia llegan a una página de NuTeam dedicada a evaluar un proceso —en lugar de una landing personal que también habla de roles—, aumentará la pertinencia de las conversaciones generadas. La presencia de una marca especializada es una hipótesis a probar, no evidencia de que la falta de registro legal explique los abandonos.

Una nueva campaña también puede cambiar anuncio, configuración, fecha o keywords; si eso ocurre, la comparación con la campaña de wlanding será direccional y no demostrará causalidad de la marca o la landing.

## Oferta, mensaje y evidencia

**Oferta de trabajo:** conversación inicial sobre un proceso operativo y evaluación de si automatizarlo es razonable. No anunciar una auditoría gratuita, un precio, un plazo, un ROI o una implementación garantizada sin aprobación y capacidad confirmada.

**Mensaje central:** empezar por el proceso: qué información entra, qué reglas y excepciones existen, qué sistemas participan y cómo se entrega el resultado al siguiente responsable. Aplicar IA solo cuando aporta; conservar validaciones y revisión humana cuando se requieren.

**Evidencia admisible:** capacidades profesionales verificables y Freight Pilot como demo de portafolio con sus límites expresos. El panel estático de “agente en vivo” se retiró del código actual de la landing (revisión del 2 de octubre de 2026); confirmar la versión publicada antes de pautar y no presentar la antigua interfaz como ejecución real o caso de cliente.

## Segmentación inicial para revisión

La investigación previa de Google Keyword Planner y SERP está en `wlanding/marketing_firts_campaing/keyword_grupo_a/`. Las siguientes familias son candidatas para revisar, no una carga aprobada:

- automatización de procesos;
- automatización empresarial;
- servicios de automatización;
- automatización documental.

Antes de añadirlas, comprobar si la campaña personal sigue activa y si las consultas, concordancias y objetivos se solapan. Reutilizar hallazgos, no copiar toda la lista de keywords o negativas sin revisar el informe más reciente y la oferta de NuTeam.

Los aprendizajes de términos visibles apuntan a vigilar intención educativa, ejemplos, herramientas y automatización industrial. Ads ocultó muchos términos bajo “Otros términos”; no asignarles una categoría por inferencia. Revisar también si una negativa documental como `pdf` bloquearía búsquedas útiles.

## Presupuesto y relación con la campaña personal

Wilmar aprobó para NU_01 COP 34.000 diarios promedio y un tope operativo de COP 1.000.000, independientes del presupuesto personal. Estos importes no representan un tope de gasto combinado de la cuenta.

Antes de activar NU_01, dejar por escrito:

- Wilmar confirmó que la campaña personal está pausada y que no habrá coexistencia con NU_01;
- presupuesto y fechas vigentes de la campaña elegida; el presupuesto de wlanding no se modifica desde NU_01;
- fechas que se compararán y cambios que estarán permitidos;
- cómo se evitará interpretar como experimento controlado una comparación entre campañas con distintos anuncios o configuraciones.

No aumentar ni duplicar gasto solo para que ambas campañas acumulen tráfico al mismo tiempo.

## Medición y leads

### Eventos de sitio

El código de NuTeam contempla `page_view`, `cta_click`, `form_start`, `form_submit`, `scroll_50` y `scroll_90`. Wilmar confirmó la variable de GA4 en Vercel y la recepción de `page_view` y `form_submit` en DebugView/Tag Assistant en producción. `form_submit` se dispara tras `success: true` de Apps Script y está importado como acción principal bajo Contacto, con recuento de una y sin valor monetario. NU_01 fue enviada a revisión; todavía no se confirman conversiones atribuidas de Ads. La separación Preview/Production y la revisión de privacidad siguen pendientes.

### Google Ads

La cuenta Ads está vinculada con GA4 y `form_submit` está importado y guardado como acción principal dentro de Contacto. El resumen de NU_01 muestra Contactos; la ficha de conversión confirma recuento **Una** y **sin valor monetario**. NU_01 se envió a revisión; aún no se confirman impresiones, clics ni conversiones atribuidas. No agregar una acción directa que duplique el evento importado. Preservar el objetivo personal `Enviar formulario de clientes potenciales`.

### Atribución y hoja

NuTeam tiene captura de UTMs/atribución en el código y envío del lead a su hoja `Leads`. No usar la hoja de wlanding como registro de NuTeam. Confirmar que la hoja de producción recibe `source`, `medium`, `campaign`, `term`, `content`, landing y referrer con la campaña etiquetada. Las UTMs son datos de atribución del navegador, no validación independiente de un clic de Ads.

La hoja o un registro interno de seguimiento debe permitir agregar después, sin PII en este repositorio: estado del contacto, cualificación, motivo de no cualificación y si el cliente requiere que el proveedor ya sea una sociedad constituida. Verificar encabezados antes de cambiar Apps Script o la estructura productiva.

## Métricas de decisión

**Resultado primario:** número de conversaciones cualificadas y costo por conversación cualificada.

**Métricas de embudo:** impresiones, clics, CTR, CPC, gasto, términos visibles y ocultos, sesiones, profundidad de visita, clic CTA, inicio de formulario, envío exitoso, contactos reales y calificación manual.

Google Ads puede entregar impresiones, clics y gasto. Los eventos GA4 requieren configuración productiva. La calidad del contacto y las razones de pérdida se registran manualmente; no se infieren del evento de formulario.

## Condiciones de activación

- [x] Objetivo (3 conversaciones cualificadas en 30 días de pauta activa) y presupuesto propio de NU_01 (COP 34.000 diarios promedio; tope operativo COP 1.000.000) aprobados por Wilmar el 2 de octubre de 2026.
- [x] Wilmar confirmó el 6 de octubre que la campaña personal está pausada y NuTeam será la siguiente campaña cuando esté lista; no habrá solapamiento.
- [x] Prueba de URL/sufijo en Google Ads completada el 6 de octubre; encontró el destino (1 de 1 muestras). La muestra expandió `{adgroupid}` y `{creative}`; `utm_term` quedó vacío y no hubo un clic real de búsqueda.
- [ ] Confirmar la expansión de `{keyword}` y la llegada de UTMs desde una interacción real legítima si ocurre; no hacer clic en anuncios propios ni retrasar por sí solo el inicio debido al `utm_term` vacío de la muestra.
- [x] Formulario probado en producción el 5 de octubre; el endpoint respondió correctamente, la landing mostró éxito y las filas de prueba llegaron a la hoja `Leads` de NuTeam. Son QA, no leads comerciales.
- [ ] Aviso de privacidad/tratamiento, Términos y formalización quedan diferidos por decisión de Wilmar; no son bloqueos comerciales, pero tampoco están revisados/validados. La retirada de enlaces no resuelve esos pendientes.
- [x] Panel estático del hero ausente en la captura de producción aportada por Wilmar el 6 de octubre.
- [x] ID de GA4 configurado en Vercel y `page_view`/`form_submit` verificados en DebugView/Tag Assistant en producción mediante pruebas QA (5–6 oct. 2026); excluir esos hits de resultados comerciales. Separación de datos Preview/Production sigue pendiente.
- [x] `form_submit` importado y guardado como principal dentro del objetivo Contacto; el resumen de NU_01 muestra ese objetivo. La ficha confirma recuento de una y sin valor monetario; no contar clic CTA, `form_start` ni una acción directa duplicada. La campaña está enviada a revisión, no se reporta aún como sirviendo.
- [ ] Términos, anuncio, copy y landing revisados contra la oferta real y límites de credibilidad.
- [ ] Presupuesto y fecha de evaluación anotados.

## Siguiente iteración

Registrar una ventana con fechas completas en [`../TEMPLATES/REVISION_DE_CAMPANA.md`](../TEMPLATES/REVISION_DE_CAMPANA.md). Si hay clics sin formularios, revisar calidad de búsqueda, correspondencia anuncio-landing y fricción del formulario; si hay formularios pero no conversaciones cualificadas, revisar consulta, expectativas y criterio de calificación. Si el volumen es insuficiente, marcar la conclusión como inconclusa, no como prueba de que la landing o la marca fallaron.
