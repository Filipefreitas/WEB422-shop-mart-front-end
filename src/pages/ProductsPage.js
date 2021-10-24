import { useState, useEffect } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList  from "../components/ProductList";

const ProductsPage = (props) => 
{
    const [addSearchState, setAddSearchState] = useState(false);
    const toogleSearchBox = ()=>{
    setAddSearchState(!addSearchState)
    }
  
    return (
        <div>
            <Header onToogleSearchBox={toogleSearchBox} addSearchState={addSearchState}/>
            <main>
                <h2>All Products</h2>
                <ProductList products={props.products}/>
            </main>
            <Footer/>
        </div>
    )
}

export default ProductsPage