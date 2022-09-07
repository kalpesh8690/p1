import React from 'react'
import '../css/about.css'
import { Instagram, LinkedIn, Facebook, WhatsappRounded } from '@mui/icons-material'
import { orange } from '@mui/material/colors'


function About() {
  return (
    <>
      <div className='about-main'>
        <div className='about-top'>
          <p className='about-p'>About <span style={{ color: 'orange' }}>ME</span></p>
          <div className='about-pic-con'>
            <img className='about-pic' src='mypic.png'></img>
          </div>
          <div className='about-desc-main'>
            <p className='about-desc'>I help agencies & brands to turn their ideas into designs. My heart is creativity and design and my head has always been business led. Which to this day has served me very well!</p>
          </div>
          <div className='social'>
            <p className='social-link-head'>Social <span style={{ color: 'orange' }}>Links</span></p>
            <div className='social-icon'>
              <a href='https://www.instagram.com/mrk._09/'><Instagram sx={{ color: 'rgb(255, 0, 149)' }} /></a>
              <a href='https://www.linkedin.com/in/kalpesh-chauhan-07632b194/?originalSubdomain=in'><LinkedIn sx={{ color: 'rgb(17, 0, 124)' }} /></a>
              <a href='https://www.instagram.com/mrk._09/'><Facebook sx={{ color: 'blue' }} /></a>
              <a href='https://api.whatsapp.com/send?phone=918690361133&text=Hello%20Kalpesh'><WhatsappRounded sx={{ color: 'green' }} /></a>


            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default About