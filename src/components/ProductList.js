import React from 'react'
import ProductItemCard from "./ProductItemCard";

const ProductList = (props) => {

    return (
        <section>
            <div className = "product-container horizontal-center">
                <div className = "grid grid-col-4">
                    {props.products.map((product,index)=>(
                        <ProductItemCard key={index} id={product._id} 
                            srcImg={product.srcImg}    
                            name={product.name}
                            description={product.description} 
                            price={product.price}/>))}
                </div>
            </div>
        </section>
    )
}

export default ProductList
    