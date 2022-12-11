import React from 'react'
import EastIcon from '@mui/icons-material/East';
import { deepPurple } from '@mui/material/colors';

import { boost } from '../assets/DATA/data';

const Boost = () => {

  const mouseOver = (e, color) => {
    e.target.style.border= `3px solid ${color}`;
    e.target.style.boxShadow= `0 0 30px ${color}50`;
  }

  const mouseLeave = (e) => {
    e.target.style.border= `none`;
    e.target.style.boxShadow= `none`;
  }

  return (
    <section className='agency__boost'>
      <div className='container f-center'>
        <div className='agency__boost-title f-center'>
          <h1>Want you to Boost your Business?</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className='agency__boost-cards'>
          {
            boost.map((boost, i) => (
              <div
                className='agency__boost-cards_card f-center'
                key={i}
                onMouseEnter={(e) => mouseOver(e, boost.color)}
                onMouseLeave={(e) => mouseLeave(e, boost.color)}
              >
                <div
                  className='agency__boost-cards_card-img'
                  style={{
                    backgroundColor: `${boost.color}`,
                  }}
                >
                  <img src={boost.icon} alt={boost.title} />
                </div>
                <div className='agency__boost-cards_card-paragraph'>
                  <h2>{boost.title}</h2>
                  <p>{boost.desc}</p>
                </div>
                <div className='agency__boost-cards_card-readMore f-center'>
                  <small>Read More</small>
                  <EastIcon sx={{ color: deepPurple[600] }} />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Boost