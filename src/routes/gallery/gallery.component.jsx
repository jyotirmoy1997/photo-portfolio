import GalleryPreview from "../../components/gallery-preview/gallery-preview.component"
import { galleryPreviewImages } from "../../assets/imageLinks"


const Gallery = () => {
    return(
        <div>
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
    )
}

export default Gallery