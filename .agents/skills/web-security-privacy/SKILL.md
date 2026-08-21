---
name: web-security-privacy
description: Review security and privacy risks in NuTeam's Next.js landing page, lead form, Google Apps Script integration, and analytics.
---

# Web Security And Privacy

Use this skill when handling personal data, external endpoints, analytics, forms, or deployment configuration. Treat legal compliance as requiring human review.

## Priorities

- Never expose secrets in `NEXT_PUBLIC_*` variables or client bundles.
- Validate and constrain form fields at the receiving service; client validation is not a security boundary.
- Protect external lead endpoints against abuse with server-side validation, rate limiting, spam controls, and monitoring where supported.
- Avoid sending names, emails, phone numbers, or free-text form content to GA4.
- Use HTTPS, least privilege, secure headers, and explicit error handling.
- Document retention, access, deletion, and consent requirements for collected personal data.

## NuTeam checks

- Review the Google Apps Script deployment permissions and validation.
- Confirm analytics consent requirements for the target jurisdictions before production.
- Check that error messages do not reveal endpoint details or submitted data.
- Review `.env*` files and repository history for credentials.

## Verification

- Run dependency and secret scans before release.
- Review browser Network requests for PII and unexpected third parties.
- Perform a manual privacy and legal review; this skill is not legal advice.

## Sources

- https://owasp.org/www-project-top-ten/
- https://cheatsheetseries.owasp.org/
- https://developers.google.com/analytics/devguides/collection/ga4/events
- https://nextjs.org/docs/app/guides/content-security-policy
