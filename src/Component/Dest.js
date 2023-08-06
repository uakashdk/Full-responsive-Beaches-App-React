import React from 'react'
import  Borabora from '../Assets/borabora.jpg';
import Borabora2 from '../Assets/borabora2.jpg';
import Maldives from '../Assets/maldives.jpg';
import Maldives2 from '../Assets/maldives2.jpg';
import Keywest from '../Assets/keywest.jpg';
const Dest = () => {
  return (
    <div className=' max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1> All Inclusive Resort</h1>
      <p className=' py-4'>On The Carbebian Best Beaches</p>
      <div className=' grid  grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
          <img className=' w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Borabora} alt="/" />
          <img className=' w-full h-full object-cover' src={Borabora2} alt="/" />
          <img className=' w-full h-full object-cover' src={Maldives} alt="/" />
          <img className=' w-full h-full object-cover' src={Maldives2} alt="/" />
          <img className=' w-full h-full object-cover' src={Keywest} alt="/" />
      </div>
    </div>
  )
}

export default Dest
