"use client";
import { useProductContext } from "@/context/ProductContext";
import React, { useEffect, useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Heart,
  Bookmark,
  Share2,
  Star,
  MessageSquare,
  Check,
  Minus,
  Plus,
  ShoppingBag,
  Truck,
} from "lucide-react";
import Image from "next/image";
import { productImages } from "@/assets/assets";
import { useRouter } from "next/navigation";

const ProductDetails = ({ id }) => {
  const route = useRouter();
  const { products, loading } = useProductContext();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(5);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("Small");
  const [mainImageIndex, setMainImageIndex] = useState(0);

  useEffect(() => {
    if (products && products.length > 0) {
      const individualProduct = products.find((item) => item.id == id);
      setProduct(individualProduct);
    }
  }, [products, id]);

  const colors = ["#E3D7C5", "#A8C779", "#A6A6F3", "#F8C1F8", "#D9A098"];
  const sizes = ["Small", "Medium", "Large", "Extra Large", "XXL"];

  const images = productImages;

  const similarItems = Array(6).fill({
    name: "TDX Sinkers",
    price: "₹ 675.00",
    types: "5 types of shoes available",
    rating: 121,
  });

  return (
    <>
      {loading && (
        <div className="h-screen w-full flex items-center justify-center text-gray-500 animate-pulse">
          Loading...
        </div>
      )}

      {!loading && (
        <div className="">
          <div className="max-w-7xl mx-auto md:px-4 sm:px-6 lg:px-8 py-4 sm:py-8 font-sans">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <div className="w-full aspect-4/5 bg-gray-100 rounded-2xl overflow-hidden relative">
                  <Image
                    src={images[mainImageIndex]}
                    alt={product?.title || "Embrace Sideboard"}
                    className="w-full h-full object-cover"
                  />
                </div>
  
                <div className="flex items-center justify-between gap-2 sm:gap-4 mt-2">
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors shrink-0">
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <div className="flex gap-2 sm:gap-4 flex-1 justify-start sm:justify-center overflow-x-auto py-1">
                    {productImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setMainImageIndex(idx)}
                        className={`w-16 cursor-pointer h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                          mainImageIndex === idx
                            ? "border-blue-500 p-0.5"
                            : "border-transparent"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`Thumbnail ${idx}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </button>
                    ))}
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors shrink-0">
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col pt-2 ">
                <nav className="flex flex-wrap items-center gap-2 bg-[#EDF0F8] w-fit rounded text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8">
                  <span
                    onClick={() => route.push("/")}
                    className="hover:text-[#3A4980] cursor-pointer bg-gray-100 px-3 py-1 rounded-md"
                  >
                    Home
                  </span>
                  <ChevronRight className="w-4 h-4 shrink-0" />
                  <span className="hover:text-[#3A4980] cursor-pointer text-gray-400">
                    Decoration
                  </span>
                  <ChevronRight className="w-4 h-4 shrink-0" />
                  <span className="hover:text-[#3A4980] cursor-pointer text-gray-400">
                    Furniture
                  </span>
                  <ChevronRight className="w-4 h-4 shrink-0" />
                  <span className="hover:text-[#3A4980] cursor-pointer text-gray-400">
                    Storage
                  </span>
                  <ChevronRight className="w-4 h-4 shrink-0" />
                  <span className="font-semibold bg-blue-50 px-3 py-1 rounded-md text-blue-900">
                    Sideboard
                  </span>
                </nav>
  
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 w-full">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {product?.title || "Embrace Sideboard"}
                    </h1>
                    <p className="text-gray-400 text-sm mt-1">
                      Teixeira Design Studio
                    </p>
                  </div>
  
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 cursor-pointer bg-[#FFF0F0] text-[#D46F77] px-3 py-1.5 rounded-xl hover:bg-pink-100 transition-colors">
                      <Heart className="w-4 h-4 " />
                      <span className="text-sm font-medium">109</span>
                    </button>
                    <button className="p-2 group bg-[#EDF0F8] text-gray-500 cursor-pointer rounded-full hover:bg-gray-100 transition-colors">
                      <Bookmark className="w-4 h-4 group-hover:fill-[#D46F77] group-hover:stroke-[#D46F77]" />
                    </button>
                    <button className="p-2 bg-[#EDF0F8] text-gray-500 rounded-full hover:bg-gray-100 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
  
                <div className="mt-4 sm:mt-6 flex flex-wrap items-end gap-3">
                  <div className="flex flex-row items-center gap-15">
                    <span className="text-2xl sm:text-3xl font-bold text-blue-900">
                      ${product?.price}
                    </span>
                    <div className="flex flex-col gap-1 mb-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="flex items-center gap-1 bg-orange-50 text-orange-600 px-2 py-0.5 rounded-md text-xs font-semibold">
                          <Star className="w-3 h-3 fill-current" /> 4.8
                        </span>
                        <span className="flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md text-xs font-medium">
                          <MessageSquare className="w-3 h-3" /> 67 Reviews
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-15 mt-5">
                   <span className="text-gray-400 text-sm line-through">
                      ${product?.price}
                    </span>
                    <p className="text-green-600 text-sm font-medium md:ms-8">
                      93%{" "}
                      <span className="text-gray-400 font-normal">
                        of buyers have recommended this.
                      </span>
                    </p>
                </div>
  
                <hr className="my-6 border-gray-100" />
  
                <div className="flex flex-col gap-3">
                  <span className="text-gray-400 text-sm">Choose a Color</span>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    {colors.map((color, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(idx)}
                        className={`w-9 h-9 sm:w-10 cursor-pointer sm:h-10 rounded-full flex items-center justify-center transition-all ${
                          selectedColor === idx
                            ? "ring-2 ring-offset-2 ring-gray-300"
                            : ""
                        }`}
                        style={{ backgroundColor: color }}
                      >
                        {selectedColor === idx && (
                          <Check className="w-5 h-5 text-white opacity-80" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
  
                <hr className="my-6 border-gray-100" />
  
                <div className="flex flex-col gap-3">
                  <span className="text-gray-400 text-sm">Choose a Size</span>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className="flex cursor-pointer items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-50 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            selectedSize === size
                              ? "border-blue-600"
                              : "border-gray-300"
                          }`}
                        >
                          {selectedSize === size && (
                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                          )}
                        </div>
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
  
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <div className="flex items-center justify-between bg-gray-100 rounded-full px-4 py-3 w-full sm:w-32">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-gray-500 hover:text-[#3A4980] cursor-pointer"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-[#3A4980] font-extrabold">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-gray-500 hover:text-[#3A4980] cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
  
                  <button className="flex-1 bg-[#363B5D] cursor-pointer hover:bg-[#2A2E4B] text-white rounded-full py-3 px-6 flex items-center justify-center gap-2 font-medium transition-colors">
                    <ShoppingBag className="w-5 h-5" />
                    Add To Cart
                  </button>
                </div>
  
                <div className="mt-6 sm:mt-8 border border-gray-200 rounded-xl flex flex-col overflow-hidden">
                  <div className="flex items-start gap-4 p-4 border-b border-gray-200">
                    <Truck className="w-6 h-6 text-orange-500 mt-1 shrink-0" />
                    <div className="flex flex-col">
                      <span className=" text-[#1D364D] font-extrabold">
                        Free Delivery
                      </span>
                      <a
                        href="#"
                        className="text-sm text-gray-500 underline mt-1"
                      >
                        Enter your Postal code for Delivery Availability
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4">
                    <ShoppingBag className="w-6 h-6 text-orange-500 mt-1 shrink-0" />
                    <div className="flex flex-col">
                      <span className="font-extrabold text-[#1D364D]">
                        Return Delivery
                      </span>
                      <p className="text-sm text-gray-500 mt-1">
                        Free 30 days Delivery Return.{" "}
                        <a href="#" className="underline">
                          Details
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="mt-12 sm:mt-20 mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Similar Items You Might Also Like
              </h2>
  
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {similarItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col bg-white border border-gray-100 rounded-xl p-3 hover:shadow-md transition-shadow group relative"
                  >
                    <button className="absolute cursor-pointer top-4 right-4 z-10 bg-white p-1.5 rounded-full shadow-sm text-gray-400 hover:text-pink-500 transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
  
                    <div className="w-full aspect-square bg-gray-50 rounded-lg flex items-center justify-center mb-3 overflow-hidden">
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300 text-xs">
                        <Image src={productImages[0]} alt="productimage" />
                      </div>
                    </div>
  
                    <span className="text-xs text-gray-500 font-medium mb-1 truncate">
                      {item.name}
                    </span>
                    <span className="text-sm font-bold text-gray-900 mb-1">
                      {item.price}
                    </span>
                    <span className="text-[10px] text-gray-400 mb-2 line-clamp-1">
                      {item.types}
                    </span>
  
                    <div className="flex items-center gap-1">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] text-gray-400 ml-1">
                        ({item.rating})
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
