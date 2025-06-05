import React from 'react'
import { LiaStarSolid } from "react-icons/lia";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
const Reviews = () => {
  return (
    <div className="px-5 md:px-8">
      <section className="flex flex-col items-center md:flex-row md:items-start w-full gap-3">

        <div className="w-[30%] flex flex-col md:block"> {/* First half */}
          <h2 className="text-center md:text-left font-dmsans font-medium text-xs md:text-[16px] mb-5">Reviews</h2>
          <p className="font-dmsans font-light text-[8px] md:text-sm text-center md:text-left">Shop with confidence by reading customer reviews given by individuals who have used Bloomey. Excelent quality and streamlined services are both offered here.</p>

          <section className="flex items-center gap-2 mt-3">
            <div className="flex justify-center items-center gap-1">
              <LiaStarSolid className="fill-yellow-300 w-3.5 h-3.5 md:h-6 md:w-6"/>

              <LiaStarSolid className="fill-yellow-300 w-3.5 h-3.5 md:h-6 md:w-6"/>
              <LiaStarSolid className="fill-yellow-300 w-3.5 h-3.5 md:h-6 md:w-6"/>
              <LiaStarSolid className="fill-yellow-300 w-3.5 h-3.5 md:h-6 md:w-6"/>
              <LiaStarSolid className="fill-yellow-300 w-3.5 h-3.5 md:h-6 md:w-6"/>
            </div>

            <h3 className='font-quicksand font-bold text-[16px]'>5/5</h3>
          </section>

          <p className="font-dmsans text-sm mt-4">2,479 reviews</p>
        </div>

        <div className="w-full md:w-[50%]">  {/* Second half */}
          <p className="font-lora text-lg md:text-2xl font-medium text-center md:text-left">
            "We adore all our friends at Bloomey,
            especially the beauties who have come
            to live with us! Great advice when
            needed, beautifully and safely packaged.
            Highly recommend, it's just the best
            place for healthy plants and great value!"
          </p>

          <p className="font-lora font-medium text-xl mt-5 md:mt-10 mb-1 md:mb-2 text-center md:text-left">-Pamela S.</p>
          <p className="font-dmsans font-light text-[16px] text-center md:text-left">Lake Forest, CA</p>
        </div>

        {/* Third Half */}
        <div className="flex justify-center gap-2 flex-1 mt-3 md:mt-0">
          <CiCircleChevLeft className="h-8 w-8 stroke-1" />
          <CiCircleChevRight className="h-8 w-8 stroke-1" />
        </div>

      </section>
      
    </div>
  )
}

export default Reviews
