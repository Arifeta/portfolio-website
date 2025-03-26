import React from 'react'
import CV from '../../assets/Arifata-CV.pdf'
const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>
      <a  className='btn btn-primary'>Hire Me</a>
    </div>
  )
}

export default CTA
 