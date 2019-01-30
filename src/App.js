import React, { Component } from 'react'
import inventory, { categories } from './inventory'
import './App.css'
import InventoryItem from './InventoryItem'
import CategoryButton from './CategoryButton'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentCategory: null,
        }
    }

    categoryHandler(newCategory) {
        this.setState({ currentCategory: newCategory })
    }

    getCategories() {
        return categories.map((category) => {
            return (
                <CategoryButton category={category} onClick={() => this.categoryHandler(category)}/>
            )
        }
    )}

    getItems() {
        return inventory.filter((item) => {
            return item.category === this.state.currentCategory || this.state.currentCategory === null
        }).map((item) => {
            return <InventoryItem item={item} />
        })
    }

    render() {
        return (
          <div className="App">
            <h1>Show products here</h1>

            <ul className="categories">
              {this.getCategories()}
              <CategoryButton category='All' onClick={() => this.setState({ currentCategory : null })} />
            </ul>

            <ul className="items">
              {this.getItems()}
            </ul>

          </div>
        );
        }
    }

export default App;
