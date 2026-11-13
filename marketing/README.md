# Marketing de NuTeam

**Estado (12 de noviembre de 2026):** Ads muestra 690 impresiones, 75 clics, COP 238.145 y 1 conversión en la tabla de keywords del período 9–12 nov. La fila única de `Leads` de ese período coincide por fecha y atribución Google/CPC/campaña; el informe de términos identifica una búsqueda de recurso gratuito. Wilmar envió un email inicial y un seguimiento; no se ha reportado respuesta al seguimiento y el lead aún no está cualificado. Hay cinco negativas de frase confirmadas a nivel de NU_01; no se bloqueó `gratis` en general. La promoción marca COP 1.059.560 de COP 1.250.432; faltan COP 190.872. Ver [seguimiento del 12 de noviembre](CAMPAIGNS/NU_01_REVISION_2026-11-12.md).
**Actualizado:** 12 de noviembre de 2026.

Este directorio organiza el posicionamiento, las campañas, los experimentos y las revisiones de marketing de NuTeam. Reutiliza el aprendizaje de la primera campaña en Google Ads del portafolio de Wilmar, sin trasladar sus resultados como si fueran resultados de NuTeam.

## Cómo se relaciona con el portafolio de Wilmar

- **Objetivo común para automatización:** generar conversaciones cualificadas sobre procesos operativos que podrían automatizarse.
- **Marcas y recorridos separados:** el portafolio de Wilmar conserva el recorrido de roles y colaboraciones profesionales; NuTeam se enfoca en empresas que evalúan automatización operativa.
- **Medición separada:** cada campaña tiene su propia URL, acción de conversión, atribución y registro de leads. La comparación entre marcas se hace con un criterio común de calificación, no sumando formularios sin distinguir su origen.
- **Presupuesto coordinado:** Wilmar confirmó el 6 de octubre que la campaña personal estaba pausada y que NuTeam sería la siguiente, sin solapamiento. NU_01 se pausó inicialmente y luego volvió a estar Apta; las capturas del 9–12 nov. muestran entrega reciente. Cada campaña conserva su presupuesto; verificar el estado de la campaña personal antes de cambiar el calendario.

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
│   ├── informes_de_terminos_de_busqueda/
│   │   ├── 7_8_octubre_2026.csv
│   │   └── 9_12_noviembre_2026.csv
│   ├── NU_01_REVISION_2026-10-07_08.md
│   ├── NU_01_REVISION_2026-11-04.md
│   ├── NU_01_REVISION_2026-11-08.md
│   └── NU_01_REVISION_2026-11-12.md
├── EXPERIMENTS/
│   └── EX_01_WILMAR_VS_NUTEAM.md
└── TEMPLATES/
    └── REVISION_DE_CAMPANA.md
```

- `ESTRATEGIA.md`: posicionamiento, audiencia, límites de credibilidad, presupuesto y reglas de medición compartidas.
- `CAMPAIGNS/`: brief, plan detallado, checklist y revisiones con resultados de cada campaña propia de NuTeam. Las exportaciones fuente se conservan sin editar.
- `EXPERIMENTS/`: pruebas que cruzan marcas o páginas. Aquí se documenta la comparación con la landing personal; no se considera un experimento concluido.
- `TEMPLATES/`: formato para reportar ventanas de campaña sin confundir clics, envíos de formulario y leads cualificados.

Para NU_01, consultar el [plan](CAMPAIGNS/NU_01_PLAN_DE_LANZAMIENTO.md), el [checklist](CAMPAIGNS/NU_01_CHECKLIST_LANZAMIENTO.md), la [revisión inicial](CAMPAIGNS/NU_01_REVISION_2026-10-07_08.md) y los [seguimientos del 4](CAMPAIGNS/NU_01_REVISION_2026-11-04.md), [8](CAMPAIGNS/NU_01_REVISION_2026-11-08.md) y [12 de noviembre](CAMPAIGNS/NU_01_REVISION_2026-11-12.md). Registrar fecha y fuente de cada actualización; no extrapolar cortes parciales a resultados sostenidos.

## Convenciones de registro

- Asignar un identificador estable a cada campaña y a cada experimento. No reutilizar `Campaign #1`, que pertenece al historial de Google Ads del portafolio personal.
- Registrar fecha y fuente de cada dato: Google Ads, Google Analytics 4, Google Sheets o confirmación manual. No mezclar capturas y CSV con totales distintos.
- Conservar los reportes originales y añadir análisis en Markdown; no editar exportaciones para hacer coincidir cifras.
- No guardar nombres, correos, teléfonos, información operacional del prospecto, credenciales ni secretos en este repositorio.
- Un envío exitoso es una conversión técnica. Solo cuenta como lead cualificado después de revisar el contexto del proceso.

## Estado de NU_01 y pendientes

- Presupuesto inicial de NU_01: COP 34.000 diarios promedio y tope operativo manual de COP 1.000.000. El último presupuesto visible es COP 60.000 diarios (8 nov.) y el grupo aparece **Apto**. La tabla de keywords 9–12 nov. confirma entrega: 690 impresiones, 75 clics y COP 238.145. Revisar el acumulado y pausar manualmente antes del tope; el presupuesto diario promedio no impone un límite total automático. No cambiar el presupuesto personal.
- Google Ads informó el 6 de octubre que la muestra de prueba encontró la página de destino. La URL de prueba incluyó los UTM; `{adgroupid}` y `{creative}` se sustituyeron por IDs y `utm_term` quedó vacío. Esto no valida un clic real ni el envío a `Leads`; la ausencia de término en esta muestra no es por sí sola un error. Mantener el sufijo actual y no hacer clic en anuncios propios.
- La tabla de keywords más reciente del 9–12 nov. muestra 690 impresiones, 75 clics, CTR 10,87 %, CPC promedio COP 3.175, gasto COP 238.145 y 1 conversión. La fila única de `Leads` de la fecha coincide por fuente, medio y campaña; la consulta atribuida en Ads fue una búsqueda de recurso gratuito. El Nivel de calidad 2/10 de `"automatización de procesos"` es diagnóstico, no KPI. Los términos reportados suman 39 clics/COP 123.095; “Otros términos” agrupa 36 clics/COP 115.050 sin revelar consultas; no inferir intención.
- La captura más reciente confirma cinco negativas de frase a nivel de NU_01: `"qué es"`, `"que es"`, `"n8n descargar"` y las variantes con/sin tilde de `"automatización industrial"`. No se agregó `"n8n español gratis"`, que originó el lead real; Wilmar ya envió un seguimiento y se espera su resultado antes de decidir. No excluir en bloque `n8n`, `RPA`, `pdf` ni `industrial` en general. El CSV histórico 7–8 oct. es agregado y no sustituye el actual.
- `form_submit` se importó desde GA4 como acción principal dentro de **Contactos**, con recuento de una conversión y sin valor monetario. El resumen de NU_01 del 6 de octubre mostraba Contactos; la captura de acciones del 8 de octubre no incluye esta acción en objetivos a nivel de cuenta, lo cual puede ser coherente con el objetivo específico de campaña. Confirmar que NU_01 siga usando Contactos, sin cambiarlo si ya está configurado. No instalar una etiqueta `AW` ni crear una conversión directa duplicada.
- Wilmar confirmó que las filas de QA se eliminaron. El único lead del 9–12 coincide por fecha/fuente con la conversión de Ads; los otros dos leads son de octubre. Wilmar envió un email inicial y un seguimiento el 12 nov.; aún no se ha reportado respuesta al seguimiento, por lo que sigue sin cualificar. No copiar datos personales ni texto operacional a este repositorio. `NEXT_PUBLIC_GA_MEASUREMENT_ID` está configurada para Production y Preview; falta comprobar que Preview no mezcle datos con Production. La revisión de privacidad/consentimiento sigue diferida.
- En las capturas GA4 del 7–8 oct. había 0 `cta_click`, `form_start` y `form_submit` en las filas de NU_01; el dato del 8 era preliminar. Esa observación es histórica. Confirmar objetivo Contactos de la campaña antes de optimizar cuando Ads permita revisar el estado.
- El teléfono es opcional y se probó vacío y diligenciado. No conservar datos personales de prueba ni de prospectos en este repositorio.
- El certificado de Cámara de Comercio expedido el 4 de noviembre indica la constitución e inscripción de NUTEAM S.A.S. en el Libro IX. También advierte que hay peticiones en trámite y refleja una inscripción de situación de control que la Cámara informó que debe corregir; no registrar esa corrección como completada. Aclarar condiciones de contratación y facturación antes de una propuesta formal. Privacidad y Términos siguen sin revisión legal documentada.
- El estado **Apto** fue visto en Campañas/Grupos el 8 y 12 nov.; el presupuesto diario de COP 60.000 se vio el 8 nov. El tope manual sigue en COP 1.000.000; no modificar el presupuesto personal.
- La captura de Promociones del 12 nov. marca COP 1.059.560 de COP 1.250.432 requeridos antes del 15 nov.; faltan COP 190.872. No se observa crédito otorgado. El crédito futuro caduca 60 días después de otorgarse y no reembolsa el gasto para calificar. La página advierte que los anuncios siguen publicándose tras agotarse el crédito; detener campañas manualmente para evitar más costos. No atribuir todo el progreso a NU_01; ver el [seguimiento del 12 de noviembre](CAMPAIGNS/NU_01_REVISION_2026-11-12.md).
