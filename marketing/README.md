# Marketing de NuTeam

**Estado:** NU_01 está en ejecución según confirmación de Wilmar. Inició el 7 de octubre de 2026. Para el 7, Ads registra 8 clics y GA4 8 sesiones de campaña, sin CTA ni eventos de formulario. El dato GA4 del 8 es preliminar: 1 sesión, sin interacción ni eventos de formulario. En Ads, el total 7–8 es 230 impresiones, 15 clics y COP 58.676; no hay envíos comerciales ni conversiones. Google Ads no tiene fecha de finalización; el tope de COP 1.000.000 es manual. Ver [la revisión del primer corte](CAMPAIGNS/NU_01_REVISION_2026-10-07_08.md).
**Actualizado:** 8 de octubre de 2026.

Este directorio organiza el posicionamiento, las campañas, los experimentos y las revisiones de marketing de NuTeam. Reutiliza el aprendizaje de la primera campaña en Google Ads del portafolio de Wilmar, sin trasladar sus resultados como si fueran resultados de NuTeam.

## Cómo se relaciona con el portafolio de Wilmar

- **Objetivo común para automatización:** generar conversaciones cualificadas sobre procesos operativos que podrían automatizarse.
- **Marcas y recorridos separados:** el portafolio de Wilmar conserva el recorrido de roles y colaboraciones profesionales; NuTeam se enfoca en empresas que evalúan automatización operativa.
- **Medición separada:** cada campaña tiene su propia URL, acción de conversión, atribución y registro de leads. La comparación entre marcas se hace con un criterio común de calificación, no sumando formularios sin distinguir su origen.
- **Presupuesto coordinado:** Wilmar confirmó el 6 de octubre que la campaña personal está pausada y que NuTeam sería la siguiente, sin solapamiento. NU_01 ya está en ejecución según la confirmación del 8 de octubre. Cada campaña conserva su presupuesto; verificar el estado de la saliente si cambia el calendario.

La campaña y sus fuentes originales están en el repositorio `wlanding`, en `marketing_firts_campaing/`. Allí se conserva el historial de la campaña que dirigió tráfico al sitio personal. No mover ni reescribir esos datos desde este repositorio.

## Estructura

```text
marketing/
├── README.md
├── ESTRATEGIA.md
├── CAMPAIGNS/
│   ├── NU_01_GOOGLE_SEARCH_AUTOMATIZACION.md
│   ├── NU_01_PLAN_DE_LANZAMIENTO.md
│   ├── NU_01_CHECKLIST_LANZAMIENTO.md
│   ├── 7_8_octubre_2026.csv
│   └── NU_01_REVISION_2026-10-07_08.md
├── EXPERIMENTS/
│   └── EX_01_WILMAR_VS_NUTEAM.md
└── TEMPLATES/
    └── REVISION_DE_CAMPANA.md
```

- `ESTRATEGIA.md`: posicionamiento, audiencia, límites de credibilidad, presupuesto y reglas de medición compartidas.
- `CAMPAIGNS/`: brief, plan detallado, checklist y revisiones con resultados de cada campaña propia de NuTeam. Las exportaciones fuente se conservan sin editar.
- `EXPERIMENTS/`: pruebas que cruzan marcas o páginas. Aquí se documenta la comparación con la landing personal; no se considera un experimento concluido.
- `TEMPLATES/`: formato para reportar ventanas de campaña sin confundir clics, envíos de formulario y leads cualificados.

Para NU_01, consultar el [plan](CAMPAIGNS/NU_01_PLAN_DE_LANZAMIENTO.md), el [checklist](CAMPAIGNS/NU_01_CHECKLIST_LANZAMIENTO.md) y el [registro del primer corte](CAMPAIGNS/NU_01_REVISION_2026-10-07_08.md). Registrar fecha y fuente de cada actualización; no extrapolar el corte inicial a resultados sostenidos.

## Convenciones de registro

- Asignar un identificador estable a cada campaña y a cada experimento. No reutilizar `Campaign #1`, que pertenece al historial de Google Ads del portafolio personal.
- Registrar fecha y fuente de cada dato: Google Ads, Google Analytics 4, Google Sheets o confirmación manual. No mezclar capturas y CSV con totales distintos.
- Conservar los reportes originales y añadir análisis en Markdown; no editar exportaciones para hacer coincidir cifras.
- No guardar nombres, correos, teléfonos, información operacional del prospecto, credenciales ni secretos en este repositorio.
- Un envío exitoso es una conversión técnica. Solo cuenta como lead cualificado después de revisar el contexto del proceso.

## Estado de NU_01 y pendientes

- Wilmar aprobó COP 34.000 diarios promedio y un tope operativo manual de COP 1.000.000 para NU_01. La captura del 7–8 oct. reporta COP 58.676 en ese período; si cubre todo el gasto desde el inicio, equivale aproximadamente al 5,9 % del tope. Revisar el acumulado a diario y pausar manualmente antes del tope; el presupuesto diario promedio no impone un límite total automático. No cambiar el presupuesto personal.
- Google Ads informó el 6 de octubre que la muestra de prueba encontró la página de destino. La URL de prueba incluyó los UTM; `{adgroupid}` y `{creative}` se sustituyeron por IDs y `utm_term` quedó vacío. Esto no valida un clic real ni el envío a `Leads`; la ausencia de término en esta muestra no es por sí sola un error. Mantener el sufijo actual y no hacer clic en anuncios propios.
- La captura del 7–8 de octubre muestra NU_01 habilitada y apta (en aprendizaje), con 230 impresiones, 15 clics, CTR 6,52 %, CPC promedio COP 3.911,73 y gasto COP 58.676. Wilmar confirma inicio real el 7 de octubre; no hay fecha de finalización establecida en Ads.
- El CSV de términos del 7–8 de octubre informa 3 clics y COP 14.762 en términos reportados, y 12 clics y COP 43.914 en “Otros términos”. No incluye filas con consultas individuales; no atribuir intención a “Otros” ni añadir negativas sin evidencia.
- `form_submit` se importó desde GA4 como acción principal dentro de **Contactos**, con recuento de una conversión y sin valor monetario. El resumen de NU_01 del 6 de octubre mostraba Contactos; la captura de acciones del 8 de octubre no incluye esta acción en objetivos a nivel de cuenta, lo cual puede ser coherente con el objetivo específico de campaña. Confirmar que NU_01 siga usando Contactos, sin cambiarlo si ya está configurado. No instalar una etiqueta `AW` ni crear una conversión directa duplicada.
- Wilmar confirma que las filas de QA se eliminaron y que no hay envíos reales de leads hasta el corte. Las pruebas anteriores confirmaron funcionamiento técnico, no demanda comercial. `NEXT_PUBLIC_GA_MEASUREMENT_ID` está configurada para Production y Preview; falta comprobar que Preview no mezcle datos con Production. La revisión de privacidad/consentimiento sigue diferida.
- Reconsultar GA4 para el 8 de octubre cuando se hayan procesado los datos; la captura del mismo día es preliminar. Las capturas actuales muestran 0 `cta_click`, `form_start` y `form_submit` en la fila de NU_01. Confirmar también el objetivo Contactos de la campaña antes de optimizar.
- El teléfono es opcional y se probó vacío y diligenciado. No conservar datos personales de prueba ni de prospectos en este repositorio.
- El aviso de privacidad, Términos y formalización siguen pendientes y no se consideran revisados. Wilmar decidió que no bloquean comercialmente esta salida. No afirmar que existe revisión legal o que NuTeam ya está constituida; aclarar forma de contratación/facturación antes de una propuesta formal.
- La verificación adicional del anunciante y los enlaces de sitio sugeridos por Google no se han establecido como bloqueos de NU_01; no aportar datos de una sociedad inexistente ni aplicar recomendaciones automáticas sin revisión.
