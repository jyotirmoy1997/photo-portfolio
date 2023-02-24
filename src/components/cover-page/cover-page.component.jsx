import "./cover-page.styles.css"
import { coverLink } from "../../assets/imageLinks"

const CoverPage = () => {
    return(
        <div className="cover-page">
            <img src={coverLink} alt="" />
        </div>
    )
}

export default CoverPage