import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {Pagination } from 'swiper/modules';
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: "person 1",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum tempore architecto incidunt eos reprehenderit excepturi recusandae eum possimus animi"
  },
  {
    avatar: AVTR2,
    name: "person 2",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum tempore architecto incidunt eos reprehenderit excepturi recusandae eum possimus animi"
  },
  {
    avatar: AVTR3,
    name: "person 3",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum tempore architecto incidunt eos reprehenderit excepturi recusandae eum possimus animi"
  },
  {
    avatar: AVTR4,
    name: "person 4",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum tempore architecto incidunt eos reprehenderit excepturi recusandae eum possimus animi"
  }
]
const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      modules={[ Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    
      >
        {
          data.map(({avatar, name, review}, index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar 1" />
              </div>
              <h5>{name}</h5>
              <small className='client__review'>{review}</small>   
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial
