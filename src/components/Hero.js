import React from 'react';
import '../css/hero.css'



const Hero = ({children}) => {
    return (
        <header className="defaultHero">
            {children}
        </header>
      )
  }
export default Hero