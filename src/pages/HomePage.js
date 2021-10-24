import { useState, useEffect } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";
import BestsellerList from "../components/BestsellerList";

const HomePage = (props) => 
{   
    useEffect(()=>{ 
        fetch("http://localhost:4000/products")
        .then(response=>response.json())
        .then(json=>{
                props.setProducts(json.data)
        })
        .catch(err=>{
                console.log(`Error ${err}`)
            })
        }, [props.products]);

    useEffect(()=>{ 
        fetch("http://localhost:4000/products/categories")
        .then(response=>response.json())
        .then(json=>{
                props.setCategories(json.data)
        })
        .catch(err=>{
                console.log(`Error ${err}`)
            })
        }, [props.products, props.categories]);

        useEffect(()=>{ 
            fetch("http://localhost:4000/images")
            .then(response=>response.json())
            .then(json=>{
                    props.setCategoriesSrcImg(json.data)
            })
            .catch(err=>{
                    console.log(`Error ${err}`)
                })
            }, [props.products, props.categories, props.categoriesSrcImg]);

        useEffect(()=>{ 
            fetch("http://localhost:4000/products/?isBestseller=yes")
            .then(response=>response.json())
            .then(json=>{
                    props.setBestsellers(json.data)
            })
            .catch(err=>{
                    console.log(`Error ${err}`)
                })
            }, [props.products, props.categories, props.categoriesSrcImg, props.bestsellers])
        
        const [addSearchState, setAddSearchState] = useState(false);
        const toogleSearchBox = ()=>{
            setAddSearchState(!addSearchState)
    }
  
    return (
        <div>
            <Header onToogleSearchBox={toogleSearchBox} addSearchState={addSearchState}/>
            <main>
                <section>
                    <h3 className="section-title">All Products</h3>
                    <ProductList products={props.products}/>
                </section>                
                
                <section>
                    <h3 className="section-title">Brownse by category</h3>
                    <CategoryList categories={props.categories} categoriesSrcImg={props.categoriesSrcImg}/>
                </section>                

                <section>
                    <h3 className="section-title">Our bestsellers</h3>
                    <BestsellerList bestsellers={props.bestsellers}/>
                </section>                
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage