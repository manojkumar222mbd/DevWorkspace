import React, { Component } from 'react';
import  axios  from 'axios';
import PropTypes from 'prop-types';
class Register extends Component {
    constructor(props){
            super();
            this.state = {
                register:{
                    username:'',
                    password:'',
                    country:'US',
                    gender:''
                },
                countryList:[]
            }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }
    handleInputChange(event){
        let state = this.state;
        this.state.register[event.target.name]= event.target.value;
        this.setState(state);
        console.log(this.state);
    }
    registerUser(event){
        console.info('User Details', this.state.register);
        event.preventDefault();
    }

  render(){
      return (
        <form>
            <div className="form-group row">
                <label  className="col-sm-2 col-form-label">User Name</label>
                <div className="col-sm-10">
                <input type="text" 
                        name='username' 
                        className="form-control" 
                        id="username" 
                        placeholder="User Name"
                        onChange={this.handleInputChange}/>
                </div>
            </div>
            <div className="form-group row">
                <label for="inputPassword" 
                   className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                <input type="password"
                    name ='password'
                    className="form-control"
                    id="inputPassword" 
                    onChange={this.handleInputChange}
                    placeholder="Password"/>
                </div>
            </div>
            <div className="form-group row">
                <label  
                   className="col-sm-2 col-form-label">Gender</label>
                <div className="col-sm-10">
                    <input type='radio' onChange={this.handleInputChange}
                    name='gender' value='M'/>Male
                    <input type='radio' onChange={this.handleInputChange}
                    name='gender' value='F'/>Female
                </div>
            </div>
            <div className="form-group row">
                <label for="inputPassword" 
                   className="col-sm-2 col-form-label">Country</label>
                <div className="col-sm-10">
                    <select name='country' 
                        className='form-control'
                       value={this.state.register.country} onChange ={this.handleInputChange}>
                        {this.state.countryList.map(c=>{
                            return <option value={c.value}>{c.name}</option>
                        })}
                    </select>
                </div>
            </div>
            <button class="btn btn-primary" onClick={this.registerUser}>Register</button>
        </form>
      ) 
  }

  componentDidMount(){
      //this is place we need to write the backend api calls.
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(result=>{
        console.log(result);
        let x = this.state;
        x['countryList'] = result.data.map(x=>{return {name:x.name,value:'alpha2Code'}});
        this.setState(x);
    })
    .catch(err=>{
        console.log(err);
    });
  }

}

export default Register;
