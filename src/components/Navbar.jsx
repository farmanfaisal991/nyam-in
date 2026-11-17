function Navbar({ page, setPage, cartCount }) {
  return (
    <nav className="sticky top-0 z-40 bg-[#fdf6ec]/95 backdrop-blur border-b border-[#e8d9c3]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <button onClick={() => setPage("home")} className="flex items-center gap-2">
          <span className="text-2xl">🍪</span>
          <span className="text-xl font-bold text-[#6b4226]">Nyam.in</span>
        </button>

        <div className="flex items-center gap-3 md:gap-5">
          <button
            onClick={() => setPage("home")}
            className={`text-sm font-medium ${page === "home" ? "text-[#6b4226]" : "text-[#8a6a4f]"}`}
          >
            Beranda
          </button>
          <a href="#produk" className="text-sm font-medium text-[#8a6a4f] hidden sm:block">Produk</a>
          <a href="#tentang" className="text-sm font-medium text-[#8a6a4f] hidden sm:block">Tentang</a>
          <a href="#kontak" className="text-sm font-medium text-[#8a6a4f] hidden sm:block">Kontak</a>

          <button
            onClick={() => setPage("checkout")}
            className="relative bg-[#6b4226] text-white text-sm px-4 py-2 rounded-full hover:bg-[#553318] transition"
          >
            🛒 Keranjang
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;