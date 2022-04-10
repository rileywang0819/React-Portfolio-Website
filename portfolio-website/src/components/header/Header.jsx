import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial.jsx'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Hajia Bintu</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Bottom</a>
      </div>
    </header>
  )
}

export default Header