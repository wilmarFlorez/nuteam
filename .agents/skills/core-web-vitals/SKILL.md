---
name: core-web-vitals
description: Audit and improve loading performance and Core Web Vitals for NuTeam's Next.js landing page.
user-invocable: false
---

# Core Web Vitals

Use this skill when reviewing or improving the landing page's performance. Optimize for real-user experience, not synthetic scores alone.

## Priorities

- LCP: identify the largest above-the-fold element and avoid delaying it with fonts, scripts, images, or client JavaScript.
- CLS: reserve dimensions for images and dynamic content; avoid layout shifts from fonts, banners, and form feedback.
- INP: keep event handlers small, defer non-critical work, and avoid unnecessary client components.
- Prefer Server Components and static rendering for content that does not need browser state.
- Use `next/image`, `next/font`, responsive sizes, and lazy loading appropriately.
- Respect `prefers-reduced-motion` and do not trade accessibility for animation.

## NuTeam checks

- Keep GA4 after interactive and avoid duplicate page views.
- Review scroll tracking for passive, low-cost listeners.
- Verify the contact form does not block initial rendering.
- Test mobile and slow-network conditions before claiming an improvement.

## Verification

- Run `pnpm build` and inspect the production page.
- Use Lighthouse and PageSpeed Insights for diagnostics.
- Prefer field data from CrUX or the deployment platform when available.

## Sources

- https://web.dev/learn/performance
- https://web.dev/articles/vitals
- https://nextjs.org/docs/app/building-your-application/optimizing
