import React from 'react'

import women from '../assets/SVGs/women.svg'

const Testemonials = () => {
  return (
    <section className='agency__Testemonials'>
      <div className='container f-center'>
        <div className='agency__Testemonials-title'>
          <p>Testemonials</p>
          <h1>What The People Thinks About Us</h1>
        </div>
        <div className='agency__Testemonials-cards'>
          <div className='agency__Testemonials-cards_card'>
            <div className='agency__Testemonials-cards_card-head f-center'>
              <div className='agency__Testemonials-cards_card-head_img'>
                <img src={women} alt="person" />
              </div>
              <div className='agency__Testemonials-cards_card-head_info'>
                <h3>Jack Williamson</h3>
                <small>One Year With Us</small>
              </div>
            </div>
            <div className='agency__Testemonials-cards_card-body'>
              <p>Lorem ipsum dolor sit amet, consec adipis. Cursus ultricies sit sit</p>
            </div>
          </div>
          <div className='agency__Testemonials-cards_card'>
            <div className='agency__Testemonials-cards_card-head f-center'>
              <div className='agency__Testemonials-cards_card-head_img'>
                <img src={women} alt="person" />
              </div>
              <div className='agency__Testemonials-cards_card-head_info'>
                <h3>Jack Williamson</h3>
                <small>One Year With Us</small>
              </div>
            </div>
            <div className='agency__Testemonials-cards_card-body'>
              <p>Lorem ipsum dolor sit amet, consec adipis. Cursus ultricies sit sit</p>
            </div>
          </div>
          <div className='agency__Testemonials-cards_card'>
            <div className='agency__Testemonials-cards_card-head f-center'>
              <div className='agency__Testemonials-cards_card-head_img'>
                <img src={women} alt="person" />
              </div>
              <div className='agency__Testemonials-cards_card-head_info'>
                <h3>Jack Williamson</h3>
                <small>One Year With Us</small>
              </div>
            </div>
            <div className='agency__Testemonials-cards_card-body'>
              <p>Lorem ipsum dolor sit amet, consec adipis. Cursus ultricies sit sit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testemonials