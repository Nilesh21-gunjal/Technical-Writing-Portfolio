# Refund API Writing Sample

> This independent portfolio sample uses fictional endpoints, data, quotas, and events. It demonstrates API-reference structure, examples, error handling, and webhook guidance. It is unrelated to the Device Operations API sample.

## Overview

The fictional Refund API enables developers to create and track refunds for completed payment transactions.

### Common use cases

- Process an e-commerce return.
- Correct a payment error.
- Handle a subscription cancellation.

## Base URL and authentication

```text
https://api.example.com/v1
```

Send a bearer token with every request:

```http
Authorization: Bearer YOUR_API_TOKEN
```

## Create a refund

`POST /refunds` creates a refund for a completed payment. The fictional request body is:

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

The fictional `201 Created` response is:

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

## Retrieve and list refunds

`GET /refunds/{refund_id}` returns a refund. `GET /refunds` lists refunds for the fictional authenticated account.

| Query parameter | Type | Description |
|---|---|---|
| `status` | string | `pending`, `succeeded`, or `failed`. |
| `from` | date-time | Return refunds created on or after this timestamp. |
| `to` | date-time | Return refunds created before this timestamp. |
| `page` | integer | Page number. Default: `1`. |
| `per_page` | integer | Results per page. Fictional maximum: `100`; default: `20`. |

## Error handling

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

## Fictional webhooks and rate limits

The standalone scenario includes the fictional events `refund.created`, `refund.succeeded`, and `refund.failed`. A webhook consumer would return `200 OK` after successful processing, verify the signature, and handle duplicate delivery safely.

For this separate writing sample only, the fictional API permits 100 requests per minute per account and returns `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Reset`. Do not apply these rules to Device Operations API documentation.

## Code examples

```python
import requests

response = requests.post(
    "https://api.example.com/v1/refunds",
    headers={"Authorization": "Bearer YOUR_API_TOKEN"},
    json={"payment_id": "pay_987654", "amount": 1500, "reason": "product_return"},
    timeout=30,
)
response.raise_for_status()
print(response.json())
```

```javascript
const response = await fetch("https://api.example.com/v1/refunds", {
  method: "POST",
  headers: { "Authorization": "Bearer YOUR_API_TOKEN", "Content-Type": "application/json" },
  body: JSON.stringify({ payment_id: "pay_987654", amount: 1500, reason: "product_return" })
});

if (!response.ok) throw new Error(`Request failed: ${response.status}`);
console.log(await response.json());
```
