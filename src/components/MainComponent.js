import React, { Component } from 'react';


import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Project from './ProjectComponent';

import { PROJECTS } from '../shared/projects.js';

class Main extends Component {

    constructor(props){
      super(props);

      this.state = {
        projects: PROJECTS
      }
    }

    render() {  
      return (
        <React.Fragment>
          <Header/>
          <About />
          <Project projects={this.state.projects} />
          <Footer />
        </React.Fragment>
        
      );
    }
  }

  export default Main;