import Footer from "../footer/footer.component"
import "./images-page.styles.css"
import { useParams } from "react-router"
import { useState, useEffect } from "react"

import fblogo from "../../assets/logos/facebook.png"
import instalogo from "../../assets/logos/instagram.png"

import { imageAlbums } from "../../assets/imageLinks.js"

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

const ImagePage = () => {
    const [currAlbumInfo, setCurrAlbumInfo] = useState({})
    const imageAlbum = useParams()
    useEffect(() => {
        setCurrAlbumInfo(imageAlbums[imageAlbum.imageId])
    }, [])
    console.log(currAlbumInfo)
    if(isEmpty(currAlbumInfo)){
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
                                <h3>{currAlbumInfo.text}</h3>
                                <p>{currAlbumInfo.images.length} Photos</p>
                            </div>
                            <div className="image-desc-content">
                                <h5>Category</h5>
                                <h6>{currAlbumInfo.category}</h6>
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
                            currAlbumInfo.images.map((image) => {
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