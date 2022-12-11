import React from 'react'

import { companies, thinking } from '../constants'
import { marketing } from '../assets/DATA/data';



const Marketing = () => {
  return (
    <div className='agency__marketing'>
      <div className='container f-center'>
        <h1 className='agency__marketing-title'>See how much our client love.</h1>
        <div className='agency__marketing-companies f-center'>
          <img src={companies} alt="companies" />
        </div>
        <div className='agency__marketing-questions'>
          <div className='agency__marketing-questions_left'>
            <img src={thinking} alt="thinking" />
          </div>
          <div className='agency__marketing-questions_right f-center'>
            <h1>Take Your Online marketing to the next level.</h1>
            <div className='agency__marketing-questions_right-card'>
              {
                marketing.map((mark, i) => (
                  <div className='f-center' key={i}>
                    <div>
                      <img src={mark.icon} alt={mark.title}/>
                    </div>
                    <div>
                      <h2>{mark.title}</h2>
                      <p>{mark.desc}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marketing