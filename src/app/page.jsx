import Link from "next/link";
import Image from "next/image";
import Btn from "../components/Btn.jsx";
// import { Icon } from '@iconify-icon/react';
import { Icon } from '@iconify/react';



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

        {/* Services */} 
        <div className="flex flex-row justify-between items-center w-full px-4 md:px-8 lg:px-24 py-16">
          <div className="flex flex-row gap-3">
            <div>
              <Icon icon="tabler:truck-delivery" width="65" height="65" className="text-primary font-medium" />
            </div>

            <div>
              <h1 className="text-left text-base md:text-lg font-bold">Fast Delivery</h1>
              <p className="text-left text-sm md:text-base">To Your Doorstep</p>
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <div>
              <Icon icon="iconamoon:headphone-light" width="60" height="60" className="text-primary font-medium" />
            </div>
            <div>
              <h1 className="text-left text-base md:text-lg font-bold">24/7 Online Support</h1>
              <p className="text-left text-sm md:text-base">Technical Support</p>
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <div>
              <Icon icon="bx:wallet" width="60" height="60" className="text-primary font-medium" />
            </div>
            <div>
              <h1 className="text-left text-base md:text-lg font-bold">Secure Payment</h1>
              <p className="text-left text-sm md:text-base">All Cards Accepted</p>
            </div>
          </div>
        </div>
        
      </main>
    </div>
  );
}
