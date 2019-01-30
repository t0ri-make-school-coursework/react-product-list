import React, { Component } from 'react'

export default class InventoryItem extends Component {
    render() {
        return (
            <div key={this.props.item.id} className="product-div">
                <h1>{this.props.item.name}</h1>
                <p>{this.props.item.price}</p>
                <p>{this.props.item.description}</p>
            </div>
        )
    }
}
