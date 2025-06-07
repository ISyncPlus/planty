import React from 'react'
import fiddle from '../img/fiddle-leaf.png'
import aloe from '../img/aloe-vera.png'
import nicolai from '../img/strelitizia-nicolai.png'
import ficus from '../img/ficus-microcarpa.png'
const Ourshop = () => {
  return (
    <div className="md:pt-10 lg:pt-30">
        <h3 className="font-dmsans font-medium text-[7px] md:text-sm lg:text-[20px] px-5 md:px-10 ">OUR SHOP</h3>

        <section className="flex justify-between items-center gap-3 md:flex-col md:items-start md:gap-10 mt-10 w-full px-5 md:px-10">

            <div className="w-[60%]">
                <h1 className="font-lora text-xl md:text-3xl lg:text-5xl lg:w-xl">Here are the best sellers from our varieties</h1>
            </div>

            <div className="md:w-[30%] flex  md:justify-start">
                <button className="text-white bg-black 
                px-6 py-3 w-[25vw] md:w-[15vw] text-sm rounded-full scale-110 transition-transform duration-300 active:scale-100 shadow-2xl hover:cursor-pointer">See All</button>
            </div>
            
        </section>

        <section className="w-full overflow-x-auto pl-5 pr-2 md:pl-7 md:pr-2 my-10 scroll-auto scrollbar-none">
            <div className="flex gap-10 w-max font-quicksand">

                <figure>
                    <img src={fiddle} alt="fiddle leaf fig" className="h-[350px] md:h-[577px] w-[223px] md:w-[368px] transition-transform duration-300 hover:scale-98 rounded-sm shadow-lg" />
                    <figcaption className="flex justify-between items-center mt-5">
                        <h3>Fiddle Leaf</h3>
                        <p className="text-green-600">$79.99</p>
                    </figcaption>
                </figure>

                <figure>
                    <img src={aloe} alt="Aloe vera fig" className="h-[350px] md:h-[577px] w-[223px] md:w-[368px] transition-transform duration-300 hover:scale-98 rounded-sm shadow-lg" />

                    <figcaption className="flex justify-between items-center mt-5">
                        <h3>Aloe Vera</h3>
                        <p className="text-green-600">$110.99</p>
                    </figcaption>        
                </figure>
               <figure>
                    <img src={nicolai} alt="strelitizia-nicolai fig" className="h-[350px] md:h-[577px] w-[223px] md:w-[368px] transition-transform duration-300 hover:scale-98 rounded-sm shadow-lg" />

                    <figcaption className="flex justify-between items-center mt-5">
                        <h3>Strelitizia Nicolai</h3>
                        <p className="text-green-600">$99.99</p>
                    </figcaption>  
               </figure>

               <figure>
                    <img src={ficus} alt="ficus-microcarpa fig" className="h-[350px] md:h-[577px] w-[223px] md:w-[368px] transition-transform duration-300 hover:scale-98 rounded-sm shadow-lg" />

                    <figcaption className="flex justify-between items-center mt-5">
                        <h3>Ficus Microcarpa</h3>
                        <p className="text-green-600">$89.99</p>
                    </figcaption>  
               </figure>
                
            </div>

        </section>
        
    </div>
  )
}

export default Ourshop
