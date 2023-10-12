import CarouselComponent from "../../components/carousel/carousel.component"
import CategoryCard from "../../components/category-card/category-card.component"
import CoverPage from "../../components/cover-page/cover-page.component"
import Footer from "../../components/footer/footer.component"
import "animate.css/animate.min.css";


const Home = () => {
    return(
        <div>
            <CoverPage />
            <CarouselComponent />
            <CategoryCard />
            <Footer/>
        </div>
    )
}

export default Home