async function test() {
  const r = await fetch('http://localhost:5000/api/site-admin/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin@template-3.com', password: 'Admin@123', websiteSlug: 'template-3' })
  });
  const data = await r.json();
  console.log(data);
}
test();