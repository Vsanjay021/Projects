import React from 'react';
import {FaBars} from "react-icons/fa"
import { useGlobalContext } from './Context'
const Navbar = () => {

    const {openSidebar,openSubmenu,closeSubmenu}=useGlobalContext();

    const displaySubmenu=(e:React.MouseEvent<HTMLElement , MouseEvent>)=>{
        const page=(e.target as HTMLElement).textContent || "";
        const tempBtn=(e.target as HTMLElement).getBoundingClientRect();
        const center=(tempBtn.left+tempBtn.right)/2
        const bottom=tempBtn.bottom-3;
        openSubmenu(page,{center,bottom});
    }

    const handleSubmenu=(e:React.MouseEvent<HTMLElement,MouseEvent>)=>{
        if(!(e.target as HTMLElement).classList.contains('link-btn')){
            closeSubmenu();
        }
    }
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src="https://raw.githubusercontent.com/john-smilga/react-projects/a7607537821a58e3569a4e4d8eb029ae63fe405d/13-stripe-submenus/final/src/images/logo.svg" className='nav-logo' alt='' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
