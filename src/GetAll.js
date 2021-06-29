import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class GetAll extends Component {
  
  constructor(props){
    super(props);
    this.state = {products: []};
  }
  componentDidMount(){
    const axios = require('axios');
    axios.get('http://localhost:8082/api/products')
    .then(res => {
      console.log(res.data);
      this.setState({products: res.data});
    }).catch(error => {
      console.error('Error',error);
    })
  }

  render(){
    return (
      <div>
          <h1>Products :</h1>
      </div>
    );
  }
}

export default GetAll;
