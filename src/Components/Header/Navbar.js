'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import logo from '../../../public/img/logo1.png'
import Image from 'next/image'

const Navbar = () => {
  const [isclick,setisclick]=useState(false);
  const toggleNavbar=() =>{ setisclick(!isclick)}

  return (
    
    <nav  className='bg-gpt-2'>
      <div className='max-m-7xl  mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
           {/* logo creation */}
          <div className='flex items-center'>
          <div className='flex-shrik-0'>
           <picture>
        <Image src={logo} alt="logo" width={100} height={100} />
            

           </picture>
            
            
          </div>
          </div>
{/* ----------------------------Menu Creation */}
<div className='hidden md:block '>
  <div className='ml-4 flex items-center space-x-4 text-gpt-1'>
              <Link href='/' className=' hover:text-white rounded-lg p-2'>
                Home
              </Link>
              <Link href='/About' className=' hover:text-white rounded-lg p-2'>
                About Us
              </Link>
              <Link href='/Menu' className=' hover:text-white rounded-lg p-2'>
                Menu
              </Link>
              <Link href='/Franchise' className=' hover:text-white rounded-lg p-2'>
                Franchise
              </Link>
              <Link href='/Career' className=' hover:text-white rounded-lg p-2'>
                Career
              </Link>
              <Link href='/Contact' className=' hover:text-white rounded-lg p-2'>
                Contact Us
              </Link>
              <Link href='/Blog' className=' hover:text-white rounded-lg p-2'>
                Blog
              </Link>

            </div>
            </div>
          
          <div className='md:hidden flex item-center '>
            <button className='inline-flex items-center justify-center p-2 rounded-md text-white  hover:text-white focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white ' onClick={toggleNavbar}>
            {isclick ? (<svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentcolor'>
<path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z"/>
             
              </svg>):(<svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentcolor'>
          
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              
              </svg>)}
            </button>
          </div>
      </div>
      </div>
    {
      isclick && (
        <div className='md:hidden bg-transparent'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <ul>
              
          <Link href='/' className='text-gpt-1 hover:text-white rounded-lg p-2'>
                <li>
                Home
                </li>
              </Link>
              
              <Link href='/About' className='text-gpt-1 hover:text-white rounded-lg p-2'>         <li>
                About Us
                </li>
              </Link>
              
              </ul>
          </div>
        </div>
      )
    }
    </nav>


  )
}

export default Navbar



