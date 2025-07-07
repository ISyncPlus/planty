import React, { useState } from 'react'
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import firstSlide from '../img/slide-1.png';
import secondSlide from '../img/slide-2-cpy.png'
const Carousel = () => {
    const slides = [
        {
            img: firstSlide
        },
        {
            img: secondSlide
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
  return (
    <div className="mt-9 relative mb-20">
      <figure style={{backgroundImage: `url(${slides[currentIndex].img})`}}  className="max-w-[90%] mx-auto h-72 md:h-135 rounded-xl bg-center bg-cover origin-left ease-in-out duration-200 z-30 relative">
        
      </figure>

      <div className="flex flex-col justify-end bg-[#EDEDED] h-45 md:h-115 lg:h-98 w-full z-10 transform pb-5 px-4 absolute top-40 sm:top-43 lg:top-65">
            <section className="flex justify-between items-center w-full ">
                <h2 className="text-[7px] md:text-xl font-dmsans font-medium">
                    STEP 1
                </h2>

                <h1 className="text-sm md:text-3xl lg:text-3xl font-lora font-medium">
                    We put everything together
                </h1>

                <div className="flex gap-6">
                    <CiCircleChevLeft onClick={()=>prevSlide()} className="w-4.5 h-4.5 md:w-10 md:h-10 lg:w-12.5 lg:h-12.5 hover:cursor-pointer hover:scale-90 transition-transform duration-300"/>
                    <CiCircleChevRight onClick={()=> nextSlide()} className="w-4.5 h-4.5 md:w-10 md:h-10  lg:w-12.5 lg:h-12.5 hover:cursor-pointer hover:scale-90 transition-transform duration-300" />

                </div>
            </section>

        </div>
    </div>
  )
}

export default Carousel
