import React, { Component } from 'react'

export default class CategoryButton extends Component {
    checkClass() {
        if (this.props.category === this.props.currentState) {
            return 'selected'
        } else if (this.props.currentState === null && this.props.category === 'All') {
            return 'selected'
        }
    }
    render() {
        let category = this.props.category

        return (
            <li key={category}>
                <button onClick={this.props.onClick} className={this.checkClass()}>
                    {category}
                </button>
            </li>
        )
    }
}
