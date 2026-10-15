const baseUrl = process.env.BASE_URL || "http://127.0.0.1:4010";
const token = process.env.ACCESS_TOKEN || "portfolio-demo-token";
const deviceId = process.env.DEVICE_ID || "DEV-2024-001842";
const response = await fetch(`${baseUrl}/devices/${deviceId}`, {
  method: "DELETE",
  headers: { Authorization: `Bearer ${token}` },
});

if (response.status !== 204) throw new Error(`Expected 204, received ${response.status}`);
console.log(`Device deactivated: HTTP ${response.status}`);
