
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Employees from './AxiosData'
import UserPost from './AxiosPostUser'




export default class Items extends React.Component {
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
      fetch("https://jsonplaceholder.typicode.com/users")     
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
         <div>
          <ul>
             <Link to="/">Home</Link>   
            <li>Name Email</li>
            {items.map(item => (
              <li key={item.name}>
                {item.name} {item.email}
              </li>
            ))}
          </ul>
          {/* this is with Axios-- without react Sega. */}
          <Employees/>
          <UserPost />
          </div>
        );
      }
    }
  }