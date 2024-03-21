import React, { useEffect, useRef } from 'react';
import logo from '/images/logo.svg';
import close from '/images/burger-close.svg';

const Nav = ({setOpenBurger, openBurger}) => {
    const ref= useRef();

    useEffect(()=>{
        if (openBurger) {
            document.body.classList.add('burger-open');
        } else {
            document.body.classList.remove('burger-open');
        }

        const checkIfClickedOutside = e => {
            e.stopPropagation()
            
            if (ref.current && !ref.current.contains(e.target)) {
                setOpenBurger(false);
                }
            
            }
            document.addEventListener("click", checkIfClickedOutside)
            return () => {
            document.removeEventListener("click", checkIfClickedOutside)
        }

    }, [openBurger, setOpenBurger])

  return (
    <div  className={ openBurger ? 'top-box__nav top-box__nav--burger db' : 'top-box__nav dn'} ref={ref}>
            <div className='top-box__burger-up df a-center j-spc-btwn dn'>
                <a href="#" className='top-box__link'>
                    <img src={logo} alt="logo" />
                </a>
                <div onClick={()=>setOpenBurger(!openBurger)}>
                    <img src={close} alt="close" />
                </div>
            </div>
            <nav className='top-box__menu'>
                <ul className='top-box__menu-list df j-center a-center'>
                    <li className='top-box__menu-item'>
                        <span className='top-box__menu-link pr'>Demos</span>
                    </li>
                    <li className='top-box__menu-item'>
                        <span className='top-box__menu-link pr'>Post</span>
                        <ul className="top-box__submenu">
                            <li className='top-box__submenu-link'>Post Header</li>
                            <li className='top-box__submenu-link'>Post Layout</li>
                            <li className='top-box__submenu-link'>Share Buttons</li>
                            <li className='top-box__submenu-link'>Gallery Post</li>
                            <li className='top-box__submenu-link'>Video Post</li>
                        </ul>
                    </li>
                    <li className='top-box__menu-item'>
                        <span className='top-box__menu-link pr'>Features</span>
                    </li>
                    <li className='top-box__menu-item'>
                        <span className='top-box__menu-link pr'>Categories</span>
                    </li>
                    <li className='top-box__menu-item'>
                        <span className='top-box__menu-link pr'>Shop</span>
                    </li>
                    <li className='top-box__menu-item'>
                        <span className='top-box__menu-link pr'>Buy Now</span>
                    </li>
                </ul>
            </nav>
        </div> 
  )
}

export default Nav
