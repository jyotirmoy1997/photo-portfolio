import './identity-card-about.styles.css'

const IDAbout = ({name, aboutString, socialHandles}) => {
    return (
        <div className="id-about">
            <h1>{name}</h1>
            <p>{aboutString}</p>
        </div>
    )
}

export default IDAbout