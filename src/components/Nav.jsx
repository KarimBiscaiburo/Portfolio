// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import "../styles/nav.css";

//Icons
import aboutMe from "../img/aboutme.svg";
import studies from "../img/studies.svg";
import experience from "../img/progress-arrow.svg";
import abilities from "../img/open-book.svg";
import proyects from "../img/folder.svg";
import contact from "../img/contact.svg";
import settings from "../img/settings.svg";


export default function Nav () {
    // const [isScrolling, setIsScrolling] = useState(false); 
    // const [inTrasition, setInTransition] = useState(false)

    //Start animation in the nav
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrolling = window.scrollY > 20;

    //         if (window.scrollY > 20) {
    //             setInTransition(true);
    //         } else {
    //             setInTransition(false);
    //         }

    //         setTimeout(() => {
    //             setIsScrolling(scrolling);
    //         }, 3000)
    //       };
      
    //       window.addEventListener('scroll', handleScroll);
      
    //       return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //       };
    // }, []);

    return (
        <nav className="nav">
            <div className="nav__icons">
                <ul>
                    <li className="nav__icons-icon">
                        <img src={aboutMe} alt="about-me-icon" />
                    </li>
                    <li className="nav__icons-icon">
                        <img src={studies} alt="studies-icon" />
                    </li>
                    <li className="nav__icons-icon">
                        <img src={experience} alt="experience-icon" />
                    </li>
                    <li className="nav__icons-icon">
                        <img src={abilities} alt="abilities-icon" />
                    </li>
                    <li className="nav__icons-icon">
                        <img src={proyects} alt="proyects-icon" />
                    </li>
                    <li className="nav__icons-icon">
                        <img src={contact} alt="contact-icon" />
                    </li>
                </ul>
            </div>
            <div className="nav__settings">
                <img src={settings} alt="settings" />
            </div>
        </nav>
    )
}