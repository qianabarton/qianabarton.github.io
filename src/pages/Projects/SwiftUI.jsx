
import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import ProjectHeader from './ProjectHeader';

import webdesign from '../../img/projects/swiftui.png';



export default class SwiftUI extends Component {
    render() {
        return (
            <div className="pt-5">
                <ProjectHeader
                    title="SwiftUI Apps"
                    description="Coming soon."
                    image={webdesign}
                    prevlink="project-link"
                    prev="shopify"
                    nextlink="project-link"
                    next="/sporttrade"/>

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