import React, {Component} from 'react';
import List from './List';
import Input from './Input';

export default class App extends Component {
  
  constructor() {
    
    super();
    
    this.state = { 
      items: [ {item: 'Beer', checked: false} ],
      searchBar: ''
    };

  }
  
  handleAddItem(item) {
    this.setState({
      items: [
        ...this.state.items, 
        {item, checked: false}
      ]
    });
  }
  
  render() {
    
    const appStyle = {
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }
    
    return(
      <div style={appStyle}>
        <h1>Add an item to your list...</h1>
        <Input onHandleAddItem={(item) => this.handleAddItem(item)} />
        <List items={this.state.items} />
      </div>
    );
    
  }
}