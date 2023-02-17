import { Link } from "react-router-dom"
import './footer.style.css'
import locationLogo from "../../assets/logos/location.png"
import phoneLogo from "../../assets/logos/telephone.png"
import mailLogo from "../../assets/logos/gmail.png"
import facebookLogo from "../../assets/logos/facebook.png"
import instagramLogo from "../../assets/logos/instagram.png"

const Footer = () => {
    const d = new Date(Date.now())
    return(
        <div className="footer-wrapper">
            <div className="footer">
                <div className="footer-contact">
                    <div className="footer-contact-items">
                            <img src={locationLogo} alt="" srcset="" height="30px" width="30px"/>
                            <p>Raikatpara , Jalpaiguri</p>
                            
                    </div>
                    <div className="footer-contact-items">
                            <img src={phoneLogo} alt="" srcset="" height="30px" width="30px"/>
                            <p>+917865003343 / +919614455661</p>
                            
                    </div>
                    <div className="footer-contact-items">
                            <img src={mailLogo} alt="" srcset="" height="30px" width="30px"/>
                            <p>dasandduttaproductions@gmail.com</p>
                            
                    </div>
                </div>
                <div className="footer-info">
                    <h3>About D&D Productions</h3>
                    <p>
                        About
                    </p>
                    <div className="footer-icons">
                        <a href="https://www.facebook.com/profile.php?id=100084598611956" target="_blank">
                            <img src={facebookLogo} alt="" srcset="" height="30px" width="30px"/>
                        </a>
                        <a href="https://www.instagram.com/dandd.productions/" target="_blank">
                            <img src={instagramLogo} alt="" srcset="" height="30px" width="30px"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="copyright-text">
                <p>&copy; {d.getFullYear()} D&D Productions All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer