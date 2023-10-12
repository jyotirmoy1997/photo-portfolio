import { Route, Routes } from "react-router-dom";
import Gallery from "../../components/gallery/gallery.component";
import Category from "../../components/category/category.component";


const GalleryRoute = () => {
    return(
        <Routes>
            <Route index element={<Gallery/>} />
            <Route path=":category" element={<Category/>}/>
        </Routes>
    )
}

export default GalleryRoute