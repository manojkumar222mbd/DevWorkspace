import React, { Component } from 'react';
import Product from '../product/product';
class ProductList extends Component {
  constructor(props){
    super();
    console.log(this.props);
    this.products = [{name:'iPhone',price:100000,
    model:'10x',
    description:"IPhone is an Awesome Phone"},
    {name:'Samsung',
    model:'j7',
    price:30000, description:"Samsung is an Awesome Phone"},
    {name:'Oppo',
    model:'ABCD',
    price:20000, description:"Oppo is an Awesome Phone"},]
  }
  render(){
      return (
          <div>
          {
              this.products.map(p =>{
              return <Product addItemToCart={this.props.addItemToCart} details={p}/>
            })
          }
          </div>
     
      )
  }
}

export default ProductList;
