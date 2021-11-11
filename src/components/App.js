import { React, useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
   useLocation
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import RegistrationPage  from "../pages/RegistrationPage";
import ProductDescriptionPage  from "../pages/ProductDescriptionPage";
import ProductsCategoryPage  from "../pages/ProductsCategoryPage";

import "../css/App.css"
import "../css/utilities.css"

const App = (props) => {

  const [products , setProducts] = useState([{}]);

  const [addSearchState, setAddSearchState] = useState(false);

  const [addSliderState, setAddSliderState] = useState(true);

  const [categories, setCategories] = useState([{}]);

  const [bestsellers , setBestsellers] = useState([{}]);

  const [featuredProducts , setFeaturedProducts] = useState([{}]);

  /*
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const category = searchParams.get("category");
  */
  const [productsByCategory, setProductsByCategory] = useState({})

  const toogleSearchBox = ()=>{
    setAddSearchState(!addSearchState)
    setAddSliderState(!addSliderState)
  }
  
  const filterProducts = (input)=>{
    
    let newProducts = [{}]
    
    if(input !== "")
    {
      newProducts = products.filter((product)=>{
        return product.name.includes(input);
      })
    }
    else
    {
      //find out a way
    }    

    setProducts(newProducts);
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage 
              onToogleSearchBox={toogleSearchBox} addSearchState={addSearchState} addSliderState={addSliderState} 
              products={products} setProducts={setProducts} 
              categories={categories} setCategories={setCategories}
              bestsellers={bestsellers} setBestsellers={setBestsellers}
              featuredProducts={featuredProducts} setFeaturedProducts={setFeaturedProducts}
              onFilter={filterProducts}/> 
        </Route>

        <Route exact path="/products">
          <ProductsPage onToogleSearchBox={toogleSearchBox} addSearchState={addSearchState} products={products} setProducts={setProducts} onFilter={filterProducts}/>
        </Route>

        <Route exact path="/products?category={category}">
          <ProductsCategoryPage onToogleSearchBox={toogleSearchBox} addSearchState={addSearchState} products={productsByCategory} setProducts={setProductsByCategory} onFilter={filterProducts}/>
        </Route>

        <Route exact path="/registration">
          <RegistrationPage onToogleSearchBox={toogleSearchBox} addSearchState={addSearchState} onFilter={filterProducts}/>
        </Route>

        <Route exact path= "/product/details/:id">
          <ProductDescriptionPage onToogleSearchBox={toogleSearchBox} addSearchState={addSearchState} onFilter={filterProducts}/>   
        </Route>
    </Switch>
  </Router>
  )
}

export default App;
