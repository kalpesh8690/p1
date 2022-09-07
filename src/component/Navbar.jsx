import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import '../css/navbar.css'
import { Link } from 'react-scroll'
import {Menu} from '@mui/icons-material'

function Navbar() {

  return (
    <>
        <div className='navbar'>
            <header>
                <nav>
                    <div className='nav-logo-main'>
                        <img className='logo' src='./logo192.png'></img>
                    </div>
                    <div className='nav-item-div'>
                        <ul>
                            
                            <NavLink className='nav-link' to='/'>Home</NavLink>
                            <NavLink className='nav-link' to='/skill'>Skill</NavLink>
                            <NavLink className='nav-link' to='/education'>Education</NavLink>
                            <NavLink className='nav-link' to='/about'>About Me</NavLink>
                            <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                            <Menu fontSize='500px' className='menu-logo  '/>
                            
                            
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    </>
  )
}

export default Navbar