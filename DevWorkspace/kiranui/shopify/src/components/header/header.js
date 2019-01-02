import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
  constructor(props){
    super();
    console.log(this.props);
  }

  render(){
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="#">{this.props.model.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
        
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/products">Products</Link>
        </li>
       
      </ul>
    </div>
  </nav>
           )
  }
}

export default Header;
