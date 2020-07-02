import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import {Row, Col, Container} from 'react-bootstrap';


import qiana from '../img/qiana.png';
import Resume from '../Qiana Barton Resume.pdf';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <About/>
                <Comp/>
                <Experience/>
                <ParallaxBG/>
            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div className="parallax-wrapper header text-center">
                <div className="center">
                    <h1 className="mb-4">Hi, I'm
                        <span className="accent"> Qiana</span>.</h1>

                    <h2>UX Interaction Designer & Developer</h2>

                    <Button className="mt-5 header-button" href="/projects">View My Work</ Button>
                </div>
            </div>
        );
    }
}

class About extends Component {
    render() {
        return (
            <div className="static-wrapper padding80">
                <Container className="">
                    <Row>
                        <Col sm={8}>
                            <h3 className="mb-4">Who is
                                <span className="accent"> Qiana</span>?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.</p>
                        </Col>
                        <Col sm={4}>
                            <img className="qiana-pic" src={qiana} alt=""></img>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

class Comp extends Component {
    render() {
        return (
            <a href="/projects">
            <div className="parallax-wrapper comp-bg"></div>
            </a>
        );
    }
}

class ParallaxBG extends Component {
    render() {
        return (
            <div className="parallax-wrapper palm1-bg"></div>
        );
    }
}

class Experience extends Component {
    render() {
        return (
            <div className="static-wrapper padding80">
                <Container >
                    <Row>
                        <Col sm={7}>
                            <h3 className="mb-4">Experience</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.

                                <br/>For more details about my work history,
                                <a className="project-link" href={Resume} target = "_blank"> view my resume.</a>
                            </p>

                            <ul>
                                <li>
                                    <h6>Sketch</h6>
                                </li>
                                <li>
                                    <h6>Swift / SwiftUI</h6>
                                </li>
                                <li>
                                    <h6>Framer / Invision Studio</h6>
                                </li>
                                <li>
                                    <h6>React / HTML / CSS</h6>
                                </li>
                                <li>
                                    <h6>After Effects / Lottie</h6>
                                </li>

                            </ul>

                        </Col>
                        <Col sm={5}>
                            <div className="mb-4">
                                <h4>UX INTERACTION DESIGNER</h4>
                                <h5>AUGUST 2018 - MAY 2020</h5>
                                <p>Cercacor Labs, Irvine, California</p>
                            </div>
                            <div className="mb-4">
                                <h4>FRONT END iOS Dev & Designer</h4>
                                <h5>AUGUST 2018 - March 2019</h5>
                                <p>Sporttrade Inc., Contracted Remotely</p>
                            </div>
                            <div className="mb-4">
                                <h4>QA Engineer</h4>
                                <h5>June 2016 - May 2018</h5>
                                <p>Grass Valley, Hillsboro, Oregon</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}