import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";

import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="m-4 border-4 border-[#ADD8E6] p-1 border-l-[6px] border-[#001f3f]">
      <Image src="/bannner.png" alt="banner" width={2000} height={1000} className="w-screen" />

      <div className="relative my-16 flex items-center">
        {/* Left Decorative Bar */}
        <div className="hidden sm:block w-4 h-32 bg-[#001f3f] rounded-l-lg mr-4"></div>

        {/* Collections Component */}
        <div className="flex-1">
          <Collections />
        </div>

        {/* Right Decorative Bar */}
        <div className="hidden sm:block w-4 h-32 bg-[#001f3f] rounded-r-lg ml-4"></div>
      </div>
      <ProductList />
    </div>
    </>
  );
}

export const dynamic = "force-dynamic";