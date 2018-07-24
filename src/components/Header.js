import React from 'react';
import logo from '../logo.svg';
import '../App.css';

 class Header extends React.Component{
    render(){
    return (
    <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="App-title">Volume Licensing - Unified User Management Service</h1>
      </header>
    )
  }
  }
export default Header;
