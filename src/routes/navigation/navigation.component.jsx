import { Link, Outlet } from "react-router-dom"
import { Fragment } from "react"
import './navigation.styles.css'
import logo from "../../assets/logos/MainLogo.png"
import { useState, useRef } from "react"
import { IoMdArrowDropdown } from "react-icons/io";
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';


const Navigation = () => {
        const dropdownRef = useRef(null)
        const navRef = useRef()
        const [isDropdownOpen, setIsDropdownOpen] = useState(false)
        const [showLinks, setShowLinks] = useState(false)
        const toggleDropdown = () => {
            if(isDropdownOpen){
                dropdownRef.current.classList.remove("dropdown-hide")
                setIsDropdownOpen(false)
            }
            else{
                dropdownRef.current.classList.add("dropdown-hide")
                setIsDropdownOpen(true)
            }
        }
        const showNavBar = () => {
            navRef.current.classList.toggle("responsive-nav")
        }
        return(
            <Fragment>
                <div className='navigation'>
                    <Link className="logo-container" to="/">
                        <img 
                        src={logo}
                        alt="" srcset="" height="52.5px" width="120px" />
                    </Link>
                    <div ref={navRef} className='nav-links-container'>
                        <Link onClick={showNavBar} className="nav-link" to="/">
                            Home
                        </Link>
                        <Link onClick={showNavBar} className="nav-link" to="/about">
                            About
                        </Link>
                        <Link onClick={showNavBar} className="nav-link" to="/gallery">
                            Gallery
                        </Link>
                        <div onClick={() => toggleDropdown()} className="nav-link dropdown-wrapper">
                            <span>Services</span><span><IoMdArrowDropdown/></span>
                            <div ref={dropdownRef} className="dropdown-container dropdown-hide">
                                <Link onClick={showNavBar} to="/gallery/bibahoscapes">
                                    Bibaho Scapes
                                </Link>
                                <Link onClick={showNavBar} to="/gallery/pixelperfect">
                                    Pixel Perfect
                                </Link>
                                <Link onClick={showNavBar} to="/">
                                    Brandstand
                                </Link>
                                <Link onClick={showNavBar} to="/">
                                    Media Pedia
                                </Link>
                            </div>
                        </div>
                    <button className="nav-btn nav-close-btn" onClick={showNavBar} >
                            <GrClose/>
                    </button>
                    </div>
                <button className="nav-btn" onClick={showNavBar}>
                        <GiHamburgerMenu/>
                </button>
                </div>
                <Outlet />
            </Fragment>
        )
    }

export default Navigation