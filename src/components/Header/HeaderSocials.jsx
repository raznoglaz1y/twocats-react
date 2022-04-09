import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/alex-lomeyko/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/raznoglaz1y" target="_blank" rel="noreferrer"><BsGithub/></a>
      <a href="https://www.instagram.com/raznoglaz1y/" target="_blank" rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials
