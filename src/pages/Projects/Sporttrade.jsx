import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import ProjectHeader from './ProjectHeader';

import sporttrade from '../../img/projects/sporttrade.png';

import screens1 from '../../img/projects/sporttrade/screens 1.png';
import screens2 from '../../img/projects/sporttrade/screens 2.png';
import screens3 from '../../img/projects/sporttrade/screens 3.png';
import web1 from '../../img/projects/sporttrade/web 1.png';
import logo1 from '../../img/projects/sporttrade/logo 1.png';
import logo2 from '../../img/projects/sporttrade/logo 2.png';
import appstore1 from '../../img/projects/sporttrade/app store 1.png';
import appstore2 from '../../img/projects/sporttrade/app store 2.png';
import webdesign from '../../img/projects/sporttrade/web design.png';

export default class Sporttrade extends Component {
    render() {
        return (
            <div className="pt-5">
                <ProjectHeader
                    title="SPORTTRADE APP DEV & WEB DESIGN"
                    description="I was contracted by Sporttrade as a hybrid UI Designer and Front End iOS
                    Developer but ended up wearing even more hats working with this 4 person
                    startup. I redesigned their iOS app, cleaned up existing code structure and
                    implented the new designs using Swift and Xcode’s Storyboard. I also created
                    branding assets, designing their logo, app store presence and company landing
                    page."
                    image={sporttrade}
                    prevlink="d-none"
                    nextlink="project-link"
                    next="/flux"/>

                <div className="gallery py-5">
                    <Container>
                        <Row>
                            <Col>
                                <h3>gallery</h3>

                            </Col>
                        </Row>
                        <Row className="row-pad-v">
                            <Col sm={12} md={6}>
                                <img className="project-image" src={screens1} alt=""></img>
                                <div className="spacer20 d-md-none"/>
                            </Col>
                            <Col sm={12} md={6}>
                                <div className="spacer20-top d-md-none"/>
                                <img className="project-image" src={screens3} alt=""></img>
                            </Col>
                        </Row>

                        <Row className="row-pad-v">
                            <Col>
                                <img className="project-image" src={screens2} alt=""></img>

                            </Col>
                        </Row>

                        <Row className="row-pad-v">
                            <Col>
                                <img className="project-image" src={web1} alt=""></img>

                            </Col>
                        </Row>

                        <Row className="row-pad-v">
                            <Col sm={12} md={6}>

                                <Row>
                                    <Col>
                                        <img className="project-image" src={logo2} alt=""></img>
                                        <div className="spacer20 d-md-none"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="spacer20-top d-md-none"/>
                                        <img className="project-image" src={logo1} alt=""></img>
                                        <div className="spacer20 d-md-none"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="spacer20-top d-md-none"/>
                                        <img className="project-image" src={appstore1} alt=""></img>
                                        <div className="spacer20 d-md-none"/>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="spacer20-top d-md-none"/>
                                        <img className="project-image" src={appstore2} alt=""></img>
                                        <div className="spacer20 d-md-none"/>

                                    </Col>
                                </Row>

                            </Col>
                            <Col sm={12} md={6}>
                                <div className="spacer20-top d-md-none"/>
                                <img className="project-image" src={webdesign} alt=""></img>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </div>
        );
    }
}