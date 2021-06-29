import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Get extends Component {
  
  constructor(props){
    super(props);
    this.state = {product: {}};
  }

  onIdChange = (e) => {
    this.setState({id:e.target.value});
  }

  getProduct(){
    const axios = require('axios');
    axios.get('http://localhost:8082/api/products/' + this.state.id)
    .then(res => {
      this.setState({product:res.data[0]});
    })

  }

  render(){
    return (
      <div>
        Enter product id: <input onChange={this.onIdChange}/>
        <button onClick={this.getProduct.bind(this)}>Get Product</button>
        <br/>
        Name: {this.state.product.name}
        <br/>
        Description: {this.state.product.description}
        <br/>
        Price: {this.state.product.price}
      </div>
    );
  }
}

export default Get;
