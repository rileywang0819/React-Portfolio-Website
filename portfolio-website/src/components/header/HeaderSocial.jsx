import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/rileywang0819" target='_blank'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocial