import { assets } from "@/assets/assets";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full  px-4 sm:px-6  lg:px-8  py-5 overflow-x-clip md:overflow-visible">
      <div className="mt-10 md:mt-12 max-w-7xl mx-auto rounded-2xl bg-linear-to-r from-[#F4E8F3] via-[#F3EFF6] to-[#EEE0F9] grid grid-cols-1 md:grid-cols-[4fr_2fr] min-h-80 md:h-72">
        <div className="w-full flex flex-col gap-11 px-6 sm:px-10 md:px-12 lg:px-15 py-8 md:py-0 justify-center items-start">
          <p className="font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-[#3A4980] leading-tight w-full md:w-[95%] lg:w-3/5">
            Grab Upto 50% Off On Selected Headphone
          </p>
          <button className="bg-[#3A4980] rounded-full w-34 h-12.25 cursor-pointer text-white font-semibold hover:bg-[#2e3a67] transition-colors">
            Buy Now
          </button>
        </div>

        <div className="relative w-full h-64 sm:h-72 md:h-full">
          <Image
            src={assets.hero}
            alt="hero-image"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover h-full md:h-110 w-full absolute md:-top-30 md:right-30"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;