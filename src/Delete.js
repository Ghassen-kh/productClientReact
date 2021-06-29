import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Delete extends Component {
  
  constructor(props){
    super(props);
    this.state = {product: {}};
  }

  onIdChange = (e) => {
    this.setState({id:e.target.value});
  }

  deleteProduct(){
    const axios = require('axios');
    axios.delete('http://localhost:8082/api/products/' + this.state.id)
    .then(res => {
      console.log(res.data);
    })

  }

  render(){
    return (
      <div>
        Enter product id: <input onChange={this.onIdChange}/>
        <button onClick={this.deleteProduct.bind(this)}>Delete Product</button>
      </div>
    );
  }
}

export default Delete;
