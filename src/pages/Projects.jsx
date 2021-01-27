import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

// Project Images
import sporttrade from '../img/projects/sporttrade.png';
import flux from '../img/projects/flux.png';
import shopify from '../img/projects/shopify.png';
import swiftui from '../img/projects/swiftui.png';
import webdesign from '../img/projects/webdesign.png';
import chatadoc from '../img/projects/chatadoc.png';



export default class Projects extends Component {
    render() {
        return (
            <div class="projects">
                <h3 className="mb-4 d-md-none h-padding">PROJECTS</h3>
                <ProjectShell
                    class="project-top"
                    title="Chat-a-Doc"
                    tags="UI/UX Design"
                    description="Chat-A-Doc’s appointment scheduling app redesign"
                    link="/chatadoc"
                    img={chatadoc}
                    password="false"/>
                <ProjectShell
                    class="project-middle"
                    title="The Plant Shop"
                    tags="Swift / UI/UX Design"
                    description="Plant store app design and prototype"
                    link="/swiftui"
                    img={swiftui}
                    password="false"/>
                <ProjectShell
                    class="project-middle"
                    title="Tryon Closet Creative"
                    tags="Branding / Web Design"
                    description="Venue rental web design"
                    link="/webdesign"
                    img={webdesign}
                    password="false"/>
                <ProjectShell
                    class="project-middle"
                    title="SPORTTRADE"
                    tags="Branding / HTML/CSS / Prototyping / Swift / UI/UX Design / Web Design"
                    description="Sports betting app redesign and online presence branding"
                    img={sporttrade}
                    password="false"/>
                <ProjectShell
                    class="project-middle"
                    title="Givin Official"
                    tags="Branding / HTML/CSS / Shopify / Web Design"
                    description="Shopify store setup and design"
                    link="/shopify"
                    img={shopify}
                    password="false"/>
                <ProjectShell
                    class="project-bottom"
                    title="Flux Nutrition"
                    tags="Branding / HTML/CSS / Product Design / Shopify / Web Design"
                    description="Shopify redesign and branding"
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
                    <Link to={props.link}>
                        <img className="project-image" src={props.img} alt=""></img>
                    </Link>
                </Col>
                <Col sm="6">
                    <div className="spacer20 d-md-none"/>
                    <h3 className="smaller">{props.title}</h3>
                    <div className="spacer20"/>
                    <p>
                        <strong>{props.tags}</strong>
                    </p>
                    <div className="spacer20"/>

                    <p>{props.description}</p>
                    <div className="spacer20"/>
                    <div className="m-center">

                        <Link to={props.link}>
                            <Button className="header-button">View Project</ Button>
                        </Link>

                    </div>

                </Col>

            </Row>
        </Container>
    </div>
);
