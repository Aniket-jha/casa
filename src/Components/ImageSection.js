import React from 'react'
import HomeVideo from "../asset/union.mp4"
import Private from "../asset/private.png"
import TerraceImage from "../asset/terraceImage.png"
import EventSide from "../asset/eventSide.png"
import MainImage from "../asset/mainImage.png"
import GymImage from "../asset/gym.png"
import CanteenImage from "../asset/canteen.png"
import EatImage from "../asset/eat.jpg"
const ImageSection = () => {
  return (
    <div className='lg:mx-16 mx-4 lg:pt-12 pb-12 ' >
          <div>
            <div className='lg:grid gap-12 grid-cols-2 grid-flow-col' >
              <div>
                <img className='my-3 lg:my-0' src={MainImage} />
              </div>
              <div>
              <div>
              <video className=' lg:w-[85vw]  '  loop="true" autoplay="autoplay" muted playsInline={true}  >
            <source  src={HomeVideo} type="video/mp4" />
            </video>
            </div>
            <div className='lg:mt-12 mt-8' >
              <h4 className='font-[NeueMedium] lg:leading-[2.3rem] leading-[1.8rem] text-[1.2rem] lg:text-[2rem]' >Freedom of an apartment combined <br className='hidden lg:block' /> with luxurious services and like minded community</h4>
              <p className='font-[NeueRegular] text-[0.8rem] lg:text-[1.2rem]' >Union living is a new way of living built upon community, flexibility,  <br className='hidden lg:block' /> and a fundamental belief that we are only as good as the people we surround ourselves with.</p>
            </div>
              </div>
            </div>
            <div className='lg:grid lg:my-12 mt-3  gap-12 grid-cols-3 grid-flow-col' >
              <div className='col-span-1 flex items-center justify-end' >
                <img className='w-[400px] my-3 lg:my-0' src={CanteenImage} />
              </div>
              <div className='col-span-2 flex items-center justify-start' >
              <img className='w-[750px]' src={GymImage} />
           
              </div>
            </div>
            <div className='lg:grid lg:my-12 mb-3  gap-12 grid-cols-5 grid-flow-col' >
              <div className='col-span-2 flex items-center justify-end' >
                <img className='w-[600px] my-3 lg:my-0' src={TerraceImage} />
              </div>
              <div className='col-span-3 flex items-center justify-end' >
                <img className='w-[800px] my-3 lg:my-0' src={Private} />
              </div>
            </div>
            <div className='lg:grid lg:my-12 mb-3 gap-12 grid-cols-2 grid-flow-col' >
              <div className='col-span-1 flex  items-center justify-end' >
                <img className='w-[600px] mb-3 lg:mb-0' src={EventSide} />
              </div>
              <div className='col-span-1 flex items-center justify-start' >
              <img className='w-[750px]' src={EatImage} />
           
              </div>
            </div>
          </div>
    </div>
  )
}

export default ImageSection