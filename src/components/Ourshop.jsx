import React from 'react'

const Ourshop = () => {
  return (
    <div className="px-5 md:pt-10 lg:pt-30">
        <h3 className="font-dmsans font-medium text-[7px] md:text-sm lg:text-[20px]">OUR SHOP</h3>

        <section className="flex justify-between items-center gap-15 md:flex-col md:items-start md:gap-10 mt-5 w-full">

            <div className="w-[60%]">
                <h1 className="font-lora text-xl md:text-3xl lg:text-5xl w-sm lg:w-xl">Here are the best sellers from our varieties</h1>
            </div>

            <div className="w-[40%] md:w-[30%] flex justify-end md:justify-start">
                <button className="text-white bg-black 
                px-6 py-2 w-[20vw] md:w-[15vw] text-sm rounded-full scale-110 transition-transform duration-300 active:scale-100 shadow-2xl">See All</button>
            </div>

            <section className="flex items-center gap-10 lg:h-[577px] mt-0 overflow-x-scroll duration-300 scroll-smooth scrollbar-none">

                <figure className="font-quicksand">
                    <img src="/src/img/fiddle-leaf.png" alt="fiddle leaf fig" className="h-full  transition-transform duration-300 hover:scale-98 rounded-sm shadow-lg" />
                    <figcaption className="flex justify-between items-center mt-5">
                        <h3>Fiddle Leaf</h3>
                        <p className="text-green-600">$110.99</p>
                    </figcaption>
                </figure>

                <figure>
                    <img src="/src/img/aloe-vera.png" alt="Aloe vera fig" className="h-full transition-transform duration-300 hover:scale-98 rounded-sm shadow-lg" />

                    <figcaption className="flex justify-between items-center mt-5">
                        <h3>Aloe Vera</h3>
                        <p className="text-green-600">$110.99</p>
                    </figcaption>        
                </figure>
               <figure>
                    <img src="/src/img/strelitizia-nicolai.png" alt="strelitizia-nicolai fig" className="h-full transition-transform duration-300 hover:scale-98 rounded-sm shadow-lg" />

                    <figcaption className="flex justify-between items-center mt-5">
                        <h3>Strelitizia Nicolai</h3>
                        <p className="text-green-600">$110.99</p>
                    </figcaption>  
               </figure>

               <figure>
                    <img src="/src/img/ficus-microcarpa.png" alt="ficus-microcarpa fig" className="h-full transition-transform duration-300 hover:scale-98 rounded-sm shadow-lg" />

                    <figcaption className="flex justify-between items-center mt-5">
                        <h3>Ficus Microcarpa</h3>
                        <p className="text-green-600">$110.99</p>
                    </figcaption>  
               </figure>
                
            </section>
            
        </section>
      
    </div>
  )
}

export default Ourshop
