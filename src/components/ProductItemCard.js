import React from 'react'
import {Link} from "react-router-dom"

const ProductItemCard = (props) => {
    
    return (
        <div className = "item-card">
            <Link to = {`/product/details/${props.id}`}> 
                <img src={props.srcImg} alt={props.title}/>   
            </Link> 

            <div className = "item-content">
                <h3 className="bold"> {props.name} </h3>
                <p id="price" className="price">Unit price: $ {props.price} </p>
            </div>
        </div>
    )
}

export default ProductItemCard
