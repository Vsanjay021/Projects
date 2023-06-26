import React  , {useState,useRef,useEffect}from "react"
import {FaBars,FaTwitter} from 'react-icons/fa';
import {links,social} from "./data"
const Navbar=()=>{
    return (
        <nav className="nav-center">
            <div className="nav-header">
                <div className="links-container show-container"></div>
                <ul className="social-icons"></ul>
            </div>
        </nav>
    )
}

export {Navbar}