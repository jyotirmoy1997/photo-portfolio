import "./gallery-item.styles.css"
import img from "../../assets/img.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import logo1 from "../../assets/logos/BibahoScapes.png"
import Footer from "../../components/footer/footer.component"


/**/ 
const GalleryItem = ({logo, imageArray}) => {
    return(
        <>
        <div className="gallery-item-wrapper">
            <img className="gallery-thumb-logo" src={logo1} alt="" />
            <div className="image-container">
                <div className="image-dummy" style={
                        {
                        backgroundImage: `url(${img})`,
                        backgroundSize: 'cover'
                        }
                    }  >
                    <div className="img-text">
                        Shruti and Saptarshi's Wedding
                    </div>
                    
                </div>
                <div className="image-dummy" style={
                        {
                        backgroundImage: `url(${img2})`,
                        backgroundSize: 'cover'
                        }
                    }  >
                    <div className="img-text">
                        Gouravmoy and Priyanka's Wedding
                    </div>
                    
                </div>
                <div className="image-dummy" style={
                        {
                        backgroundImage: `url(${img3})`,
                        backgroundSize: 'cover'
                        }
                    }  >
                    <div className="img-text">
                        Jayati's Wedding
                    </div>
                    
                </div>
                {/* <div className="image-dummy"><img src={img} alt="" srcset="" /></div>
                <div className="image-dummy"><img src={img} alt="" srcset="" /></div>
                <div className="image-dummy"><img src={img} alt="" srcset="" /></div>
                <div className="image-dummy"><img src={img} alt="" srcset="" /></div>
                <div className="image-dummy"><img src={img} alt="" srcset="" /></div> */}
            </div>
        </div>
        <Footer/>
        </>
        
    )
}

export default GalleryItem