import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>ARIFA</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experince</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/arifeta-mulugeta-bb6921353" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/arifeta26/#" target="_blank">
      <FaInstagramSquare />
      </a>
      <a href="https://web.facebook.com/profile.php?id=100080538771083" target="_blank">
        <FaFacebook />
      </a>
      </div>

      <div className="footer__copyright">
        <small>copyright @2025 All right Reserved</small>
      </div>
    </footer>
  )
}

export default Footer
