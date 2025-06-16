<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Menfess Curhat</title>
  <link rel="icon" type="image/png" href="https://cdn-icons-png.flaticon.com/512/10261/10261469.png" />

  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      background-color: #fffde7;
      color: #333;
    }

    header {
      background-color: #fdd835;
      padding: 20px;
      text-align: center;
    }

    header h1 {
      margin: 0;
      font-size: 2rem;
    }

    header p {
      margin-top: 8px;
    }

    .form-curhat {
      padding: 20px;
      text-align: center;
    }

    textarea {
      width: 90%;
      max-width: 600px;
      height: 120px;
      padding: 10px;
      font-size: 1rem;
      border-radius: 8px;
      border: 1px solid #ccc;
      resize: none;
    }

    button {
      margin-top: 10px;
      padding: 10px 20px;
      background-color: #fbc02d;
      color: #000;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: bold;
    }

    button:hover {
      background-color: #f9a825;
    }

    #statusMsg {
      margin-top: 10px;
      color: green;
    }

    .admin-curhat {
      padding: 20px;
      background-color: #fff9c4;
      margin: 20px auto;
      max-width: 700px;
      border-left: 5px solid #fbc02d;
      border-radius: 10px;
    }

    .admin-curhat h3 {
      text-align: center;
      margin-bottom: 10px;
      color: #f57f17;
    }

    .admin-curhat-item {
      background: #fff;
      padding: 10px;
      margin: 8px 0;
      border-radius: 5px;
      font-style: italic;
    }

    footer {
      background-color: #fff8e1;
      padding: 20px;
      text-align: center;
      border-top: 2px solid #fbc02d;
    }

    @media (max-width: 600px) {
      header h1 {
        font-size: 1.5rem;
      }

      textarea {
        height: 100px;
        font-size: 0.95rem;
      }

      button {
        width: 90%;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>💬 Menfess Curhat</h1>
    <p>Curhat bebas secara anonim. Kami mendengarkanmu ✨</p>
  </header>

  <main>
    <section class="form-curhat">
      <textarea id="curhatInput" placeholder="Tulis curhat kamu di sini..."></textarea>
      <br>
      <button onclick="kirimCurhat()">Kirim Curhat</button>
      <p id="statusMsg"></p>
    </section>

    <section class="admin-curhat">
      <h3>🛠️ Curhat Pilihan Admin</h3>
      <div class="admin-curhat-item">"Kamu tidak sendiri. Setiap orang punya cerita. Tetap semangat!" – Admin</div>
      <div class="admin-curhat-item">"Jika kamu lelah, istirahat bukan berarti menyerah. – Admin"</div>
    </section>
  </main>

  <footer>
    <h3>📍 Tentang Kami</h3>
    <p>
      Alamat Kantor Konsultasi:<br>
      Jl. Anggrek II Blok F, Kec. Manggala Raya,<br>
      Kota Tangerang – Banten
    </p>
  </footer>

  <script>
    function kirimCurhat() {
      const input = document.getElementById("curhatInput");
      const statusMsg = document.getElementById("statusMsg");
      const isi = input.value.trim();

      if (isi === "") {
        statusMsg.textContent = "❌ Curhat tidak boleh kosong!";
        return;
      }

      statusMsg.textContent = "✅ Curhat berhasil dikirim (simulasi)";
      input.value = "";
    }
  </script>
</body>
</html>
