# Marketing de NuTeam

**Estado:** estructura inicial; la campaña pagada de NuTeam aún no se documenta como activa.  
**Actualizado:** 1 de octubre de 2026.

Este directorio organiza el posicionamiento, las campañas, los experimentos y las revisiones de marketing de NuTeam. Reutiliza el aprendizaje de la primera campaña en Google Ads del portafolio de Wilmar, sin trasladar sus resultados como si fueran resultados de NuTeam.

## Cómo se relaciona con el portafolio de Wilmar

- **Objetivo común para automatización:** generar conversaciones cualificadas sobre procesos operativos que podrían automatizarse.
- **Marcas y recorridos separados:** el portafolio de Wilmar conserva el recorrido de roles y colaboraciones profesionales; NuTeam se enfoca en empresas que evalúan automatización operativa.
- **Medición separada:** cada campaña tiene su propia URL, acción de conversión, atribución y registro de leads. La comparación entre marcas se hace con un criterio común de calificación, no sumando formularios sin distinguir su origen.
- **Presupuesto coordinado:** compartir una cuenta de Google Ads no implica que el presupuesto deba duplicarse. Aprobar un límite total para las campañas que corran simultáneamente antes de activarlas.

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

Para NU_01, empezar por el [plan de lanzamiento](CAMPAIGNS/NU_01_PLAN_DE_LANZAMIENTO.md) y completar el [checklist](CAMPAIGNS/NU_01_CHECKLIST_LANZAMIENTO.md). El brief de campaña no confirma que exista una campaña activa.

## Convenciones de registro

- Asignar un identificador estable a cada campaña y a cada experimento. No reutilizar `Campaign #1`, que pertenece al historial de Google Ads del portafolio personal.
- Registrar fecha y fuente de cada dato: Google Ads, Google Analytics 4, Google Sheets o confirmación manual. No mezclar capturas y CSV con totales distintos.
- Conservar los reportes originales y añadir análisis en Markdown; no editar exportaciones para hacer coincidir cifras.
- No guardar nombres, correos, teléfonos, información operacional del prospecto, credenciales ni secretos en este repositorio.
- Un envío exitoso es una conversión técnica. Solo cuenta como lead cualificado después de revisar el contexto del proceso.

## Antes de activar NU_01

- Aprobar el presupuesto total que compartirán las campañas activas; no copiar automáticamente los COP 34.000/día de la campaña personal a otra campaña.
- Confirmar el destino y las UTMs del anuncio, probar el formulario de NuTeam y verificar que el lead llega a la hoja `Leads`.
- Confirmar que `NEXT_PUBLIC_GA_MEASUREMENT_ID` está configurado en producción y validar los eventos de NuTeam.
- Configurar y probar una conversión de Google Ads para el envío exitoso del formulario de NuTeam. El evento `form_submit` de GA4 no debe contarse además como otra conversión primaria sin decidirlo explícitamente.
- Corregir la validación desalineada del campo teléfono: el formulario lo presenta como opcional y Apps Script lo valida como obligatorio.
- Sustituir los enlaces `#` de Privacidad/Términos y aclarar que el panel estático del hero es un ejemplo, no un agente productivo.
- Registrar cómo se califican los leads y qué evento/columnas se usarán para distinguir un prospecto que requiere una sociedad constituida.
- Revisar la política de privacidad, el tratamiento de datos del formulario y los textos que puedan sugerir clientes, resultados o una entidad legal ya constituida.
