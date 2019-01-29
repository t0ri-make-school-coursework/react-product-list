import React, { Component } from 'react'
import inventory, { categories } from './inventory'
import './App.css'
import InventoryItem from './InventoryItem'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentCategory: null,
        }
    }

    categoryHandler(newCategory) {
        this.setState({ currentCategory: newCategory })
        inventory.filter((item) => {
            return item.category === this.state.currentCategory || this.state.currentCategory === null
        })
    }

    getCategories() {
        return categories.map((cat) => {
            return (
                <li key={cat}>
                    <button onClick={() => {this.categoryHandler(cat)}}>
                        {cat}
                    </button>
                </li>
            )
        }
    )}

    getItem() {
        return inventory.map((item) => {
            return <InventoryItem item={item}/>
        })
    }

    render() {
        return (
          <div className="App">
            <h1>Show products here</h1>

            <ul>
              {this.getCategories()}
            </ul>

            <ul>
              {this.getItem()}
            </ul>

          </div>
        );
        }
    }

export default App;
