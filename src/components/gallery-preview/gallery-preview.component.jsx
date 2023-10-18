import './gallery-preview.styles.css'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const GalleryPreview = ({logo, imageArray, type}) => {
    return(
        <Fragment>
            <div className='gallery-preview-container'>
                <Link to={`${type}`}>
                    <img src={logo} alt="" height={200} width={355} />
                </Link>
                <div className='gallery-preview-image-container'>
                    <img src={imageArray[0]} alt="" height={400} width={267} />
                    <img src={imageArray[1]} alt="" height={400} width={600}/>
                    <img src={imageArray[2]} alt="" height={400} width={267}/>
                </div>
            </div>
        </Fragment>
    )
}

export default GalleryPreview;