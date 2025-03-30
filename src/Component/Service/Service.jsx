import React from 'react'
import './Service.css'
import { BiCheck } from "react-icons/bi";
const Service = () => {
  return (
    <section id='services'>
      <h5>What i offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* <article className='service'>
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>

          <ul className="service__list">
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur,elit.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur,elit.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur,elit.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur,elit.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur,elit.</p>
            </li>
            
          </ul>
        </article> */}
        {/* END OF UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Custom Website Development</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Responsive Web Design</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Fullstack Development </p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>API Development & Integration </p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Authentication & Authorization </p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Backend Development </p>
            </li>
            
          </ul>
        </article>
         {/* END OF Web Development */}

         <article className='service'>
          <div className="service__head">
            <h3>Video Editing</h3>
          </div>

          <ul className="service__list">
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Intro & Outro Creation</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Slow Motion & Time-Lapse Editing</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Social Media Video Editing</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>YouTube Video Editing</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Color Correction & Grading</p>
            </li>
             {/* END OF Content Creation*/}
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service
