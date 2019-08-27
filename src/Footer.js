import React, { Component } from 'react';
import './Footer.css'


class Footer extends Component {

  render() {
    return (
     <div className="footer">
        <h1>Contact Info</h1>
        <div className="contactInfo">
            <a href="https://www.linkedin.com/in/andreev-alexander/"><h3>Linkedin</h3></a>
            <a href="https://gitlab.com/meincrab/"><h3>GitLab</h3></a>     
            <a href="https://drive.google.com/file/d/19kTKcRoyhsYPiU-lugvHFJSoVbXWt0oS/view"><h3>CV</h3></a>     
        </div>
     </div>
    );
  }
}

export default Footer
