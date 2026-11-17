import { formatRupiah } from "../utils/whatsapp";

function ProductCard({ product, onAdd, onDetail }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f0e6d6] hover:shadow-lg transition flex flex-col">
      <img src={product.gambar} alt={product.nama} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-[#6b4226] text-lg">{product.nama}</h3>
        <p className="text-sm text-[#8a6a4f] mt-1 flex-1">{product.deskripsi}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-semibold text-[#6b4226]">{formatRupiah(product.harga)}</span>
          <div className="flex gap-1 items-center">
            <button
              onClick={() => onDetail(product)}
              className="text-xs text-[#8a6a4f] hover:underline"
            >
              Detail
            </button>
            <button
              onClick={() => onAdd(product)}
              className="bg-[#6b4226] text-white text-xs px-3 py-1.5 rounded-full hover:bg-[#553318] transition"
            >
              + Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;