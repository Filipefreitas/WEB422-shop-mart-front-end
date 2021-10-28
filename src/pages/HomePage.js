import { useState, useEffect } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";
import Hero from "../components/Hero";


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
        }, []);

    useEffect(()=>{ 
        fetch("http://localhost:4000/products/categories")
        .then(response=>response.json())
        .then(json=>{
                props.setCategories(json.data)
        })
        .catch(err=>{
                console.log(`Error ${err}`)
            })
        }, []);

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
            }, []);
    
        useEffect(()=>{ 
            fetch("http://localhost:4000/products/?isFeatured=yes")
            .then(response=>response.json())
            .then(json=>{
                    props.setFeaturedProducts(json.data)
            })
            .catch(err=>{
                    console.log(`Error ${err}`)
                })
            }, []);
  
    return (
        <div>
            <Header 
                onToogleSearchBox={props.onToogleSearchBox} addSearchState={props.addSearchState} 
                onFilter={props.onFilter}/>
            <main>
                <section>
                    <Hero onToogleSearchBox={props.onToogleSearchBox} addSliderState={props.addSliderState}/>                    
                </section>          

                <section>
                    <h3 className="section-title">All Products</h3>
                    <ProductList products={props.products}/>
                </section>                
                
                <section>
                    <h3 className="section-title">Brownse by category</h3>
                    <CategoryList categories={props.categories} categoriesSrcImg={props.categoriesSrcImg}/>
                </section>                

                <section>
                    <h3 className="section-title">Featured products</h3>
                    <ProductList products={props.featuredProducts}/>
                </section>                

                <section>
                    <h3 className="section-title">Our bestsellers</h3>
                    <ProductList products={props.bestsellers}/>
                </section>                
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage