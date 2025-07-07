// api/send-email.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { to, subject, message } = req.body;

  if (!to) {
    return res.status(400).json({ error: "送信先メールアドレスがありません。" });
  }

  try {
    const result = await resend.emails.send({
      from: "notify@qr-webpage.vercel.app",
      to,
      subject: subject || "順番通知",
      text: message || "順番が来ました。ご入店ください。"
    });

    return res.status(200).json({ success: true, result });
  } catch (err) {
    console.error("送信エラー:", err);
    return res.status(500).json({ error: err.message || "サーバーエラー" });
  }
}
