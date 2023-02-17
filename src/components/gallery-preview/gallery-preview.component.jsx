import './gallery-preview.styles.css'

const GalleryPreview = ({title, imageArray}) => {
    return(
        <div className='gallery-preview-container'>
            <h1>{title}</h1>
            <div className='gallery-preview-image-container'>
                <img src={imageArray[0]} alt="" height={400} width={267} />
                <img src={imageArray[1]} alt="" height={400} width={600}/>
                <img src={imageArray[2]} alt="" height={400} width={267}/>
            </div>
        </div>
    )
}

export default GalleryPreview;