---
name: playwright-testing
description: Create reliable browser tests for NuTeam's Next.js landing page, contact form, attribution, and analytics behavior.
---

# Playwright Testing

Use this skill when adding or reviewing end-to-end tests. Test user-visible behavior rather than implementation details.

## Priorities

- Cover the main landing page on desktop and mobile viewport sizes.
- Test required fields, valid submission, loading state, server rejection, and retry behavior.
- Test UTM attribution without asserting private implementation details.
- Mock external Google Sheets and analytics requests at the network boundary.
- Use accessible locators such as roles, labels, and visible text.
- Keep tests isolated, deterministic, and independent of production services.

## NuTeam checks

- Assert that personal data is not sent to analytics events.
- Assert that `form_submit` is sent only after a successful lead response.
- Verify the form keeps its values after a failed request.
- Verify keyboard submission and visible error feedback.

## Verification

- Run the project's Playwright test command in CI and locally.
- Capture traces only on failure.
- Do not add tests that require real credentials, real leads, or a production Google Sheet.

## Sources

- https://playwright.dev/docs/intro
- https://playwright.dev/docs/best-practices
- https://playwright.dev/docs/test-assertions
