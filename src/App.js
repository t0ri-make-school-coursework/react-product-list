import React, { Component } from 'react'
import inventory, { categories } from './inventory'
import './App.css'

class App extends Component {

    getCategories() {
        return categories.map((cat) => <li key={cat}><button>{cat}</button></li>)
    }

    getInventory() {
        return inventory.map(({id, name, price}) => {
            return (
                <div key={id}>
                    <h1>{name}</h1>
                    <p>{price}</p>
                </div>
            )
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
              {this.getInventory()}
            </ul>

          </div>
        );
        }
    }

export default App;
