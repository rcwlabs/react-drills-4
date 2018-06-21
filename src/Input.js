import React, {Component} from 'react';

export default class Input extends Component {
  
  constructor(props) {
    
    super(props);
    
    this.state = {
      inputValue: '' 
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  
  handleInputChange(e) {
    e.preventDefault();
    this.setState({ inputValue: e.target.value });
    console.log(this.state.inputValue);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.onHandleAddItem(this.state.inputValue);
    this.setState({ inputValue: '' });
    
  }
  
  render() {
    
    const divStyle = {
      textAlign: 'center',
      margin: '10px auto',
      minWidth: '320px',
      maxWidth: '600px'
    }

    const inputStyle = {
      textAlign: 'center',
      padding: '10px',
      fontSize: '18px',
      borderRadius: '2px',
      border: '1px solid #ccc',
      width: '80%'
    }

    const btnStyle = {
      fontSize: '18px',
      backgroundColor: '#B3E5FC',
      color: '#000',
      padding: '10px 5px',
      margin: '3px',
      border: '1px solid #bbb',
      boxShadow: '1px 1px 3px #ccc',
      cursor: 'pointer'
    }
    
    return(
      <div style={divStyle} >
        <form>
          <input 
            value={this.state.inputValue} 
            onChange={(e) => this.handleInputChange(e)} 
            style={inputStyle} 
            type='text' 
          />
          <button  
            onClick={(event) => this.handleSubmit(event)} 
            style={btnStyle}>
              Add
          </button>
        </form>
      </div>
    );

  }
  
}