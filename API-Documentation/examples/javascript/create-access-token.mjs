const baseUrl = process.env.BASE_URL || "http://127.0.0.1:4010";
const response = await fetch(`${baseUrl}/auth/token`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    client_id: process.env.CLIENT_ID || "demo-client",
    client_secret: process.env.CLIENT_SECRET || "demo-secret",
  }),
});

if (!response.ok) throw new Error(`Request failed: ${response.status}`);
console.log(await response.json());
