import { ShoppingBag } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <p className="font-extrabold text-xl sm:text-2xl md:text-3xl italic tracking-tight">
          FashionHub
        </p>

        <div className="flex items-center gap-3 sm:gap-5">
          <button 
            type="button" 
            className="bg-[#F5F1EE] p-2.5 sm:p-3 rounded-full flex items-center justify-center hover:bg-[#eae4e0] transition-colors"
            aria-label="Shopping bag"
          >
            <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-[#875541]" />
          </button>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
                alt="Scarlet Johnson avatar"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 40px, 48px"
              />
              <span className="absolute animate-pulse bg-red-600 h-2.5 w-2.5 right-1 top-2 ring-2 ring-white rounded-full" />
            </div>

            <span className="font-extrabold text-sm sm:text-base hidden sm:inline-block whitespace-nowrap">
              Scarlet Johnson
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;