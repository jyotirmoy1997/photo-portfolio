import { useParams } from "react-router"
import { Fragment } from "react"
import BBS from "../../routes/bibahoscapes/bbs.routes"
import BStand from "../../routes/brandstand/bstand.routes"
import MPedia from "../../routes/mediapedia/mp.routes"
import PP from "../../routes/pixelperfect/pp.routes"

const Category = () => {
    const { category } = useParams()
    if(category === "bibahoscapes"){
        return(
            <Fragment>
                <BBS/>
            </Fragment>
            
        )
    }
    else if(category === "mediapedia"){
        return(
            <Fragment>
                <MPedia/>
            </Fragment>
            
        )
    }
    else if(category === "pixelperfect"){
        return(
            <Fragment>
                <PP/>
            </Fragment>
            
        )
    }
    else if(category === "brandstand"){
        return(
            <Fragment>
                <BStand/>
            </Fragment>
            
        )
    }
    else{
        return(
            <Fragment>
                <h1>Not Found</h1>
            </Fragment>
            
        )
    }
}

export default Category