import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const data = [
  {
    avatar: AVTR1,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
    Exercitationem officia nesciunt, labore aspernatur placeat accusamus deserunt, \
    laborum non omnis quibusdam voluptatem in aliquid id iste quia neque nam quae quos.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
    Exercitationem officia nesciunt, labore aspernatur placeat accusamus deserunt, \
    laborum non omnis quibusdam voluptatem in aliquid id iste quia neque nam quae quos.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
    Exercitationem officia nesciunt, labore aspernatur placeat accusamus deserunt, \
    laborum non omnis quibusdam voluptatem in aliquid id iste quia neque nam quae quos.'  
  },
  {
    avatar: AVTR4,
    name: 'Ruby Rails',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
    Exercitationem officia nesciunt, labore aspernatur placeat accusamus deserunt, \
    laborum non omnis quibusdam voluptatem in aliquid id iste quia neque nam quae quos.'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper navigation={true} modules={[Navigation]} className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avater">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
          )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials