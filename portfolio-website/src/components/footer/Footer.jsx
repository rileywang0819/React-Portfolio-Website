import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      {/* <a href="#" className='footer__logo'></a> */}

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#tesimonial">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* <div className="footer__socials">
        <a href=""><AiFillFacebook /></a>
        <a href=""><BsTwitter /></a>
        <a href=""><BsInstagram /></a>
      </div> */}

      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer