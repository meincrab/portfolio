import React, { Component } from 'react';
import logo from './logo.svg';
import './About.css';
import profilePic from './images/pictureMe.jpeg';
import axios from 'axios';


class About extends Component {



  render() {
    return (
      <div className="about">
      <h1>About</h1>
        <div className="picWithText">
          <div className="profilePic">
            <img src={profilePic} alt="pic should be here"/>
          </div>
          <div className="textDiv">
            <p class="lead">Software engineering student.<br></br>
            Mostly focused on Web-Development.
            <br></br> Playing with embedded system from time to time.
            </p>
          </div>
        </div>

        <div className="skillset">
          <p>Front End: HTML/CSS/Javascript(React)</p>
          <div class="container">
            <div class="skills front">80%</div>
          </div>     
          <p>Back End: Node.js / ASP.NET</p>
          <div class="container">
            <div class="skills back">60%</div>
          </div>      
          <p>Robot Process Automation</p>
          <div class="container">
            <div class="skills rpa">60%</div>
          </div> 
          <p>Embedded Systems</p>
          <div class="container">
            <div class="skills embedded">60%</div>
          </div> 
          <p>DevOps</p>
          <div class="container">
            <div class="skills devops">40%</div>
          </div> 
               
        </div>
      </div>
    );
  }
}

export default About
