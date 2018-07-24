import React from 'react';
import Login from './Login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Items from './Items';
import List from './List';
import BooksList from './BooksList';
import Form from './Form'
import FormData from './SimpleFormDetails'
import { addArticle } from "../actions/action";
import store from '../store'

class Home extends React.Component{
    constructor(props) {
        super();
       
      }
     addNewArticle(){

        this.props.store.dispatch(addArticle('testArticle'))
    }
    render(){
     
        return (
        
            <div className="test">
                <h3 className="All-Actions ">{this.props.name}</h3> 
                <p> <Link to="/login">Login</Link>   </p>
                <p> <Link to="/userData">Saga Data</Link>   </p>
                <div className="row mt-5">
                <div className="col-md-4 offset-md-1">
                <h2>Articles</h2>
                <List />
                <h2>Books </h2>
                <BooksList />
                </div>
                <div className="col-md-4 offset-md-1">
                <h2>Add a new article</h2>
                <Form  />
                </div>
            </div>
            </div>
        )
    }
}

export default Home;