import GalleryPreview from "../gallery-preview/gallery-preview.component"
import {galleryPreviewImages} from "../../assets/imageLinks"
import Footer from "../footer/footer.component"
import "./gallery.styles.css"


const Gallery = () => {
    return(
        <div className="galley-wrapper">
            <div className="gallery-wrapper-inner">
                {
                    galleryPreviewImages.map((content) => {
                        return(
                            <div key={content.id}>
                                <GalleryPreview 
                                    logo={content.logo} 
                                    imageArray={content.images} 
                                />
                            </div>
                        )
                    })
                }
            </div>
            <Footer/>
        </div>
    )
}

export default Gallery