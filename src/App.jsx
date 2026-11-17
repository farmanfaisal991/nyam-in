import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("nyamin-cart")) || [];
    } catch {
      return [];
    }
  });

  // Setiap cart berubah → simpan ke localStorage
  useEffect(() => {
    localStorage.setItem("nyamin-cart", JSON.stringify(cart));
  }, [cart]);

  // Tambah produk baru (dari ProductCard)
  function tambahKeKeranjang(product) {
    setCart((prev) => {
      const ada = prev.find((item) => item.id === product.id);
      if (ada) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  // Tambah qty 1 (dari dalam Cart)
  function tambahQty(id) {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
    );
  }

  // Kurangi qty 1
  function kurangiQty(id) {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  }

  function hapusItem(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return page === "home" ? (
    <Home onAdd={tambahKeKeranjang} page={page} setPage={setPage} cartCount={cartCount} />
  ) : (
    <Checkout
      cart={cart}
      onTambah={tambahQty}
      onKurangi={kurangiQty}
      onHapus={hapusItem}
      page={page}
      setPage={setPage}
      cartCount={cartCount}
      onClear={clearCart}
    />
  );
}

export default App;