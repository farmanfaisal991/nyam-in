function Hero({ onBelanja }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-[#b8865b] font-semibold mb-2">Yang buat pacal aku 🍪</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#6b4226] leading-tight mb-4">
          Nikmati Soft Cookies & Brownies Favoritmu
        </h1>
        <p className="text-[#8a6a4f] mb-6">
          Dibuat dengan bahan pilihan, dipanggang fresh, dikirim langsung ke rumahmu.
        </p>
        <button
          onClick={onBelanja}
          className="bg-[#6b4226] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#553318] transition"
        >
          Belanja Sekarang
        </button>
      </div>
      <div className="rounded-3xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800"
          alt="Cookies"
          className="w-full h-72 md:h-96 object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;