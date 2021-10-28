import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import RegistrationPage  from "../pages/RegistrationPage";

import "../css/App.css"
import "../css/utilities.css"

const App = () => {

  const [products , setProducts] = useState([{}]);

  const [addSearchState, setAddSearchState] = useState(false);

  const [addSliderState, setAddSliderState] = useState(true);

  //this is to get the list of categories
  const [categories, setCategories] = useState([]);

  //this is to get src images
  const [categoriesSrcImg, setCategoriesSrcImg] = useState([{}]);

  const [bestsellers , setBestsellers] = useState([{}]);

  const [featuredProducts , setFeaturedProducts] = useState([{}]);

  const toogleSearchBox = ()=>{
    setAddSearchState(!addSearchState)
    setAddSliderState(!addSliderState)
  }
  
  const filterProducts = (input)=>{
    
    let newProducts = [{}]
    
    newProducts = products.filter((product)=>{
        return product.name.includes(input);
    })
    
    if(input === "")
    {
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
              categoriesSrcImg={categoriesSrcImg} setCategoriesSrcImg={setCategoriesSrcImg}
              bestsellers={bestsellers} setBestsellers={setBestsellers}
              featuredProducts={featuredProducts} setFeaturedProducts={setFeaturedProducts}
              onFilter={filterProducts}/> 
        </Route>

        <Route exact path="/products">
          <ProductsPage onToogleSearchBox={toogleSearchBox} addSearchState={addSearchState} products={products} setProducts={setProducts}/>
        </Route>

        <Route exact path="/registration">
          <RegistrationPage onToogleSearchBox={toogleSearchBox} addSearchState={addSearchState}/>
        </Route>
    </Switch>
  </Router>
  )
}

export default App;
