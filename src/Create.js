import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Create extends Component {
  
  constructor(props){
    super(props);
    this.state = {product: {}};
  }

  onIdChange = (e) => {
    this.setState({id:e.target.value});
  }

  onNameChange = (e) => {
    this.setState({name:e.target.value});
  }
  onDescriptionChange = (e) => {
    this.setState({description:e.target.value});
  }
  onPriceChange = (e) => {
    this.setState({price:e.target.value});
  }

  createProduct(event){
    const axios = require('axios');
    axios.post('http://localhost:8082/api/products/',{id:this.state.id,name: this.state.name,
              description:this.state.description,
              price:this.state.price})
              .then(res => {
                console.log(res.data);
              })

  }


  render(){
    return (
      <div>
        Enter ID: <input onChange={this.onIdChange}/><br/>
        Enter product name: <input onChange={this.onNameChange}/><br/>
        Enter product description: <input onChange={this.onDescriptionChange}/><br/>
        Enter product price: <input onChange={this.onPriceChange}/><br/>
        <button onClick={this.createProduct.bind(this)}>Create Product</button>
      </div>
    );
  }
}

export default Create;
