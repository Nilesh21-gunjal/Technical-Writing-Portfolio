const baseUrl = process.env.BASE_URL || "http://127.0.0.1:4010";
const token = process.env.ACCESS_TOKEN || "portfolio-demo-token";
const deviceId = process.env.DEVICE_ID || "DEV-2024-001842";
const alertId = process.env.ALERT_ID || "ALT-2026-000041";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function request(path, options = {}, expectedStatus) {
  const response = await fetch(`${baseUrl}${path}`, options);
  assert(response.status === expectedStatus, `${options.method || "GET"} ${path}: expected ${expectedStatus}, received ${response.status}`);
  return response;
}

function authHeaders() {
  return { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
}

const tokenResponse = await request("/auth/token", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ client_id: "demo-client", client_secret: "demo-secret" }),
}, 200);
const tokenBody = await tokenResponse.json();
assert(tokenBody.access_token && tokenBody.token_type === "Bearer" && Number.isInteger(tokenBody.expires_in), "Token response does not match the documented shape.");

const deviceList = await request("/devices?page=1&per_page=20&status=active&site_code=SITE-001", { headers: authHeaders() }, 200);
const deviceListBody = await deviceList.json();
assert(Array.isArray(deviceListBody.data) && deviceListBody.pagination, "Device list does not match the documented page shape.");

const registeredDevice = await request("/devices", {
  method: "POST",
  headers: authHeaders(),
  body: JSON.stringify({
    external_id: "LD-SENSOR-042",
    name: "Loading dock sensor",
    device_type: "sensor",
    site: { site_code: "SITE-001", timezone: "UTC" },
    manufacturer: "Example Devices",
    model: "Edge-100",
    communication_protocol: "MQTT",
  }),
}, 201);
const registeredDeviceBody = await registeredDevice.json();
assert(registeredDeviceBody.id && registeredDeviceBody.external_id && registeredDeviceBody.status, "Register-device response does not match the documented shape.");

const device = await request(`/devices/${deviceId}`, { headers: authHeaders() }, 200);
const deviceBody = await device.json();
assert(deviceBody.id && deviceBody.external_id && deviceBody.site, "Get-device response does not match the documented shape.");

const updatedDevice = await request(`/devices/${deviceId}`, {
  method: "PATCH",
  headers: authHeaders(),
  body: JSON.stringify({ name: "Loading dock temperature sensor", status: "maintenance" }),
}, 200);
const updatedDeviceBody = await updatedDevice.json();
assert(updatedDeviceBody.id && updatedDeviceBody.status, "Update-device response does not match the documented shape.");

const deactivatedDevice = await request(`/devices/${deviceId}`, { method: "DELETE", headers: authHeaders() }, 204);
assert((await deactivatedDevice.text()) === "", "Deactivate-device response must not contain a response body.");

const telemetry = await request(`/devices/${deviceId}/telemetry?from=2026-10-01T00%3A00%3A00Z&to=2026-10-02T00%3A00%3A00Z&metric=temperature&page=1&per_page=20`, { headers: authHeaders() }, 200);
const telemetryBody = await telemetry.json();
assert(Array.isArray(telemetryBody.data) && telemetryBody.pagination, "Telemetry response does not match the documented page shape.");

const alerts = await request(`/devices/${deviceId}/alerts?status=open&page=1&per_page=20`, { headers: authHeaders() }, 200);
const alertsBody = await alerts.json();
assert(Array.isArray(alertsBody.data) && alertsBody.pagination, "Alert-list response does not match the documented page shape.");

const resolvedAlert = await request(`/devices/${deviceId}/alerts/${alertId}/resolve`, {
  method: "POST",
  headers: authHeaders(),
  body: JSON.stringify({ resolution_note: "Reviewed by the operations team." }),
}, 200);
const resolvedAlertBody = await resolvedAlert.json();
assert(resolvedAlertBody.id && resolvedAlertBody.status === "resolved", "Resolve-alert response does not match the documented shape.");

const usage = await request(`/devices/${deviceId}/usage-summary?metric=energy&from=2026-10-01T00%3A00%3A00Z&to=2026-10-08T00%3A00%3A00Z`, { headers: authHeaders() }, 200);
const usageBody = await usage.json();
assert(usageBody.device_id && typeof usageBody.total === "number" && usageBody.unit, "Usage-summary response does not match the documented shape.");

console.log("Verified documented contract responses for all 10 operations.");
