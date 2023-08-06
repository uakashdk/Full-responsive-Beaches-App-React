import React from 'react'
import beachvid from '../Assets/beachVid.mp4'
import {AiOutlineSearch} from 'react-icons/ai'
const Hero = () => {
  return (
    <div className=' w-full h-screen relative'>
      {/* <video className=' w-full h-full object-cover' src={beachvid} autoPlay loop muted/> */}
    
      <video className=' w-full h-full object-cover' src={beachvid} autoPlay loop muted/>
      <div className=' absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1> First Class Travel</h1>
        <h2 className=' py-4'> Top 1% Location Worldwide</h2>
        <form className=' flex items-center justify-between max-w-[700px] h-16 mx-auto w-full border p-1 text-black bg-gray-100 rounded-md'>
           <div>
           <input className=' bg-transparent w-[300px] sm:w-[400px] font-[poppins] focus:outline-none' type="text" placeholder='Search Destination'/>
           </div>
           <div>
            <button className='bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-md my-6'><AiOutlineSearch size={20} className='icon' style={{color:"#ffff"}}/></button>
           </div>
        </form>
      </div>
    </div>
  )
}

export default Hero
