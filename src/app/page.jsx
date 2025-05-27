import Link from "next/link";
import Image from "next/image";
import Btn from "../components/Btn.jsx";


export default function Home() {
  return (
    <div>
      <main>
        {/* Hero Section */}
        <div className="pro py-4 md:py-8 flex items-center">
            <div className="flex flex-col items-center md:items-center lg:items-start w-full md:w-full lg:w-[60%] px-4 md:px-20">
                <h2 className="text-white text-center md:text-center lg:text-left font-black text-4xl md:text-6xl lg:text-7xl">
                   GIANT SALE
                </h2><br/>
                <h1 className="text-primary text-4xl font-bold">70% OFF</h1>
                <Link href='/shop' className="bg-primary hover:bg-black lg:w-16 py-6 px-16 rounded-md border-fa cursor-pointer text-white text-xs md:text-base font-medium">Shop Now</Link>
              </div>
            </div>   
        
      </main>
    </div>
  );
}
