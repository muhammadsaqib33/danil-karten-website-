# DaniCare CRM Integration Boundary

## 1. Repository Inspection Summary
No existing `DaniCare CRM` repository was present in this workspace (`c:\Users\h4170\OneDrive\Desktop\danial CRM website` was empty). Accordingly, this project implements a **standalone public website** with a narrow, server-only integration boundary ready to connect to `DaniCare CRM` once its API contract and credentials are supplied.

## 2. Security & Architecture Boundaries
The public website **must never**:
- Import or bundle private CRM modules, database schemas, or clinical tables into client components or public routes.
- Collect or transmit protected clinical intake details (DOB, medical history, allergies, medications, consents, lot numbers, or clinical photos).
- Auto-send WhatsApp, SMS, or email messages using unverified channels.
- Expose private CRM endpoints, API keys, or stack traces in browser code or HTTP responses.

## 3. Narrow Server-Side Contract
All consultation requests flow through:
1. `POST /api/consultation` (`src/app/api/consultation/route.ts`)
2. Zod validation & sanitization (`src/lib/validations/consultation.ts`)
3. Rate limiting, honeypot check, and duplicate-submission protection (`src/lib/server/consultation-service.ts`)
4. Server-only CRM adapter (`src/lib/server/crm-client.ts`)

### Expected Outbound Payload to `DaniCare CRM`
```json
{
  "source": "public_website",
  "requestId": "uuid-v4",
  "submittedAt": "2026-11-12T19:00:00.000Z",
  "contact": {
    "fullName": "Jane Doe",
    "preferredMethod": "phone",
    "phone": "917-555-0199",
    "email": null,
    "preferredContactTime": "morning"
  },
  "interest": {
    "treatmentInterest": "general_consultation"
  },
  "consents": {
    "contactAcknowledgement": true,
    "marketingOptIn": false,
    "marketingOptInRecordedAt": null
  }
}
```

### Expected Headers
- `Content-Type: application/json`
- `Authorization: Bearer <CRM_API_KEY>` (server-side only; never `NEXT_PUBLIC_`)
- `X-Request-Id: <requestId>`
- `X-Idempotency-Key: <submissionId>`

### Expected Success Response (`200` / `201`)
```json
{
  "accepted": true,
  "referenceId": "crm_req_12345"
}
```

## 4. Delivery Modes (`CONSULTATION_DELIVERY_MODE`)
- **`crm`**: Requires `CRM_API_URL` (HTTPS in production) and `CRM_API_KEY`. Forwards validated requests to `DaniCare CRM` with an 8-second timeout.
- **`demo`**: Explicit development/staging preview mode (`NODE_ENV !== 'production'` default when CRM vars are absent, or explicit `CONSULTATION_DELIVERY_MODE=demo`). Validates payloads on the server without `setTimeout` simulation, does **not** claim the request was delivered to Danielle or `DaniCare CRM`, and displays the real phone number (`917-855-7737`) as a direct contact option.
- **`unavailable`** (default in production if CRM credentials are missing): Returns `503 Service Unavailable` and directs visitors to call `917-855-7737`.

## 5. Remaining Integration Work Before Production
1. Obtain exact `DaniCare CRM` intake API specification (URL, auth scheme, field mapping, error codes, idempotency behavior).
2. Confirm privacy/BAA and data-retention posture for any vendor handling consultation inquiry payloads.
3. Replace in-memory rate limiting / duplicate protection in `src/lib/server/consultation-service.ts` with distributed storage (e.g., Redis) if deploying across multiple serverless instances.
4. Configure production `CRM_API_URL`, `CRM_API_KEY`, `CONSULTATION_DELIVERY_MODE=crm`, and `NEXT_PUBLIC_SITE_URL` in hosting environment secrets.
5. Verify end-to-end submission with synthetic test data in staging before enabling public traffic.
