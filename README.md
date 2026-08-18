This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Captura de leads

El formulario envía los leads directamente a un Google Apps Script Web App. La
URL pública se configura en `.env.local`:

```bash
NEXT_PUBLIC_GOOGLE_SHEETS_ENDPOINT=https://script.google.com/macros/s/TU_DEPLOYMENT_ID/exec
```

### Configurar Google Sheets

1. Crea un Google Sheet y una pestaña llamada `Leads`.
2. En la primera fila agrega estas columnas, en este orden: `Fecha`, `Nombre`,
   `Empresa`, `Cargo`, `Email`, `Teléfono`, `Proceso`, `Volumen`, `Impacto`,
   `Fuente`, `Fuente UTM`, `Medio`, `Campaña`, `Término`, `Contenido`,
   `Landing Page`, `Referrer`, `Timestamp atribución`.
3. En el Sheet abre `Extensiones > Apps Script`.
4. Reemplaza el contenido del editor con el código de
   [`integrations/google_apps_script.gs`](integrations/google_apps_script.gs) y guarda.
5. Selecciona `Implementar > Nueva implementación`, elige `Aplicación web`,
   configura `Ejecutar como: Yo` y `Quién tiene acceso: Cualquier persona`, y
   pulsa `Implementar`.
6. Autoriza el acceso solicitado a Google Sheets y copia la URL que termina en
   `/exec`.
7. Crea `.env.local` en la raíz y pega allí la URL en
   `NEXT_PUBLIC_GOOGLE_SHEETS_ENDPOINT`.

El script valida los campos permitidos y obligatorios, genera `Fecha` en el
servidor y agrega una fila. `Fuente` es `landing` por defecto. La atribución se
captura en `sessionStorage` y se envía junto al lead sin incluirla en GA4.

### Probar localmente

Con `.env.local` configurado, ejecuta:

```bash
pnpm dev
```

Abre `http://localhost:3000/?utm_source=prueba#contacto`, completa el formulario
y envíalo. Comprueba `Enviando...`, el mensaje de éxito tras recibir
`{ "success": true }` y una nueva fila en `Leads` con la atribución. Si falla,
el botón muestra el error y permite reintentar sin borrar los campos.

## Google Analytics 4

Configura `NEXT_PUBLIC_GA_MEASUREMENT_ID` con el Measurement ID de la propiedad
GA4, tanto en `.env.local` para desarrollo como en las variables de entorno de
producción. Si no está definida, la landing continúa funcionando sin analytics.

Se registran `page_view`, `cta_click`, `form_start`, `form_submit`, `scroll_50`
y `scroll_90`. `form_submit` solo se registra después de una respuesta exitosa
de Google Sheets y ningún evento envía datos personales.

Para verificar eventos en producción, usa GA4 > DebugView con una sesión de
prueba y el panel Network del navegador para confirmar las solicitudes a
`google-analytics.com`. Para validar atribución, usa una URL con UTM y revisa
las columnas nuevas de `Leads`.
