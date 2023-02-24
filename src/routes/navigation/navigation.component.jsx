import { Link, Outlet } from "react-router-dom"
import { Fragment } from "react"
import './navigation.styles.css'
import logo from "../../assets/logos/MainLogo.png"

const Navigation = () => {
    return(
        <Fragment>
            <div className="nav-bar">
                <Link className="logo-container nav-link">
                    <img 
                    src={logo}
                    alt="" srcset="" height="52.5px" width="120px" />
                </Link>
                <div className="partitioner">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                    <Link className="nav-link" to="/about">
                        About
                    </Link>
                    <Link className="nav-link gallery-nav" to="/gallery">
                        Gallery
                        <div class="gallery-dropdown">
                            <Link className="anchor" href="#">The Brandstand</Link>
                            <Link className="anchor" href="#">Bibaho Scapes</Link>
                            <Link className="anchor" href="#">Media Pedia</Link>
                            <Link className="anchor" href="#">Pixel Perfect</Link>
                        </div>
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation