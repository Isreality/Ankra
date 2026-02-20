import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"

export default function Contact() {
  return (
    <div>
      <main>
        <Navbar/>
        {/* Hero Section */}
        <div className="bg-[url('/images/contact.png')] bg-center bg-cover object-top bg-black/50 bg-blend-overlay h-50 md:h-100 py-4 flex items-center mt-0 md:mt-0 lg:mt-0">
          <div className="flex flex-col items-center w-full md:w-full px-4 md:px-20">
              <h2 className="text-white text-center md:text-center lg:text-center font-bold text-3xl md:text-7xl lg:text-7xl">
                Contact Us
              </h2><br/>
          </div>
        </div> 

        {/* Form */}
        <div className='flex flex-col md:flex-col lg:flex-row items-center justify-between gap-10 w-full px-1 md:px-20 py-6 md:py-16'>
          {/* LHS */}
          <div className='space-y-4 w-[80%] sm:m-12 lg:m-0 items-center rounded-lg'>

            <h1 className='text-primary text-left text-2xl md:text-3xl font-bold mb-0 md:mb-2 '>Send us a message</h1><br/>
            
            {/* LHS */}
            <form  className='grid justify-items-stretch text-left'>

              {/* Name & Email */}
              <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-3'>
                {/* Name */}
                <div className=''>
                  <label htmlFor="email" className='text-sm md:text-base text-left'>Name</label><br/>
                  <input 
                    className='border p-4 w-full text-sm md:text-base rounded-md border-fa bg-fa focus:outline-primary focus:bg-fa' 
                    type='name' 
                    id = "name" 
                    placeholder='Enter your full name'
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    />
                </div>

                {/* Email */}
                <div className=''>
                  <label htmlFor="email" className='text-sm md:text-base text-left'>Email</label><br/>
                  <input 
                    className='border p-4 w-full text-sm md:text-base rounded-md border-fa bg-fa focus:outline-primary focus:bg-fa' 
                    type='email' 
                    id = "email" 
                    placeholder='example@gmail.com'
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
              </div><br/>

                {/* Name */}
                <div className=''>
                  <label htmlFor="email" className='text-sm md:text-base text-left'>Subject</label><br/>
                  <input 
                    className='border p-4 w-full text-sm md:text-base rounded-md border-fa bg-fa focus:outline-primary focus:bg-fa' 
                    type='name' 
                    id = "name" 
                    placeholder='Enter subject name'
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    />
                </div><br/>

                {/* Email */}
                <div className=''>
                  <label htmlFor="email" className='text-sm md:text-base text-left'>Message</label><br/>
                  <textarea 
                    className='border p-4 w-full text-sm md:text-base rounded-md border-fa bg-fa focus:outline-primary focus:bg-fa' 
                    id = "email" 
                    placeholder='Write a message.....'
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
              <br/>
              
              {/* <button type="submit" className=' mt-2 py-4 px-20 md:px-64 rounded-lg border-fa bg-primary hover:bg-black cursor-pointer text-white text-xl text-center font-bold'>
                Sign In
              </button> */}
              <button type="submit" className='border-fa bg-primary hover:bg-black py-4 rounded-lg cursor-pointer text-white text-base md:text-lg text-center font-bold'>
                Send
              </button>
            </form>

          </div>
          
          {/* RHS */}
          <div className=''>
            {/* <h1 className='text-primary text-left text-2xl md:text-3xl font-bold mb-0 md:mb-2 mt-6 md:mt-0'>Enquiries</h1><br/> */}
            <Image src="/images/amico.png" alt="Dante" className="mt-6 md:mt-20 mb-4" width={400} height={400}/>
          </div>
        </div>

        <Footer/>
      </main>
    </div>
    
  )
}
