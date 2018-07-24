import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Items from './components/Items';
import SagaData from './components/SagaData';


class App extends Component {

 

  state={
    name:"Header",
    homeHeading :"All Actions"
  }

  switchNameHandler = ()=>{
    this.setState({
      homeHeading :"All Requests"
    })
  }
  
  
  render() {
 
    return (
      <Router>
      <Route path="/home" component={Home}/>
  </Router>,

     
      <div className="App">
       
        <Header name={this.state.name}></Header>
      
        {/* <button className="btn btn-primary" onClick={this.switchNameHandler}> Switch Name</button>        
      
         */}
        <Router>
       <div>
         {/* <ul>
           <li>
             <Link to="/home">Home</Link>
           </li>
           <li>
             <Link to="/login">Login</Link>
           </li>
           <li>
             <Link to="/topics">Topics</Link>
           </li>
         </ul>
     
         <hr /> */}
     
         <Route exact path="/" component={Home} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/users" component={Items} />
         <Route exact path="/userData" component={SagaData}/>
        
       </div>
     </Router>
      </div>
       
    );
  }
}

export default App;
