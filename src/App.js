import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { Route } from 'react-router-dom'

import Navbar from './navbar'
import Home from './Home'
import Aboutus from './aboutus'
import services from './services'
import Demo from '../src/demo'

class App extends Component {
  render() {
    return (
    
     <div className="App">
      <Navbar/>
      <Demo/>
    
        <Route
          exact path="/home"
          component={Home} />
        <Route
          exact path="/"
          component={Aboutus} />
        <Route
          exact path="/services"
          component={services} />
          <Route
          exact path="/demo"
          component={Demo} />
      </div>
      
  
    );
  }
}

export default App;
