import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-8 py-7 md:py-13 bg-[#F3F3F3] gap-10 md:gap-0">
        <img src="public/Planty's logo.svg" alt="planty-logo" className="transform -translate-y-1.5"/>

        <section className="flex flex-col md:flex-row gap-9 items-center md:gap-7 lg:gap-10 font-lora">
            <p>Help</p>
            <p>Contact Us</p>
            <p>Privacy &amp; Terms</p>
        </section>

        <section className="flex items-center gap-15 md:gap-7 lg:gap-10">
            <FaFacebook className="w-8 h-8 md:h-5.5 md:w-5.5 lg:w-6 lg:h-6"/>
            <BsTwitterX className="w-8 h-8 md:h-5.5 md:w-5.5 lg:w-6 lg:h-6"/>
            <FaInstagram className="w-8 h-8 md:h-5.5 md:w-5.5 lg:w-6 lg:h-6" />
        </section>
      
    </div>
  )
}

export default Footer
