const baseUrl = process.env.BASE_URL || "http://127.0.0.1:4010";
const token = process.env.ACCESS_TOKEN || "portfolio-demo-token";
const deviceId = process.env.DEVICE_ID || "DEV-2024-001842";
const response = await fetch(`${baseUrl}/devices/${deviceId}`, {
  method: "PATCH",
  headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Loading dock temperature sensor", status: "maintenance" }),
});

if (!response.ok) throw new Error(`Request failed: ${response.status}`);
console.log(await response.json());
