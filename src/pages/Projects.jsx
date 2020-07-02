import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';

// Project Images
import sporttrade from '../img/projects/sporttrade.png';
import flux from '../img/projects/flux.png';

export default class Projects extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ProjectShell
                    color="project-1"
                    title="SPORTTRADE APP DEV & WEB DESIGN"
                    description="I was contracted by Sporttrade as a hybrid UI Designer and Front End iOS Developer but ended up wearing even more hats working with this 4 person startup. I redesigned their iOS app, cleaned up existing code structure and implented the new designs using Swift and Xcode’s Storyboard. I also created branding assets, designing their logo, app store presence and company landing page."
                    link="/projects/sporttrade"
                    img={sporttrade}/>
                <ProjectShell
                    color="project-2"
                    title="SUPPLEMENT BRANDING & ADVERTISEMENT"
                    description="I was contracted by Relentless Labz and their sister brand, Flux Nutrition, to develop shopify store sites and design branding assets."
                    link="/projects/flux"
                    img={flux}/>

            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div className="parallax-wrapper projects-bg">
                <h1 className="center pt-5 text-center">PROJECTS</h1>
            </div>
        );
    }
}

const ProjectShell = props => (
    <div className={props.color + " project-short "}>
        <Container>
            <Row>
                <Col sm="6">
                    <h3>{props.title}</h3>
                    <div className="spacer20"/>
                    <p>{props.description}</p>
                    <a className="project-link" href={props.link}>LEARN MORE</a>
                </Col>
                <Col sm="6">
                    <a href={props.link}>
                        <img className="project-image" src={props.img} alt=""></img>
                    </a>
                </Col>
            </Row>
        </Container>
    </div>
);
