import CarouselComponent from "../../components/carousel/carousel.component"
import Preview from "../../components/preview/preview.component"
import Footer from "../../components/footer/footer.component"

const Home = () => {
    return(
        <div>
            <CarouselComponent />
            <Preview/>
            <Footer/>
        </div>
    )
}

export default Home