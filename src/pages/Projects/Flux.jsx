import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import ProjectHeader from './ProjectHeader';

import flux from '../../img/projects/flux.png';

import ad1 from '../../img/projects/flux/ad1.png';
import ad2 from '../../img/projects/flux/ad2.png';
import elevate from '../../img/projects/flux/elevate.png';
import activate from '../../img/projects/flux/activate.png';

export default class Flux extends Component {
    render() {
        return (

            <div className="pt-5">
                <ProjectHeader
                    title="SUPPLEMENT BRANDING & ADVERTISEMENTS"
                    description="I was contracted by Relentless Labz and their sister brand, Flux Nutrition, to develop their shopify store sites and design branding assets. "
                    image={flux}
                    prevlink="project-link"
                    prev="/projects/sporttrade"
                    nextlink="project-link"
                    next="/projects/flux"/>

                <div className="gallery py-5">
                    <Container>
                        <Row>
                            <Col>
                                <h3>gallery</h3>
                            </Col>
                        </Row>
                        <Row className="row-pad-v">
                            <Col>
                                <img className="project-image" src={activate} alt=""></img>

                            </Col>
                        </Row>
                        <Row className="row-pad-v">
                            <Col>
                                <img className="project-image" src={elevate} alt=""></img>
                            </Col>
                        </Row>

                        <Row className="row-pad-v">
                            <Col>
                                <img className="project-image" src={flux} alt=""></img>

                            </Col>
                        </Row>

                        <Row className="row-pad-v">
                            <Col sm={12} md={6}>
                                <img className="project-image" src={ad1} alt=""></img>
                                <div className="spacer20 d-md-none"/>
                            </Col>
                            <Col sm={12} md={6}>
                                <div className="spacer20-top d-md-none"/>
                                <img className="project-image" src={ad2} alt=""></img>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </div>
        );
    }
}