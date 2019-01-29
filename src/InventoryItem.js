import React from 'react'

const InventoryItem = (props) => {
    return (
        <div key={props.item.id} className="product-div">
            <h1>{props.item.name}</h1>
            <p>{props.item.price}</p>
            <p>{props.item.description}</p>
        </div>
    )
}

export default InventoryItem
