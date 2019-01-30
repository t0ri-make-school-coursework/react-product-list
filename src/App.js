import React, { Component } from 'react'
import inventory, { categories } from './inventory'
import './App.css'
import InventoryItem from './InventoryItem'
import CategoryButton from './CategoryButton'
import Prices from './Prices'

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
                <CategoryButton key={category} category={category} onClick={() => this.categoryHandler(category)} currentState={this.state.currentCategory}/>
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

    getPrices() {
        let total = 0
        // total of all items
        return inventory.reduce((total, item) => {
            console.log(item.price)
            return total + Number(item.price);
        })
    }

    render() {
        return (
          <div className="App">
            <ul className="categories">
              {this.getCategories()}
              <CategoryButton category='All' onClick={() => this.setState({ currentCategory : null })} currentState={this.state.currentCategory}/>
            </ul>

            <ul className="items">
              {this.getItems()}
            </ul>

            <Prices total={this.getPrices()} />

          </div>
        );
        }
    }

export default App;
