import React from 'react'
import Hero from './component/Hero'
import Skill from './pages/Skill'
import Education from './pages/Education'
import {  Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Certificate from './pages/Certificate'
import './App.css'
import { useEffect,useState } from 'react'
import Resume from './pages/Resume'


function App() {
  const [loading,setLoading]=useState(false)

useEffect(()=>{
  setLoading(true);
  setTimeout(()=>{
    setLoading(false);
  },2000)
},[])
  return (
    <>
      
      {loading? <div className='loading-main'>
        <div className='loading-style'>
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
      </div>
        :<Routes>
        <Route excat path='/' element={<Hero />}>
          <Route path='/skill' element={<Skill />} />
          <Route path='/education' element={<Education />} />
          <Route path='/about' element={<About />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/cert' element={<Certificate/>}/>
        <Route path='/cv' element={<Resume/>}/>
      </Routes>}
      
      </>

  )
}

export default App