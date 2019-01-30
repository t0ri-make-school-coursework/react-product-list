import React, { Component } from 'react'

export default class CategoryButton extends Component {
    render() {
        let category = this.props.category

        return (
            <li key={category}>
                <button onClick={this.props.onClick()}>
                    {category}
                </button>
            </li>
        )
    }
}
