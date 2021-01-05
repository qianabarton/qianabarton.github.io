import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import ProjectHeader from './ProjectHeader';

import webdesign from '../../img/projects/webdesign.png';



export default class WebDesign extends Component {
    render() {
        return (
            <div className="pt-5">
                <ProjectHeader
                    title="Venue Rental Web Design"
                    description="I worked with TryonCloset Creative to design a website to that cleanly and simply showcases their venue rental space to their potential customers."
                    image={webdesign}
                    prevlink="d-none"
                    nextlink="project-link"
                    next="/Shopify"/>

                <div className="gallery">
                    <Container>
                        <Row>
                            <Col>
                                <h3>gallery</h3>
                            </Col>
                        </Row>
                        <Row className="row-pad-v">
                            <Col sm={12} md={9}>
                                <img className="project-image" src={webdesign} alt=""></img>
                                <div className="spacer20 d-md-none"/>
                            </Col>
                        </Row>



                    </Container>
                </div>
            </div>
        );
    }
}