const baseUrl = process.env.BASE_URL || "http://127.0.0.1:4010";
const token = process.env.ACCESS_TOKEN || "portfolio-demo-token";
const response = await fetch(`${baseUrl}/devices`, {
  method: "POST",
  headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    external_id: "LD-SENSOR-042",
    name: "Loading dock sensor",
    device_type: "sensor",
    site: { site_code: "SITE-001", timezone: "UTC" },
    manufacturer: "Example Devices",
    model: "Edge-100",
    communication_protocol: "MQTT",
  }),
});

if (!response.ok) throw new Error(`Request failed: ${response.status}`);
console.log(await response.json());
