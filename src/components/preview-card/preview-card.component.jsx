// import { useState, useEffect, useCallback  } from "react"
import './preview-card.styles.css'

const PreviewCard = ({previewString, imageArray, alternate}) => {
    
    // const [currentIndex, setCurrentIndex] = useState(0)
    // console.log("Preview Card Component Called")

    // const changeImage = useCallback(() => {
    //     const newIndex = currentIndex === imageArray.length - 1 ? 0 : currentIndex + 1
    //     setCurrentIndex(newIndex)
    //     console.log("Change Called")
    // }, [currentIndex, imageArray.length]) 

    // useEffect(() => {
    //     setTimeout(changeImage, 3000)
    // }, [changeImage])


    if(alternate){
        return(
            <div className="preview-card">
                <p>{previewString}</p>
                <div className='preview-card-image-container'>
                    <div className='pic' id='pic3' style={{backgroundImage : `url(${imageArray[0]}`}} />
                    <div className='pic' id='pic2' style={{backgroundImage : `url(${imageArray[1]}`}} />
                    <div className='pic' id='pic1' style={{backgroundImage : `url(${imageArray[2]}`}} />
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="preview-card">
                <div className='preview-card-image-container'>
                    <div className='pic' id='pic3' style={{backgroundImage : `url(${imageArray[0]}`}} />
                    <div className='pic' id='pic2' style={{backgroundImage : `url(${imageArray[1]}`}} />
                    <div className='pic' id='pic1' style={{backgroundImage : `url(${imageArray[2]}`}} />
                </div>
                <p>{previewString}</p>
            </div>
        )
    }
}

export default PreviewCard