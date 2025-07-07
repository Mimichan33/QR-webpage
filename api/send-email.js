import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { to, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "qrken0123@gmail.com",
      pass: "aeov eotx zamz gmcd"
    }
  });

  try {
    const info = await transporter.sendMail({
      from: `"順番待ち通知" <あなたのGmail@gmail.com>`,
      to,
      subject: subject || "順番が来ました！",
      text: message || "お客様の順番になりました。店内へご案内できます。"
    });

    return res.status(200).json({ success: true, info });
  } catch (error) {
    console.error("送信エラー:", error);
    return res.status(500).json({ error: error.message || "サーバーエラー" });
  }
}
