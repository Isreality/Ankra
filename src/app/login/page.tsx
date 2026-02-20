'use client'

import { useState } from 'react';
import { Icon } from '@iconify/react';
import Image from "next/image";
import Link from 'next/link';


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className='flex flex-col md:flex-col lg:flex-row items-center justify-between gap-10 w-full px-2 md:pl-20 md:pr-0'>
        {/* <div className='  pl-20 pr-0 '> */}
        {/* LHS */}
          <div className='space-y-4 w-[80%] sm:m-12 lg:m-0 items-center rounded-lg'>

            <h1 className='text-primary text-left text-2xl md:text-4xl font-bold mb-0 md:mb-2 mt-6 md:mt-0'>Sign In</h1><br/>
            
            {/* LHS */}
            <form  className='grid justify-items-stretch text-left'>
              {/* Email */}
              <div className='space-y-2'>
                <label htmlFor="email" className='text-sm md:text-base text-left'>Email</label><br/>
                <input 
                  className='border p-4 w-full md:w-full text-sm md:text-base rounded-md border-fa bg-fa focus:outline-primary focus:bg-fa' 
                  type='email' 
                  id = "email" 
                  placeholder='example@gmail.com'
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  />
              </div><br/>
              
              {/* Password */}
              <div className='space-y-5' style={{ position: 'relative' }}>
                <label htmlFor="pwd" className='text-sm md:text-base text-left mb-8'>Password</label><br/>
                <input 
                  className='border p-4 w-full md:w-full text-sm md:text-base rounded-md border-fa bg-fa focus:bg-fa focus:outline-primary' 
                  // type= {showPassword ? 'text' : 'password'}
                  id = "pwd" 
                  placeholder='Enter your password'
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </div><br/>
              
              {/* <button type="submit" className=' mt-2 py-4 px-20 md:px-64 rounded-lg border-fa bg-primary hover:bg-black cursor-pointer text-white text-xl text-center font-bold'>
                Sign In
              </button> */}
              <button type="submit" className='border-fa bg-primary hover:bg-black py-3 md:py-4 rounded-lg cursor-pointer text-white text-base md:text-xl text-center font-bold'>
                Sign In
              </button>
            </form>

            <div className='text-primary text-sm md:text-base font-medium'>Forgot Password?</div>

            <p className='text-sm md:text-base text-center'>Don't have an account? <Link href="/signup" className='font-bold text-primary'>Sign Up</Link></p>
          </div>
          
          {/* Image */}
          <div className='hidden md:flex'>
            <Image src="/images/gele.png" alt="Dante" className="" width={1000} height={1000}/>
          </div>
        {/* </div> */}
      </div>
      
 
    </div>
  );
}
