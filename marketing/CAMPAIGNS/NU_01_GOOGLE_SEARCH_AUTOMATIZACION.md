# Brief NU_01 — Google Ads Search para automatización operativa

**Estado:** objetivo y presupuesto aprobados. NU_01 inició el 7 de octubre de 2026. En el corte de Ads 7–8 oct. hay 230 impresiones, 15 clics, COP 58.676 de gasto y cero conversiones; no hay envíos reales en `Leads`. Para el 7, Ads registra 8 clics y GA4 8 sesiones de campaña, sin CTA ni eventos de formulario. La lectura GA4 del 8 (1 sesión) es preliminar. La cuenta no tiene fecha final; el tope operativo requiere control manual. Ver la [revisión inicial](NU_01_REVISION_2026-10-07_08.md).
**Actualizado:** 8 de octubre de 2026.
**Cuenta:** se usa la cuenta actual de Google Ads, con una campaña y conversión identificables para NuTeam.

El plan completo y el seguimiento están en [`NU_01_PLAN_DE_LANZAMIENTO.md`](NU_01_PLAN_DE_LANZAMIENTO.md), el [`checklist`](NU_01_CHECKLIST_LANZAMIENTO.md) y la [revisión del 7–8 de octubre](NU_01_REVISION_2026-10-07_08.md). El CSV original de términos se conserva sin editar. Wilmar difiere aviso de privacidad, Términos y formalización; decidió que no sean bloqueos comerciales, pero no se registran como revisados ni como entidad legal completada.

## Decisiones de campaña

| Elemento | Propuesta / estado |
| --- | --- |
| Objetivo único | Generar conversaciones cualificadas sobre un proceso operativo que podría automatizarse. |
| Audiencia | Empresas y equipos en Colombia que buscan evaluar o implementar automatización de procesos, documentos, mensajes o integraciones. |
| Canal | Google Ads, Red de Búsqueda, en español. |
| Landing | `https://www.nuteam.ai/`; la prueba de URL encontró el destino el 6 de octubre. GA4 muestra sesiones bajo el nombre de NU_01 el 7 y el 8, pero sin `cta_click`, `form_start` o `form_submit` en esas filas. No hay envíos reales; la llegada de UTMs a `Leads` desde un formulario comercial sigue sin validarse. Las pruebas manuales previas fueron QA. |
| Conversación/CTA | Evaluar un proceso operativo concreto. Mantener `Evaluar un proceso` solo si NuTeam entregará realmente esa evaluación inicial. |
| Presupuesto NU_01 | Aprobado por Wilmar el 2 de octubre: COP 34.000 diarios promedio y tope operativo de COP 1.000.000 para esta campaña. Es independiente del presupuesto personal; Wilmar confirmó que las campañas no correrán simultáneamente. |
| Duración | Hasta 30 días de pauta activa o hasta alcanzar el tope operativo. Inicio real confirmado: 7 de octubre de 2026. Ads no tiene fecha final establecida; Wilmar debe vigilar el tope y duración y pausar manualmente. |
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

**Evidencia admisible:** capacidades profesionales verificables y Freight Pilot como demo de portafolio con sus límites expresos. El panel estático de “agente en vivo” se retiró del código actual de la landing; la captura de producción aportada el 6 de octubre no lo muestra. No presentar la antigua interfaz como ejecución real o caso de cliente.

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

En la activación de NU_01 quedó registrada esta decisión de secuencia:

- Wilmar confirmó que la campaña personal está pausada y que no habrá coexistencia con NU_01;
- presupuesto y fechas vigentes de la campaña elegida; el presupuesto de wlanding no se modifica desde NU_01;
- fechas que se compararán y cambios que estarán permitidos;
- cómo se evitará interpretar como experimento controlado una comparación entre campañas con distintos anuncios o configuraciones.

No aumentar ni duplicar gasto solo para que ambas campañas acumulen tráfico al mismo tiempo.

## Medición y leads

### Eventos de sitio

El código de NuTeam contempla `page_view`, `cta_click`, `form_start`, `form_submit`, `scroll_50` y `scroll_90`. Las pruebas QA del 5–6 de octubre verificaron eventos en producción; no son resultados comerciales. En GA4, para el 7 de octubre, la fila de NU_01 registra 8 sesiones (4 con interacción) y 0 `cta_click`, `form_start` y `form_submit`. La captura preliminar del 8 de octubre registra 1 sesión de NU_01 y 0 de esos eventos. Wilmar confirma que no hubo envíos comerciales; aparece 1 `form_submit` de Referral el día 7, fuera de la campaña, que no debe contarse como lead. La separación Preview/Production y la revisión de privacidad siguen pendientes.

### Google Ads

La cuenta Ads está vinculada con GA4 y `form_submit` está importado y guardado como acción principal dentro de Contactos, con recuento **Una** y **sin valor monetario**. El resumen de NU_01 del 6 de octubre mostraba el objetivo Contactos. En la captura de acciones del 8 de octubre, NuTeam `form_submit` no está incluido en los objetivos a nivel de cuenta; esto puede ser coherente con un objetivo específico de campaña. Confirmar que NU_01 sigue usando Contactos, sin cambiarlo si ya está así. La captura también muestra cero conversiones y una acción distinta de formularios de clientes potenciales con “Configuración incorrecta”; no confundirlas. No agregar una acción directa que duplique el evento importado. Preservar la conversión personal separada.

### Atribución y hoja

NuTeam tiene captura de UTMs/atribución en el código y envío del lead a su hoja `Leads`. No usar la hoja de wlanding como registro de NuTeam. Confirmar que la hoja de producción recibe `source`, `medium`, `campaign`, `term`, `content`, landing y referrer con la campaña etiquetada. Las UTMs son datos de atribución del navegador, no validación independiente de un clic de Ads.

La hoja o un registro interno de seguimiento debe permitir agregar después, sin PII en este repositorio: estado del contacto, cualificación, motivo de no cualificación y si el cliente requiere que el proveedor ya sea una sociedad constituida. Verificar encabezados antes de cambiar Apps Script o la estructura productiva.

## Métricas de decisión

**Resultado primario:** número de conversaciones cualificadas y costo por conversación cualificada.

**Métricas de embudo:** impresiones, clics, CTR, CPC, gasto, términos visibles y ocultos, sesiones, profundidad de visita, clic CTA, inicio de formulario, envío exitoso, contactos reales y calificación manual.

Google Ads puede entregar impresiones, clics y gasto. Los eventos GA4 requieren configuración productiva. La calidad del contacto y las razones de pérdida se registran manualmente; no se infieren del evento de formulario.

## Condiciones de activación

- [x] Objetivo (3 conversaciones cualificadas en 30 días de pauta activa) y presupuesto propio de NU_01 (COP 34.000 diarios promedio; tope operativo COP 1.000.000) aprobados por Wilmar el 2 de octubre de 2026.
- [x] Wilmar confirmó el 6 de octubre la secuencia sin solapamiento: campaña personal pausada y NU_01 como siguiente campaña. El inicio real de NU_01 fue el 7 de octubre.
- [x] Prueba de URL/sufijo en Google Ads completada el 6 de octubre; encontró el destino (1 de 1 muestras). La muestra expandió `{adgroupid}` y `{creative}`; `utm_term` quedó vacío y no hubo un clic real de búsqueda.
- [ ] Confirmar la llegada de UTMs desde un formulario comercial legítimo si ocurre; el corte actual tiene sesiones atribuidas a NU_01, pero no envíos comerciales en `Leads`. El dato GA4 del 8 de octubre debe revisarse de nuevo tras el procesamiento. No hacer clic en anuncios propios ni tratar el `utm_term` vacío de la muestra de prueba como fallo por sí solo.
- [x] Formulario probado en producción el 5 de octubre; el endpoint respondió correctamente, la landing mostró éxito y las filas de prueba llegaron a la hoja `Leads` de NuTeam. Son QA, no leads comerciales.
- [ ] Aviso de privacidad/tratamiento, Términos y formalización quedan diferidos por decisión de Wilmar; no son bloqueos comerciales, pero tampoco están revisados/validados. La retirada de enlaces no resuelve esos pendientes.
- [x] Panel estático del hero ausente en la captura de producción aportada por Wilmar el 6 de octubre.
- [x] ID de GA4 configurado en Vercel y `page_view`/`form_submit` verificados en DebugView/Tag Assistant en producción mediante pruebas QA (5–6 oct. 2026); excluir esos hits de resultados comerciales. Separación de datos Preview/Production sigue pendiente.
- [x] `form_submit` importado y guardado como principal dentro de Contactos; no contar clic CTA, `form_start` ni una acción directa duplicada. La captura del 8 de octubre registra cero conversiones; confirmar que NU_01 sigue usando el objetivo específico Contactos, dado que la acción no está incluida en los objetivos a nivel de cuenta.
- [ ] Términos, anuncio, copy y landing revisados contra la oferta real y límites de credibilidad.
- [x] Inicio real y primer corte anotados: 7–8 de octubre de 2026. La campaña no tiene fecha de finalización configurada; el gasto y la duración se controlan manualmente.

## Siguiente iteración

La primera ventana está documentada en [`NU_01_REVISION_2026-10-07_08.md`](NU_01_REVISION_2026-10-07_08.md), junto con sus límites. Reconsultar GA4 para el 8 de octubre una vez procesados los datos; mantener el corte por campaña y evento. Si continúan clics sin CTA/formulario con más volumen, revisar calidad de búsqueda, correspondencia anuncio-landing y fricción; no atribuir intención a “Otros términos”. Si hay formularios pero no conversaciones cualificadas, revisar consulta, expectativas y criterio de calificación. Con volumen insuficiente, declarar la prueba inconclusa.
