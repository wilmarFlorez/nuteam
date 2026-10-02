# Checklist de lanzamiento — NU_01

**Objetivo y presupuesto de NU_01 aprobados por Wilmar el 2 de octubre de 2026. El 6 de octubre es un punto de decisión —extender la campaña personal o dar `GO` a NU_01—, no una fecha de activación asegurada.**

El plan detallado está en [`NU_01_PLAN_DE_LANZAMIENTO.md`](NU_01_PLAN_DE_LANZAMIENTO.md).

Estados sugeridos: `pendiente`, `en curso`, `bloqueado`, `verificado`. Registrar fecha/evidencia de producción fuera de este archivo, sin PII ni credenciales.

## Decisiones de negocio antes de configurar Ads

- [x] **Objetivo:** Wilmar aprobó 3 conversaciones cualificadas en 30 días de pauta activa. Es la meta de negocio; la conversión técnica de Ads sigue siendo el envío exitoso del formulario y cada contacto requiere calificación manual.
- [x] **Presupuesto NU_01:** Wilmar aprobó COP 34.000 diarios promedio y un tope operativo de COP 1.000.000 para esta campaña, administrados aparte del presupuesto personal.
- [x] **Evidencia inicial de exposición/solapamiento:** las capturas aportadas por Wilmar muestran `Campaign #1` habilitada/apta, COP 34.000 diarios promedio y palabras clave coincidentes con las candidatas de NU_01 (`automatización de procesos`, `automatización empresarial`, `servicios de automatización` y `automatización documental`). El rango seleccionado es 25 de septiembre–1 de octubre de 2026. NU_01 aún no está activa, por lo que el solapamiento simultáneo es potencial, no observado.
- [ ] **Decisión del 6 de octubre:** revisar los resultados de la campaña personal en su proyecto y decidir si se extiende o se da `GO` a NuTeam. No asumir que NU_01 se activa ese día.
- [ ] **Verificación previa a activar NU_01:** si recibe `GO`, confirmar el estado de la campaña personal y evitar que ambas queden activas por defecto. Los presupuestos se administran por separado; si Wilmar decide que coexistan en la misma cuenta, el gasto total de la cuenta se acumula. No cambiar desde NuTeam el presupuesto personal.
- [ ] **Fecha de activación:** fijarla solo después del `GO` y cuando el checklist de producción esté completo.
- [ ] **Registro legal:** NuTeam puede promocionarse como marca mientras se formaliza, pero no afirmar que ya es una sociedad constituida. Definir cómo se explica el estado de contratación/facturación antes de una propuesta formal.
- [ ] **Responsables de lead:** Wilmar confirma quién revisará y responderá los formularios y cómo se actualizará su calificación. No publicar un plazo de respuesta no confirmado.

## Bloqueadores de página y formulario

- [x] **Teléfono opcional en producción:** Wilmar confirmó que copió `integrations/google_apps_script.gs`, desplegó una nueva versión de Apps Script y probó el formulario con teléfono vacío y diligenciado. La captura de `Leads` muestra ambos casos guardados. Son filas de QA; excluirlas de métricas comerciales. No se copiaron datos personales a este repositorio.
- [ ] **Verificación general del formulario en producción:** seguir el procedimiento de prueba de abajo. Confirmar respuesta `success: true`, mensaje de éxito, mapeo y recepción en la hoja `Leads`. La prueba previa del teléfono vacío/diligenciado quedó confirmada por Wilmar; mantener sus filas de QA fuera del conteo comercial.
- [x] **Enlaces muertos del footer retirados del código actual:** ya no aparecen los enlaces `#` de Privacidad/Términos en la fuente revisada el 2 de octubre de 2026. La publicación no está verificada.
- [ ] **Aviso de privacidad y tratamiento de datos:** publicar/revisar información accesible desde el formulario sobre el uso de los datos y la analítica, alineada con el endpoint y la hoja. Requiere revisión humana/legal; retirar enlaces no resuelve este pendiente. No guardar PII en Git. No reponer automáticamente una página de Términos sin confirmar que sea necesaria.
- [x] **Panel estático del hero retirado del código actual:** ya no está en `hero.tsx` según revisión del 2 de octubre de 2026. Verificar que tampoco aparezca en la versión publicada antes del lanzamiento.
- [ ] Revisar móvil y escritorio, navegación a `#contacto`, selectores de idioma y todos los enlaces de los anuncios.
- [ ] Confirmar que la explicación de la oferta no sugiere una entidad constituida, clientes, operación productiva, volúmenes, ahorro o resultados no comprobados.

### Procedimiento de prueba de producción del formulario

La prueba crea un registro real en producción. Avisar antes a quien revise la hoja para que no contacte el registro como si fuera un prospecto. Usar solo datos de prueba controlados por Wilmar, marcar claramente la empresa o el nombre como `QA - EXCLUIR DE MÉTRICAS`, y no introducir nombres de clientes, información operacional real ni datos personales de terceros. No incluir resultados de prueba en reportes comerciales.

1. Confirmar que la política/aviso de privacidad aplicable y el comportamiento de analítica están aprobados antes de enviar información personal. Si falta esa aprobación, no introducir PII en el formulario; limitar la comprobación a una revisión técnica autorizada o esperar.
2. Abrir directamente `https://www.nuteam.ai/` en una ventana normal, ir a `#contacto` y comprobar que se ve la versión publicada esperada. No llegar desde un anuncio ni hacer clic en anuncios propios.
3. Para comprobar atribución sin generar clic publicitario, abrir el destino con parámetros de QA, por ejemplo `?utm_source=qa&utm_medium=manual&utm_campaign=qa_form_YYYYMMDD` (sustituir por la fecha de la prueba). No inventar `gclid`/`gbraid` ni usar parámetros de una campaña comercial real.
4. Enviar una sola prueba con teléfono vacío. Completar los demás campos con valores inequívocos de QA; usar un correo bajo control de Wilmar. En el texto del proceso e impacto, escribir datos ficticios y no sensibles.
5. En las herramientas de desarrollo del navegador, comprobar que la solicitud al endpoint termina con respuesta `success: true`; la interfaz debe mostrar “Solicitud recibida” solo después de esa respuesta. Revisar la hoja `Leads` de NuTeam —no la de wlanding— y confirmar que llegó una sola fila QA, que los campos quedaron en las columnas esperadas, que teléfono puede quedar vacío y que la atribución QA/timestamp corresponde a la prueba. No guardar ni compartir el cuerpo de la solicitud, el endpoint o capturas con datos personales.
6. Solo si se necesita revalidar el teléfono diligenciado o cambió el despliegue, hacer una segunda prueba marcada QA con un número controlado. La prueba previa de Wilmar ya confirmó el campo vacío y diligenciado.
7. Si GA4 está aprobado y configurado, revisar en DebugView que `form_submit` aparezca después del envío exitoso y no al pulsar el botón si la solicitud falla. En la pestaña Network, inspeccionar las solicitudes de Analytics y confirmar que no lleven nombre, email, teléfono, empresa ni texto libre; no habilitar etiquetas hasta validar el consentimiento/configuración aplicable. Si ya existe una conversión de Ads/importación de GA4, registrar que se generó una fila/evento de QA y excluirla del análisis comercial; nunca probar haciendo clic en el anuncio.
8. Guardar únicamente fecha, navegador/dispositivo, resultado y evidencia redactada (sin PII, credenciales, endpoint ni contenido del proceso) fuera de este repositorio. Mantener la fila identificada como QA o eliminarla solo mediante un procedimiento autorizado y consistente con la política de retención.

**Criterio de aprobación:** formulario y Apps Script confirman éxito, aparece exactamente una fila de QA correcta en la hoja NuTeam, los casos probados con/sin teléfono se comportan según lo esperado y el evento de Analytics (si está autorizado) no contiene PII. Esto valida funcionamiento técnico, no calidad comercial ni convierte la fila QA en lead.

No provoques errores cambiando el endpoint o enviando datos malformados a producción. Si se requiere validar el estado de error del formulario, hacerlo con un endpoint/entorno de prueba controlado.

## Medición técnica

- [ ] **Google Sheets:** verificar en producción que el formulario NuTeam se guarda en su propia hoja `Leads`, aparte de la hoja de wlanding.
- [ ] **GA4:** configurar `NEXT_PUBLIC_GA_MEASUREMENT_ID` en el entorno de producción. Verificar `page_view`, `cta_click`, `form_start` y `form_submit` en DebugView. `form_start` ocurre al primer foco del formulario; `form_submit` debe aparecer únicamente después de una respuesta exitosa del servicio de leads.
- [ ] **Conversión Google Ads:** configurar/confirmar una acción propia de NuTeam para el envío exitoso. El código de NuTeam revisado no muestra una conversión directa de Ads equivalente a la de wlanding; no asumir que el evento GA4, por estar en código, ya optimiza la campaña.
- [ ] Elegir una sola acción primaria por envío. Si se importa `form_submit` desde GA4 y también se instala conversión directa, evitar que ambas se cuenten como primarias para la misma solicitud.
- [ ] Asegurar que NU_01 usa la conversión de NuTeam y que una conversión de wlanding no se atribuye/usa como objetivo de NU_01 por configuración general de cuenta.
- [ ] **UTM:** probar sufijo URL y valores de campaña/grupo/anuncio en la página y en la fila de prueba de `Leads`. No sobrescribir parámetros ya definidos a nivel de cuenta.
- [ ] Confirmar autoetiquetado de Google Ads. No inventar un `gclid` ni hacer clic en anuncios propios. La hoja de NuTeam actualmente no captura `gclid`/`gbraid`; anotar esta limitación o aprobar un cambio específico y probarlo antes de depender de esos campos.
- [ ] Verificar política/consentimiento y comportamiento de etiquetas conforme a la configuración que se decida; no asumir que el ID de medición está desplegado porque existe en `.env.example`.

## Configuración de Google Ads

- [ ] Confirmar en la misma cuenta de Google Ads el nombre `CO_Search_NuTeam_Automatizacion_01`; no llamar a esta campaña `Campaign #1`.
- [ ] Aplicar la decisión del 6 de octubre: si se extiende la campaña personal, mantener NU_01 sin lanzar; si se da `GO` a NU_01, confirmar qué campaña queda activa. No dejar ambas habilitadas por defecto.
- [ ] Crear campaña de Búsqueda para Colombia, español, ubicación por presencia; Display y partners de búsqueda desactivados para la prueba inicial.
- [ ] Confirmar en la interfaz el presupuesto aprobado para NU_01 (COP 34.000 diarios promedio y tope operativo de COP 1.000.000), las fechas y que esos valores pertenecen solo a esta campaña; no modificar el presupuesto personal.
- [ ] Cargar grupos, keywords frase/exacta, negativas revisadas y anuncios aprobados del plan.
- [ ] Cargar enlaces de sitio a las secciones verificadas `#soluciones`, `#casos-de-uso`, `#como-funciona` y `#contacto`; no añadir recursos de llamada o dirección no confirmados.
- [ ] Probar URL final `https://www.nuteam.ai/`, redirección, idioma español, anchors y sufijo UTM con herramientas de Ads sin activar un clic de anuncio real.
- [ ] Guardar configuración y fecha de lanzamiento en un reporte, sin secretos.

## Aprobación final (go/no-go)

| Requisito | Estado / evidencia | Aprobado por |
| --- | --- | --- |
| Objetivo y criterios de calificación |  |  |
| Presupuesto diario, tope y solapamiento |  |  |
| Formulario y Sheets en producción |  |  |
| Aviso de privacidad y tratamiento revisados; publicación comprobada |  |  |
| Panel del hero retirado en código y versión publicada |  |  |
| GA4 y conversión Ads verificados |  |  |
| URL, UTMs y campaña Ads revisados |  |  |
| Copy, anuncios y claims aprobados |  |  |
| Responsable de calificar y dar seguimiento |  |  |

**Decisión final:** `GO / NO-GO` · **Fecha:** · **Responsable:**
