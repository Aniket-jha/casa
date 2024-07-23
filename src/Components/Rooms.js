import React from 'react'
import RoomCard from './RoomCard'
import SouthsideLuxImage from "../asset/twin.webp"
import SouthsidePrivateBigImage from "../asset/private.webp"
import SouthsideTripleBigImage from "../asset/triple.webp"
const Rooms = () => {
  return (
    <div className='lg:mx-16 mx-4 pb-12  ' >
            <div>
                <h3 className='font-[NeueBold] text-[2.5rem]' >Rooms</h3>
                <div className='mt-4 lg:grid grid-cols-3 grid-flow-col gap-4 xl:gap-6' >
                <RoomCard image={SouthsideTripleBigImage} title="Triple"  content="Comfortable triple sharing room with modern amenities, high-speed Wi-Fi, and ample storage space."  />
                    <RoomCard image={SouthsideLuxImage} title="Twin" content="Cozy twin room with modern amenities, perfect for sharing and fostering community connections."  />
                    
                    <RoomCard image={SouthsidePrivateBigImage} title="Private"  content="Private room with en-suite bathroom, fully furnished, high-speed Wi-Fi, and regular housekeeping."  />
                </div>
            </div>
            <div className='lg:flex hidden  mt-2 lg:mt-3 items-center justify-center' >
           <a target='_blank' rel='noreferrer' href="https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2FCASA%20by%20Union.pdf?alt=media&token=6baef5da-1b6f-46af-bb13-fe160a52c6b5https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2FCASA%20by%20Union.pdf?alt=media&token=6baef5da-1b6f-46af-bb13-fe160a52c6b5" download> <button className="uppercase flex items-center justify-center gap-2 lg:gap-3 rounded-lg shadow-md  font-[NeueMedium] ease-in duration-300  text-[12px] md:text-[16px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[12px] px-[16px] mt-3 md:py-[12px] md:px-[24px] text-[#FFFEFC] bg-[#D64C27]" > What's Included in Rent?  </button></a>
           </div>
    </div>
  )
}

export default Rooms