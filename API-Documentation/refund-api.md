# Refund API Documentation

> This independent portfolio sample uses fictional endpoints and data. It demonstrates API-reference structure, examples, error handling, and webhook guidance.

## Overview

The Refund API enables developers to create and track refunds for completed payment transactions.

### Common use cases

- Processing an e-commerce return
- Correcting a payment error
- Handling a subscription cancellation

## Base URL

```text
https://api.example.com/v1
```

## Authentication

Send a bearer token with every request:

```http
Authorization: Bearer YOUR_API_TOKEN
```

Example:

```bash
curl https://api.example.com/v1/refunds \
  -H "Authorization: Bearer YOUR_API_TOKEN"
```

## Create a refund

`POST /refunds`

Creates a refund for a completed payment. The refund amount must not exceed the remaining refundable amount.

### Request body

```json
{
  "payment_id": "pay_987654",
  "amount": 1500,
  "reason": "product_return"
}
```

| Field | Type | Required | Description |
|---|---|---:|---|
| `payment_id` | string | Yes | Identifier of the completed payment. |
| `amount` | integer | Yes | Amount to refund in the payment's smallest currency unit. |
| `reason` | string | Yes | Reason for the refund, such as `product_return` or `duplicate_payment`. |

### Response: `201 Created`

```json
{
  "id": "rfnd_123456",
  "payment_id": "pay_987654",
  "amount": 1500,
  "currency": "INR",
  "status": "pending",
  "reason": "product_return",
  "created_at": "2026-10-05T09:30:00Z"
}
```

## Retrieve a refund

`GET /refunds/{refund_id}`

Returns the current status and details of a refund.

```bash
curl https://api.example.com/v1/refunds/rfnd_123456 \
  -H "Authorization: Bearer YOUR_API_TOKEN"
```

## List refunds

`GET /refunds`

Returns refunds for the authenticated account.

| Query parameter | Type | Description |
|---|---|---|
| `status` | string | Filter by `pending`, `succeeded`, or `failed`. |
| `from` | date-time | Return refunds created on or after this timestamp. |
| `to` | date-time | Return refunds created before this timestamp. |
| `page` | integer | Page number. Defaults to `1`. |
| `per_page` | integer | Results per page. Maximum `100`; defaults to `20`. |

## Error handling

Errors use a consistent response format:

```json
{
  "error": {
    "code": "refund_not_allowed",
    "message": "The requested amount exceeds the remaining refundable amount.",
    "request_id": "req_abc123"
  }
}
```

| Status | Meaning | Example code |
|---:|---|---|
| `400` | Invalid request | `invalid_amount` |
| `401` | Missing or invalid token | `unauthorized` |
| `404` | Refund or payment not found | `resource_not_found` |
| `409` | Refund conflicts with the current payment state | `refund_not_allowed` |
| `429` | Rate limit exceeded | `rate_limit_exceeded` |

## Webhooks

The API can notify an application when the refund status changes.

Supported events:

- `refund.created`
- `refund.succeeded`
- `refund.failed`

Webhook consumers should return `200 OK` after successfully processing an event. Verify the signature before processing the payload and make event handling idempotent because delivery can be retried.

## Rate limits

The API permits 100 requests per minute per account. Responses include:

- `X-RateLimit-Limit`
- `X-RateLimit-Remaining`
- `X-RateLimit-Reset`

When the limit is exceeded, wait until the reset timestamp and retry with exponential backoff.

## SDK examples

### Python

```python
import requests

response = requests.post(
    "https://api.example.com/v1/refunds",
    headers={"Authorization": "Bearer YOUR_API_TOKEN"},
    json={
        "payment_id": "pay_987654",
        "amount": 1500,
        "reason": "product_return",
    },
    timeout=30,
)
response.raise_for_status()
print(response.json())
```

### JavaScript

```javascript
const response = await fetch("https://api.example.com/v1/refunds", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_TOKEN",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    payment_id: "pay_987654",
    amount: 1500,
    reason: "product_return"
  })
});

if (!response.ok) throw new Error(`Request failed: ${response.status}`);
console.log(await response.json());
```

## Troubleshooting

### `401 Unauthorized`

Confirm that the token is present, has not expired, and is sent using the `Bearer` scheme.

### `refund_not_allowed`

Confirm that the payment is completed and that the requested amount does not exceed the remaining refundable amount.

### Webhook not received

Check the endpoint URL, firewall rules, signature validation, and whether the endpoint returns `200 OK` within the provider timeout.
