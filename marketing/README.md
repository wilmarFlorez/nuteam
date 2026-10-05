# Marketing de NuTeam

**Estado:** estructura inicial; la campaña pagada de NuTeam aún no se documenta como activa.  
**Actualizado:** 5 de octubre de 2026.

Este directorio organiza el posicionamiento, las campañas, los experimentos y las revisiones de marketing de NuTeam. Reutiliza el aprendizaje de la primera campaña en Google Ads del portafolio de Wilmar, sin trasladar sus resultados como si fueran resultados de NuTeam.

## Cómo se relaciona con el portafolio de Wilmar

- **Objetivo común para automatización:** generar conversaciones cualificadas sobre procesos operativos que podrían automatizarse.
- **Marcas y recorridos separados:** el portafolio de Wilmar conserva el recorrido de roles y colaboraciones profesionales; NuTeam se enfoca en empresas que evalúan automatización operativa.
- **Medición separada:** cada campaña tiene su propia URL, acción de conversión, atribución y registro de leads. La comparación entre marcas se hace con un criterio común de calificación, no sumando formularios sin distinguir su origen.
- **Presupuesto coordinado:** Wilmar confirmó el 5 de octubre que la campaña personal y NU_01 no estarán activas al mismo tiempo. Al cambiar de una a otra, confirmar que la anterior quedó pausada antes de activar la nueva; cada campaña conserva su propio presupuesto.

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

- El presupuesto de NU_01 ya fue aprobado por Wilmar: COP 34.000 diarios promedio y tope operativo de COP 1.000.000 solo para esta campaña. Wilmar decidió que las dos campañas no se solapan; antes de activar una, confirmar que la saliente quedó pausada. No duplicar ni cambiar el presupuesto de la campaña personal desde NU_01.
- Confirmar el destino y las UTMs del anuncio, probar el formulario de NuTeam y verificar que el lead llega a la hoja `Leads`.
- Wilmar confirmó que `NEXT_PUBLIC_GA_MEASUREMENT_ID` figura en Vercel para Production y Preview (captura del 5 oct. 2026). Falta verificar recepción de eventos y revisar consentimiento; la existencia de la variable no prueba la configuración en una versión desplegada.
- Configurar y probar una conversión de Google Ads para el envío exitoso del formulario de NuTeam. El evento `form_submit` de GA4 no debe contarse además como otra conversión primaria sin decidirlo explícitamente.
- El campo teléfono aparece como opcional y Wilmar confirmó pruebas de producción con el campo vacío y diligenciado; esas filas de QA no cuentan como leads comerciales.
- Los enlaces de Privacidad/Términos y el panel estático del hero se retiraron del código actual de la landing. Confirmar que la versión publicada refleje el cambio. Wilmar decidió el 5 de octubre que aplazar el aviso de privacidad no es un bloqueo comercial para iniciar la campaña; el aviso y la revisión del tratamiento de datos siguen pendientes y no se registran como resueltos ni como revisados legalmente. No se presupone que haya que reponer una página de Términos sin revisión.
- Registrar cómo se califican los leads y qué evento/columnas se usarán para distinguir un prospecto que requiere una sociedad constituida.
- Mantener como seguimiento pendiente la revisión del aviso y del tratamiento de datos; según la decisión de Wilmar del 5 de octubre no es una condición de marketing para el `GO`. No afirmar que existe revisión legal ni que el tratamiento quedó validado. Revisar por separado claims que puedan sugerir clientes, resultados o una entidad legal ya constituida.
