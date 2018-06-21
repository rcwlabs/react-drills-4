import React, {Component} from 'react';
import Item from './Item';

export default class App extends Component {
 constructor(props) {
  super(props);
   
 }
  
  render() {
    
    const listStyle = {
      width: '90%',
      maxWidth: '600px',
      margin: '0 auto',
      border: '0',
      padding: '0',
      backgroundColor: '#fff'
    }
    
    const items = this.props.items.map((item, index) => {
      return <Item key={index} {...item} />;
    });
  
    
     return(
       <div style={listStyle}>
       {items}
       </div>
     );
  }
}