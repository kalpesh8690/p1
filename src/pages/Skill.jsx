import React from 'react'
import '../css/skill.css'
import skills from '../skills.json'
import ProgressBar from '@ramonak/react-progress-bar'
import {  Display } from 'react-bootstrap-icons'

function Skill() {
  console.log(skills)
  return (
    <>
      <div className='skill-main'>
        <div className='skill-title-main'>
          <p className='skill-name-p'>Skill & <span className='skill-name-span'>Abilities</span></p>
        </div>
        <div className='skill-card-main' >
          {
            skills.map((s) => {
              const pr = s.pr;
              return (

                <div className='skill-card'>
                  <div className='skill-name'>
                    <h1 className='skill'>{s.name}</h1>
                  </div>
                  <div className='skill-logo'>
                    <img className='skill-logo-img' src={s.icon}></img>
                  </div>
                  <div className='progress-main'>
                    <Display className='codeslash' color='green' size={20} /><ProgressBar className='pr-bar' height='5px' bgColor='green' isLabelVisible={false} completed={pr} /><p className='prg-pr'><span style={{ margin: '10px', fontSize: '13px' }}>{pr}%</span></p>
                  </div>
                </div>

              )
            })
          }
        </div>

      </div>
    </>
  )
}

export default Skill