import './category-card.styles.css'
import { categoryCardImages } from '../../assets/imageLinks'

const CategoryCard = () => {
    return(
        <div>
            {
                categoryCardImages.map((img) => {
                    return(
                        <div className='category-card'>
                            <img src={img} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoryCard