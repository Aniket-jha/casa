import React from 'react'
import Logo from "../asset/logoblack.png"
import { IoMdArrowRoundUp } from 'react-icons/io'
import { PiLinkedinLogo } from "react-icons/pi";
import { PiInstagramLogo } from "react-icons/pi";
import { PiYoutubeLogo } from "react-icons/pi";
const Footer = () => {
  return (
    <div className='md:px-12 mx-4 lg:mx-12 my-3 rounded-lg px-4 py-12 shadow-lg bg-[#ebe3d654]' >
    <div className='md:grid grid-col-7 grid-flow-col' >
        <div className='col-span-1' >
            <img className='w-[130px]' src={Logo} />
            <p className='font-[NeueRegular] text-[1rem] text-[#272727]' >Live Easy, Live United</p>
            <a href='https://form.jotform.com/241691749314462'> <button className="uppercase flex items-center justify-center gap-3 rounded-lg shadow-md  font-[NeueMedium] ease-in duration-300  text-[12px] md:text-[16px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[8px] px-[24px] mt-3 md:py-[12px] md:px-[24px] text-[#FFFEFC] bg-[#D64C27]" >Book Now  </button></a>
        </div>
        <div className='col-span-5 mt-3 md:mt-12' >
            <div className='md:flex items-center md:justify-center gap-4 md:gap-12' >
              <a href='https://www.unionliving.in/'>  <p className='font-[NeueRegular]' >Home</p></a>
              <a href='https://www.unionliving.in/#/properties'>  <p className='font-[NeueRegular]'>Properties</p></a>
              <a href='https://www.unionliving.in/#/ourstory'>  <p className='font-[NeueRegular]'>Our Story</p></a>
              <a href='https://www.unionliving.in/#/community'>  <p className='font-[NeueRegular]'>Community</p></a>
              <a href='https://www.unionliving.in/#/dailyStays'> <p className='font-[NeueRegular]'>Daily Stays</p> </a>
            </div>
        </div>
        <div className='col-span-1 mt-3 md:mt-12' >
        <p className='font-[NeueRegular]'>
         <strong className='font-[NeueMedium]' >  Customer Service </strong> 
         <br />
       <a className='' href='mailto:csteam.unionliving@gmail.com' > csteam.unionliving@gmail.com</a>
        <br /> 
        <strong className='font-[NeueMedium]' >  General Enquiry </strong> 
        <br />
        <a className='' href='mailto:info@unionliving.in' > info@unionliving.in </a>
            </p>
           <h3 className='font-[NeueRegular]'>+919137915406</h3>
          
        </div>
    </div>
    <div className='md:grid grid-cols-7 mt-6  grid-flow-col'>
        <div className='col-span-1' ></div>
        <div className='col-span-5 flex items-center justify-center' >
            <h3 className='font-[NeueRegular]' >2024 Union Living. All right reserved</h3>
        </div>
        <div className='col-span-1 flex items-center md:ml-[-25px] justify-center md:justify-start gap-3' >
           <a target='_blank' rel='noreferrer' href='https://www.instagram.com/union_living/?hl=en'> <PiInstagramLogo className='text-[25px]' /></a>
            
            <a target='_blank' rel='noreferrer' href='https://www.youtube.com/@unioncoliving'>  <PiYoutubeLogo className='text-[25px]' /> </a>
        </div>
    </div>
</div>
  )
}

export default Footer