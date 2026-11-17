import { formatRupiah } from "../utils/whatsapp";

function Cart({ items, onTambah, onKurangi, onHapus }) {
  const total = items.reduce((sum, item) => sum + item.harga * item.qty, 0);

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center text-[#8a6a4f] shadow-sm">
        <p className="text-3xl mb-2">🛒</p>
        <p>Keranjang masih kosong. Yuk pilih produk dulu!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
      <h2 className="text-xl font-bold text-[#6b4226] mb-4">Keranjang Belanja</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-3 border-b border-[#f0e6d6] pb-3">
            <img src={item.gambar} alt={item.nama} className="w-16 h-16 rounded-lg object-cover" />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[#6b4226] text-sm truncate">{item.nama}</p>
              <p className="text-xs text-[#8a6a4f]">{formatRupiah(item.harga)}</p>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => onKurangi(item.id)}
                className="w-7 h-7 rounded-full bg-[#f0e6d6] text-[#6b4226] font-bold leading-none"
              >
                −
              </button>
              <span className="w-6 text-center text-sm font-semibold">{item.qty}</span>
              <button
                onClick={() => onTambah(item.id)}
                className="w-7 h-7 rounded-full bg-[#f0e6d6] text-[#6b4226] font-bold leading-none"
              >
                +
              </button>
            </div>
            <button
              onClick={() => onHapus(item.id)}
              className="text-red-500 text-xs ml-1 hover:underline"
            >
              Hapus
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4 font-bold text-[#6b4226] text-lg">
        <span>Total</span>
        <span>{formatRupiah(total)}</span>
      </div>
    </div>
  );
}

export default Cart;