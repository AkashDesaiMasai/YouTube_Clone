import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Search from './Search'

const Navbar = () => {
  return (
    <div className='bg-black sticky flex flex-row p-2 justify-between top-0 '>
        <Link href="/" className='ml-10'>
        <Image src="https://i.ibb.co/s9Qys2j/logo.png" width={62} height={45} alt="logo"/>
        </Link>
        <Search/>
    </div>
  )
}

export default Navbar