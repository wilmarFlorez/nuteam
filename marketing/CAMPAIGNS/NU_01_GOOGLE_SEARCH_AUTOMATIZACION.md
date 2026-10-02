# Borrador NU_01 — Google Ads Search para automatización operativa

**Estado:** propuesta; objetivo y presupuesto aprobados, pero no consta como campaña creada o activa en Google Ads. El 6 de octubre es el punto de decisión entre extender la campaña personal o dar `GO` a NU_01; no es fecha de activación confirmada.
**Fecha del borrador:** 2 de octubre de 2026.
**Cuenta:** se propone usar la cuenta actual de Google Ads, con una campaña y conversión identificables para NuTeam.

El plan completo, los anuncios candidatos y la calendarización están en [`NU_01_PLAN_DE_LANZAMIENTO.md`](NU_01_PLAN_DE_LANZAMIENTO.md). No activar hasta completar [`NU_01_CHECKLIST_LANZAMIENTO.md`](NU_01_CHECKLIST_LANZAMIENTO.md).

## Decisiones de campaña

| Elemento | Propuesta / estado |
| --- | --- |
| Objetivo único | Generar conversaciones cualificadas sobre un proceso operativo que podría automatizarse. |
| Audiencia | Empresas y equipos en Colombia que buscan evaluar o implementar automatización de procesos, documentos, mensajes o integraciones. |
| Canal | Google Ads, Red de Búsqueda, en español. |
| Landing | `https://www.nuteam.ai/`, sujeta a verificar URL final, formulario y analítica de producción. |
| Conversación/CTA | Evaluar un proceso operativo concreto. Mantener `Evaluar un proceso` solo si NuTeam entregará realmente esa evaluación inicial. |
| Presupuesto NU_01 | Aprobado por Wilmar el 2 de octubre: COP 34.000 diarios promedio y tope operativo de COP 1.000.000 para esta campaña. Es independiente del presupuesto personal; revisar la exposición total de la cuenta si ambas quedan activas. |
| Duración | Hasta 30 días de pauta activa o hasta alcanzar el tope operativo; la fecha de inicio se fijará solo después del `GO` y del checklist completo. |
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

- si la campaña personal seguirá activa y si Wilmar aprueba que ambas campañas coexistan;
- exposición diaria y acumulada combinada de la cuenta; el presupuesto de wlanding no se modifica desde NU_01;
- fechas que se compararán y cambios que estarán permitidos;
- cómo se evitará interpretar como experimento controlado una comparación entre campañas con distintos anuncios o configuraciones.

No aumentar ni duplicar gasto solo para que ambas campañas acumulen tráfico al mismo tiempo.

## Medición y leads

### Eventos de sitio

El código de NuTeam contempla `page_view`, `cta_click`, `form_start`, `form_submit`, `scroll_50` y `scroll_90`. Verificar en producción el ID de GA4, la recepción de eventos y la respuesta real del endpoint. El envío de `form_submit` depende de éxito confirmado por Google Apps Script.

### Google Ads

Crear o verificar una acción de conversión propia de NuTeam que se active solo al completar correctamente el formulario. Elegir una sola acción primaria por envío; si se importa el evento GA4 y se instala conversión directa de Ads, evitar doble conteo. Revisar configuración de objetivos de campaña, ventana y recuento en la interfaz antes del lanzamiento.

### Atribución y hoja

NuTeam tiene captura de UTMs/atribución en el código y envío del lead a su hoja `Leads`. No usar la hoja de wlanding como registro de NuTeam. Confirmar que la hoja de producción recibe `source`, `medium`, `campaign`, `term`, `content`, landing y referrer con la campaña etiquetada. Las UTMs son datos de atribución del navegador, no validación independiente de un clic de Ads.

La hoja o un registro interno de seguimiento debe permitir agregar después, sin PII en este repositorio: estado del contacto, cualificación, motivo de no cualificación y si el cliente requiere que el proveedor ya sea una sociedad constituida. Verificar encabezados antes de cambiar Apps Script o la estructura productiva.

## Métricas de decisión

**Resultado primario:** número de conversaciones cualificadas y costo por conversación cualificada.

**Métricas de embudo:** impresiones, clics, CTR, CPC, gasto, términos visibles y ocultos, sesiones, profundidad de visita, clic CTA, inicio de formulario, envío exitoso, contactos reales y calificación manual.

Google Ads puede entregar impresiones, clics y gasto. Los eventos GA4 requieren configuración productiva. La calidad del contacto y las razones de pérdida se registran manualmente; no se infieren del evento de formulario.

## Condiciones de activación

- [x] Objetivo (3 conversaciones cualificadas en 30 días de pauta activa) y presupuesto propio de NU_01 (COP 34.000 diarios promedio; tope operativo COP 1.000.000) aprobados por Wilmar el 2 de octubre de 2026.
- [ ] En el punto de decisión del 6 de octubre, Wilmar confirma si la campaña personal seguirá activa y qué campañas coexistirán; revisar el gasto combinado de la cuenta antes de activar.
- [ ] URL final de NuTeam y sufijo UTM probados en Google Ads, sin clics propios en anuncios activos.
- [ ] Formulario probado en producción; envío visible en la hoja `Leads` y mensaje de éxito coherente con la respuesta del endpoint.
- [ ] Aviso de privacidad/tratamiento revisado y versión publicada comprobada; retirar enlaces legales no sustituye esta revisión.
- [ ] Confirmar en producción que el panel estático retirado ya no aparece. La fuente local ya no lo contiene (revisión del 2 de octubre de 2026).
- [ ] GA4 activo y eventos verificados en DebugView o herramienta equivalente.
- [ ] Conversión de Ads verificada después del envío exitoso, sin contar también el clic en CTA ni duplicar GA4.
- [ ] Términos, anuncio, copy y landing revisados contra la oferta real y límites de credibilidad.
- [ ] Presupuesto y fecha de evaluación anotados.

## Siguiente iteración

Registrar una ventana con fechas completas en [`../TEMPLATES/REVISION_DE_CAMPANA.md`](../TEMPLATES/REVISION_DE_CAMPANA.md). Si hay clics sin formularios, revisar calidad de búsqueda, correspondencia anuncio-landing y fricción del formulario; si hay formularios pero no conversaciones cualificadas, revisar consulta, expectativas y criterio de calificación. Si el volumen es insuficiente, marcar la conclusión como inconclusa, no como prueba de que la landing o la marca fallaron.
