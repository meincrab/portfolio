import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import About from './About.js';
import ProjectView from './ProjectView.js';
import Footer from './Footer.js';
class App extends Component {
  render() {
    return (
      
   
      <div className="main"> 
      <Header></Header>
      <About></About>
      <ProjectView></ProjectView>
      <Footer></Footer>
      </div>
    )
  }
}

export default App;
