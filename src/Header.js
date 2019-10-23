import React, { Component } from 'react';
import './Header.css';
import Particles from 'react-particles-js';


class Header extends Component {


  render() {
    return (
      <div>
        <header>
          <p>Hello, I'm Alexander.  I'm a developer</p>
          <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 100
	        },
	        "size": {
	            "value": 7
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            }
	        }
	    }
	}} />
        </header>
   
      </div>
      
    );
  }
}

export default Header