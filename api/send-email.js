import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!req.body || !req.body.to) {
    return res.status(400).json({ error: "メールアドレスがありません" });
  }

  const resend = new Resend("re_SfZmJJcP_LkHRmo2SuS1pKZFMNZ6SNpKM");

  try {
    const result = await resend.emails.send({
      from: 'notify@qr-webpage.vercel.app',
      to: req.body.to,
      subject: req.body.subject || '通知',
      text: req.body.text || 'お知らせがあります。'
    });

    return res.status(200).json({ success: true, result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

