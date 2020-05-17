import React, { Component } from 'react';
import { useDencrypt } from "use-dencrypt-effect";

import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import './header_styles.css'

const values = ["ReactJs","Node.Js", "Tensorflow.Js", "Machine Learning", "AngularJs", "Python", "Data Science", "C++"];
const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const Example = () => {
    const { result, dencrypt } = useDencrypt(alphabets);
    
    React.useEffect(() => {
        let i = 0;
    
        const action = setInterval(() => {
        dencrypt(values[i]);
    
        i = i === values.length - 1 ? 0 : i + 1;
        }, 3000);
    
        return () => clearInterval(action);
    }, [dencrypt]);
    
    return <React.Fragment> {result}</React.Fragment>;
};

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);

        this.state = {
          isNavOpen: false,
        };

        
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <div className="bg-01">
                <div className="container">
                <Navbar dark expand="md" >
                    
                        <NavbarBrand className="mr-auto" href="/"><img src={require('../assets/images/Icon.png')} height="41" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} className="ml-auto navbartoggler fa fa-"/>
                        <Collapse isOpen={this.state.isNavOpen} navbar >
                            <Nav navbar className="nav">
                                <NavItem className="nav-item active">
                                    <NavLink className="nav-link " to="/" onClick={this.toggleNav}>Home</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link " to="/#ABOUT" onClick={this.toggleNav}>About Me</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" to="/#PROJECTS" onClick={this.toggleNav}>Projects</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" to="/#CONTACTS" onClick={this.toggleNav}>Contacts</NavLink>
                                </NavItem>            
                            </Nav>
                        </Collapse>        
                    
                </Navbar>
                <section className="home_banner_area" >
                    <div className="banner_inner">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-6">
                                <div className="banner_content">
                                    <h3>Hey There !</h3>
                                    <h1 className="text-uppercase">I am Mehul Patni</h1>
                                    <h5 className="text-uppercase">Specialist in --> <span> <Example /></span></h5>
                                    <div className="social_icons my-5 mx-2">
                                        <a href="http://www.linkedin.com/in/mehul-patni/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                                        <a href="https://github.com/Mehul2205/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                                        <a href="https://www.codechef.com/users/mehul2205" target="_blank" rel="noopener noreferrer"><i className="fa fa-code"></i></a>
                                        <a href="https://www.hackerearth.com/@mehul301/" target="_blank" rel="noopener noreferrer"><i className="fa fa-header"></i></a>
                                        <a href="https://codepen.io/Mehul2205/" target="_blank" rel="noopener noreferrer"><i className="fa fa-codepen"></i></a>
                                    </div>
                                    <div className="mx-3">
                                        <a className="roll-in-left primary_btn text-white" target="_blank" href="mailto:mehulpatni.2205@gmail.com" rel="noopener noreferrer">Hire Me</a>
                                        <a className="bounce-in-top primary_btn text-white" target="_blank" href={require('../assets/doc/resume.pdf')} rel="noopener noreferrer">CV</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </div>
        );
    }
}


export default Header;