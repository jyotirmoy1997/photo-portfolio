import Carousel from 'react-bootstrap/Carousel';
import { carouselImages } from '../../assets/imageLinks';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./carousel.styles.css"

const CarouselList = carouselImages.map((img) => {
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