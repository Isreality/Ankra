import Link from "next/link";
import Image from "next/image";
import Btn from "../components/Btn.jsx";
import Cad from "../components/Cad.jsx";
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
                <h1 className="text-primary text-2xl md:text-4xl lg:text-5xl font-bold">70% OFF</h1><br/>
                <div className="flex flex-row gap-5">
                  <Link href='/shop' className="bg-primary hover:bg-black py-4 px-12 rounded-md border-fa cursor-pointer text-white text-xs md:text-base font-medium">Shop Now</Link>
                  <Link href='/contact' className="bg-transparent hover:bg-white py-4 px-12 rounded-md border-2 border-white cursor-pointer text-white hover:text-primary text-xs md:text-base font-medium">Get In Touch</Link>
                </div>
                
            </div>
        </div>  

        {/* About */}
        <div className="grid grid-cols-2 items-center w-full px-4 md:px-8 lg:px-24 py-16">
          <div>
            <h1 className="text-primary text-center md:text-center lg:text-justify font-black text-xl md:text-2xl lg:text-4xl">About Ankra</h1><br/>
            <p className="text-left text-sm md:text-base">Established in 2024, our school has been a cornerstone of our community, providing generations of students with a quality education and a solid foundation for their future endeavors.</p><br/>
            <Link href='/shop' className="bg-primary hover:bg-black py-4 px-10 rounded-md border-fa cursor-pointer text-white text-xs md:text-base font-medium">Shop Now</Link>
          </div>

          <div>

          </div>

        </div>

        {/* Featured Materials */}
        <div className="w-full px-4 md:px-8 lg:px-24 py-16">
          <h1 className="text-[#1e1e1e] text-center md:text-center lg:text-center font-bold text-xl md:text-2xl lg:text-4xl">Featured Materials</h1><br/>

          <div className="grid grid-cols-3 gap-5">
            <Cad title="Owambe" price="N15,000" image="/images/owambe.png"/>
            <Cad title="Gele" price="N15,000" image="/images/gele.png"/>
            <Cad title="Ankara Suit" price="N15,000" image="/images/suit.png"/>
            <Cad title="Senator" price="N15,000" image="/images/demon.png"/>
            <Cad title="Congo" price="N15,000" image="/images/yel.png"/>
            <Cad title="Gown" price="N15,000" image="/images/simi.png"/>
          </div>
        </div>

        {/* Best Selling */}
        <div className="w-full px-4 md:px-8 lg:px-24 py-16">
          <h1 className="text-[#1e1e1e] text-center md:text-center lg:text-center font-bold text-xl md:text-2xl lg:text-4xl">Best Selling</h1><br/>

          <div className="grid grid-cols-3 gap-5">
            <Cad title="Owambe" price="N15,000" image="/images/eng.png"/>
            <Cad title="Gele" price="N15,000" image="/images/stud.png"/>
            <Cad title="Ankara Suit" price="N15,000" image="/images/wt.png"/>
            <Cad title="Senator" price="N15,000" image="/images/senator.png"/>
            <Cad title="Congo" price="N15,000" image="/images/mod.png"/>
            <Cad title="Edo Attire" price="N15,000" image="/images/edo.png"/>
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
