# Plan de adecuación de la landing de NuTeam para logística

**Estado:** landing implementada y verificada; cambios sin commit.
**Fecha:** 26 de noviembre de 2026.
**Alcance:** contenido, estructura, diseño, navegación, metadatos y textos de contacto de la landing pública en `/` y `/en`, conservando su funcionamiento actual. Quedan fuera de este plan la estrategia comercial, los anuncios, la pauta, el presupuesto, la duración de pruebas, la calificación de leads y la configuración de GA4 o Google Ads.
**Freight Pilot:** se asume que la demo funciona cuando su servidor está levantado. Levantarlo y comprobar su funcionamiento interno pertenecen a una tarea anterior; en este plan solo se conserva y verifica el enlace desde la landing.

## 1. Decisión de arquitectura

Convertir la página principal de una oferta horizontal de «automatización para cualquier operación» en una **landing enfocada en operaciones de transporte de carga**. El problema que explicará será la **recepción y preparación de solicitudes de transporte** que llegan con información dispersa o incompleta y requieren trabajo manual antes de que un operador pueda darles curso.

No intentar abarcar toda la logística ni presentarse como plataforma integral. La oferta inicial es **conversar sobre el proceso de una empresa y evaluar qué parte podría automatizarse**; si hay encaje, definir el alcance de una posible implementación. La IA es una herramienta dentro del flujo, no una promesa de autonomía total.

La especialización es **del mensaje de la landing**, no una afirmación de exclusividad permanente ni de experiencia comercial previa en el sector. Este trabajo no modifica `marketing/ESTRATEGIA.md` ni otros documentos de marketing.

### A quién dirigir la primera versión

- **Visitante prioritario:** responsable de operaciones, coordinación o mejora de procesos de un operador logístico, intermediario o empresa de transporte de carga en Colombia.
- **Situación de entrada:** recibe solicitudes por correo, mensajes, formularios u otros canales y necesita reunir/validar datos para que una persona pueda revisar el caso y continuar el proceso.
- **No cubrir en el mensaje principal:** logística de última milla, almacenes, e-commerce, optimización de rutas, tarifas automáticas o software TMS «listo para comprar».
- **Límite editorial:** presentar este proceso como un ejemplo concreto de lo que NuTeam puede evaluar, sin afirmar demanda comprobada ni experiencia previa con clientes del sector.

**Decisión aprobada por Wilmar (26 de noviembre de 2026):** hablar primero a empresas de transporte de carga y operadores logísticos en Colombia que gestionan solicitudes recibidas por mensajes o correo. Es un foco de la landing, no una exclusión permanente de otros sectores.

## 2. Qué tomar de la referencia, y qué no

Referencia consultada: [HappyRobot — proveedores logísticos](https://www.happyrobot.ai/es/solutions/industries/logistics-providers), 26 de noviembre de 2026.

| Patrón útil | Adaptación para NuTeam |
| --- | --- |
| Se dirige explícitamente al sector y organiza el relato alrededor de trabajos concretos. | Nombrar transporte de carga y mostrar **un flujo comprensible**, no una lista de tecnologías o seis departamentos. |
| Recorre problemas desde la solicitud hasta el seguimiento y la documentación. | Elegir solo **recepción/preparación de solicitudes** como caso principal. Seguimiento y documentación pueden aparecer como hipótesis secundarias, separadas de lo que existe hoy. |
| Usa una demostración visual y un siguiente paso claro. | Usar Freight Pilot como **demo de portafolio**, con sus límites visibles, y mantener el formulario de evaluación como CTA principal. |

**No trasladar:** lenguaje de «trabajadores de IA» desplegados, negociación de tarifas, llamadas en cada hito, sincronización con TMS/WMS, automatización extremo a extremo, auditorías, certificaciones, garantías de disponibilidad, logos, resultados o promesas de «demo» comercial. HappyRobot puede respaldar sus propias afirmaciones; NuTeam no puede atribuirse sus capacidades, clientes ni evidencias. Tampoco copiar su texto o composición gráfica.

## 3. Inventario de partida y brecha

| Superficie actual | Diagnóstico | Decisión propuesta |
| --- | --- | --- |
| `components/landing/hero.tsx` | Titular y canales genéricos; el sector no se reconoce en el primer pantallazo. | Reescribir para transporte de carga, caso de uso y CTA de evaluación. No presentar voz/WhatsApp/integraciones como prestaciones ya operativas en clientes. |
| `problem.tsx`, `solutions.tsx`, `use_cases.tsx` | Hablan de tareas, canales y funciones de múltiples industrias; diluyen la especialización. | Reemplazar el inventario genérico por fricciones del flujo y un diagrama narrativo de entradas, controles, revisión y salida. Solo mostrar casos adyacentes como posibilidades por evaluar. |
| `freight_pilot.tsx` | Ya muestra una demo alineada; explica extracción, normalización, reglas y revisión humana. | Darle un lugar más próximo al caso principal; aclarar «demo de portafolio», sin clientes ni resultados atribuidos. Mantener el enlace a `https://freight.nuteam.ai/`; la disponibilidad del servidor se resuelve fuera de este plan. |
| `process.tsx`, `differentiators.tsx`, `cta.tsx` | Método y promesas en abstracto, algunos pasos suenan a implementación segura. | Explicar evaluación → delimitación del flujo → propuesta **si es viable** → medición acordada **si se implementa**. Integrar controles y límites de forma concreta. |
| `contact_section.tsx`, `contact_form.tsx` | Formulario general con siete campos obligatorios y teléfono opcional. Apps Script espera los campos actuales. | Contextualizar títulos, ayudas y CTA para solicitudes de transporte; mantener el contrato de datos en el MVP. No añadir campos ni cambiar enumeraciones/columnas sin migración de frontend, Apps Script, hoja y política de privacidad. |
| `navbar.tsx`, `footer.tsx`, `app/page.tsx`, `app/en/page.tsx` | Rutas y anclas compartidas; `/en` contiene la misma propuesta horizontal en inglés. | Mantener la arquitectura bilingüe y las anclas; adaptar ambos idiomas con sentido equivalente. |
| `app/layout.tsx`, metadatos de `/en` | Metadatos actuales sobre automatización genérica y alternates ES/EN. | Actualizar título/descripción de la landing para el nuevo foco, preservando canónicas y alternates; comprobar que páginas legales no hereden un título engañoso. No añadir datos estructurados de clientes, reseñas o producto que no existan. |
| `ChatWidget`, botón de WhatsApp, GA4, Google Sheets | Hay recorridos alternos al formulario y medición ya implementada. | Conservar los canales y la instrumentación actuales. Ajustar, como máximo, el texto precargado de WhatsApp; no añadir eventos, cambiar parámetros de eventos ni modificar el envío a Sheets. |

## 4. Arquitectura del mensaje y propuesta de página

### Mensaje rector

**«Ayudamos a evaluar cómo preparar solicitudes de transporte con menos pasos manuales, conservando las reglas del negocio y la revisión del equipo cuando haga falta».** Es una propuesta de trabajo a evaluar, **no** una cifra de ahorro ni una implementación existente en clientes.

### Recorrido recomendado (orden de lectura móvil primero)

| Orden / ancla | Trabajo de la sección | Contenido y prueba admisible |
| --- | --- | --- |
| 1. Hero | Que el visitante se reconozca y sepa qué hacer. | Sector + problema específico + evaluación. CTA principal a `#contacto`; enlace secundario interno sin rastreo nuevo a `#demo`, sin competir por jerarquía. |
| 2. Problema | Hacer tangible la fricción sin dramatizar. | Ejemplos ilustrativos: datos que llegan por varios canales, campos faltantes, revisión repetida, traspaso a quien atiende la solicitud. No afirmar que todos los operadores usan las mismas herramientas. |
| 3. Flujo `#soluciones` | Mostrar qué se **evaluaría**, no prometer un sistema acabado. | Entrada → estructuración de datos → reglas/validación → excepciones a revisión humana → información lista para el siguiente responsable. Señalar explícitamente que el alcance e integraciones dependen del proceso real. |
| 4. Freight Pilot `#demo` | Dar evidencia acotada de capacidad técnica. | Captura y enlace de la demo; etiqueta persistente «Demo de portafolio · no es una implementación de cliente». Explicar exactamente lo que hace: extrae, normaliza, aplica reglas y remite casos ambiguos/incompletos a un operador. **No** calcula tarifas, crea cotizaciones ni asigna vehículos. |
| 5. Posibles extensiones `#casos-de-uso` | Ayudar al visitante a reconocer otros trabajos relacionados sin volver a una oferta horizontal. | A lo sumo dos ejemplos de procesos que se podrían evaluar (por ejemplo, documentación faltante o seguimiento de excepciones), sin sugerir que ya están implementados. Si distraen del flujo principal, omitir esta sección y conservar el ancla en un bloque de casos relacionados. |
| 6. Método `#como-funciona` | Resolver dudas de alcance, control y siguiente paso. | Conversación sobre entradas, volumen, reglas, sistemas y excepciones; determinar viabilidad; solo si hay encaje, acordar propuesta y métrica. No asegurar tiempos, gratuidad ni resultados. |
| 7. CTA + formulario `#contacto` | Convertir una visita pertinente en contexto útil. | «Cuéntanos cómo llegan hoy las solicitudes y qué debe revisar tu equipo». Explicar que el siguiente paso es revisar el caso y contactar a la persona, no entregar automáticamente una cotización o una auditoría formal. |
| 8. Footer | Cerrar con confianza y legalidad. | Mantener identidad corporativa y enlace a política de privacidad en cada idioma. |

**Navegación:** conservar `#soluciones`, `#casos-de-uso`, `#como-funciona` y `#contacto` porque ya existen enlaces a esas secciones. Si se elimina una sección, reasignar su `id` a contenido semánticamente equivalente y verificar los enlaces; no dejar anclas rotas.

**Dirección visual:** conservar el sistema oscuro actual y usar un esquema legible de flujo operativo, no una consola ficticia «en vivo». Si se muestran mensajes, formularios o documentos de ejemplo, identificarlos como ilustrativos y no usar datos de clientes reales.

### Copy inicial propuesto para la versión española

> **Etiqueta:** Para operaciones de transporte de carga
> **H1:** De solicitudes de transporte dispersas a datos listos para revisión
> **Apoyo:** Si las solicitudes llegan por mensajes o correo y tu equipo debe ordenar los datos antes de atenderlas, evaluamos contigo qué parte del flujo conviene automatizar, con reglas y revisión humana cuando haga falta.
> **CTA principal:** Evaluar mi proceso
> **CTA secundario:** Ver la demo de Freight Pilot (ancla interna `#demo`)

**Objeción que resuelve:** «¿Esta página entiende mi operación y qué recibiré si contacto?». El texto describe un posible resultado del **flujo a evaluar**, no una prestación desplegada ni un ahorro demostrado. Mantener la descripción de Freight Pilot dentro de los límites ya documentados: no calcula tarifas, crea cotizaciones ni asigna vehículos. Si se prefiere un titular aún más prudente: **«¿Cuánto tiempo dedica tu equipo a preparar solicitudes de transporte?»**, con la desventaja de comunicar menos claramente la dirección de la propuesta.

Para el formulario, conservar el destino `#contacto` y proponer preguntas contextuales sin exigir detalles confidenciales: «¿Cómo llegan y se revisan hoy las solicitudes de transporte?» y «¿Qué ocurre si falta información o se retrasa la revisión?». Mantener la pregunta de volumen en **horas por semana**, pues las opciones actuales de `volume` están definidas así. No solicitar datos personales de conductores, cargadores o clientes finales en el primer contacto; añadir una ayuda breve que invite a describir el proceso sin documentos sensibles.

## 5. Implementación propuesta: cambios mínimos y dependencias

1. **Ajustar la narrativa sin rehacer la infraestructura.** Reordenar `app/page.tsx` y `app/en/page.tsx` en paralelo. Reutilizar estilos, componentes de revelado y enlaces rastreados; sustituir secciones genéricas por una explicación específica del flujo. Mantener los componentes de servidor salvo que haya interacción real.
2. **Conservar la oferta de contacto actual.** «Evaluar un proceso» sigue significando que NuTeam revisa la información recibida y se pone en contacto para conversar sobre la viabilidad; el texto se contextualiza para transporte. No introducir plazos, gratuidad, una auditoría formal ni un compromiso de implementación.
3. **Adaptar SEO y navegación.** Metadatos de ES/EN específicos y fieles al contenido, un solo H1 por ruta, anclas existentes, enlaces de idioma y política. Mantener `/` como página principal; no crear rutas nuevas ni redirecciones.
4. **Adaptar el formulario sin romper el contrato.** Cambiar solo títulos, preguntas, ayudas y CTA en `contact_section.tsx`/`contact_form.tsx`; preservar `name`, `company`, `role`, `email`, `phone`, `process`, `volume`, `impact`, `source`, `utm` y `attribution`, incluidos los valores actuales de `volume`. `integrations/google_apps_script.gs` y la hoja `Leads` quedan intactos. No añadir campos ni cambiar el tratamiento de datos.
5. **Conservar los canales existentes.** El texto precargado de `whatsapp_button.tsx` puede ajustarse a transporte; no modificar el comportamiento del enlace. El widget de Ana solo aparece en `/`: no modificar su plataforma externa ni instrumentar eventos para él. Si su contenido contradice el mensaje nuevo, documentar el hallazgo para tratarlo por separado.
6. **Conservar el acceso a Freight Pilot.** Mantener en `freight_pilot.tsx` la URL `https://freight.nuteam.ai/` y comprobar que los enlaces de la landing apuntan a ella. Mantener la captura y la descripción actuales dentro de sus límites conocidos; no levantar, probar ni modificar el servidor de la demo en esta tarea.

## 6. Analítica existente: conservar, no ampliar

Este cambio es editorial y de interfaz. **No crear eventos nuevos, parámetros nuevos ni conversiones de Google Ads; no alterar la configuración de GA4/Ads.** Los eventos actuales `page_view`, `cta_click`, `form_start`, `form_submit`, `scroll_50` y `scroll_90` permanecen con los mismos nombres, disparadores y parámetros. Los clics de botones y el scroll siguen funcionando como hoy; no necesitan «adaptarse» al sector. El envío exitoso del formulario sigue siendo el único momento en que se emite `form_submit`.

Conservar `TrackedLink`, los `cta_name` y `location` existentes para enlaces ya instrumentados, así como `AnalyticsTracker`, `lib/analytics.ts`, la captura de UTM y el contrato del formulario. El nuevo enlace secundario del hero a `#demo` será un ancla normal, sin nuevo evento. Cambiar el texto visible de un botón no exige cambiar su evento. No añadir medición al chat o WhatsApp como parte de esta tarea.

## 7. Verificación y publicación

### Criterios de aceptación antes de desplegar

- En menos de un pantallazo móvil se identifica el sector, el problema y el siguiente paso. Los ejemplos/hipótesis se distinguen de la demo y de funcionalidades reales.
- No hay logos, testimonios, clientes, ahorros, ROI, integraciones, certificaciones, tarifas ni plazos inventados. Freight Pilot se identifica como demo de portafolio y se describen sus límites.
- `/` y `/en` presentan la misma especialización sin traducción literal confusa; las páginas de privacidad siguen accesibles. SEO, canonical y alternates apuntan a rutas correctas.
- Todas las anclas funcionan en navegación móvil/escritorio y desde enlaces de sitio existentes; el CTA principal lleva a `#contacto`.
- El formulario conserva sus campos/valores esperados por Apps Script, sus errores y su mensaje de éxito; `form_submit` ocurre solo después de una respuesta exitosa. UTMs y landing de origen llegan al registro sin guardar datos personales en logs del repositorio.
- Los enlaces de Freight Pilot apuntan a `https://freight.nuteam.ai/` y la sección sigue identificada como demo de portafolio. Una caída temporal del servidor no bloquea la implementación de la landing ni implica cambiar o retirar el enlace.
- WhatsApp/chat no prometen funcionalidades que la página o el equipo no puedan atender; los cambios de tratamiento de datos, si los hubiera, se cotejan con la política publicada antes del lanzamiento.
- Los eventos y sus parámetros actuales, incluidos `cta_click` y los eventos de scroll, no cambian; no se añaden conversiones ni eventos de Ads/GA4.

### QA técnico

Actualizar la prueba de `tests/landing.spec.ts`, que hoy fija el H1 y el título antiguos. Cubrir ES/EN, metadatos, anclas, CTA, etiqueta de demo, límites visibles y destino del enlace a Freight Pilot; probar formulario éxito/error y atribución con mock controlado, no con envíos de prueba a `Leads` de producción. Comprobar que `cta_click`, `form_start`, `form_submit` y scroll conservan sus condiciones actuales sin introducir instrumentación adicional. Verificar manualmente 320 px y escritorio, teclado, foco y legibilidad de textos. No exigir que el servidor externo responda en las pruebas de la landing. Ejecutar `pnpm lint`, `pnpm exec tsc --noEmit`, pruebas Playwright configuradas y `pnpm build` antes de publicar.

## 8. Secuencia de implementación de la landing

| Fase | Entrega | Comprobación |
| --- | --- | --- |
| 1. Contenido y estructura | Mensaje logístico en ES/EN, flujo principal, demo identificada y CTA contextualizado. | Redacción coherente, sin clientes ni capacidades inventadas. |
| 2. Compatibilidad | Anclas, metadatos, formulario y canales existentes preservados. | Sin cambios de contrato de datos, eventos, parámetros ni configuración analítica. |
| 3. QA y publicación | Pruebas y revisión de móvil/escritorio, enlace a la demo, formulario y páginas legales. | Cumple los criterios de aceptación de la landing; no depende de que el servidor de Freight Pilot esté levantado. |

**Pendientes antes de empezar a implementar:** ninguno. El público está aprobado y se conserva la oferta actual de «evaluar un proceso». La disponibilidad del servidor de Freight Pilot no forma parte de este trabajo; solo se revisarán el destino de su enlace y el copy de la landing.

**Fuera de alcance:** construir agentes de voz, integraciones TMS/WMS, negociación automática, generación de cotizaciones, asignación de vehículos, nuevos formularios con datos sensibles, casos de éxito ficticios, rediseño visual completo y cualquier cambio de campañas, pauta, métricas o eventos. El resultado de esta tarea es **una landing específica para logística que conserva el funcionamiento actual**.
