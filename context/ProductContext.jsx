

"use client"
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ( {children} ) =>{

      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(true);


      const getProduct = async () => {
        try {
        setLoading(true);
        const response = await fetch(
            "https://6781567385151f714b0a5a4c.mockapi.io/techdev/api/products",
        );
        const data = await response.json();
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
       <ProductContext.Provider value={{products,loading,setLoading}}>
          {children}
       </ProductContext.Provider>
    )
}

export const useProductContext = () => useContext(ProductContext)