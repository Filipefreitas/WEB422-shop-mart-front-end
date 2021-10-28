import { useState, useEffect } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

const RegistrationPage = (props) => 
{
    const [addSearchState, setAddSearchState] = useState(false);

    const toogleSearchBox = ()=>{
      setAddSearchState(!addSearchState)
    }
  
    return (
        <div>
            <Header onToogleSearchBox={toogleSearchBox} addSearchState={addSearchState}/>
            <main>
            <h3 className="section-title">Registration</h3>
            </main>
            <Footer/>
        </div>
    )
}

export default RegistrationPage