import { useState } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import RegistrationForm  from "../components/RegistrationForm ";

const RegistrationPage = (props) => 
{
    const [addSearchState, setAddSearchState] = useState(false);

    const toogleSearchBox = ()=>{
      setAddSearchState(!addSearchState)
    }
  
    return (
        <div> 
            <Header onToogleSearchBox={toogleSearchBox} addSearchState={addSearchState} onFilter={props.onFilter}/>
            <main>
               <RegistrationForm/>
            </main>
            <Footer/>
        </div>
    )
}

export default RegistrationPage
