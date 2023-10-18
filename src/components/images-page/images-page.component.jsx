import Footer from "../footer/footer.component"
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import img4 from "./img4.jpg"
import "./images-page.styles.css"
import { useParams } from "react-router"
import { useState, useEffect } from "react"

import fblogo from "../../assets/logos/facebook.png"
import instalogo from "../../assets/logos/instagram.png"

import {imageObject} from "./imageLinks.js"

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

const ImagePage = () => {
    const [currImageInfo, setCurrImageInfo] = useState({})
    const imageAlbum = useParams()
    useEffect(() => {
        setCurrImageInfo(imageObject[imageAlbum.imageId])
    }, [])
    console.log(currImageInfo)
    if(isEmpty(currImageInfo)){
        return(
            <div>Loading...</div>
        )
    }
    else{
        return(
            <>  
                <div className="image-page-wrapper">
                    <div className="image-desc-wrapper">
                        <div className="image-desc">
                            <div className="image-desc-content">
                                <h3>{currImageInfo.text}</h3>
                                <p>{currImageInfo.images.length} Photos</p>
                            </div>
                            <div className="image-desc-content">
                                <h5>Category</h5>
                                <h6>Wedding Photography</h6>
                            </div>
                            <div className="image-desc-content">
                                <h5>Links</h5>
                                <div className="image-desc-link-container">
                                    <img src={fblogo} alt="" width={30} height={30} />
                                    <img src={instalogo} alt="" width={30} height={30} />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="gallery-image-slider">
                        {
                            currImageInfo.images.map((image) => {
                                return(
                                    <div className="img-x"><img src={image} alt="" srcset="" /></div>
                                )
                            })
                        }
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

{/* <div className="image-page-wrapper">
                <div className="image-desc-wrapper">
                    <div className="image-desc">
                        <div className="image-desc-content">
                            <h3>SHRUTI & SAPTARSHI</h3>
                            <p># Photos</p>
                        </div>
                        <div className="image-desc-content">
                            <h5>Category</h5>
                            <h6>Wedding Photography</h6>
                        </div>
                        <div className="image-desc-content">
                            <h5>Links</h5>
                            <div className="image-desc-link-container">
                                <img src={fblogo} alt="" width={30} height={30} />
                                <img src={instalogo} alt="" width={30} height={30} />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="gallery-image-slider">
                    <div className="img-x"><img src={img1} alt="" srcset="" /></div>
                    <div className="img-x"><img src={img2} alt="" srcset="" /></div>
                    <div className="img-x"><img src={img3} alt="" srcset="" /></div>
                    <div className="img-x"><img src={img4} alt="" srcset="" /></div>
                </div>
            </div>
            <Footer/> */}

export default ImagePage