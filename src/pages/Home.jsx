import React from 'react'
import '../css/home.css'

function Home() {
  return (
    <>
      <div className='home-body'>
        <div className='desc-main'>
          <p className='p-desc1'>Hello</p>
          <h1 className='h1-desc'>I AM <span style={{color:'orange'}}>KALPESH CHAUHAN</span></h1>
          <p className='p-desc2'>JUNIOR REACT JS DEVLOPER</p>
          <div className='home-btns'>
          <a className='btn-1' href='' >Hire Me</a>
          <a className='btn-2' >My CV</a>
        </div>
        </div>
        <div className='shadow'>
          <img className='my-img' src='mypic.png'></img>
        </div>
        

      </div>
      <div className='about-us-main'>
        <div className='about-us-img'>
        <img className='about-img' src='about-us.png'></img>
        </div>
        <div className='about-us-detail'>
          <h1 className='mt-2'>LET’S INTRODUCE ABOUT MYSELF</h1>
          <p className='mt-20'>Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven midst their. Beast creepeth. Fish days.<br></br>s give may shall likeness made yielding spirit a itself together created after sea is in beast beginning signs open god you're gathering whose gathered cattle let. Creature whales fruit unto meat the life beginning all in under give two.</p>
          <div className='cv-link-con '>
            <a className='cv-link' href='cv-link'>Download CV</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home