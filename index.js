const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.sendNotification = functions.https.onRequest(async (req, res) => {
  const { tokens, title, body } = req.body;

  if (!tokens || tokens.length === 0) {
    res.status(400).send("FCMトークンがありません");
    return;
  }

  const message = {
    notification: { title, body },
    tokens: tokens,
  };

  try {
    const response = await admin.messaging().sendMulticast(message);
    console.log("通知送信完了:", response);
    res.status(200).send({ success: true, response });
  } catch (error) {
    console.error("通知送信失敗:", error);
    res.status(500).send({ success: false, error });
  }
});
