import React, { Component } from 'react';
import './about_styles.css';

class About extends Component {

    render() {
        return(
            <div className="container-fluid pp">
                <section className="about_area section_gap">
                    <div className="row justify-content-start align-items-center">
                        <div className="col-md-5"  id="ABOUT">
                            <div className="about_img">
                                <img className="" src={require('../assets/images/background/testimonial-bg-half.png')} alt="" />
                            </div>
                        </div>

                        <div className="offset-md-1 col-md-5">
                            <div className="main_title text-left">
                                <p className="top_text">About me <span></span></p>
                                <h2>
                                    Web Designer <br />
                                    And Data Scientist
                                </h2>
                                <p className="container">
                                    I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. This passion led me to challenge myself daily and learn new skills that helped me to do better work.<br />
                                    Some of my work is shown below !!
                                </p>
                            </div>
                        </div>
                    </div>
            </section>
            </div>
        );
    }
}


export default About;