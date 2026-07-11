export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, name } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const timestamp = new Date().toISOString();
  const entry = { timestamp, email, name: name || '', source: 'leadreel-landing' };

  // Log to Vercel logs for now
  console.log('LEADREEL SIGNUP:', JSON.stringify(entry));

  // Return success
  res.status(200).json({ ok: true });
}
