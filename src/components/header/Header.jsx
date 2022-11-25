import React from 'react'
import './header.css'

import databiz from '../../images/client-databiz.svg'
import audiophile from '../../images/client-audiophile.svg'
import meet from '../../images/client-meet.svg'
import maker from '../../images/client-maker.svg'
import headerimage from '../../images/image-hero-desktop.png'
import headerimagemobile from '../../images/image-hero-mobile.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-container'>
        <div className='header-text'>
            <h1>Make remote work</h1>
            <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productive soar.</p>
            <button>Learn more</button>
        </div>
        <div className='header-brands'>
            <img src={databiz} alt='' />
            <img src={audiophile} alt='' />
            <img src={meet} alt='' />
            <img src={maker} alt='' />
        </div>
        </div>
        <div className='header-image'>
            <img src={headerimage} alt='' className='desktop' />
            <img src={headerimagemobile} alt='' className='mobile'/>
        </div>
    </div>
  )
}

export default Header