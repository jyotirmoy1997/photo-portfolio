
import PreviewCard from "../preview-card/preview-card.component"
import './preview.styles.css'

const Preview = () => {
    const previewImageArray = [
        [
            "https://res.cloudinary.com/dst1eqcmo/image/upload/v1672164178/Photography%20Website/Preview/Bibaho%20Scapes/_ADP3485_yooovv.jpg",
            "https://res.cloudinary.com/dst1eqcmo/image/upload/v1672164177/Photography%20Website/Preview/Bibaho%20Scapes/DSC_0347_elh30j.jpg",
            "https://res.cloudinary.com/dst1eqcmo/image/upload/v1672143555/Photography%20Website/Preview/Bibaho%20Scapes/preview3_emy0do.jpg"
        ],
        [
            "https://res.cloudinary.com/dst1eqcmo/image/upload/v1672163790/Photography%20Website/Preview/Pixel%20Perfect/preview1_xolmmh.jpg",
            "https://res.cloudinary.com/dst1eqcmo/image/upload/v1672163764/Photography%20Website/Preview/Pixel%20Perfect/ADP_5887_z7b6oh.jpg",
            "https://res.cloudinary.com/dst1eqcmo/image/upload/v1672163764/Photography%20Website/Preview/Pixel%20Perfect/ADP_8901_copy_3_mmriou.jpg"
        ],
        [
            "https://res.cloudinary.com/dst1eqcmo/image/upload/v1672165233/Photography%20Website/Preview/Brand%20Stand/RAJ_00061_copy_2_ax2qmy.jpg",
            "https://res.cloudinary.com/dst1eqcmo/image/upload/v1672143224/Photography%20Website/Preview/Brand%20Stand/preview2_ztfxja.jpg"
        ]
    ]
    const previewString = "Show your brand by The BrandStand"
    return(
        <div className="preview">
            <PreviewCard previewString={previewString} imageArray={previewImageArray[0]} alternate={true}/>
            <PreviewCard previewString={previewString} imageArray={previewImageArray[1]} alternate={false}/>
        </div>
    )
}

export default Preview