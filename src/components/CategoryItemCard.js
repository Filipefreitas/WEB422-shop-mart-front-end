import React from 'react'

const CategoryItemCard = (props) => {
    
    return (
        <div className = "item-card">
            <div className="">
                <div>
                    {<img src={props.categorySrcImg} alt={props.categoryName}/>}
                </div>        
                <p className="bold">
                    {props.categoryName} 
                </p>
            </div>
        </div>
    )
}

export default CategoryItemCard
