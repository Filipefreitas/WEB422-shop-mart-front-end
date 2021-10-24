import React from 'react'

const BestsellerItemCard = (props) => {
    
    return (
        <div className = "item-card">
            <img src={props.srcImg} alt={props.title}/>   
            <div className = "item-content">
                <p className="bold">
                    {props.name}
                </p>
                <p>
                    $ {props.price}
                </p>
            </div>
        </div>
    )
}

export default BestsellerItemCard
