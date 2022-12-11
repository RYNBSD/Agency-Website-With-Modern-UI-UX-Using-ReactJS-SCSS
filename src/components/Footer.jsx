import React from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className='agency__footer'>
      <div className='container f-center'>
        <div className='agency__footer-info'>
          <ul>
            <li>
              <h1>Agency</h1>
            </li>
            <li>There are many variations of passages of lorem lpsum available, but the majority have suffered alteraction</li>
            <li className='f-center'>
              <div>
                <LinkedInIcon fontSize='large' />
              </div>
              <div>
                <FacebookIcon fontSize='large' />
              </div>
              <div>
                <TwitterIcon fontSize='large' />
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Product</h3>
            </li>
            <li>Employee database</li>
            <li>Payroll</li>
            <li>Absences</li>
            <li>Time tracking</li>
          </ul>
          <ul>
            <li>
              <h3>Information</h3>
            </li>
            <li>FAQs</li>
            <li>Blog</li>
            <li>Support</li>
            <li>Payroll</li>
          </ul>
          <ul>
            <li>
              <h3>Company</h3>
            </li>
            <li>About us</li>
            <li>Careers</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className='agency__footer-copyRight'>
          <small>&copy; 2021 Real State - All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer