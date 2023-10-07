"use client"

import React from 'react'
import { FaSistrix } from 'react-icons/fa';
const Search = () => {
  return (
    <div className='flex p-4 align-middle'>
        <input className='rounded-full text-black border-none my-2 w-96 pl-10' placeholder='Search' />
    <span className=" mt-1 w-12 h-12 align-middle  pt-4 pl-4"> <FaSistrix />
    </span>
    </div>
  )
}

export default Search       