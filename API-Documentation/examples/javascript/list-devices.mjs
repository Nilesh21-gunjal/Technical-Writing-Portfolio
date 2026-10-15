const baseUrl = process.env.BASE_URL || "http://127.0.0.1:4010";
const token = process.env.ACCESS_TOKEN || "portfolio-demo-token";
const query = new URLSearchParams({ page: "1", per_page: "20", status: "active", site_code: "SITE-001" });
const response = await fetch(`${baseUrl}/devices?${query}`, {
  headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
});

if (!response.ok) throw new Error(`Request failed: ${response.status}`);
console.log(await response.json());
