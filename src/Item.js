import React from 'react';

export default function Item(props) {
  
  const divStyle = {
    height: '20px',
    backgroundColor: '#B3E5FC',
    padding: '8px',
    margin: '10px',
    border: '1px solid #bbb',
    boxShadow: '1px 1px 3px #ccc',
    cursor: 'pointer'
  }
  
  const pStyle = {
    margin: '0',
    fontSize: '18px'
  }
  
 return(
   <div style={divStyle}>
     <p style={pStyle}>{props.item}</p>
   </div>
 );
}