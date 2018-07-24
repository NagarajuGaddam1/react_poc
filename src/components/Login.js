import React from 'react';
import Home from './Home';
import store from '../store'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import SimpleForm from './SimpleForm'
import { Field, reduxForm } from 'redux-form'
import FormData from './SimpleFormDetails'



class Login extends React.Component{

    constructor(props){
        super(props);
        //this.onSubmit = this.handleSubmit.bind(this);
      
    }
      
    handleSubmit = (values) => {
        // Do something with the form values
        console.log(values);
       
      
      }
    render(){
        return (
            
            <div >
                 <h1>{this.props.name}</h1>
                 <h3 className="All-Actions ">Login Page</h3> 
                 <Link to="/">Home</Link>
                 <br/>   
                 <Link to="/users"><button className="btn btn-primary">Feth Users from API</button></Link> 
                 <SimpleForm onSubmit={this.handleSubmit}/>
                 <br/>
                <FormData />
            </div>
        )
    }
}

export default Login;