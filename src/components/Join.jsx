import React from 'react'

const Join = () => {
  return (
    <section className='agency__join'>
      <div className='container f-center'>
        <div className='agency__join-title f-center'>
          <p>Join Our Comunity</p>
          <h1>Subscribe To Our Newsletter</h1>
          <small>There are many variations of passages of lorem lpsum available, but the majority have suffered alteraction</small>
        </div>
        <div className='agency__join-field'>
          <input type="text" placeholder='Enter your email...' />
          <input type="button" value="Get Started" />
        </div>
      </div>
    </section>
  )
}

export default Join