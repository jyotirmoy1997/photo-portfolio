import Footer from "../footer/footer.component"

import fblogo from "../../assets/logos/facebook.png"
import instalogo from "../../assets/logos/instagram.png"

const VideoPage = () => {
    return(
        <>
            <div className="image-page-wrapper">
                <div className="image-desc-wrapper">
                    <div className="image-desc">
                        <div className="image-desc-content">
                            <h3>TAPA TINI</h3>
                            <p># Video</p>
                        </div>
                        <div className="image-desc-content">
                            <h5>Category</h5>
                            <h6>Videography</h6>
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
                
                    <iframe width="100%" height="100%" 
                    src="https://www.youtube.com/embed/VzsL6nZwMmg?si=rnsqBO_tDwODGvg6" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
            
                    </iframe>
                </div>
            </div>
            <Footer/>
        </>
        
    )
}

export default VideoPage