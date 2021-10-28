import React from 'react'
import {useState} from 'react'

const SearchBox = (props) => {
    
    const [searchBox, setSearchBox] = useState("");

    return (
        <section className={props.addSearchState ? "search-box-container" : "hide"}>
            <form action="">
                    <input className="search-box" type="text" id="title" 
                    value={searchBox} onChange={(event)=>{
                        setSearchBox(event.target.value)
                        props.onFilter(event.target.value)
                }}/>
            </form>
        </section>
    )            
}

export default SearchBox
