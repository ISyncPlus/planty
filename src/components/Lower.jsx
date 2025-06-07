import React from 'react'
import firstPlant from '../img/bottom-1.png'
import secondPlant from '../img/bottom-2.png'
import thirdPlant from '../img/bottom-3.png'
import mobileThird from '../img/bottom-3-mobile.png'
const Lower = () => {
  return (
    <div className="px-5 md:px-8 mb-6 md:mb-10 lg:mb-20">
        <section className="flex items=-center gap-4 lg:gap-5 md:h-140 lg:h-170">
            <img src={firstPlant} alt="plant-1" className="w-[36%] sm:w-[38%]"/>
            <img src={secondPlant} alt="plant-2" className="w-[60%]"/>
        </section>

        <img src={thirdPlant} alt="plant-3" className="hidden sm:block my-5 md:my-10 "/>

        <img src={mobileThird} alt="plant-3" className="sm:hidden my-5 w-full"/>

      
      <section className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10 w-full">
        <h1 className="font-lora font-medium text-xl md:text-2xl lg:text-4xl text-center md:text-left w-[80%] lg:w-[60%] xl:w-[50%] leading-10 md:leading-12">Stay updated with special offers, plant-parenting tips, and more.</h1>

        <div className="flex items-center w-[35#%] border-b-2 pb-2 transform lg:translate-y-5 xl:translate-y-5" >
            <input type="email" name="email" id="email" placeholder='Your email' className="font-lora text-[16px] px-2 focus:outline-none focus:ring-0 xl:mr-10"/>
            <button className="text-white font-dmsans font-medium text-xs md:text-sm bg-black px-5 lg:px-7 xl:px-10 rounded-full h-8 md:h-9">Subscribe</button>
        </div>
      </section>
    </div>
  )
}

export default Lower
