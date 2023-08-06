import React from 'react'
import  Borabora from '../Assets/borabora.jpg';
import Borabora2 from '../Assets/borabora2.jpg';
import Maldives from '../Assets/maldives.jpg';
import Maldives2 from '../Assets/maldives2.jpg';
import Maldives3 from '../Assets/maldives3.jpg';
import Keywest from '../Assets/keywest.jpg';
import SelectionCard from './SelectionCard';
const Selection = () => {
  return (
    <div className=' max-w-[1240px] mx-auto px-4 py-16 grid   sm:grid-cols-2  lg:grid-cols-3 gap-4'>
     
     <SelectionCard  bg={Borabora} text="BoraBora"/>
     <SelectionCard  bg={Borabora2} text="Maldives"/>
     <SelectionCard  bg={Maldives} text="Antigua"/>
     <SelectionCard  bg={Maldives2} text="Paundicheri"/>
     <SelectionCard  bg={Maldives3} text="Austrelia"/>
     <SelectionCard  bg={Keywest} text=" Andaman NikoBar"/>
    </div>
  )
}

export default Selection
