import React from 'react'

import solutions from '../assets/SVGs/solutions.svg';

const Solutions = () => {
  return (
    <section className='agency__solutions'>
      <div className='container'>
        <div className='agency__solutions-right f-center'>
          <h1>Unique Solutions for Your Business</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
          <div className='agency__solutions-right_info f-center'>
            <div className='f-center'>
              <h2 style={{ color: '#FF3D68' }}>50+</h2>
              <small>Total Client</small>
            </div>
            <div>
              <h2 style={{ color: '#3E3FD8' }}>100+</h2>
              <small>Project Done</small>
            </div>
          </div>
        </div>
        <div className='agency__solutions-left'>
          <img src={solutions} alt="Solutions" />
        </div>
      </div>
    </section>
  )
}

export default Solutions