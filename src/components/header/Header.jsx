import React from 'react';
import './header.css';
import CTA from './CTA';
import Me from '../../assets/me.png';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello We are</h5>
            <h1>F O G I T O</h1>
            <h5 className='text-light'>React Developers</h5>
            <CTA/>
            <HeaderSocial/>
            <div className="me">
                <img src={Me} alt="me" />
            </div>

            <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header