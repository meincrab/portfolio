import React, { Component } from 'react';
import './Footer.css'


class Footer extends Component {

  render() {
    return (
     <div className="footer">
        <h1>Contact Info</h1>
        <div className="contactInfo">
            <a href="https://www.linkedin.com/in/andreev-alexander/"><h3>Linkedin</h3></a>
            <br></br>
            <a href="https://github.com/meincrab/"><h3>GitLab</h3></a>     
            <br></br>
            <a href="https://drive.google.com/file/d/13nso6K5BT3ykeRWanOYPJjJkJAA71yR0/view?usp=sharing"><h3>CV</h3></a>     
        </div>
     </div>
    );
  }
}

export default Footer
