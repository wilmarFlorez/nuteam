# Plan de animaciones para la landing

**Estado:** Fases de reveal y movimiento UI implementadas y verificadas.
**Alcance:** animaciones de entrada y microinteracciones de la landing en español e inglés. Se conservan copy, navegación, formulario, analítica y paleta.

## Auditoría del estado actual

- `components/landing/reveal.tsx` observa cada bloque con `IntersectionObserver`; el movimiento y el fade están definidos por `.reveal` en `app/globals.css`.
- El hero ya usa `delay` escalonados para titular, descripción y CTAs, pero cada bloque se anima por separado.
- Tarjetas y CTAs tienen transiciones CSS de hover; el botón de WhatsApp usa una escala breve.
- El paso activo del formulario usa `animate-fade-up` en CSS.
- `prefers-reduced-motion` reduce las transiciones y hace visibles los bloques `.reveal`. Sin embargo, el estado CSS inicial de esos bloques es opaco, así que el contenido depende de la hidratación para revelarse.
- No hay GSAP instalado ni uso actual de ScrollTrigger.

## Criterios de movimiento

- Dar al hero una entrada breve y escalonada; revelar las secciones y tarjetas una sola vez al entrar en viewport.
- Usar solo `opacity`/`autoAlpha` y `y` (transform), sin animar propiedades de layout.
- Mantener las transiciones CSS de hover que ya responden directamente a la interacción.
- No añadir pinning, scrub, parallax ni animaciones infinitas: la página es informativa y prioriza lectura, velocidad y control del usuario.
- Si se prefiere movimiento reducido, no ejecutar las animaciones y dejar todo el contenido visible.
- Usar `useGSAP` con scope y cleanup; usar ScrollTrigger para activar los reveals por scroll.

## Implementación

1. Añadir `gsap` y `@gsap/react` como dependencias de runtime.
2. Reemplazar el `IntersectionObserver` de `Reveal` por un reveal GSAP con ScrollTrigger, activación única, duración aproximada de 0,65 s, desplazamiento máximo de 20 px y respeto a `prefers-reduced-motion`.
3. Retirar el estado inicial oculto y el CSS `.reveal`; el contenido permanece visible como fallback sin JavaScript.
4. Conservar el fade breve CSS del paso del formulario y las microinteracciones CSS existentes; no duplicar animaciones.
5. Verificar ambas rutas, anclas, visibilidad con movimiento reducido, errores de navegador y build.

## Verificación

- [x] `pnpm build`
- [x] ESLint y TypeScript
- [x] Playwright en producción: ES/EN, reveal al hacer scroll, contenido visible con `reducedMotion: reduce` y fallback visible sin JavaScript
- [x] Confirmar que los CTAs siguen abriendo/cerrando el modal; el código del formulario y sus eventos permanece intacto

## Fase 2 — movimiento de interfaz con intención

### Dirección

La animación debe explicar el recorrido de una solicitud y orientar la interacción; no decorar por decorar. Mantener desplazamientos cortos, escalas casi imperceptibles y los mismos tonos carbón, marfil y amarillo.

### Interacciones previstas

1. **Flujo de solicitudes (`#soluciones`):** cuando cada tarjeta entra en viewport, aparece en una secuencia breve; el punto de su paso responde al entrar para sugerir el traspaso al siguiente estado. Usar `ScrollTrigger.batch()` para agrupar lo que entra junto, con cleanup por componente.
2. **Modal de evaluación:** animar el panel al abrir/cerrar con fade, una escala muy leve y desplazamiento corto. Conservar cierre por botón, Escape y backdrop; desactivar el movimiento con `prefers-reduced-motion`.
3. **Pasos del wizard:** mover el nuevo paso unos pocos píxeles desde la dirección del avance o retroceso y atenuar entrada/salida. Conservar la transición del progreso y el foco sobre el encabezado de cada paso.

Para reveals y pasos, animar `opacity` y transform sin `visibility:hidden`, de modo que el texto siga disponible para tecnologías de asistencia y el foco no desaparezca durante el cambio. El `autoAlpha` queda reservado para el panel del modal al cerrarse.

### Límites y verificación

- Sin scroll hijacking, pinning, parallax, rebotes notorios ni loops.
- Usar `useGSAP`, scopes y callbacks seguros; limpiar animaciones y listeners en desmontaje.
- Probar la secuencia en desktop y móvil, abrir/cerrar el modal con mouse/teclado, navegar atrás/adelante, ejecutar con movimiento reducido y confirmar que el payload del formulario permanece igual.

### Resultado

- [x] Secuencia de tarjetas y marcadores con `ScrollTrigger.batch()`, stagger corto y activación única.
- [x] Modal con entrada/salida sutil; mantiene cierre por botón, Escape y backdrop.
- [x] Wizard desliza el paso según avance/retroceso, conserva foco y valores.
- [x] `prefers-reduced-motion` omite las nuevas transiciones; el contenido queda visible.
- [x] Producción verificada en ES/EN, desktop/móvil y sin JavaScript; formulario y payload siguen funcionando.
- [x] Build, ESLint, TypeScript y `git diff --check`.
