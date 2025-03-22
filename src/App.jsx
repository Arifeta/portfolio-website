import React from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Navbar from './Component/Navbar/Navbar'
import About from './Component/About/About'
import Experience from './Component/Experience/Experience'
import Service from './Component/Service/Service'
import Portfolio from './Component/Portfolio/Portfolio'
import Testimonial from './Component/Testimonial/Testimonial'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Service/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>      
    </div>
  )
}

export default App
