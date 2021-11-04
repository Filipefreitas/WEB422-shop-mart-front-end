import React from 'react'
import {Link} from "react-router-dom";
import SearchBox from "./SearchBox"
import { FaSearch } from 'react-icons/fa';
import logo from "../images/logo_header.png"

import "../css/App.css"
import "../css/utilities.css"

const Header = (props) => {
    return (
        <header className="container top-nav-container logo top-nav grid grid-col-3-2 horizontal-center">            
            <div className="vertical-center">
                <Link to="/"><img src={logo}></img></Link>
            </div>
            <div className="vertical-center">
                <Link to="/products" className="top-nav-item no-decoration">Products</Link>
                <Link to="/registration" className="top-nav-item no-decoration">Sign Up</Link>
            </div>
            <div className="search-container vertical-center">
                    <SearchBox className = "left-alligned" 
                        addSearchState={props.addSearchState} 
                        onFilter={props.onFilter}/>
                    <FaSearch className= "icon right-alligned" onClick={()=>{props.onToogleSearchBox()}}/>
            </div>
        </header>
    )
}

export default Header
