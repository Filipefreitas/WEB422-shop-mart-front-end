import React from 'react'
import BestsellerItemCard from "./BestsellerItemCard";

const ProductList = (props) => {

    return (
        <section>
            <div className = "product-container horizontal-center">
                <div className = "grid grid-col-4">
                    {props.bestsellers.map((bestsellers,index)=>(
                        <BestsellerItemCard key={index} id={bestsellers._id} 
                            srcImg={bestsellers.srcImg}    
                            name={bestsellers.name}
                            description={bestsellers.description} 
                            price={bestsellers.price}/>))}
                </div>
            </div>
        </section>
    )
}

export default ProductList
    