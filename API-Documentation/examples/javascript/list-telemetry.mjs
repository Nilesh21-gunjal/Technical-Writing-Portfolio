const baseUrl = process.env.BASE_URL || "http://127.0.0.1:4010";
const token = process.env.ACCESS_TOKEN || "portfolio-demo-token";
const deviceId = process.env.DEVICE_ID || "DEV-2024-001842";
const query = new URLSearchParams({
  from: process.env.FROM_TIMESTAMP || "2026-10-01T00:00:00Z",
  to: process.env.TO_TIMESTAMP || "2026-10-02T00:00:00Z",
  metric: "temperature",
  page: "1",
  per_page: "20",
});
const response = await fetch(`${baseUrl}/devices/${deviceId}/telemetry?${query}`, {
  headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
});

if (!response.ok) throw new Error(`Request failed: ${response.status}`);
console.log(await response.json());
