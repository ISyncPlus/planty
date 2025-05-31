import React from 'react'
import { Link } from 'react-router-dom'
import { TbMenu } from "react-icons/tb";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center backdrop-blur-md fixed w-screen p-5 z-50">
    <a href="/">
      <img src="/public/Planty's Logo.svg" alt=" Planty Logo" />
    </a>
    

    <section className="hidden md:flex justify-between gap-10 text-[1rem] font-quicksand">
      <a>
        Plants
      </a>
      <a>
        For Offices
      </a>
      <a>
        Plants Care
      </a>
      <a>
        About
      </a>

    </section>

    <section className="flex items-center gap-5 md:gap-5 md:pr-10">
      <img src="/public/search.svg" alt="search" className="w-6 h-6" />
      <img src="/public/contact.svg" alt="contact"  className="w-6 h-6"/>
      <img src="/public/cart.svg" alt="cart"  className="w-6 h-6"/>
      <TbMenu className="w-6 h-6 md:hidden" />
    </section>

    </div>
  )
}

export default Navbar
