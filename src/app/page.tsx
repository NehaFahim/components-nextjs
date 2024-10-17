import Navbar from "./components/navbar/header"
import Footer from "./components/navbar/footer"
import Link from "next/link"
import Image from 'next/image';


import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Image src={"/hellobackpic.jpg"} alt={"background pic"} width={1400} height={800}></Image>
   { <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold bg-clip-text text-transparent bg-lime-300">HELLO WORLD</h1> }
   </div>
    <Footer/>
   
     <br />
     <Link href={"/about"}></Link>
     <Link href={"/contact"}></Link>
     <Link href={"/home"}></Link>
     </div>
  )
}

export default Home
