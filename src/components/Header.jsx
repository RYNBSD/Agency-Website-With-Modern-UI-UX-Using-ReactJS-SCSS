import React from 'react'
import EastIcon from '@mui/icons-material/East';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { blue } from '@mui/material/colors';

import { personGrow } from '../constants';

const Header = () => {
  return (
    <header className='agency__header'>
      <div className='container f-center'>
        <div className='agency__header-desc f-center'>
          <h1>Marketing is The Key of Business Sucess.</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
          <div className='agency__header-desc_buttons f-center'>
            <div className='agency__header-desc_buttons-getStarted f-center' role='button'>
              <p>get started</p>
              <div className='agency__header-desc_buttons-getStarted_arrow f-center'>
                <EastIcon sx={{ fontSize: 16 }}/>
              </div>
            </div>
            <div className='agency__header-desc_buttons-watchOurVideos f-center'>
              <div className='f-center'>
                <button className='f-center'>
                  <PlayArrowIcon sx={{ fontSize: 40, color: blue[50] }} />
                </button>
              </div>
              <p>Watch our video</p>
            </div>
          </div>
        </div>
        <div className='agency__header-img f-center'>
          <div className='square-pink' />

          <img src={personGrow} alt='person grow'/>
        </div>
      </div>
    </header>
  )
}

export default Header