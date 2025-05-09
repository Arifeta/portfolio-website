import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me-IMG-3-preview.png'
const Header = () => {
  return (
    <header>
       <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Arifata Mulugeta</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
       </div>
    </header>
  )
}

export default Header
