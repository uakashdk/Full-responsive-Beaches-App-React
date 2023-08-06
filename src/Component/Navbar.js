import React, { useState } from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiMenuAlt4} from 'react-icons/hi'
import {FaFacebookF,FaTwitter,FaPinterest,FaYoutube,FaInstagram} from 'react-icons/fa'
const Navbar = () => {
  const [Nav,setNav]=useState(false);
  const [logo,setLogo]=useState(false);

  const handleNav=()=>{
    return(
      setNav(!Nav),
      setLogo(!logo)
    )
  }
  const Links=[
    {
      id:1,
      link:'Home',
    },
    {
      id:2,
      link:'Destination',
    },
    {
      id:3,
      link:'Travel',
    },
    {
      id:4,
      link:'View',
    },
    {
      id:5,
      link:'Book',
    },
  ]
  return (
    <div className=' flex justify-between items-center h-20 px-4 absolute z-10 text-white w-full'>
       <div>
        <h1 onClick={handleNav} className={logo?'hidden':'block'}>BEACHES</h1>
       </div>
       <ul className=' hidden md:flex'>
        {Links.map(({id,link})=>{
          return(
           <li key={id}>{link}</li>
          )
        })}
       </ul>
       <div className=' hidden md:flex'>
       <BiSearch className=' mr-2' size={30}/>
        <BsPerson className=' mr-2' size={30}/>
       </div>
       <div onClick={handleNav} className=' md:hidden z-10'>
        {
          Nav?<AiOutlineClose className=' text-black' size={20}/>:<HiMenuAlt4 size={20}/>
        }
       </div>
       <div onClick={handleNav} className={ Nav?' md:hidden  text-black absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7':' md:hidden absolute left-[-100%] top-0 w-full bg-gray-100/90 px-4 py-7'}>
        <ul>
        <h1>BEACHES.</h1>
        {Links.map(({id,link})=>{
          return(
           <li key={id} className=' border-b'>{link}</li>
          )
        })}
        <div className=' flex flex-col'>
          <button className=" bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-md my-6">Search</button>
          <button className='bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-md'>Account</button>
        </div>
        <div className=' flex justify-between my-6'>
          <FaFacebookF className='icon'/>
          <FaTwitter className='icon'/>
          <FaInstagram className='icon'/>
          <FaPinterest className='icon'/>
          <FaYoutube className='icon'/>
        </div>
        </ul>
       </div>
    </div>
  )
}

export default Navbar
