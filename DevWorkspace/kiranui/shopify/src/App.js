import React, { Component } from 'react';
import Header from './components/header/header';
import ProductList from './components/productlist/productlist';
import Register from './components/register/register';
import {HeaderModel} from './models/header.model';
import Form from './components/forms/forms';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      cartCount:0
    }
    this.headerDetails= HeaderModel;
    this.updateCartCount = this.updateCartCount.bind(this);
  }
  updateCartCount(){
   // alert("I am in the app.js");
    //updating the cart coutn.
    let localState = this.state;
    localState ['cartCount'] =localState.cartCount+1;
    this.setState(localState);

  }

  render(){
    return (
    <Router>
    <div className='container'>
                 <Header model={this.headerDetails} cartcount={this.state.cartCount}/>
                 <br/>
                 <Route exact path="/" component= {Form} />
                 <Route  path='/products' component={ProductList} />
                 <Route  path='/signup' component={Form} />
                 <Form  default/>
             </div>
      </Router>
        )
  }
}

export default App;
