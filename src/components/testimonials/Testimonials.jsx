import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';



const data = [
  {
    image: AVTR1,
    name: 'Ernest Suarez',
    rewiev: 'Lorem Ipsum is simply dummy text of the printing and typesetting frsjnfklsenflkn idjfiesfilewhjilajfilewjfilhilehifle hfehfiewlhafwihefilehwfile h fihweiofhiowehfioehwiolfhewihoF;IOEWHFO'
  },

  {
    image: AVTR2,
    name: 'Ernest Suarez',
    rewiev: 'Lorem Ipsum is simply dummy text of the printing and typesetting frsjnfklsenflkn idjfiesfilewhjilajfilewjfilhilehifle hfehfiewlhafwihefilehwfile h fihweiofhiowehfioehwiolfhewihoF;IOEWHFO'
  },

  {
    image: AVTR3,
    name: 'Ernest Suarez',
    rewiev: 'Lorem Ipsum is simply dummy text of the printing and typesetting frsjnfklsenflkn idjfiesfilewhjilajfilewjfilhilehifle hfehfiewlhafwihefilehwfile h fihweiofhiowehfioehwiolfhewihoF;IOEWHFO'
  },

  {
    image: AVTR4,
    name: 'Ernest Suarez',
    rewiev: 'Lorem Ipsum is simply dummy text of the printing and typesetting frsjnfklsenflkn idjfiesfilewhjilajfilewjfilhilehifle hfehfiewlhafwihefilehwfile h fihweiofhiowehfioehwiolfhewihoF;IOEWHFO'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
       {
        data.map(({image , name , rewiev}, index) => {

        return(
          <article key={index} className='testimonials'>
          <div className="client_avatar">
            <img src={image} alt="" />
            </div>
          <div>
          <h5 className='clients_name'>{name}</h5>
            <small className='clients_review'>
               {rewiev}
            </small>
          </div>
          
        </article>
        )
        })
       }
       </div>
      
    </section>

  )
}

export default Testimonials