import { useState } from 'react'
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

  const [categories, setCategories] = useState([]);

  const [categoriesSrcImg, setCategoriesSrcImg] = useState([{}]);

  const [bestsellers , setBestsellers] = useState([{}]);

  const toogleSearchBox = ()=>{
    setAddSearchState(!addSearchState)
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage 
              onToogleSearchBox={toogleSearchBox} addSearchState={addSearchState} 
              products={products} setProducts={setProducts} 
              categories={categories} setCategories={setCategories}
              categoriesSrcImg={categoriesSrcImg} setCategoriesSrcImg={setCategoriesSrcImg}
              bestsellers={bestsellers} setBestsellers={setBestsellers}/>
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
