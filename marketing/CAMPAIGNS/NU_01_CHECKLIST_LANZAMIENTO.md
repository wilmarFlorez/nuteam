# Checklist de lanzamiento — NU_01

**No activar ni aumentar gasto hasta que Wilmar apruebe objetivo, presupuesto y fecha.**  
El plan detallado está en [`NU_01_PLAN_DE_LANZAMIENTO.md`](NU_01_PLAN_DE_LANZAMIENTO.md).

Estados sugeridos: `pendiente`, `en curso`, `bloqueado`, `verificado`. Registrar fecha/evidencia de producción fuera de este archivo, sin PII ni credenciales.

## Decisiones de negocio antes de configurar Ads

- [ ] **Objetivo:** aprobar o modificar la meta propuesta de 3 conversaciones cualificadas en 30 días de pauta activa.
- [ ] **Presupuesto:** aprobar monto diario y tope total NU_01.
- [ ] **Presupuesto combinado:** decidir si la campaña de automatización personal seguirá activa después de la revisión del 6 de octubre. Si se mantienen las dos, definir límite total compartido y plan para el solapamiento de búsquedas.
- [ ] **Registro legal:** NuTeam puede promocionarse como marca mientras se formaliza, pero no afirmar que ya es una sociedad constituida. Definir cómo se explica el estado de contratación/facturación antes de una propuesta formal.
- [ ] **Responsables de lead:** Wilmar confirma quién revisará y responderá los formularios y cómo se actualizará su calificación. No publicar un plazo de respuesta no confirmado.

## Bloqueadores de página y formulario

- [ ] **Corregir validación inconsistente de teléfono.** El campo de teléfono no está marcado como obligatorio en `contact_form.tsx`, pero `integrations/google_apps_script.gs` lo incluye en `REQUIRED_FIELDS`. Un envío vacío puede llegar a la interfaz como error aunque el usuario haya completado los demás campos. Decidir si teléfono es obligatorio; la recomendación para reducir fricción es hacerlo opcional también en Apps Script. Validar ambos lados con teléfono vacío y diligenciado antes de desplegar.
- [ ] **Verificar el formulario real en producción.** Confirmar el endpoint de Apps Script, pestaña `Leads`, nueva fila, mensaje de éxito solo tras respuesta `success: true`, y prueba con los campos que la UI permite dejar vacíos. Usar una fila claramente identificada como QA y excluirla del conteo comercial.
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
- [ ] Definir si la campaña personal se pausa o sigue activa. Resolver el solapamiento de keywords antes de habilitar ambas.
- [ ] Crear campaña de Búsqueda para Colombia, español, ubicación por presencia; Display y partners de búsqueda desactivados para la prueba inicial.
- [ ] Confirmar presupuesto, tope y fechas en la interfaz antes de publicar. No duplicar los COP 34.000 diarios existentes de forma automática.
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
