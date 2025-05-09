<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>混雑可視化システム スタートページ</title>
  <style>
    body {
      font-family: sans-serif;
      margin: 0;
      padding: 0;
      text-align: center;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 32px;
    }

    header .logo {
      font-weight: bold;
      font-size: 1.2rem;
    }

    header a {
      text-decoration: none;
      color: black;
      font-weight: bold;
    }

    .hero {
      margin: 40px auto;
      max-width: 600px;
    }

    .hero img {
      width: 100%;
      max-width: 500px;
      margin-bottom: 24px;
    }

    .description {
      font-size: 1.1rem;
      margin-bottom: 32px;
    }

    .button {
      display: inline-block;
      padding: 12px 24px;
      font-size: 1rem;
      background-color: black;
      color: white;
      border: none;
      border-radius: 4px;
      text-decoration: none;
      margin-bottom: 60px;
    }

    footer {
      border-top: 1px solid #ccc;
      padding: 20px;
      font-size: 0.9rem;
      color: #555;
    }

    .footer-links {
      margin-top: 10px;
    }

    .footer-links a {
      margin: 0 10px;
      color: #333;
      text-decoration: none;
    }

    .footer-links a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <header>
    <div class="logo">混雑可視化システム</div>
    <a href="#">ReadMe →</a>
  </header>

  <main class="hero">
    <!-- ※画像は `index-preview.png` などに差し替えてください -->
    <img src="index-preview.png" alt="システム画面のプレビュー画像" />

    <div class="description">
      このプロジェクトは、QRコードを用いて入退店を記録し、<br />
      店舗の混雑状況をリアルタイムに可視化するWebアプリケーションです。<br />
      各テーブルにQRコードを設置し、入店・退店時にスマホで読み取ることで、<br />
      管理者は現在の混雑状況を一覧で把握できます。
    </div>

    <a class="button" href="index.html">使ってみる</a>
  </main>

  <footer>
    <div>©2024 東京市立大学 メディア情報学部 情報システム学科 Daiki Komuro</div>
    <div class="footer-links">
      <a href="#">先行研究</a>
      <a href="https://github.com/Mimichan33/QR-webpage/tree/main" target="_blank">GitHub</a>
      <a href="#">Docs</a>
    </div>
  </footer>
</body>
</html>
