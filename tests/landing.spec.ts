import { expect, test } from "@playwright/test";

test("la landing en español presenta el flujo logístico y conserva sus destinos", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("body")).not.toContainText(/[→↗↘←↑↓↙↖➜➝➞➤]/);

  await expect(page).toHaveTitle(/Solicitudes de transporte.*NuTeam/);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Agentes de IA para organizar solicitudes de transporte.",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: /Automatizar no significa sacar al equipo de la operación/,
    }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: "Evaluar mi proceso" }).first(),
  ).toHaveAttribute("href", "#contacto");
  await expect(
    page.getByRole("link", { name: "Ver la demo de Freight Pilot" }).first(),
  ).toHaveAttribute("href", "#demo");
  await expect(page.locator("#soluciones")).toBeAttached();
  await expect(page.locator("#soluciones")).toContainText("Servicio de carga");
  await expect(page.locator("#soluciones")).toContainText("Por confirmar");
  await expect(page.locator("#soluciones [data-flow-step]")).toHaveCount(0);
  await expect(page.getByText("Un flujo para evaluar")).toHaveCount(0);
  await expect(page.getByText("Un traspaso frecuente")).toHaveCount(0);
  await expect(page.locator("#casos-de-uso")).toHaveCount(0);
  await expect(page.locator("#como-funciona")).toBeAttached();
  for (const number of ["1", "2", "3", "4"]) {
    await expect(
      page.locator("#como-funciona").getByText(number, { exact: true }),
    ).toBeAttached();
  }
  await expect(
    page.locator("#como-funciona").getByText(/^(01|02|03|04)$/, { exact: true }),
  ).toHaveCount(0);
  await expect(page.locator("#contacto")).toBeAttached();
  await expect(page.locator("#contacto")).not.toHaveAttribute("open", "");

  await expect(
    page.getByText("Demo de portafolio · no es una implementación de cliente"),
  ).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: "Procesos relacionados" }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: "Ver demo de Freight Pilot" }).last(),
  ).toHaveAttribute("href", "https://freight.nuteam.ai/");
});

test("con movimiento reducido el contenido permanece visible", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await expect(
    page.locator("[data-motion-reveal]").first(),
  ).toHaveCSS("opacity", "1");
  await expect(page.locator("#soluciones ol")).toBeVisible();
  await expect(page.locator("#como-funciona [data-motion-reveal]").first()).toHaveCSS(
    "opacity",
    "1",
  );
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Agentes de IA para organizar solicitudes de transporte.",
    }),
  ).toBeVisible();
});

test("el modal y el wizard respetan el movimiento reducido", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.getByRole("link", { name: "Evaluar mi proceso" }).first().click();

  const modalPanel = page.locator("[data-contact-modal-panel]");
  await expect(modalPanel).toHaveCSS("opacity", "1");
  await expect(modalPanel).toHaveCSS("transform", "none");

  await page
    .getByLabel(
      "¿Cómo llegan y se preparan las solicitudes de transporte para revisión?",
    )
    .fill("Llegan por correo.");
  await page.getByRole("button", { name: "Continuar" }).click();
  const stepPanel = page.locator("[data-wizard-step-panel]");
  await expect(stepPanel).toHaveCSS("opacity", "1");
  await expect(stepPanel).toHaveCSS("transform", "none");
});

test("el flujo de solicitud señala el dato pendiente y la revisión humana", async ({
  page,
}) => {
  await page.goto("/");

  const requestFlow = page.locator("#soluciones");
  await expect(requestFlow).toContainText("Peso de la carga");
  await expect(requestFlow).toContainText("Por confirmar");
  await expect(requestFlow).toContainText("Revisión del operador");
  await expect(requestFlow.locator("[data-flow-step]")).toHaveCount(0);
});

test("la landing en inglés mantiene el mismo enfoque logístico", async ({
  page,
}) => {
  await page.goto("/en");
  await expect(page.locator("body")).not.toContainText(/[→↗↘←↑↓↙↖➜➝➞➤]/);

  await expect(page).toHaveTitle(/Freight Request Process Automation.*NuTeam/);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "AI agents for organizing freight requests.",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: /Automation does not mean taking people out of the process/,
    }),
  ).toHaveCount(0);
  await expect(
    page.getByText("Portfolio demo · not a customer implementation"),
  ).toHaveCount(0);
  await expect(page.locator("#casos-de-uso")).toHaveCount(0);
  for (const number of ["1", "2", "3", "4"]) {
    await expect(
      page.locator("#como-funciona").getByText(number, { exact: true }),
    ).toBeAttached();
  }
  await expect(
    page.locator("#como-funciona").getByText(/^(01|02|03|04)$/, { exact: true }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: "Related processes" }),
  ).toHaveCount(0);
  await expect(page.locator("#soluciones")).toBeAttached();
  await expect(page.locator("#soluciones")).toContainText("Freight shipment");
  await expect(page.locator("#soluciones")).toContainText("To confirm");
  await expect(page.locator("#soluciones [data-flow-step]")).toHaveCount(0);
  await expect(page.locator("#como-funciona")).toBeAttached();
  await expect(page.locator("#contacto")).toBeAttached();
  await page.getByRole("link", { name: "Evaluate my process" }).first().click();
  await expect(page.locator("#contacto")).toHaveAttribute("open", "");
  await expect(page.getByText("Step 1 of 4", { exact: true })).toBeVisible();
  await expect(page.getByText("Process assessment", { exact: true })).toHaveCount(0);
  await expect(page.getByText(/^\d+%$/, { exact: true })).toHaveCount(0);
  await expect(
    page.getByText("Describe the steps your team follows and what it needs to check."),
  ).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Close form" })).toBeVisible();
});

test("el formulario conserva sus campos y el envío confirmado muestra éxito", async ({
  page,
}) => {
  let payload: Record<string, unknown> | undefined;

  await page.route("**/*", async (route) => {
    const request = route.request();
    const postData = request.postData();

    if (request.method() !== "POST" || !postData?.includes('"process"')) {
      await route.continue();
      return;
    }

    payload = JSON.parse(postData) as Record<string, unknown>;
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ success: true }),
    });
  });

  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await page.getByRole("link", { name: "Evaluar mi proceso" }).first().click();
  await expect(page.locator("#contacto")).toHaveAttribute("open", "");
  await expect(page.getByText("Evaluación del proceso", { exact: true })).toHaveCount(0);
  await expect(page.getByText(/^\d+%$/, { exact: true })).toHaveCount(0);
  await expect(
    page.getByText(
      "No incluyas datos personales de clientes o conductores ni documentos confidenciales.",
    ),
  ).toHaveCount(0);
  await page.locator("#contacto form").scrollIntoViewIfNeeded();
  await page.waitForLoadState("networkidle");
  await expect(
    page.getByText("Paso 1 de 4", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText(
      "Describe los pasos que sigue tu equipo y qué información necesita revisar.",
    ),
  ).toHaveCount(0);
  await page
    .getByLabel("¿Cómo llegan y se preparan las solicitudes de transporte para revisión?")
    .fill("Llegan por correo y el equipo revisa la información.");
  await page.getByRole("button", { name: "Continuar" }).click();
  await page
    .getByLabel("¿Cuántas horas por semana dedica aproximadamente tu equipo a este proceso?")
    .selectOption("10-30");
  await page.getByRole("button", { name: "Continuar" }).click();
  await page
    .getByLabel("¿Qué ocurre cuando una solicitud está incompleta o tarda en revisarse?")
    .fill("El equipo solicita la información faltante.");
  await page.getByRole("button", { name: "Volver" }).click();
  await expect(
    page.getByLabel("¿Cuántas horas por semana dedica aproximadamente tu equipo a este proceso?"),
  ).toHaveValue("10-30");
  await page.getByRole("button", { name: "Continuar" }).click();
  await expect(
    page.getByLabel("¿Qué ocurre cuando una solicitud está incompleta o tarda en revisarse?"),
  ).toHaveValue("El equipo solicita la información faltante.");
  await page.getByRole("button", { name: "Continuar" }).click();

  await page.getByLabel("Nombre").fill("Prueba");
  await page.getByLabel("Email corporativo").fill("prueba@example.com");
  await page.getByLabel("Empresa").fill("Operador de prueba");
  await page.getByLabel("Cargo").fill("Operaciones");

  expect(
    await page.locator("#contacto form").evaluate((form: HTMLFormElement) =>
      form.checkValidity(),
    ),
  ).toBe(true);

  await page.getByRole("button", { name: "Evaluar este proceso" }).click();

  await expect.poll(() => payload).toBeDefined();
  await expect(
    page.getByRole("heading", { name: "Solicitud recibida", exact: true }),
  ).toBeVisible();
  expect(payload).toMatchObject({
    name: "Prueba",
    company: "Operador de prueba",
    role: "Operaciones",
    email: "prueba@example.com",
    process: "Llegan por correo y el equipo revisa la información.",
    volume: "10-30",
    impact: "El equipo solicita la información faltante.",
    source: "landing",
  });
  expect(payload).toHaveProperty("utm");
});

test("el modal de contacto se puede cerrar y volver a abrir", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Evaluar mi proceso" }).first().click();

  const modal = page.locator("#contacto");
  await expect(modal).toHaveAttribute("open", "");
  await page.getByRole("button", { name: "Cerrar formulario" }).click();
  await expect(modal).not.toHaveAttribute("open", "");

  await page.getByRole("link", { name: "Evaluar mi proceso" }).first().click();
  await expect(modal).toHaveAttribute("open", "");
  await page.keyboard.press("Escape");
  await expect(modal).not.toHaveAttribute("open", "");

  await page.getByRole("link", { name: "Evaluar mi proceso" }).first().click();
  await expect(modal).toHaveAttribute("open", "");
  await page.mouse.click(8, 8);
  await expect(modal).not.toHaveAttribute("open", "");
});
