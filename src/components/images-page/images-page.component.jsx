import Footer from "../footer/footer.component"
import "./images-page.styles.css"
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import img4 from "./img4.jpg"

const ImagePage = () => {
    return(
        <>
            <div className="image-page-wrapper">
                <div className="image-desc">
                    Image Description
                </div>
                <div className="gallery-image-slider">
                    <div className="img-x"><img src={img1} alt="" srcset="" /></div>
                    <div className="img-x"><img src={img2} alt="" srcset="" /></div>
                    <div className="img-x"><img src={img3} alt="" srcset="" /></div>
                    <div className="img-x"><img src={img4} alt="" srcset="" /></div>
                </div>
            </div>
            <Footer/>
        </>
        
    )
}

export default ImagePage