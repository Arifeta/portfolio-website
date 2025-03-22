import React  from 'react'
import './Navbar.css'
import { CiHome } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { TiBook } from "react-icons/ti";
import { FaHeartPulse } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import { useState } from 'react'
const Navbar = () => {

  const [activeNav, setActiveNav] = useState("#")

  return (
    <div>
      <nav>
        <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><CiHome /></a>
        <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><LuUserRound /></a>
        <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><TiBook /></a>
        <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><FaHeartPulse /></a>
        <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><MdContactMail /></a>
      </nav>
    </div>
  )
}

export default Navbar
