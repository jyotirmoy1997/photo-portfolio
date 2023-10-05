import CarouselComponent from "../../components/carousel/carousel.component"
import CategoryCard from "../../components/category-card/category-card.component"
import CoverPage from "../../components/cover-page/cover-page.component"
import Footer from "../../components/footer/footer.component"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Home = () => {
    return(
        <div>
            <CoverPage />
            <CarouselComponent />
            {/* <AnimationOnScroll animateIn="animate__zoomIn">
                <h1>Some Text</h1>
            </AnimationOnScroll> */}
            <CategoryCard />
            {/* <Preview/> */}
            <Footer/>
        </div>
    )
}

export default Home