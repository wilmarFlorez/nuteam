# Marketing de NuTeam

**Estado:** NU_01 se envió a revisión de Google Ads el 6 de octubre. La captura de Ads muestra la campaña habilitada, pero no apta mientras está en revisión; no hay confirmación de aprobación, entrega o gasto. La fecha prevista de inicio es el 7 de octubre. La prueba de URL encontró el destino; `{adgroupid}` y `{creative}` se expandieron en la muestra, mientras `utm_term` quedó vacío.
**Actualizado:** 6 de octubre de 2026.

Este directorio organiza el posicionamiento, las campañas, los experimentos y las revisiones de marketing de NuTeam. Reutiliza el aprendizaje de la primera campaña en Google Ads del portafolio de Wilmar, sin trasladar sus resultados como si fueran resultados de NuTeam.

## Cómo se relaciona con el portafolio de Wilmar

- **Objetivo común para automatización:** generar conversaciones cualificadas sobre procesos operativos que podrían automatizarse.
- **Marcas y recorridos separados:** el portafolio de Wilmar conserva el recorrido de roles y colaboraciones profesionales; NuTeam se enfoca en empresas que evalúan automatización operativa.
- **Medición separada:** cada campaña tiene su propia URL, acción de conversión, atribución y registro de leads. La comparación entre marcas se hace con un criterio común de calificación, no sumando formularios sin distinguir su origen.
- **Presupuesto coordinado:** Wilmar confirmó el 6 de octubre que la campaña personal está pausada y que NuTeam será la siguiente, sin solapamiento. Cada campaña conserva su presupuesto; verificar el estado de la saliente antes de activar la entrante.

La campaña y sus fuentes originales están en el repositorio `wlanding`, en `marketing_firts_campaing/`. Allí se conserva el historial de la campaña que dirigió tráfico al sitio personal. No mover ni reescribir esos datos desde este repositorio.

## Estructura

```text
marketing/
├── README.md
├── ESTRATEGIA.md
├── CAMPAIGNS/
│   ├── NU_01_GOOGLE_SEARCH_AUTOMATIZACION.md
│   ├── NU_01_PLAN_DE_LANZAMIENTO.md
│   └── NU_01_CHECKLIST_LANZAMIENTO.md
├── EXPERIMENTS/
│   └── EX_01_WILMAR_VS_NUTEAM.md
└── TEMPLATES/
    └── REVISION_DE_CAMPANA.md
```

- `ESTRATEGIA.md`: posicionamiento, audiencia, límites de credibilidad, presupuesto y reglas de medición compartidas.
- `CAMPAIGNS/`: brief, plan detallado, checklist de activación y resultados de cada campaña propia de NuTeam.
- `EXPERIMENTS/`: pruebas que cruzan marcas o páginas. Aquí se documenta la comparación con la landing personal; no se considera un experimento concluido.
- `TEMPLATES/`: formato para reportar ventanas de campaña sin confundir clics, envíos de formulario y leads cualificados.

Para NU_01, consultar el [plan de lanzamiento](CAMPAIGNS/NU_01_PLAN_DE_LANZAMIENTO.md) y mantener actualizado el [checklist](CAMPAIGNS/NU_01_CHECKLIST_LANZAMIENTO.md). El estado de aprobación, entrega y gasto solo se confirma en Google Ads; el envío a revisión no prueba que la campaña esté sirviendo.

## Convenciones de registro

- Asignar un identificador estable a cada campaña y a cada experimento. No reutilizar `Campaign #1`, que pertenece al historial de Google Ads del portafolio personal.
- Registrar fecha y fuente de cada dato: Google Ads, Google Analytics 4, Google Sheets o confirmación manual. No mezclar capturas y CSV con totales distintos.
- Conservar los reportes originales y añadir análisis en Markdown; no editar exportaciones para hacer coincidir cifras.
- No guardar nombres, correos, teléfonos, información operacional del prospecto, credenciales ni secretos en este repositorio.
- Un envío exitoso es una conversión técnica. Solo cuenta como lead cualificado después de revisar el contexto del proceso.

## Estado de NU_01 y pendientes

- Wilmar aprobó COP 34.000 diarios promedio y un tope operativo manual de COP 1.000.000 para NU_01; la campaña personal está pausada y NU_01 es la siguiente. Revisar gasto a diario cuando empiece a servir; el presupuesto diario no impone automáticamente el tope total. No cambiar el presupuesto personal.
- Google Ads informó el 6 de octubre que la muestra de prueba encontró la página de destino. La URL de prueba incluyó los UTM; `{adgroupid}` y `{creative}` se sustituyeron por IDs y `utm_term` quedó vacío. Esto no valida un clic real ni el envío a `Leads`; la ausencia de término en esta muestra no es por sí sola un error. Mantener el sufijo actual y no hacer clic en anuncios propios.
- En la captura del 6 de octubre, NU_01 aparecía habilitada, pero no apta mientras estaba en revisión. Comprobar aprobación/aptitud y fecha real de inicio en Google Ads; no afirmar entrega ni gasto hasta verlos. El rango de informe de la captura anterior terminaba el 5 de octubre, antes del inicio previsto.
- `form_submit` se importó desde GA4 como acción principal dentro del objetivo **Contacto**; el resumen de NU_01 muestra ese objetivo. La acción conserva recuento de una conversión y no utiliza valor monetario. No instalar una etiqueta `AW` ni crear una conversión directa duplicada. El estado “Esperando conversiones” no prueba ni invalida resultados comerciales.
- Las pruebas manuales de QA confirmaron el formulario y la llegada de UTM a la hoja `Leads`; excluir esas filas de resultados comerciales. `NEXT_PUBLIC_GA_MEASUREMENT_ID` está configurada para Production y Preview; falta comprobar que Preview no mezcle datos con Production. La revisión de privacidad/consentimiento sigue diferida.
- El teléfono es opcional y se probó vacío y diligenciado. No conservar datos personales de prueba ni de prospectos en este repositorio.
- El aviso de privacidad, Términos y formalización siguen pendientes y no se consideran revisados. Wilmar decidió que no bloquean comercialmente esta salida. No afirmar que existe revisión legal o que NuTeam ya está constituida; aclarar forma de contratación/facturación antes de una propuesta formal.
- La verificación adicional del anunciante y los enlaces de sitio sugeridos por Google no se han establecido como bloqueos de NU_01; no aportar datos de una sociedad inexistente ni aplicar recomendaciones automáticas sin revisión.
