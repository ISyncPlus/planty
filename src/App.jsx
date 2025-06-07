import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Carousel from './components/Carousel'
import Ourshop from './components/Ourshop'
import Reviews from './components/Reviews'
import Lower from './components/Lower'
import Footer from './components/Footer'
function App() {

  return (
    <div className="max-w-[1440px] w-screen h-screen mx-auto overflow-x-hidden scrollbar-thin">
        <Navbar/>
        <div className="p-3 md:p-7">
          <Hero />
        </div>
        <Carousel />
        <Ourshop />
        <Reviews />
        <Lower />
        <Footer />
    </div>
  )
}

export default App
