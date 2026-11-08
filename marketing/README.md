# Marketing de NuTeam

**Estado (8 de noviembre de 2026):** NU_01 inició el 7 de octubre. La captura Ads del 7 oct.–8 nov. muestra 699 impresiones, 60 clics, COP 220.284 de costo y 1 conversión reportada, sin reconciliar con un envío comercial. Capturas posteriores muestran la campaña y el grupo en verde/**Apto**, con COP 60.000 diarios promedio; las métricas no muestran gasto nuevo aún. La identidad del anunciante figura verificada. Ver [seguimiento del 8 de noviembre](CAMPAIGNS/NU_01_REVISION_2026-11-08.md).
**Actualizado:** 8 de noviembre de 2026.

Este directorio organiza el posicionamiento, las campañas, los experimentos y las revisiones de marketing de NuTeam. Reutiliza el aprendizaje de la primera campaña en Google Ads del portafolio de Wilmar, sin trasladar sus resultados como si fueran resultados de NuTeam.

## Cómo se relaciona con el portafolio de Wilmar

- **Objetivo común para automatización:** generar conversaciones cualificadas sobre procesos operativos que podrían automatizarse.
- **Marcas y recorridos separados:** el portafolio de Wilmar conserva el recorrido de roles y colaboraciones profesionales; NuTeam se enfoca en empresas que evalúan automatización operativa.
- **Medición separada:** cada campaña tiene su propia URL, acción de conversión, atribución y registro de leads. La comparación entre marcas se hace con un criterio común de calificación, no sumando formularios sin distinguir su origen.
- **Presupuesto coordinado:** Wilmar confirmó el 6 de octubre que la campaña personal estaba pausada y que NuTeam sería la siguiente, sin solapamiento. NU_01 tuvo entrega inicial y luego Wilmar la pausó; antes de reanudar, comprobar si hay una restricción de cuenta vigente. Cada campaña conserva su presupuesto; verificar el estado de la saliente si cambia el calendario.

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
│   ├── NU_01_REVISION_2026-10-07_08.md
│   ├── NU_01_REVISION_2026-11-04.md
│   └── NU_01_REVISION_2026-11-08.md
├── EXPERIMENTS/
│   └── EX_01_WILMAR_VS_NUTEAM.md
└── TEMPLATES/
    └── REVISION_DE_CAMPANA.md
```

- `ESTRATEGIA.md`: posicionamiento, audiencia, límites de credibilidad, presupuesto y reglas de medición compartidas.
- `CAMPAIGNS/`: brief, plan detallado, checklist y revisiones con resultados de cada campaña propia de NuTeam. Las exportaciones fuente se conservan sin editar.
- `EXPERIMENTS/`: pruebas que cruzan marcas o páginas. Aquí se documenta la comparación con la landing personal; no se considera un experimento concluido.
- `TEMPLATES/`: formato para reportar ventanas de campaña sin confundir clics, envíos de formulario y leads cualificados.

Para NU_01, consultar el [plan](CAMPAIGNS/NU_01_PLAN_DE_LANZAMIENTO.md), el [checklist](CAMPAIGNS/NU_01_CHECKLIST_LANZAMIENTO.md), la [revisión inicial](CAMPAIGNS/NU_01_REVISION_2026-10-07_08.md), el [seguimiento del 4 de noviembre](CAMPAIGNS/NU_01_REVISION_2026-11-04.md) y el [seguimiento del 8 de noviembre](CAMPAIGNS/NU_01_REVISION_2026-11-08.md). Registrar fecha y fuente de cada actualización; no extrapolar cortes parciales a resultados sostenidos.

## Convenciones de registro

- Asignar un identificador estable a cada campaña y a cada experimento. No reutilizar `Campaign #1`, que pertenece al historial de Google Ads del portafolio personal.
- Registrar fecha y fuente de cada dato: Google Ads, Google Analytics 4, Google Sheets o confirmación manual. No mezclar capturas y CSV con totales distintos.
- Conservar los reportes originales y añadir análisis en Markdown; no editar exportaciones para hacer coincidir cifras.
- No guardar nombres, correos, teléfonos, información operacional del prospecto, credenciales ni secretos en este repositorio.
- Un envío exitoso es una conversión técnica. Solo cuenta como lead cualificado después de revisar el contexto del proceso.

## Estado de NU_01 y pendientes

- Presupuesto inicial de NU_01: COP 34.000 diarios promedio y tope operativo manual de COP 1.000.000. Las capturas del 8 de noviembre muestran COP 60.000 diarios promedio configurados, campaña/grupo en **Apto** y un costo del período de COP 220.284 (22,0 % del tope), igual al corte previo. Apto no prueba que haya entrega nueva; verificar el costo e impresiones tras un día completo. Revisar el acumulado y pausar manualmente antes del tope; el presupuesto diario promedio no impone un límite total automático. No cambiar el presupuesto personal.
- Google Ads informó el 6 de octubre que la muestra de prueba encontró la página de destino. La URL de prueba incluyó los UTM; `{adgroupid}` y `{creative}` se sustituyeron por IDs y `utm_term` quedó vacío. Esto no valida un clic real ni el envío a `Leads`; la ausencia de término en esta muestra no es por sí sola un error. Mantener el sufijo actual y no hacer clic en anuncios propios.
- La captura del 7–8 de octubre es histórica. El corte posterior 7–13 registra 699 impresiones, 60 clics, CTR 8,58 %, CPC promedio COP 3.671 y gasto COP 220.284. La misma vista muestra 1 conversión reportada, pendiente de comprobar contra la acción y el registro comercial. La captura del 8 de noviembre muestra NU_01 detenida; su período de métricas no está visible y los ceros de esa vista no representan necesariamente el total histórico.
- El CSV de términos del 7–8 de octubre informa 3 clics y COP 14.762 en términos reportados, y 12 clics y COP 43.914 en “Otros términos”. No incluye filas con consultas individuales; no atribuir intención a “Otros” ni añadir negativas sin evidencia.
- `form_submit` se importó desde GA4 como acción principal dentro de **Contactos**, con recuento de una conversión y sin valor monetario. El resumen de NU_01 del 6 de octubre mostraba Contactos; la captura de acciones del 8 de octubre no incluye esta acción en objetivos a nivel de cuenta, lo cual puede ser coherente con el objetivo específico de campaña. Confirmar que NU_01 siga usando Contactos, sin cambiarlo si ya está configurado. No instalar una etiqueta `AW` ni crear una conversión directa duplicada.
- Wilmar confirmó que las filas de QA se eliminaron y que no había envíos comerciales hasta el 8 de octubre. No se ha compartido un estado posterior de `Leads`; la conversión Ads del corte 7–13 no prueba por sí sola que exista un lead. `NEXT_PUBLIC_GA_MEASUREMENT_ID` está configurada para Production y Preview; falta comprobar que Preview no mezcle datos con Production. La revisión de privacidad/consentimiento sigue diferida.
- En las capturas GA4 del 7–8 oct. había 0 `cta_click`, `form_start` y `form_submit` en las filas de NU_01; el dato del 8 era preliminar. Esa observación es histórica. Confirmar objetivo Contactos de la campaña antes de optimizar cuando Ads permita revisar el estado.
- El teléfono es opcional y se probó vacío y diligenciado. No conservar datos personales de prueba ni de prospectos en este repositorio.
- El certificado de Cámara de Comercio expedido el 4 de noviembre indica la constitución e inscripción de NUTEAM S.A.S. en el Libro IX. También advierte que hay peticiones en trámite y refleja una inscripción de situación de control que la Cámara informó que debe corregir; no registrar esa corrección como completada. Aclarar condiciones de contratación y facturación antes de una propuesta formal. Privacidad y Términos siguen sin revisión legal documentada.
- La captura de Campañas/Grupos del 8 de noviembre muestra punto verde, estado **Apto** y presupuesto de COP 60.000 diarios para NU_01 y su grupo. Esto confirma la configuración visible, no entrega nueva: el corte 7 oct.–8 nov. aún muestra COP 220.284 y 60 clics, igual al corte anterior. La identidad del anunciante está verificada y D&B/afiliación ya no se requieren. Mantener el tope manual de COP 1.000.000; no modificar la estrategia ni el presupuesto personal.
- La última cifra promocional compartida muestra requisito de COP 1.250.432 antes del 15 nov. 2026 para otorgar COP 1.250.433 de crédito futuro; el progreso era COP 802.055 y faltaban COP 448.377, sin crédito otorgado. Las capturas nuevas no muestran el contador: refrescar Promociones antes de recalcular el ritmo diario. El crédito no es deuda ni reembolso del gasto inicial; caduca 60 días después de otorgarse. No atribuir todo el progreso a NU_01. Para ritmo/calendario y estados, ver [seguimiento de NU_01 al 8 de noviembre](CAMPAIGNS/NU_01_REVISION_2026-11-08.md).
