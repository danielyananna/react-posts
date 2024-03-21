import React, { useEffect, useRef, useState } from 'react';
import logo from '/images/logo.svg';
import search from '/images/search-icon.svg';
import './../assets/top-box/style.css';
import burger from '/images/burger.svg';
import mobLogo from '/images/burger.svg';
import Nav from './Nav';


const Header = ({query, setQuery}) => {

  const [openBurger, setOpenBurger] = useState(false);

  return (
    <>
        <div className='top-box'>
            <div className='top-box__inner'>
                <div className='center'>
                    <div className='top-box__container df'>
                        <div className='top-box__burger dn' onClick={(e)=>{e.stopPropagation(); setOpenBurger(!openBurger)}}>
                            <img src={burger} alt="burger" />
                        </div>
                        <a href="#" className='top-box__link'>
                            <img src={logo} alt="logo" />
                        </a>
                        <div className='top-box__search'>
                            <div className="top-box__search-container">
                                <input className="top-box__expandright" id="searchright" type="text" value={query} onChange={(e)=>setQuery(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <Nav openBurger={openBurger} setOpenBurger={setOpenBurger} />
    </>
  )
}

export default Header
