export const config = { runtime: 'edge' }; 

export default async function handler(req) {
  const { email, name } = await req.json();

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "onboarding@resend.dev", // 独自ドメイン使用時はここ変更
      to: email,
      subject: `${name}さん、順番が来ました！`,
      html: `<p>${name}さん、順番が来ました！5分以内にお越しください。</p>`,
    }),
  });

  return new Response(await response.text(), {
    status: response.status,
  });
}
