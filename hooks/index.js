import { useEffect, useState } from "react";
import { getAllProducts, getProduct } from "@/utils/api";

// hook para proveer la lista de productos
export function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("[useProducts]", error));
  }, []);

  return { products };
}

// hook para obtener información del producto
export function useProduct(id) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (!id) return;

    getProduct(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error("[useProduct]", error));
  }, [id]);

  // if (!id) return { product };

  return { product };
}
