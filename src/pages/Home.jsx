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
            Cerita di Balik Nyam.in Berawal dari kecintaan sederhana terhadap
            camilan rumahan, Nyam.in hadir dengan satu tujuan: menghadirkan
            kebahagiaan kecil melalui setiap gigitan yang penuh rasa. Bagi kami,
            cookies bukan sekadar camilan untuk mengisi waktu luang. Ada
            kehangatan, kenyamanan, dan kebahagiaan sederhana yang bisa
            dirasakan dari aroma cookies yang baru keluar dari oven, teksturnya
            yang menggoda, hingga lelehan cokelat yang membuat siapa pun sulit
            menolak. Itulah alasan kami menghadirkan Nyam.in. Setiap produk
            Nyam.in dibuat dengan sepenuh hati menggunakan bahan-bahan pilihan
            dan dipersiapkan secara fresh setiap hari. Kami percaya bahwa
            kualitas rasa dimulai dari bahan yang baik, proses pembuatan yang
            penuh perhatian, dan tentunya cinta dalam setiap adonannya. Tanpa
            pengawet, tanpa rasa yang dibuat-buat, hanya kelezatan cookies yang
            ingin kami bagikan kepada setiap pelanggan. Dari dapur sederhana di
            Medan, kami terus berusaha menghadirkan berbagai pilihan cookies
            dengan karakter rasa yang istimewa. Mulai dari sensasi cokelat yang
            melimpah, tekstur lembut dan chewy, hingga perpaduan rasa manis yang
            pas di setiap gigitan. Semuanya kami ciptakan agar setiap momen
            terasa lebih spesial. Kami ingin Nyam.in menjadi bagian dari cerita
            kecil dalam keseharianmu. Menjadi teman saat menikmati secangkir
            kopi, camilan saat berkumpul bersama orang tersayang, hadiah manis
            untuk seseorang yang spesial, atau sekadar teman terbaik ketika kamu
            ingin memanjakan diri sendiri. Karena bagi kami, kebahagiaan tidak
            selalu harus datang dari sesuatu yang besar. Terkadang, kebahagiaan
            bisa sesederhana membuka kemasan cookies favorit dan menikmati satu
            gigitan yang begitu nikmat. **Nyam.in — Freshly Baked, Made with
            Love.** Satu gigitan kecil, sejuta kebahagiaan. Terima kasih telah
            menjadi bagian dari perjalanan manis kami!
          </p>
        </div>
      </section>

      <section id="kontak" className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-[#6b4226] mb-3">Kontak Kami</h2>
        <p className="text-[#8a6a4f] mb-5">Ada pertanyaan? Kami siap bantu.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://wa.me/${NOMOR_WA}`}
            className="bg-[#6b4226] text-white px-5 py-2 rounded-full hover:bg-[#553318] transition"
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
          📍 Jl. Contoh No. 123, Medan
        </p>
      </section>

      <Footer text="© 2026 Nyam.in — Dibuat dengan ❤️ di Medan" />

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
