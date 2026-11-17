// GANTI dengan nomor WhatsApp toko kamu (format: 62xxx, tanpa + dan tanpa 0 di depan)
export const NOMOR_WA = "6281234567890";

export function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

export function buatLinkWhatsApp(pesanan, pelanggan, total) {
  let teks = "Halo Nyam.in, saya ingin memesan:\n\n";
  teks += `Nama: ${pelanggan.nama}\n`;
  teks += `Nomor HP: ${pelanggan.telepon}\n`;
  teks += `Alamat: ${pelanggan.alamat}\n`;
  if (pelanggan.catatan) teks += `Catatan: ${pelanggan.catatan}\n`;
  teks += "\nPesanan:\n";
  pesanan.forEach((item, i) => {
    teks += `${i + 1}. ${item.nama} (${item.qty} x ${formatRupiah(item.harga)})\n`;
  });
  teks += `\nTotal: ${formatRupiah(total)}\n\n`;
  teks += "Mohon konfirmasi pesanan saya. Terima kasih 🙏";
  return `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(teks)}`;
}