import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";



// Project Images
import sporttrade from '../img/projects/sporttrade.png';
import flux from '../img/projects/flux.png';

export default class Projects extends Component {
    render() {
        return (
            <div class="projects">
                <h3 className="mb-4 d-md-none h-padding">PROJECTS</h3>
                <ProjectShell
                    class="project-top"
                    title="CERCACOR"
                    description="Some description here."
                    link="/cercacor1"
                    img={sporttrade}
                    password="true" />
                <ProjectShell
                    class="project-middle"
                    title="SPORTTRADE APP DEV & WEB DESIGN"
                    description="I was contracted by Sporttrade as a hybrid UI Designer and Front End iOS Developer but ended up wearing even more hats working with this 4 person startup. I redesigned their iOS app, cleaned up existing code structure and implented the new designs using Swift and Xcode’s Storyboard. I also created branding assets, designing their logo, app store presence and company landing page."
                    link="/sporttrade"
                    img={sporttrade}
                    password="false"/>
                <ProjectShell
                    class="project-bottom"
                    title="SUPPLEMENT BRANDING & ADVERTISEMENT"
                    description="I was contracted by Relentless Labz and their sister brand, Flux Nutrition, to develop shopify store sites and design branding assets."
                    link="/flux"
                    img={flux}
                    password="false"/>
            </div>
        );
    }
}

const ProjectShell = props => (
    <div className={props.class}>
        <Container className="pop-out">
            <Row>
                <Col sm="6">
                    <Link to={props.link} >
                    <img className="project-image" src={props.img} alt=""></img>
                    </Link>
                </Col>
                <Col sm="6">
                    <div className="spacer20 d-md-none"/>
                    <h3 className="smaller">{props.title}</h3>
                    <div className="spacer20"/>
                    <p>{props.description}</p>
                    <div className="spacer20"/>
                    <div className="m-center">


                    <Link to={props.link} >
                        <Button className="header-button">Learn More</ Button>
                    </Link>

                    </div>

                </Col>

            </Row>
        </Container>
    </div>
);
