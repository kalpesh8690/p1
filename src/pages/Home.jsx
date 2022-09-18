import React from 'react'
import { useNavigate } from 'react-router-dom';
import "animate.css/animate.min.css";
import ScrollAnimation from "@stromsky/react-animate-on-scroll"
import '../css/home.css'

function Home() {

  const navigate=useNavigate()
  const Cv=(()=>{
    navigate('/cv')
  })
  return (
    <>
      <div className='home-body'>
        <div className='desc-main'>
          <p className='p-desc1'>Hello</p>
          <h1 className='h1-desc'>I AM <span style={{color:'orange'}}>KALPESH CHAUHAN</span></h1>
          <p className='p-desc2'>JUNIOR REACT JS DEVLOPER</p>
          <div className='home-btns'>
          <a className='btn-1' href='./contact' >Contact ME</a>
          <input className='btn-2' type='button' onClick={()=>Cv()} value='My Cv'/>
        </div>
        </div>
        <div className='shadow'>
          <img className='my-img' alt="kalpesh-pic" src='mypic.png'></img>
        </div>
        

      </div>
      <ScrollAnimation 
        animateIn="fadeIn"
        >
      <div className='about-us-main'>
        <div className='about-us-img'>
        <img className='about-img' alt="about-pic" src='about-us.png'></img>
        </div>
        <div className='about-us-detail'>
          <h1 className='mt-2'>LET’S INTRODUCE ABOUT MYSELF</h1>
          <p className='mt-20'>Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven midst their. Beast creepeth. Fish days.<br></br>s give may shall likeness made yielding spirit a itself together created after sea is in beast beginning signs open god you're gathering whose gathered cattle let. Creature whales fruit unto meat the life beginning all in under give two.</p>
          <div className='cv-link-con '>
            <a className='cv-link' href='https://doc-0o-0c-docs.googleusercontent.com/docs/securesc/sb3lr4e25i20vvm09fap67k5njoil805/fkvef3e9n9rh0hhd8njloqufb3t2qcas/1663495875000/09191523244234862162/09191523244234862162/133s2D5j0kCPWmjTPkI7upoRrVx36-wZl?e=download&ax=ALW9-sC8ODGrTKfSezM-Msa3-oe7IfF6uEIyPnTfkwHb9yA0RHrvWxZwCm1u4P60ERi-raOoRratJ4MzjfAPj1bTThxFGocPhfLNblBSRDY-4-wWF27aJRb9XBtE84jTzmg_noP8OpciDaYkq5uFIiA89G7C1Sr4PVu5NJYCBMzkkikPIYy3lblk0Y5qQDlRiUcbxAEp3ENjBPqdrqwQp833epIl8n6CJVJ0OU-LtWR1kASGFw6ZkU2VNG4t2MdUjdsiLOzWxRuKtYCpTumdPHzjY6Nf9rmVS1bKEJyWjmkfQ9ZbMO59y8jciSBWgnFeiYPU82n_AjMOgeX1Ksx59SI4rihSnpLIzuPtgFA9sAKWOU571cxTRRWNl2zYHqC0liKuab4mziEq_vcXVlEsO5nsNlDT2S3MjrgAAQkRpJitwA_zOAuw9pSYR4LHvi-hxLNM50kC_VdyIDCoA3G128P9EBOILqQqRBWR_Lttj7iA1mIUluDaTmFnNRq5FX8shVeuKCf9H6vW3IDhWFSgf4LV-70WrQXUHRPVFIdmddkuzpR1szc7waMfD3BdTmph91iNK0FaO5PrbaextqvZCruYYXEVHBQy0-8KOzjgdZ_0YD4i54-mE1w7NJiL9gNdHxPeQvstg5sbYkLkFE2O0lVw39Yu9QgYl6hh3lb7AHlqAb9Vmo0DerXK84lzMC6Jwh4QJm-RKFFRJCtJtD1sWWV-a5Kn--q5Xb_uo3EQGa5wQhduplwd3qNwIzvY5h4Gb6FgbJeZ3CW7npCo_XdhorajIZqf9D5DsG4ESjyF53Og3--UUKNRRjBjOTmXN13lUHbYEqo65C6HG05J7-zQY49zEnSllLmCQybjqcwKf3-6d1uploi3ok4vnzE_4f5xFxUXEY2XkKguT07ejRN3vVCA7dE9IzZB25s1&uuid=ff47ffed-d96d-43f7-9b17-bff495ed71c0&authuser=0&nonce=jljn6dccd8apk&user=09191523244234862162&hash=tc5b3omqm17i1f1bnhkodhtdag8qrj3j'>Download CV</a>
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </>
  )
}

export default Home