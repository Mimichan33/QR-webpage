const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { to, subject, message } = req.body;

  // Gmailログイン情報
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "qrken0123@gmail.com", // 例: qrnotify2025@gmail.com
      pass: "aeov eotx zamz gmcd" 
    }
  });

  try {
    const info = await transporter.sendMail({
      from: '"順番待ち通知" <あなたのGmailアドレス@gmail.com>',
      to,
      subject: subject || "順番が来ました！",
      text: message || "お客様の順番になりました。店内へご案内できます。"
    });

    return res.status(200).json({ success: true, info });
  } catch (error) {
    console.error("メール送信エラー:", error);
    return res.status(500).json({ error: error.message || "サーバーエラー" });
  }
};
