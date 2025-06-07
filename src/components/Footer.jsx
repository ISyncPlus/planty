import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="flex justify-between items-center px-5 md:px-8 py-7 md:py-13 bg-[#F3F3F3]">
        <img src="public/Planty's logo.svg" alt="planty-logo" />

        <section className="flex items-center gap-10 font-lora">
            <p>Help</p>
            <p>Contact Us</p>
            <p>Privacy &amp; Terms</p>
        </section>

        <section className="flex items-center gap-10">
            <FaFacebook className="w-6 h-6"/>
            <BsTwitterX className="w-6 h-6"/>
            <FaInstagram className="w-6 h-6" />
        </section>
      
    </div>
  )
}

export default Footer
