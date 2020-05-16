import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {Row, Col} from 'reactstrap';

import 'react-vertical-timeline-component/style.min.css';
import { FilterFrames } from '@material-ui/icons';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';

import '../assets/css/now-ui-kit.min.css';
import './project_styles.css';

function ProjectView({ projects }) {
    const project = projects.map((project) => {
        var btn1 = null;
        var btn2 = null;
        var icon = null;
        if(project.buttons.Demo === false){
            btn1 = 'Github';
            btn2 = 'Screenshots';
        } else{
            btn1 = 'Demo';
            btn2 = 'Github';
        }

        if(project.subtitle === 'certification'){
            btn1 = 'Certificate';
            btn2 = 'Github';
        }
        
        if(project.icon === 'WorkIcon'){
            icon = <WorkIcon />
        } else if (project.icon === 'FilterFrame'){
            icon = <FilterFrames />
        } //else if (project.icon === 'StarIcon'){
        //    icon = <StarIcon />
        //} } else if (project.icon === 'FilterFrame'){
        //     icon = <FilterFrames />
        // }
        
        return(
            <VerticalTimelineElement
                key={project.id} 
                className={project.className}
                date={project.date}
                iconStyle={{ background: 'rgb(243, 33, 79)', color: '#fff' }}
                icon={icon}
            >
                <p className="vertical-timeline-element-subtitle">
                    <span className="languages">{ project.languages[0] }</span>
                    <span className="languages">{ project.languages[1] }</span>
                </p>
                <h3 className="vertical-timeline-element-title">
                    {project.title}
                </h3>
                <p>{ project.description }</p>
                <p className="vertical-timeline-element-subtitle">
                    <a className="pro" href={project.buttons.btn1} target="_blank"><button className="btn"><span>{btn1}</span></button></a>
                    <a className="pro" href={project.buttons.btn2} target="_blank"><button className="btn"><span>{btn2}</span></button></a>
                </p>
            </VerticalTimelineElement>
        );
    })

    return(
        <Row>
            <Col md="3">
              <div className="icons-nucleo">
                <i className="first-left-icon now-ui-icons ui-1_send"></i>
                <i className="second-left-icon now-ui-icons ui-2_like"></i>
                <i className="third-left-icon now-ui-icons transportation_air-baloon"></i>
                <i className="fourth-left-icon now-ui-icons text_bold"></i>
                <i className="fifth-left-icon now-ui-icons tech_headphones"></i>
                <i className="sixth-left-icon now-ui-icons emoticons_satisfied"></i>
                <i className="seventh-left-icon now-ui-icons shopping_cart-simple"></i>
                <i className="eighth-left-icon now-ui-icons objects_spaceship"></i>
                <i className="ninth-left-icon now-ui-icons media-2_note-03"></i>
                <i className="tenth-left-icon now-ui-icons ui-2_favourite-28"></i>
              </div>
            </Col>
            <div className="col-lg-6">
                <VerticalTimeline>
                    {project}
                </VerticalTimeline>
            </div>

        </Row>
        
    );

}

class Project extends Component {

    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props.projects);
        return(
            <React.Fragment>
                <div className="">
                    <div className="bbg-project">
                        <h1>PROJECTS</h1>
                    </div>
                    <div className="bbbg-project">
                        
                    </div>
                    <div className="container-fluid mm">
                        <h1>Projects</h1>
                    </div>
                    <div className=" bg-primary container-fluid">
                        <ProjectView projects={this.props.projects} />
                    </div>


                </div>
            </React.Fragment>
        );
    }
}

export default Project;