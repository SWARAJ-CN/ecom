"use client";

import { productImages } from "@/assets/assets";
import { useProductContext } from "@/context/ProductContext";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState, useMemo } from "react";

const Card = () => {
  const route = useRouter();

  const { products, loading } = useProductContext();

  const [priceSort, setPriceSort] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const uniqueTypes = useMemo(() => {
    const types = products.map((p) => p.type || p.category).filter(Boolean);
    return [...new Set(types)];
  }, [products]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    if (selectedType) {
      result = result.filter((p) => (p.type || p.category) === selectedType);
    }

    if (priceSort === "lowToHigh") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (priceSort === "highToLow") {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    }

    return result;
  }, [products, selectedType, priceSort]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const currentDisplayedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setCurrentPage(1);
  };

  const handlePriceSortChange = (e) => {
    setPriceSort(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 mt-5   pb-10">
      <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
        <select
          value={priceSort}
          onChange={handlePriceSortChange}
          className="w-full sm:w-auto rounded-full bg-[#EBEDEC] px-5 py-2.5 outline-none cursor-pointer text-sm font-medium"
        >
          <option value="">Sort by Price</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>

        <select
          value={selectedType}
          onChange={handleTypeChange}
          className="w-full sm:w-auto rounded-full bg-white px-5 py-2.5 border border-[#E0E0E0] outline-none cursor-pointer text-sm font-medium"
        >
          <option value="">All Headphone Types</option>
          {/* {uniqueTypes.map((type, index) => ( */}
            <option >  {/* key={index} value={type}*/}
              {/* {type} */}
            </option>
          {/* ))} */}
        </select>
      </div>

      {loading ? (
        <div className="w-full h-64 flex justify-center items-center">
          <p className="text-gray-500 animate-pulse">Loading products...</p>
        </div>
      ) : (
        <>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentDisplayedProducts.length > 0 ? (
              currentDisplayedProducts.map((product) => (
                <div
                  onClick={() => route.push(`/product/${product.id}`)}
                  key={product.id}
                  className="relative cursor-pointer flex flex-col border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white"
                >
                  <div className="bg-white flex items-center justify-center cursor-pointer h-10 w-10 rounded-full absolute right-3 top-3 z-10 shadow-sm hover:bg-gray-50 transition-colors">
                    <Heart className="w-5 h-5 text-gray-700" />
                  </div>

                  <div className="w-full h-48 bg-gray-100 flex justify-center items-center overflow-hidden">
                    {product.image || product.imageUrl ? (
                      <Image
                        // src={product.image || product.imageUrl} 
                        //Disabled api images because Next.js blocks external images urls.
                        src={productImages[2]}
                        alt="product-image"
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <span className="text-gray-400">No Image</span>
                    )}
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-1 gap-2">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row items-center justify-between gap-2">
                        <h3 className="font-bold text-[#667085] text-lg truncate">
                          {product.name || product.title || "Unnamed Product"}
                        </h3>
                        <p className="text-[#344054] font-semibold shrink-0">
                          ${Number(product.price).toFixed(2)}
                        </p>
                      </div>

                      <p className="truncate text-[#98A2B3] text-sm">
                        {product.description}
                      </p>

                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            size={16}
                            className={`${
                              index < Math.floor(product.rating || 0)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}

                        <span className="ml-2 text-sm text-gray-500">
                          ( ${product.rating} )
                        </span>
                      </div>
                    </div>

                    <div className="w-full flex flex-col xl:flex-row justify-between gap-2 mt-3">
                      <button className="w-full bg-[#3A4980] text-white py-2 px-3 text-sm rounded-full cursor-pointer hover:bg-[#2e3b68] transition-colors">
                        Add to Cart
                      </button>
                      <button className="w-full bg-white text-[#344054] border border-[#D0D5DD] py-2 px-3 text-sm rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
                        Add Shortlist
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-gray-500">
                No products found matching your criteria.
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="w-full flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm rounded-xl border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              >
                Previous
              </button>

              <span className="text-gray-600 text-sm font-medium">
                {currentPage} of {totalPages}
              </span>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm cursor-pointer rounded-xl border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Card;
