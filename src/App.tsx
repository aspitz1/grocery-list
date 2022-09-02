import React, { Component } from 'react';
import Form from './Form';
import List from './List';

type AppState = {
  groceryItems: string[]
}

class App extends Component<{}, AppState> {
  constructor() {
    super({});
    this.state = {
      groceryItems: []
    }
  }

  submitGroceryItem = (groceryItem: string) => {
    this.setState({ groceryItems: [...this.state.groceryItems, groceryItem] })
  }

  render() {
    return (
      <main>
        <h1>Grocery List</h1>
        <Form submitGroceryItem={this.submitGroceryItem}/>
        <List groceryItems={this.state.groceryItems}/>
      </main>
    )
  }
}

export default App;
