import Grid from '@/Components/Grid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'

const page = () => {
  return (
    <div className='w-full  h-full'>
      <div className='w-[95%] border-0.5 border-gray-600 relative h-full mt-32 m-auto '>
          <div className='h-[90vh] border-b w-full relative'>
              <Grid/>
              <Image className='w-full h-full object-cover' width={10000 } height={10000} src={'/geng.jpg'}/>
          </div>


          <div className=' py-10 w-full   flex items-center justify-between text-5xl font-light pl-5 text-gray-300'>
            <p>Featured Products</p>
          </div>

          <div className=' flex  justify-between h-[50vh] relative z-10 border-b-0.5 border-gray-600  py-5 px-5'>
              <div className=' group cursor-pointer overflow-hidden h-full relative  aspect-square '>
                  <div className='absolute z-10 inset-0 bg-black opacity-55'></div>
                  <div className='absolute z-10 h-[20%] bottom-0 flex flex-col  px-2 w-full text-white '>2024 GGM1 PUMA OFFICIAL JERSEY 
                    <Link className='uppercase text-[#aa8b00] hover:underline transition-all duration-300' href={'/'}> <p> shop now -{'>'}</p> </Link>
                  </div>
                <Image className='w-full group-hover:scale-110 z-0 transition-all duration-700 h-full object-cover' width={10000 } height={100} src={'/jersey.webp'}/>
              </div>
              <div className=' group cursor-pointer overflow-hidden h-full relative  aspect-square '>
                  <div className='absolute z-10 inset-0 bg-black opacity-55'></div>
                  <div className='absolute z-10 h-[20%] bottom-0 flex flex-col  px-2 w-full text-white '>2024 GGM1 PUMA OFFICIAL JERSEY 
                    <Link className='uppercase text-[#aa8b00] hover:underline transition-all duration-300' href={'/'}> <p> shop now -{'>'}</p> </Link>
                  </div>
                <Image className='w-full group-hover:scale-110 z-0 transition-all duration-700 h-full object-cover' width={10000 } height={100} src={'/jersey.webp'}/>
              </div>
              <div className=' group cursor-pointer overflow-hidden h-full relative  aspect-square '>
                  <div className='absolute z-10 inset-0 bg-black opacity-55'></div>
                  <div className='absolute z-10 h-[20%] bottom-0 flex flex-col  px-2 w-full text-white '>2024 GGM1 PUMA OFFICIAL JERSEY 
                    <Link className='uppercase text-[#aa8b00] hover:underline transition-all duration-300' href={'/'}> <p> shop now -{'>'}</p> </Link>
                  </div>
                <Image className='w-full group-hover:scale-110 z-0 transition-all duration-700 h-full object-cover' width={10000 } height={100} src={'/jersey.webp'}/>
              </div>
              <div className=' group cursor-pointer overflow-hidden h-full relative  aspect-square '>
                  <div className='absolute z-10 inset-0 bg-black opacity-55'></div>
                  <div className='absolute z-10 h-[20%] bottom-0 flex flex-col  px-2 w-full text-white '>2024 GGM1 PUMA OFFICIAL JERSEY 
                    <Link className='uppercase text-[#aa8b00] hover:underline transition-all duration-300' href={'/'}> <p> shop now -{'>'}</p> </Link>
                  </div>
                <Image className='w-full group-hover:scale-110 z-0 transition-all duration-700 h-full object-cover' width={10000 } height={100} src={'/jersey.webp'}/>
              </div>
              
          </div>


          <div className='h-[25vh] w-full mt-10 overflow-hidden border-b-0.5 border-gray-600'>
            <Marquee className='w-full h-[25vh] '>
              <div className='flex w-full h-[25vh]'>
              <Image className='w-full h-[20vh] object-contain  ' width={100} height={100} src={'/hyundai-motor-company-3.svg'}/>&nbsp;&nbsp;&nbsp;&nbsp;
              <Image className='w-full h-[25vh]   object-cover ' width={100} height={100} src={'/puma-2 (1).svg'}/>&nbsp;&nbsp;&nbsp;&nbsp;
              <Image className='w-full h-[20vh] object-contain   ' width={100} height={100} src={'/hyundai-motor-company-3.svg'}/>&nbsp;&nbsp;&nbsp;&nbsp;
              <Image className='w-full h-[25vh]   object-cover ' width={100} height={100} src={'/puma-2 (1).svg'}/>&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              <div className='flex w-full h-[25vh]'>
              <Image className='w-full h-[20vh] object-contain  ' width={100} height={100} src={'/hyundai-motor-company-3.svg'}/>&nbsp;&nbsp;&nbsp;&nbsp;
              <Image className='w-full h-[25vh]   object-cover ' width={100} height={100} src={'/puma-2 (1).svg'}/>&nbsp;&nbsp;&nbsp;&nbsp;
              <Image className='w-full h-[20vh] object-contain   ' width={100} height={100} src={'/hyundai-motor-company-3.svg'}/>&nbsp;&nbsp;&nbsp;&nbsp;
              <Image className='w-full h-[25vh]   object-cover ' width={100} height={100} src={'/puma-2 (1).svg'}/>&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              
              
            </Marquee>
          </div>

          <div className='h-[300vh]'></div>
      </div>
    </div>
  )
}

export default page