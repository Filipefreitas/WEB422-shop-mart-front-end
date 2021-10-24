import React from 'react'
import {useState} from 'react'

const SearchBox = (props) => {
    
    return (
        <section className={props.addSearchState ? "search-box-container" : "hide"}>
            <form action="">
                    <input className="form-control" type="text" id="title" />
            </form>
        </section>
    )            
}

export default SearchBox
