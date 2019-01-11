import projects from '../data/projects.json';
import React, { Component } from 'react';
import Project from './Project';



class Projects extends Component {
  constructor(){
    super();
    this.state = {
      projects: projects.allProjects
    }
  }

  render() {
    return(
    <div>
    { this.state.projects.map( (project, i) => {
      return <Project title={project.title} key={i} imgName={project.imgName} description={project.description} />
    })
    }
    </div>
  )
}

}

export default Projects;
