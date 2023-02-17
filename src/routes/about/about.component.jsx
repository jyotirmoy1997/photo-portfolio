import { Fragment } from "react"
import IdentityCard from "../../components/identity-card/identity-card.component"
import Footer from "../../components/footer/footer.component"
import './about.styles.css'
const port1 = "https://res.cloudinary.com/dst1eqcmo/image/upload/v1672149374/Photography%20Website/About/port1_lez9pi.jpg"
const port2 = "https://res.cloudinary.com/dst1eqcmo/image/upload/v1672149375/Photography%20Website/About/port3_tlafvf.jpg"


const About = () => {
    return(
        <div className="about-page">
            <div className="id-container">
                <IdentityCard imageURL={port1} />
                <IdentityCard imageURL={port2} />
            </div>
            <Footer/>
        </div>
    )
}

export default About