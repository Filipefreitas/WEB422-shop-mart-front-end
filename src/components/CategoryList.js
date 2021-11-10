import React from 'react'
import CategoryItemCard from "./CategoryItemCard";

const CategoryList = (props) => {
        
    return (
        <section>
            <div className = "grid grid-col-6 product-container horizontal-center">
                {props.categories.map((category, index)=>(
                    <CategoryItemCard key={index} id={category._id} 
                        categoryName={category.categoryName} 
                        categorySrcImg={category.categorySrcImg} 
                />))}                    
            </div>
        </section>
    )
}

export default CategoryList
    