---
name: analytics-quality
description: Design and audit privacy-safe GA4 events, UTM attribution, and lead conversion tracking for NuTeam.
---

# Analytics Quality

Use this skill when changing analytics, attribution, conversion tracking, or the contact form. Analytics must support decisions without collecting personal data.

## Event rules

- Keep event names stable, lowercase, and descriptive.
- Define each event's trigger, parameters, and expected frequency before implementation.
- Send `form_submit` only after the lead service confirms success.
- Do not send email, name, phone, company, free-text, or identifiers that can reveal a person.
- Prevent duplicate page views and repeated conversion events.
- Keep UTM attribution separate from GA4 when it contains campaign metadata that does not need to be sent.

## NuTeam checks

- Validate `page_view`, CTA clicks, form start, form submit, and scroll thresholds.
- Verify events in GA4 DebugView and browser Network tools.
- Test missing measurement IDs and local development behavior.
- Document consent behavior before enabling production analytics.

## Sources

- https://developers.google.com/analytics/devguides/collection/ga4/events
- https://support.google.com/analytics/answer/9216061
- https://developers.google.com/tag-platform/security/guides/consent
