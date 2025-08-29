'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import Ankra from "../img/Ankra.png";
import Btn from "../components/Btn.jsx";
import { Icon } from '@iconify/react';

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div>
      {/* Mobile */}
      <div className="lg:hidden flex flex-row justify-between bg-white border-b-primary border-1 items-center px-4 py-4 md:px-4 md:py-6 left-0 w-full">
        <div className="lg:hidden items-center">
          <Image src={Ankra} alt="Ankra" width={90}/>
        </div>

        <div className="lg:hidden z-50">    
            <button onClick={()=>toggleNavbar(true)} className="text-white">{isOpen ? <Icon icon="material-symbols:close" className="fixed text-black font-bold size-5 top-5 z-50 mr-4 right-4" width="30" height="30" /> : <Icon icon="ci:hamburger-md" className="text-primary font-bold" width="30" height="30" />}</button>
              {isOpen &&(
                <div>
                  <div className="fixed h-full w-screen right-0 -translate-y-0 transition-all top-0 py-4">
                    <div className="flex bg-white flex-col absolute inset-x-0 top-0 h-80 p-8 gap-5 z-[100] w-full">
                      <nav className="flex flex-col gap-5 font-medium">
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

                      <Btn name="Create account" className=""/>

                    </div> 
                  </div>
                </div>
              )}      
          </div>
      </div>


      {/* Tab & desktop */}
      <div className="hidden md:hidden lg:flex lg:flex-wrap top-2 left-4 md:left-60 bg-none md:bg-white justify-between border-b-primary border-1 lg:px-24 md:px-8 py-6 m-0 z-50 items-center">
        <div className="hidden md:hidden lg:flex">
          <Image src={Ankra} alt="Ankra" width={90}/>
        </div>

        <div className="hidden md:hidden lg:flex flex-row gap-80 items-center">
          <nav className="flex flex-row gap-10 font-medium">

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

          <Btn name="Create account" className="hidden md:flex lg:flex"/>
        </div>

      </div>
      
    </div>
  )
}
