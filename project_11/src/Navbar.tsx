import React, { useState, useRef, useEffect } from "react"
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from "./data";

const Navbar = () => {
    const [showLinks, setShowLinks] = useState<boolean>(false);
    const linksContainerRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const linksHeight = linksRef.current!.getBoundingClientRect().height;
        if (showLinks) {
          linksContainerRef.current!.style.height = `${linksHeight}px`;
        } else {
          linksContainerRef.current!.style.height = '0px';
        }
      }, [showLinks]);
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src="https://raw.githubusercontent.com/john-smilga/react-projects/a7607537821a58e3569a4e4d8eb029ae63fe405d/11-navbar/final/src/logo.svg" alt="" />
                    <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
                        <FaBars />
                    </button>
                </div>
                <div className='links-container' ref={linksContainerRef}>
                    <ul className="links" ref={linksRef}>
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <ul className="social-icons">
                    {social.map((socialIcons) => {
                        const { id, url, icon } = socialIcons;
                        return (
                            <li key={id}>
                                <a href={url}>
                                    {icon}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>

    )
}

export { Navbar }