import React, { Component } from 'react';

class Product extends Component {
  constructor(props){
    super();
    console.log(this.props);
    this.addToCart = this.addToCart.bind(this);

  }

  addToCart(){
      //alert('I am adding');
      this.props.addItemToCart();

  }
  componentDidMount(){
    this.timer = setInterval(()=>{
      console.log("I am called");
    },1000)
  }
  componentWillUnmount(){
    console.log("------------Unmounting------");
    clearInterval(this.timer);
  }
  render(){
      return (
        <div className="card border-primary mb-3">
        <div className="card-header">{this.props.details.name}</div>
        <div className="card-body">
          <h4 className="card-title">{this.props.details.model}</h4>
          <p className="card-text">{this.props.details.description}</p>
          <button className="btn btn-primary" onClick = {this.addToCart}>Add To Cart </button>
        </div>
      </div>
      )
  }
}

export default Product;
