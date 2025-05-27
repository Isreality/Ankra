// import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Ankra from "../img/Ankra.png";

export default function Footer() {
  return (
    <div>
        <div className="bg-black grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 py-16 px-4 md:px-8 lg:px-24 gap-10">
                <div className="grid justify-items-start">
                    <Image src={Ankra} alt="Ankra" width={90}/>
                    
                    <p className="text-white text-left text-sm md:text-base font-normal ">Established in 2024, our school has been a cornerstone of our community, providing generations of students with a quality education and a solid foundation for their future endeavors.</p>
                </div>

                <div className="">
                    <div className="flex flex-col gap-5">
                        <Link href='/' className="text-white text-sm md:text-base text-left md:text-left lg:text-center">Home</Link>
                        <Link href='/shop' className="text-white text-sm md:text-base text-left md:text-left lg:text-center">Shop</Link>
                        <Link href='/tailors' className="text-white text-sm md:text-base text-left md:text-left lg:text-center">Tailors</Link>
                        <Link href='/contact' className="text-white text-sm md:text-base text-left md:text-left lg:text-center">Contact</Link>
                    </div>                    
                </div>

                <div className="">
                    <p className="text-white text-left text-sm md:text-base mb-4">Privacy Policy</p>
                    <p className="text-white text-left text-sm md:text-base mb-4">Terms & Condition</p>                   
                    <p className="text-white text-left text-sm md:text-base mb-4">Support</p>
                </div>
            </div>
    </div>
  )
}
