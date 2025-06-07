import React from 'react'

const Lower = () => {
  return (
    <div className="px-5 md:px-8 mb-5">
        <section className="flex items=-center gap-8 md:h-190">
            <img src="/src/img/bottom-1.png" alt="plant-1" className=""/>
            <img src="/src/img/bottom-2.png" alt="" />
        </section>

        <img src="/src/img/bottom-3.png" alt="" className="my-5 md:my-10 "/>
      
      <section className="flex justify-between items-center gap-10 w-full">
        <h1 className="font-lora font-medium text-4xl w-[50%] leading-12">Subscribe to our newsletter and stay updated with special offers, plant-parenting tips, and more.</h1>

        <div className="w-[35%] after:content-[''] after:w-[95%] after:h-0.5 after:bg-black relative after:absolute after:-bottom-2 after:-left-1" >
            <input type="email" name="email" id="email" placeholder='Your email' className="font-lora text-[16px] px-2 focus:outline-none focus:ring-0 inline mr-10"/>
            <button className="text-white font-dmsans font-medium text-sm bg-black px-10 rounded-full h-9 inline">Subscribe</button>
        </div>
      </section>
    </div>
  )
}

export default Lower
