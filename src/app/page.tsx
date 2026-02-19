import Link from "next/link";
import Image from "next/image";
import Cad from "../components/Cad";
// import { Icon } from '@iconify-icon/react';
import { Icon } from '@iconify/react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
      <main>
        <Navbar/>
        {/* Hero Section */}
        <div className="pro py-4 md:py-8 flex items-center">
            <div className="flex flex-col items-center md:items-center lg:items-start w-full md:w-full lg:w-[60%] px-4 md:px-20">
                <h2 className="text-white text-center md:text-center lg:text-left font-black text-4xl md:text-6xl lg:text-7xl">
                   GIANT SALE
                </h2><br/>
                <h1 className="text-primary text-2xl md:text-4xl lg:text-5xl font-bold">70% OFF</h1><br/>
                <div className="flex flex-row gap-5">
                  <Link href='/shop' className="bg-primary hover:bg-black py-4 px-12 rounded-md border-fa cursor-pointer text-white text-xs md:text-base font-medium">Shop Now</Link>
                  <Link href='/contact' className="bg-transparent hover:bg-white py-4 px-12 rounded-md border-2 border-white cursor-pointer text-white hover:text-primary text-xs md:text-base font-medium">Get In Touch</Link>
                </div>
                
            </div>
        </div>  

        {/* About */}
        <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between gap-10 w-full px-4 md:px-8 lg:px-24 py-16">
          <div className="space-y-1">
            <h1 className="text-primary text-center md:text-center lg:text-justify font-black text-2xl md:text-5xl lg:text-5xl">About Ankra</h1><br/>
            <p className="text-left text-sm md:text-lg">It is an app that allows customers to find tailors in their location and book appointments with them get it delivered at their doorstep. It makes everything easy from the measurement to the delivery of the clothing.</p><br/>
            <Link href='/shop' className="bg-primary hover:bg-black py-4 px-10 rounded-md border-fa cursor-pointer text-white text-xs md:text-base font-medium">Shop Now</Link>
          </div>

          <div>
            {/* <img src="/images/about_3.png" alt="" /> */}
            <Image src="/images/about_3.png" alt="" width={1200} height={1200}/>
          </div>

        </div>

        {/* Featured Materials */}
        <div className="w-full px-4 md:px-8 lg:px-24 py-16">
          <h1 className="text-[#1e1e1e] text-center md:text-center lg:text-center font-bold text-xl md:text-3xl lg:text-4xl">Featured Materials</h1><br/>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Cad title="Owambe" price="N15,000" image="/images/owambe.png"/>
            <Cad title="Gele" price="N15,000" image="/images/gele.png"/>
            <Cad title="Ankara Suit" price="N15,000" image="/images/suit.png"/>
            <Cad title="Senator" price="N15,000" image="/images/demon.png"/>
            <Cad title="Congo" price="N15,000" image="/images/yel.png"/>
            <Cad title="Gown" price="N15,000" image="/images/simi.png"/>
          </div>
        </div>

        {/* Best Ankara */}
         <div className="w-full flex items-center px-4 md:px-8 lg:px-24 py-16">
            <div className="bg-[url('/images/frame.png')] bg-center bg-cover flex flex-col md:flex-col lg:flex-row gap-5 px-6 md:px-20 pb-0 md:pb-8 pt-16 md:pt-8 justify-between h-[450px] md:h-[400px] lg:h-[280px] rounded-2xl items-center">
              <div className="flex flex-col items-center md:items-center lg:items-start gap-5 lg:w-[80%]">
                {/* <Fade direction="left" triggerOnce="true"> */}
                  <p className="text-white text-center md:text-center lg:text-left text-3xl md:text-5xl font-extrabold">Best Ankara In the Whole of Africa</p>
                  <Link href='/shop' className="bg-primary py-4 px-12 rounded-md border-fa cursor-pointer text-white text-xs md:text-base font-medium">Shop Now</Link>
                 {/* </Fade> */}
              </div>

              {/* Image */}
              <div className="w-full md:w-full mr-0 mt-0 md:-mr-20 md:-mt-20">
                {/* <Fade direction="right" triggerOnce="true"> */}
                  {/* <img src="/images/banner.png" className=" w-full md:w-full h-full md:h-full object-cover rounded-xl mb-4" alt="smw" /> */}
                  <Image src="/images/banner.png" alt="banner" className="" width={2000} height={2000} />
                {/* </Fade> */}
              </div>
            </div>
        </div>

        {/* Best Selling */}
        <div className="w-full px-4 md:px-8 lg:px-24 py-16">
          <h1 className="text-[#1e1e1e] text-center md:text-center lg:text-center font-bold text-xl md:text-2xl lg:text-4xl">Best Selling</h1><br/>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Cad title="Owambe" price="N15,000" image="/images/eng.png"/>
            <Cad title="Gele" price="N15,000" image="/images/stud.png"/>
            <Cad title="Ankara Suit" price="N15,000" image="/images/wt.png"/>
            <Cad title="Senator" price="N15,000" image="/images/senator.png"/>
            <Cad title="Congo" price="N15,000" image="/images/mod.png"/>
            <Cad title="Edo Attire" price="N15,000" image="/images/edo.png"/>
          </div>
        </div>
        
        {/* Services */} 
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-2 md:px-8 lg:px-24 py-16">
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
        
        <Footer/>
      </main>
    </div>
  );
}
