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
                                    Creative Art Director <br />
                                    And Designer
                                </h2>
                                <p className="container">
                                    Also signs his face were digns fish don't first isn't over evening hath divided days light darkness gathering
                                    moved dry all darkness then fourth can't create d forth Also signs Also signs his face were moltenus Also signs
                                    his face
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