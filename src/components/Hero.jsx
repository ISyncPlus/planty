import React from 'react'
import heroImg from '../img/hero-img.png'
const Hero = () => {
  return (
    <div className="mt-15 w-screen">

        <section className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center transform -translate-x-3.5 md:translate-x-0">
            <div className="max-h-dvh md:w-[55%]">
                <h1 className="font-belleza text-3xl md:text-[55px] lg:text-[80px] md:font-[500] pt-5 md:pt-15 z-10 text-wrap w-full md:w-90 lg:w-140 md:leading-20 text-center md:text-left">Best house plants varieties</h1>

                <section className="flex flex-col-reverse md:flex-col items-center md:items-start">
                    <button className=" text-white w-[60vw] md:w-[40vw] px-10 py-2 md:px-4.5 md:py-3.5 mt-5 md:mt-10 rounded-full bg-black font-dmsans text-sm md:text-lg hover:cursor-pointer transition-all duration-400 hover:opacity-90 hover:scale-95 active:scale-95 shadow-2xl">Shop now</button>

                    <article className="flex flex-col items-center md:items-start gap-5 md:gap-10 mt-3 md:mt-15 px-5">

                        <p className="font-[500] font-quicksand text-lg md:text-xl lg:text-3xl md:w-90 lg:w-100 md:pl-3 text-center md:text-left">
                            Beautiful living greenery for homes and offices
                        </p>

                        <p className="font-[200] font-dmsans text-sm md:text-lg pl-3 md:w-100 text-center md:text-left">
                            We've been mentioned in the press
                        </p>

                    </article>

                </section>
                

                <div className="flex justify-between md:gap-0  md:justify-between items-center mt-10 md:mt-17 text-gray-500 md:w-75 lg:w-100 font-bold text-[16px] md:text-3xl lg:text-4xl px-5 md:px-0">
                    <p className="font-dmsans font-extrabold ">
                        Bioomberg
                    </p>

                    <p className="font-lora">
                        Forbes
                    </p>
                </div>
            </div>

                <figure className="flex justify-center transform md:-translate-x-10 lg:-mt-10">
                    <img src={heroImg}alt="Landing img" className="w-[70%] h-full md:w-sm md:h-[620px]  lg:w-140 lg:h-[780px] lg:transform lg:-translate-y-20 shadow-xl rounded-full"/>
                </figure>

        </section>

        <section className="flex flex-col md:flex-row justify-between items-center mt-10 lg:-mt-3 w-[90%]">
            <p className="font-quicksand text-[12px] md:text-xl w-full md:w-[40%] text-center md:text-left">
                Each houseplant set is handled quickly and safely before being sent to your destination in specially designed insulated packaging.
            </p>

            <p className="text-xl md:text-2xl font-lora font-medium w-full md:w-[40%] text-center md:text-left transform md:-translate-x-30 mt-5 md:mt-0">
                Learn how we take care of your plant at every stage of its journey from our greenhouse to your home.
            </p>
        </section> 

        <section className="flex justify-center items-center mt-5 md:mt-15 gap-5">
            <p>LEARN MORE</p>
            <img src="/learn-more.svg" alt="arrow" className="w-7.5 h-7.5" />
        </section>

    </div>
  )
}

export default Hero
