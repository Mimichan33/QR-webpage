// /app/api/send-email.js

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { to, subject, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // ← 必ずこれを使う
      to,
      subject,
      text: message,
    });

    return res.status(200).json({ success: true, id: data.id });
  } catch (error) {
    console.error('送信エラー:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
