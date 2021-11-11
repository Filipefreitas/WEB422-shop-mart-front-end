import React from 'react'
import {Link} from "react-router-dom"

const CategoryItemCard = (props) => {
    
    return (
        <div className = "item-card">
            <Link to = {`/category/products?category=${props.categoryName}`}>
                <div>   
                    {<img src={props.categorySrcImg} alt={props.categoryName}/>}
                </div>        
            </Link> 

            <div className="">
                <p className="bold">
                    {props.categoryName} 
                </p>
            </div>
        </div>
    )
}

export default CategoryItemCard
