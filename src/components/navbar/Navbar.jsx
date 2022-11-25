import React, { useState, useEffect } from 'react'
import './navbar.css'
import logo from '../../images/logo.svg'
import arrowdown from '../../images/icon-arrow-down.svg'
import arrowup from '../../images/icon-arrow-up.svg'
import todo from '../../images/icon-todo.svg'
import calendar from '../../images/icon-calendar.svg'
import reminders from '../../images/icon-reminders.svg'
import planning from '../../images/icon-planning.svg'
import menu from '../../images/icon-menu.svg'
import close from '../../images/icon-close-menu.svg'


const Navbar = () => {

    const [ toggleMenu, setToggleMenu ] = useState(false)

  return (
    <div className='navbar'>
        <img src={logo} alt='logo' />
        <nav>
            <div className='dropdown-features'>
                <a href='#'>Features
                <img src={arrowdown} alt='' className='arrowdown' style={{marginLeft: 5}}/>
                <img src={arrowup} alt='' className='arrowup' style={{marginLeft: 5}}/>
                </a>
                <div class="features-content">
                    <a href="#"><img src={todo} alt=''/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Todo List</a>
                    <a href="#"><img src={calendar} alt='' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Calendar</a>
                    <a href="#"><img src={reminders} alt='' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reminders</a>
                    <a href="#"><img src={planning} alt='' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Planning</a>
                </div>
            </div>
            <div className='dropdown-company'>
                <a href='#'>Company
                <img src={arrowdown} alt='' className='arrowdown' style={{marginLeft: 5}}/>
                <img src={arrowup} alt='' className='arrowup' style={{marginLeft: 5}}/>

                </a>
                <div class="company-content">
                    <a href="#">History</a>
                    <a href="#">Our Team</a>
                    <a href="#">Blog</a>
                </div>
            </div>
                <a href='#'>Careers</a>
                <a href='#'>About</a>
            <div className='login'>
            <a href='#'>Login</a>
            <button>Register</button>
        </div>
        </nav>

        <div className='navbar-menu'>
            {toggleMenu
                ? <img src={close} onClick={() => setToggleMenu(false)} />
                : <img src={menu} onClick ={() => setToggleMenu(true)} />
            }
            {toggleMenu && (
                <div className='menu-container'>
                    <div className='menu-links'>
                    <div className='dropdown-menu-features'>
                <a href='#'>Features
                <img src={arrowdown} alt='' className='arrowdown' style={{marginLeft: 5}}/>
                <img src={arrowup} alt='' className='arrowup' style={{marginLeft: 5}}/>
                </a>
                <div class="features-menu-content">
                    <a href="#"><img src={todo} alt=''/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Todo List</a>
                    <a href="#"><img src={calendar} alt='' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Calendar</a>
                    <a href="#"><img src={reminders} alt='' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reminders</a>
                    <a href="#"><img src={planning} alt='' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Planning</a>
                </div>
            </div>
            <div className='dropdown-menu-company'>
                <a href='#'>Company
                <img src={arrowdown} alt='' className='arrowdown' style={{marginLeft: 5}}/>
                <img src={arrowup} alt='' className='arrowup' style={{marginLeft: 5}}/>

                </a>
                <div class="company-menu-content">
                    <a href="#">History</a>
                    <a href="#">Our Team</a>
                    <a href="#">Blog</a>
                </div>
            </div>
                <a href='#'>Careers</a>
                <a href='#'>About</a>
            <div className='login-menu'>
            <a href='#'>Login</a>
            <button>Register</button>
        </div>
                    </div>
                </div>
            )
            }
        </div>
    </div>
  )
}

export default Navbar