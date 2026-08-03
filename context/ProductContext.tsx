"use client";

import type {
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { createContext, useContext, useEffect, useState } from "react";

export interface Product {
  id: string | number;
  name?: string;
  title?: string;
  description?: string;
  price?: string | number;
  rating?: number;
  image?: string;
  imageUrl?: string;
  type?: string;
  category?: string;
}

interface ProductContextValue {
  products: Product[];
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const ProductContext = createContext<ProductContextValue | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const getProduct = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://6781567385151f714b0a5a4c.mockapi.io/techdev/api/products",
      );
      const data = (await response.json()) as Product[];
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, setLoading }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = (): ProductContextValue => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }

  return context;
};
