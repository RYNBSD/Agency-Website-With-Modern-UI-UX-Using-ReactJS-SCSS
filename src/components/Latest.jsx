import React from 'react'

import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import p1 from '../assets/SVGs/latest/p-1.svg';
import p2 from '../assets/SVGs/latest/p-2.svg';
import p3 from '../assets/SVGs/latest/p-3.svg';

const Latest = () => {
  return (
    <section className='agency__latest'>
      <div className='container f-center'>
        <div className='agency__latest-title'>
          <h1>Latest News</h1>
          <p>There are many variations of passages of lorem lpsum available, but the majority have suffered alteraction</p>
        </div>
        <div className='agency__latest-cards'>
          <div className='agency__latest-cards_card f-center'>
            <div className='agency__latest-cards_card-img'>
              <img src={p1} alt="" />
            </div>
            <div className='agency__latest-cards_card-info f-center'>
              <div>
                <PersonIcon />
                <small>Jack Wilson</small>
              </div>
              <div>
                <CalendarMonthIcon />
                <small>06 March 2022</small>
              </div>
            </div>
            <div className='agency__latest-cards_card-desc'>
              <p>Discover cennect with great local business in your</p>
            </div>
          </div>
          <div className='agency__latest-cards_card f-center'>
            <div className='agency__latest-cards_card-img'>
              <img src={p2} alt="" />
            </div>
            <div className='agency__latest-cards_card-info f-center'>
              <div>
                <PersonIcon />
                <small>Jack Wilson</small>
              </div>
              <div>
                <CalendarMonthIcon />
                <small>06 March 2022</small>
              </div>
            </div>
            <div className='agency__latest-cards_card-desc'>
              <p>Discover cennect with great local business in your</p>
            </div>
          </div>
          <div className='agency__latest-cards_card f-center'>
            <div className='agency__latest-cards_card-img'>
              <img src={p3} alt="" />
            </div>
            <div className='agency__latest-cards_card-info f-center'>
              <div>
                <PersonIcon />
                <small>Jack Wilson</small>
              </div>
              <div>
                <CalendarMonthIcon />
                <small>06 March 2022</small>
              </div>
            </div>
            <div className='agency__latest-cards_card-desc'>
              <p>Discover cennect with great local business in your</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Latest