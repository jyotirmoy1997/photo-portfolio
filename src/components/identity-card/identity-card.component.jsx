import IDAbout from "../identity-card-about/identity-card-about.component"
import './identity-card.styles.css'

const IdentityCard = ({imageURL}) => {
    const TestString = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    return(
        <div className="identity-card">
            <img src={imageURL} alt="" srcset="" width={350} height={350} />
            <IDAbout name={"Anish Dutta"} aboutString={TestString} />
        </div>
    )
}

export default IdentityCard