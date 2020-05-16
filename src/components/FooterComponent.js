import React from 'react';

import './footer_styles.css';

function Footer(props) {
    return(
        <div className="contianer-fluid back-ground"  id="CONTACTS">
            <div className="footer footer_area">
                <div className="container">
                    <div className="row justify-content-center">             
                        <div className="col-12 align-self-center m-2">
                            {/* <div className="text-center ">
                                <a className="btn btn-social-icon btn-google m-2" href="http://google.com/+"><i className="fa fa-google"></i></a>
                                <a className="btn btn-social-icon btn-facebook m-2" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                                <a className="btn btn-social-icon btn-linkedin m-2" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                                <a className="btn btn-social-icon btn-twitter m-2" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                                <a className="btn btn-social-icon btn-google m-2" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                                <a className="btn btn-social-icon p-2" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                            </div> */}
                            <div class="footer_social">
                                <a href="#"><i class="fa fa-instagram"></i></a>
                                <a href="#"><i class="fa fa-facebook-f"></i></a>
                                <a href="#"><i class="fa fa-youtube-play"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-skype"></i></a>
                                <a href="#"><i class="fa fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">             
                        <div className="col-auto text-white">
                            <p>© Copyright 2020 made with <i className="fa fa-heart"></i> by Mehul Patni</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;