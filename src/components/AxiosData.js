
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import {updateUsers} from '../actions/action'
import store from '../store'




export default class Employees extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      //Api call
    // Axios is used for http calls
    // the main difference with Axis is that it will identify the all the HTTP 
    // error code as error which can be handled in catch and can be used for logging purpose.
    // the same things cant be handled with the fetch in react deafulat one.
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res =>{     
       
       this.setState({items:res.data, isLoaded: true}) ;

        //store.dispatch('UPDATE_USERS', res.data);
      })
      .catch(error => {
        console.log(error.message);
        this.setState({ error,isLoaded: true}) 
      });
   
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else {
        return (
         
          <ul>
             <Link to="/">Home</Link>   
            <li>Name Email</li>
            {items.map(item => (
              <li key={item.name}>
                {item.name} {item.email}
              </li>
            ))}
          </ul>
        );
      }
    }
  }