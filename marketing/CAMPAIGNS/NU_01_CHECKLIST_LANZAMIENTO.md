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
- [ ] **Verificación general del formulario en producción:** confirmar que la interfaz solo muestra éxito tras una respuesta `success: true` y que el endpoint y el mapeo general de campos siguen correctos. La prueba específica del teléfono vacío/diligenciado quedó verificada arriba; mantener las filas de QA fuera del conteo comercial.
- [ ] **Resolver Privacidad y Términos.** En `footer.tsx` ambos enlaces apuntan a `#`. Antes de pagar tráfico y recoger datos de empresa/proceso, publicar destinos reales y revisar que el aviso explique el uso de datos y analítica. Alinear el formulario, Apps Script y política; no guardar PII en Git.
- [ ] **Identificar la interfaz estática del hero.** El panel contiene texto hardcodeado de agente “en vivo”, “en ejecución”, CRM, cliente y ticket; no es una integración verificada. Rotularlo en español e inglés como ejemplo ilustrativo o sustituirlo por una demo que se pueda demostrar.
- [ ] Revisar móvil y escritorio, navegación a `#contacto`, selectores de idioma y todos los enlaces de los anuncios.
- [ ] Confirmar que la explicación de la oferta no sugiere una entidad constituida, clientes, operación productiva, volúmenes, ahorro o resultados no comprobados.

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
| Política/enlaces legales funcionales |  |  |
| Hero identificado como ilustración o reemplazado |  |  |
| GA4 y conversión Ads verificados |  |  |
| URL, UTMs y campaña Ads revisados |  |  |
| Copy, anuncios y claims aprobados |  |  |
| Responsable de calificar y dar seguimiento |  |  |

**Decisión final:** `GO / NO-GO` · **Fecha:** · **Responsable:**
