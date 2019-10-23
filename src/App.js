import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import './App.css';
import Header from './Header.js';
import About from './About.js';
import ProjectView from './ProjectView.js';
import Footer from './Footer.js';
const TITLE = 'Portfolio';
class App extends Component {
  render() {
    return (
      <div className="main"> 
       <Helmet>
          <meta charSet="utf-8" />
          <title>{ TITLE }</title>
        </Helmet>
        <Header></Header>
        <About></About>
        <ProjectView></ProjectView>
        <Footer></Footer>
      </div>
    )
  }
}
export default App;
