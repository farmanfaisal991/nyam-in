import { useState } from "react";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import { formatRupiah, buatLinkWhatsApp } from "../utils/whatsapp";

function Checkout({ cart, onTambah, onKurangi, onHapus, page, setPage, cartCount, onClear }) {
  const [pelanggan, setPelanggan] = useState({
    nama: "",
    telepon: "",
    alamat: "",
    catatan: "",
  });

  const total = cart.reduce((sum, item) => sum + item.harga * item.qty, 0);

  function handleChange(e) {
    setPelanggan({ ...pelanggan, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Keranjang masih kosong. Yuk pilih produk dulu!");
      return;
    }
    if (!pelanggan.nama || !pelanggan.telepon || !pelanggan.alamat) {
      alert("Lengkapi nama, nomor HP, dan alamat dulu ya.");
      return;
    }
    const link = buatLinkWhatsApp(cart, pelanggan, total);
    window.open(link, "_blank");
    onClear();
    setPage("home");
  }

  return (
    <div className="min-h-screen bg-[#fdf6ec]">
      <Navbar page={page} setPage={setPage} cartCount={cartCount} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#6b4226] mb-6">Pesan Sekarang</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Kolom kiri: keranjang + pembayaran */}
          <div className="space-y-4">
            <Cart items={cart} onTambah={onTambah} onKurangi={onKurangi} onHapus={onHapus} />

            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#6b4226] mb-3">Informasi Pembayaran</h2>
              <p className="text-sm text-[#8a6a4f] mb-3">
                Setelah memesan via WhatsApp, silakan transfer ke rekening berikut:
              </p>
              <div className="bg-[#f4e9d7] rounded-lg p-3 text-sm">
                <p className="font-semibold text-[#6b4226]">🏦 BCA — 1234567890</p>
                <p className="text-[#8a6a4f]">a.n. Nyam.in</p>
              </div>
              <p className="text-sm text-[#8a6a4f] mt-3">
                Atau scan QRIS di bawah ini:
              </p>
              <div className="mt-2 w-40 h-40 mx-auto bg-[#f0e6d6] rounded-lg flex items-center justify-center text-xs text-[#8a6a4f] text-center p-2">
                Gambar QRIS
                <br />
                (taruh file di public/qris.png)
              </div>
              <p className="text-xs text-[#8a6a4f] mt-3 text-center">
                Kirim bukti transfer ke WhatsApp kami untuk konfirmasi.
              </p>
            </div>
          </div>

          {/* Kolom kanan: form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-sm space-y-3 h-fit">
            <h2 className="text-xl font-bold text-[#6b4226] mb-2">Data Pengiriman</h2>

            <input
              name="nama"
              value={pelanggan.nama}
              onChange={handleChange}
              placeholder="Nama lengkap *"
              className="w-full border border-[#e8d9c3] rounded-lg px-3 py-2 outline-none focus:border-[#6b4226]"
            />
            <input
              name="telepon"
              value={pelanggan.telepon}
              onChange={handleChange}
              placeholder="Nomor WhatsApp *"
              className="w-full border border-[#e8d9c3] rounded-lg px-3 py-2 outline-none focus:border-[#6b4226]"
            />
            <textarea
              name="alamat"
              value={pelanggan.alamat}
              onChange={handleChange}
              placeholder="Alamat pengiriman *"
              rows="3"
              className="w-full border border-[#e8d9c3] rounded-lg px-3 py-2 outline-none focus:border-[#6b4226]"
            />
            <textarea
              name="catatan"
              value={pelanggan.catatan}
              onChange={handleChange}
              placeholder="Catatan tambahan (opsional)"
              rows="2"
              className="w-full border border-[#e8d9c3] rounded-lg px-3 py-2 outline-none focus:border-[#6b4226]"
            />

            <div className="border-t border-[#f0e6d6] pt-3 flex justify-between text-sm font-semibold text-[#6b4226]">
              <span>Total Pembayaran</span>
              <span>{formatRupiah(total)}</span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#25D366] text-white font-semibold py-3 rounded-full hover:bg-[#1ebe5a] transition"
            >
              Pesan via WhatsApp
            </button>
            <p className="text-xs text-[#8a6a4f] text-center">
              Kamu akan diarahkan ke WhatsApp toko untuk konfirmasi & pembayaran.
            </p>
          </form>
        </div>
      </div>

      <Footer text="© 2026 Nyam.in" />
    </div>
  );
}

export default Checkout;