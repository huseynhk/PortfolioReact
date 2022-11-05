import React from 'react';
import {BsLinkedin , BsGithub} from 'react-icons/bs';
import {FiDribbble} from 'react-icons/fi';




const HeaderSocial = () => {
  return (
    <div className="header_socials">

        <a href="http://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="http://github.com" target="_blank"><BsGithub/></a>
        <a href="http://dribble.com" target="_blank"><FiDribbble/></a>

    </div>
  )
}

export default HeaderSocial