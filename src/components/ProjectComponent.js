import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import { FilterFrames } from '@material-ui/icons';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';

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
                <p className="descrp">{ project.description }</p>
                <p className="vertical-timeline-element-subtitle">
                    <a className="pro" href={project.buttons.btn1} target="_blank" rel="noopener noreferrer"><button className="btn"><span>{btn1}</span></button></a>
                    <a className="pro" href={project.buttons.btn2} target="_blank" rel="noopener noreferrer"><button className="btn"><span>{btn2}</span></button></a>
                </p>
            </VerticalTimelineElement>
        );
    })

    return(
        <div className="row">
            <div className="display-icon col-md-2">
              <div className="icons-nucleo text-white">
                <i className="first-left-icon fa fa-paper-plane"></i>
                <i className="second-left-icon fa fa-thumbs-up"></i>
                <i className="third-left-icon fa fa-shopping-cart"></i>
                <i className="fourth-left-icon fa fa-heart"></i>
                <i className="fifth-left-icon fa fa-headphones"></i>
                <i className="sixth-left-icon fa fa-rocket"></i>
                <i className="seventh-left-icon fa fa-smile-o"></i>
                <i className="eighth-left-icon fa fa-star-o"></i>
                <i className="ninth-left-icon fa fa-key"></i>
                <i className="tenth-left-icon fa fa-music"></i>
                <i className="onefirst-left-icon fa fa-anchor"></i>
                <i className="onesecond-left-icon fa fa-gamepad"></i>
                <i className="onethird-left-icon fa fa-lightbulb-o"></i>
                <i className="onefourth-left-icon fa fa-heart"></i>
                <i className="onefifth-left-icon fa fa-heart"></i>

              </div>
            </div>

            <div className=" col-md-8">
                <VerticalTimeline>
                    {project}
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<StarIcon />}
                    />
                </VerticalTimeline>            
            </div>
            {/* <a href="https://github.com/Mehul2205" target="_blank" rel="noopener noreferrer"><StarIcon /></a> */}
            <div className="display-icon col-md-2">
              <div className="icons-nucleo text-white">
                <i className="first-right-icon fa fa-plane"></i>
                <i className="second-right-icon fa fa-snowflake-o"></i>
                <i className="third-right-icon fa fa-bitcoin"></i>
                <i className="fourth-right-icon fa fa-youtube-play"></i>
                <i className="fifth-right-icon fa fa-heart"></i>
                <i className="sixth-right-icon fa fa-twitter"></i>
                <i className="seventh-right-icon fa fa-heart"></i>
                <i className="eighth-right-icon fa fa-instagram"></i>
                <i className="ninth-right-icon fa fa-star"></i>
                <i className="tenth-right-icon fa fa-facebook"></i>
                <i className="onefirst-right-icon fa fa-heart"></i>
                <i className="onesecond-right-icon fa fa-rupee"></i>
                <i className="onethird-right-icon fa fa-cog"></i>
                <i className="onefourth-right-icon fa fa-heart"></i>
                <i className="onefifth-right-icon fa fa-github"></i>
              </div>
            </div>
        </div>
        
    );

}

class Project extends Component {

    render() {
        console.log(this.props.projects);
        return(
            <React.Fragment>
                <div id="PROJECTS">
                    <div className="bbg-project">
                        <h1>PROJECTS</h1>
                    </div>
                    <div className="bbbg-project">
                        
                    </div>
                    <div className="mm container-fluid">
                        <h4 className="top_text">Projects <span></span></h4>
                    </div>
                    <div className=" bg-primary">
                        <div className="container-fluid">
                            <ProjectView projects={this.props.projects} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Project;