import "./gallery-item.styles.css"
import img from "../../assets/img.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import logo1 from "../../assets/logos/BibahoScapes.png"
import Footer from "../../components/footer/footer.component"
import { useNavigate } from "react-router"
import { useState, useEffect } from "react"

const thumbnails = [   
    {
        text : "Shruti and Saptarshi's Wedding",
        id : "shrutiandsaptarshi",
        category : "Wedding Photography",
        imgLink : img,
        un : 1 
    },
    {
        text : "Gouravmoy and Priyanka's Wedding",
        id : "gouravmoyandpriyanka",
        category : "Wedding Photography",
        imgLink : img2,
        un : 2
    },
    {
        text : "Jayati's Wedding",
        id : "jayati",
        category : "Wedding Photography",
        imgLink : img3,
        un : 3
    },
]


/**/ 
const GalleryItem = ({logo, imageArray}) => {
    const [currentAlbum, setCurrentAlbum] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if(currentAlbum !== '')
            navigate(`/images/${currentAlbum}`)
    }, [currentAlbum])
    const toImages = (id) => {
        setCurrentAlbum(id)
    }

    
    return(
        <>
        <div className="gallery-item-wrapper">
            <img className="gallery-thumb-logo" src={logo1} alt="" />
            <div className="image-container">

                {
                    thumbnails.map((content) => {
                        return(
                        <div key={content.un} onClick={() => toImages(content.id)} className="image-dummy" style={
                                {
                                backgroundImage: `url(${content.imgLink})`,
                                backgroundSize: 'cover'
                                }
                            }>
                            <div className="img-text">
                                {content.text}
                            </div>
                        </div>
                        )
                    })
                }


                
                {/* <div className="image-dummy" style={
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
                    
                </div> */}
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