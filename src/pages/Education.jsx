import React from 'react'
import '../css/edu.css'
import { Pen, Award, Calendar2CheckFill, Book, AwardFill } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux';
import {shallowEqual} from 'react-redux';



function Education() {

  const mode=useSelector((state)=>state.counterReducer,shallowEqual);
  const navigate=useNavigate()

  const CertMore=(()=>{
      navigate('/cert')
  })
  return (
    <>
      <div className='edu-main'>
        <div className='edu-title-main'>
          <p className='edu-name-p'><Pen color='orange' size={40} />Education & <span className='edu-name-span'>Certificates</span></p>
        </div>
        <div className='uni-main'>
          <div className='uni-con'>
            <img className='uni-logo' src='./mkbhu.png' />
            <p className='uni-name'>Maharaja Krishnakumarsinhji <span className='uni-name-span'>Bhavnagar University</span></p>
          </div>
        </div>

        <div className='edu-card'>
          <div className='clg-con'>

            <p style={mode===true?{color:"white"}:{color:"black"}} className='clg-name'>Smt ks kapasi <span className='uni-name-span'>BCA</span> college palitana</p>
          </div>

          <div className='course-main'>
            <div className='course-detail'>
              <p className='c-p course'><span><Book color='orange' size={40} /></span>Bachelor <span className='of'> Of </span> Computer Application(BCA)</p>
              <p className='c-p date u-case' >Jun-2019</p>
              <p className='c-p to'>To</p>
              <p className='c-p date u-case'>May-2022</p>
              <p className='c-p u-case s-20'><AwardFill color='red' size={20} />First Class</p>
            </div>

            <div className='edu-logo-main'>
              <img className='edu-logo' src='edu.png'></img>
            </div>

          </div>

        </div>
        <div className='cert-main'>
          <div className='cert-logo-con'>
            <img className='cert-logo' src='cert.png'></img>
          </div>
          <div className='cert-detail-main'>
            <div className='cert-head-main'>
              <p className='cert-by c-p u-case'>Certificate <span style={{color:'orange'}}> BY</span> </p>
              <img className='sololearn-logo' src='./solo.png' />
            </div>
            <div className='cert-solo-main'>
              <div className='cert-solo'>
                <img className='cert-logos' src='./react+redux.jpeg'></img>
                <h1 className='cert-name'>React+Redux</h1>
                <div className='cert-data'>
                  <p>Issued Aug 2022</p>
                  <p>CT-X9Z9MFK2</p>
                </div>
                <div className='cert-links'>
                  <a className='cert-link-btn' style={mode===true?{color:"white"}:{color:"black"}} href='https://www.sololearn.com/Certificate/1097-386568/pdf/' >Show credential</a>
                </div>
              </div>
              <div className='cert-solo'>
              <img className='cert-logos' src='./html5.png'></img>
                <h1 className='cert-name'>HTML5</h1>
                <div className='cert-data'>
                <p>Issued Aug 2022</p>
                <p>CT-SY17B8OQ</p>
                </div>
                
                <div className='cert-links'>
                  <a className='cert-link-btn' style={mode===true?{color:"white"}:{color:"black"}} href='https://www.sololearn.com/Certificate/1014-386568/pdf/' >Show credential</a>
                </div>
              </div>
              
              <div className='cert-links m-full'>
                  <Button  className='cert-link-btn' onClick={()=>CertMore()} >Other...</Button>
                </div>
             
              

            </div>
            <p className='type-fix mt-20 s-20 '>As a wise man once said:<br></br>
"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it." - Steve Jobs</p>


          </div>

        </div>

      </div>
    </>
  )
}

export default Education