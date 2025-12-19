const BACKEND_URL = 'https://myapp-backend.vercel.app';  // Replace with your backend URL

async function testBackend() {
  try {
    const res = await fetch(`${BACKEND_URL}/api/ping`);
    const data = await res.json();
    document.getElementById('result').textContent = data.message;
  } catch (err) {
    document.getElementById('result').textContent = 'Connection failed';
  }
}
