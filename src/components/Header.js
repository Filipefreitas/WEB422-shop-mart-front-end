import React from 'react'
import {Link} from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import SearchBox from "./SearchBox"

import "../css/App.css"
import "../css/utilities.css"

const Header = (props) => {
    return (
        <header className="container top-nav grid grid-col-3-2 horizontal-center">            
            <div>
                <p>Logo goes here</p>
            </div>
            <div>
                <Link to="/products" className="top-nav">Products</Link>
                <Link to="/registration" className="top-nav">Register</Link>
            </div>
            <div>
                <SearchBox addSearchState={props.addSearchState}/>
                <FaSearch onClick={()=>{props.onToogleSearchBox()}}/>
            </div>
        </header>
    )
}

export default Header
