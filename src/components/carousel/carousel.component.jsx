import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./carousel.styles.css"
import img1 from "../../assets/carousel/img1.jpg"
import img2 from "../../assets/carousel/img2.jpg"
import img3 from "../../assets/carousel/img3.jpg"
import img4 from "../../assets/carousel/img4.jpg"

const imageArray = [ img4,
    img1, img2, img3
]

const CarouselList = imageArray.map((img) => {
    return(
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={img}
                alt="First slide"
            />
        </Carousel.Item>
    )
})

const CarouselComponent = () => {
    return (
        <div className='carousel-container'>
            <Carousel interval={3000} pause={true}>
                {CarouselList}
            </Carousel>
        </div>
    );
  }

export default CarouselComponent;