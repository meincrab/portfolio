import React, { Component } from 'react';
import logo from './logo.svg';
import projectData from './projects.json';
import Slider from "react-slick";
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import './ProjectView.css';


class ProjectView extends Component {


  render() {
      const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        dots: true
      };

        const projectsTemplate = projectData.projects.map(function(item, index){
        return (
          <div className="projectBox" key={index}>
            <a href={item.projectUrl}>
            <img className="projectImage" src={require(`${item.imageUrl}`)} alt="product" width="50" height="50"/>
            </a>
            <p className="title"> {item.title}</p>
            <p className="description"> {item.description}</p>
            <p className="status"> Status: {item.status}</p>
          </div>
        )
        })
    return (   
      <div className="projectList">
      <h1>Projects</h1>
         <Slider {...settings}>
            {projectsTemplate}
           </Slider>
      </div>    
    );
}}

export default ProjectView