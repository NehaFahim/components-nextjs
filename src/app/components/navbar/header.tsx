import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black h-14'> 
    <div className='text-yellow-200 flex justify-between items-center'>
        <h1 className='text-2xl m-2 '>Navbar</h1>
        <ul  className='flex gap-4 mr-20'>
            <a className=' hover:text-lime-500' href="">Home</a>
            <a className=' hover:text-lime-500' href="">About</a>
            <a className=' hover:text-lime-500' href="">Contact</a>
        </ul>
        </div>
         </div>
  )
}

export default Navbar