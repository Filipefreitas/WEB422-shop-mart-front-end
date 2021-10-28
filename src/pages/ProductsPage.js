import { useState, useEffect } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList  from "../components/ProductList";

const ProductsPage = (props) => 
{  
    return (
        <div>
            <Header onToogleSearchBox={props.onToogleSearchBox} addSearchState={props.addSearchState}/>
            <main>
                <h3 className="section-title">All Products</h3>
                <ProductList products={props.products}/>
            </main>
            <Footer/>
        </div>
    )
}

export default ProductsPage