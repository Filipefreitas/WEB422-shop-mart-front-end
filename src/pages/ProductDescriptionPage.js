import Header from "../components/Header";
import Footer from "../components/Footer";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom"

const ProductDescriptionPage = (props) => {

    const {id} = useParams();

    const [product, setProduct] = useState({
        name:"",
        srcImg:"",
        category: {
            categoryName: "",
            categorySrcImg: ""
        },
        isBestseller: "",
        description:"",
        price: 0
    })

    useEffect(()=>{

        fetch("http://localhost:4000/products/"+id)
        .then(response=>response.json())
        .then(json=>{    
              setProduct(json.data);
        })
        .catch(err=>{
            console.log(`Error ${err}`)
        })
    
    },[])


    return (
    <div className="grid">  
        <Header onToogleSearchBox={props.onToogleSearchBox} addSearchState={props.addSearchState} onFilter={props.onFilter}/>
        <main>
            <section id="product-detail">
                    <div className="container grid grid-col-2-2">
        
                        <img className="horizontal-center" src={product.srcImg} alt={product.name}/>

                        <div className="product-description-content-area">
                            <h2>{product.name}</h2>
                            
                            <p>Unit price: ${product.price}</p>
                            <p className="bold description-info">Product Information</p>
                            <p>{product.description}</p>
                            <p className="bold description-info">Product category</p>
                            <p>{product.category.categoryName}</p>
                            <p className="bold description-info">Is this a bestseller?</p>
                            <p>{product.isBestseller? "Yes" : "No"} </p>
                        </div>
                    </div>
        
                </section>
        </main>
        <Footer/>
    </div>
    )
}

export default ProductDescriptionPage