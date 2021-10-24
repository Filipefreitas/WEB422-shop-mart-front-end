//import { useEffect } from 'react'
import React from 'react'
import CategoryItemCard from "./CategoryItemCard";
import Books from "../images/Books.jpg"
import Electronics from "../images/Electronics.jpg"
import HomeKitchen from "../images/Home & Kitchen.jpg"
import MusicalInstrument from "../images/Musical Instruments.jpg"

const CategoryList = (props) => {
    const SrcImages = [Books, Electronics, HomeKitchen, MusicalInstrument]
    /*
    const result1 = props.categories.filter(obj1 => props.categories);
    console.log(result1);

    const result2 = props.categoriesSrcImg.filter(obj2 => props.categoriesSrcImg);
    console.log(result2);

    const result = props.categories.filter(obj1 => props.categoriesSrcImg.some(obj2 => obj1 === obj2.categoryName));
    console.log(result)
    
  categorySrcImg={props.categoriesSrcImg.map((categorySrcImg)=>(
                        {categorySrcImg} === "Home & Kitchen" ? categorySrcImg.categorySrcImg : null))}

    {props.categoriesSrcImg.map((categorySrcImg,categoryIndex)=>(
        <CategoryItemCard key={categoryIndex} id={categorySrcImg._id} 
        categoryName={categorySrcImg.categoryName} 
        categorySrcImg={categorySrcImg.categorySrcImg}/>))}
    */

 
    return (
        <section>
            <div className = "grid grid-col-6 product-container horizontal-center">
                {props.categoriesSrcImg.map((categorySrcImg, categoryIndex)=>(
                    <CategoryItemCard key={categoryIndex} id={categorySrcImg._id} 
                    categoryName={categorySrcImg.categoryName} 
                    categorySrcImg={categorySrcImg.categorySrcImg}/>))}

                {props.categories.map((category, categoryIndex)=>(
                    <CategoryItemCard key={categoryIndex} id={category._id} name={category}
                    categorySrcImg = {category === props.categoryName ? props.categorySrcImg : null}
                    /*
                    categorySrcImg = {category === "Books" ? SrcImages[0] : (category === "Electronics" ? SrcImages[1] : (category === "Home & Kitchen" ? SrcImages[2] : SrcImages[3]))}     
                    */                    
                />))}                    
            </div>
        </section>
    )
}

export default CategoryList
    