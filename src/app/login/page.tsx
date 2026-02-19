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
      <div className='flex flex-col md:flex-col lg:flex-row items-center justify-between gap-10 w-full pl-20 pr-0'>
        {/* <div className='  pl-20 pr-0 '> */}
        {/* LHS */}
          <div className='space-y-4 w-[80%] sm:m-12 lg:m-0 items-center rounded-lg'>

            <h1 className='text-primary text-left text-4xl md:text-5xl font-black mb-0 md:mb-2'>Sign In</h1><br/>
            
            {/* LHS */}
            <form  className='grid justify-items-stretch text-left'>
              {/* Email */}
              <div className='items-start'>
                <label htmlFor="email" className='text-md md:text-lg text-left'>Email</label><br/>
                <input 
                  className='border p-4 w-80 md:w-full rounded-md border-fa bg-fa focus:outline-primary focus:bg-fa' 
                  type='email' 
                  id = "email" 
                  placeholder='example@gmail.com'
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  />
              </div><br/>
              
              {/* Password */}
              <div className='space-y-5' style={{ position: 'relative' }}>
                <label htmlFor="pwd" className='text-md md:text-lg text-left mb-8'>Password</label><br/>
                <input 
                  className='border p-4 w-80 md:w-full rounded-md border-fa bg-fa focus:bg-fa focus:outline-primary' 
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
              <button type="submit" className='border-fa bg-primary hover:bg- py-4 rounded-lg cursor-pointer text-white text-xl text-center font-bold'>
                Sign In
              </button>
            </form>

            <div className='text-primary font-medium'>Forgot Password?</div>

            <p className='text-lg text-center'>Don't have an account? <Link href="/signup" className='font-bold text-primary'>Sign Up</Link></p>
          </div>
          
          {/* Image */}
          <div>
            <Image src="/images/gele.png" alt="Dante" className="" width={1000} height={1000}/>
          </div>
        {/* </div> */}
      </div>
      
 
    </div>
  );
}
