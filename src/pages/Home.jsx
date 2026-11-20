import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { products } from "../data/products";
import { formatRupiah, NOMOR_WA } from "../utils/whatsapp";

function Home({ onAdd, page, setPage, cartCount }) {
  const [detail, setDetail] = useState(null);

  function scrollKeProduk() {
    document.getElementById("produk")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-[#fdf6ec]">
      <Navbar page={page} setPage={setPage} cartCount={cartCount} />
      <Hero onBelanja={scrollKeProduk} />

      <section id="produk" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#6b4226] text-center mb-2">
          Produk Kami
        </h2>
        <p className="text-center text-[#8a6a4f] mb-8">
          Pilih favoritmu, kami panggang setelah kamu pesan.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 zoom-110">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAdd={onAdd}
              onDetail={setDetail}
            />
          ))}
        </div>
      </section>

      <section id="tentang" className="bg-[#f4e9d7] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#6b4226] mb-3">
            Tentang Nyam.in
          </h2>
          <p className="text-[#8a6a4f] leading-relaxed">
            Berawal dari suka ngemil, Nyam.in hadir buat jadi mood booster di
            setiap harimu! Berawal dari dapur sederhana di Medan, kami
            menghadirkan camilan fresh dengan bahan pilihan dan dibuat sepenuh
            hati. Buat kami, cookies bukan cuma sekadar camilan, tapi juga
            little happiness yang bisa bikin harimu lebih sweet. Dengan rasa
            yang bikin nagih dan kualitas terbaik, Nyam.in siap nemenin setiap
            mood dan momen spesialmu. Karena good days deserve good cookies! 💗
            Nyam.in — Freshly Baked, Made with Love.
          </p>
        </div>
      </section>

      <section id="kontak" className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-[#6b4226] mb-3">Kontak Kami</h2>
        <p className="text-[#8a6a4f] mb-5">Ada pertanyaan? Kami siap bantu.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://wa.me/${NOMOR_WA}`}
            className="border border-[#6b4226] text-[#6b4226] px-5 py-2 rounded-full hover:bg-[#553318] transition"
          >
            💬 WhatsApp
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="border border-[#6b4226] text-[#6b4226] px-5 py-2 rounded-full hover:bg-[#6b4226] hover:text-white transition"
          >
            📷 Instagram
          </a>
        </div>
        <p className="text-sm text-[#8a6a4f] mt-4">
          Jl. Mongonsidi Baru 11, Anggrung, Kec. Medan Polonia, Kota Medan,
          Sumatera Utara 20222
        </p>
      </section>

      <Footer text="© 2026 Nyam.in — Berdiri sejak aku bertemu dia" />

      {/* Modal Detail Produk */}
      {detail && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={() => setDetail(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={detail.gambar}
              alt={detail.nama}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-[#6b4226]">
                {detail.nama}
              </h3>
              <p className="text-[#8a6a4f] mt-2">{detail.deskripsi}</p>
              <p className="font-semibold text-[#6b4226] mt-3 text-lg">
                {formatRupiah(detail.harga)}
              </p>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => {
                    onAdd(detail);
                    setDetail(null);
                  }}
                  className="flex-1 bg-[#6b4226] text-white py-2 rounded-full hover:bg-[#553318]"
                >
                  + Keranjang
                </button>
                <button
                  onClick={() => setDetail(null)}
                  className="flex-1 border border-[#6b4226] text-[#6b4226] py-2 rounded-full"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
