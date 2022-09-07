import React from 'react'
import '../css/cert.css'
import cert from '../cert.json'



function Certificate() {
  
  return (
    
    <>
       <div className='edu-main'>
        <div className='cert-head-main'>
          <p className='cert-by c-p u-case'><i className="fa fa-certificate" aria-hidden="true"></i>Certificates</p>
        </div>
        <div className='cert-items-con' >
          {
            cert.map((d) => {
              return (

                <div key={d} className='m-cert-solo'>
                  <img className='cert-logos' src={d.icon}></img>
                  <h1 className='cert-name'>{d.name}</h1>
                  <div className='m-cert-data'>
                  <p>By</p>
                  <h2>{d.from}</h2>
                    <p>{d.date}</p>
                    <p>{d.serial}</p>
                  </div>
                  <div className='cert-links'>
                    <a className='m-cert-link-btn' href={d.link} >Show credential</a>
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

export default Certificate