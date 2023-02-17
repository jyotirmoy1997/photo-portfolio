import GalleryPreview from "../../components/gallery-preview/gallery-preview.component"

const Gallery = () => {
    const imageArray = [
        "https://res.cloudinary.com/dst1eqcmo/image/upload/v1672941809/Photography%20Website/Gallery-Preview/RAJ_0025_copy_s5rzr8.jpg",
        "https://res.cloudinary.com/dst1eqcmo/image/upload/v1672941809/Photography%20Website/Gallery-Preview/RAJ_0079_copy_jwpk6f.jpg",
        "https://res.cloudinary.com/dst1eqcmo/image/upload/v1672941808/Photography%20Website/Gallery-Preview/ADP_1249_copy_fiwqnd.jpg"
    ]
    return(
        <div>
            <GalleryPreview title={"Bibaho-Scapes"} imageArray={imageArray} />
        </div>
    )
}

export default Gallery