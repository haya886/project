function kirimCurhat() {
  const input = document.getElementById("curhatInput");
  const statusMsg = document.getElementById("statusMsg");
  const isi = input.value.trim();

  if (isi === "") {
    statusMsg.textContent = "❌ Curhat tidak boleh kosong!";
    return;
  }

  fetch("kirim_curhat.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "isi=" + encodeURIComponent(isi)
  })
  .then(res => res.text())
  .then(res => {
    statusMsg.textContent = "✅ Curhat berhasil dikirim!";
    input.value = "";
  })
  .catch(() => {
    statusMsg.textContent = "❌ Gagal mengirim curhat.";
  });
}
