'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import Ankra from "../img/Ankra.png";
import Btn from "../components/Btn.jsx";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div>
      <div className="top-2 left-4 md:left-60 bg-none md:bg-white flex flex-wrap justify-between border-b-primary border-1 px-4 md:px-16 py-6 m-0 z-50 items-center">
        <Image src={Ankra} alt="Ankra" width={90}/>
        <nav className="hidden justify-items-start gap-10 md:flex lg:flex font-medium">

          <Link
            href="/"
            className={`${
              pathname === '/' ? 'text-primary font-semibold' : 'text-black hover:text-primary'
            }`}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className={`${
              pathname === '/shop' ? 'text-primary font-semibold' : 'text-black hover:text-primary'
            }`}
          >
            Shop
          </Link>
          <Link
            href="/tailors"
            className={`${
              pathname === '/tailors' ? 'text-primary font-semibold' : 'text-black hover:text-primary'
            }`}
          >
            Tailors
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === '/contact' ? 'text-primary font-semibold' : 'text-black hover:text-primary'
            }`}
          >
            Contact
          </Link>
        </nav>

        <Btn name="Create account"/>

      </div>
      
    </div>
  )
}
