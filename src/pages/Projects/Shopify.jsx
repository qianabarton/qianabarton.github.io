import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import ProjectHeader from './ProjectHeader';

import shopify from '../../img/projects/shopify.png';

import shopify1 from '../../img/projects/shopify/shopify-1.png';
import shopify2 from '../../img/projects/shopify/shopify-2.png';
import shopify3 from '../../img/projects/shopify/shopify-3.png';
import shopify4 from '../../img/projects/shopify/shopify-4.png';
import shopify5 from '../../img/projects/shopify/shopify-5.png';
import shopify6 from '../../img/projects/shopify/shopify-6.png';
import shopify7 from '../../img/projects/shopify/shopify-7.png';
import shopify8 from '../../img/projects/shopify/shopify-8.png';
import shopify9 from '../../img/projects/shopify/shopify-9.png';
import shopify10 from '../../img/projects/shopify/shopify-10.png';
import shopify11 from '../../img/projects/shopify/shopify-11.png';
import shopify12 from '../../img/projects/shopify/shopify-12.png';
import shopify13 from '../../img/projects/shopify/shopify-13.png';
import shopify14 from '../../img/projects/shopify/shopify-14.png';



export default class Sporttrade extends Component {
    render() {
        return (
            <div className="pt-5">
                <ProjectHeader
                    title="CLOTHING BRAND SHOPIFY DEV/DESIGN"
                    description="In additional to Relentless Labz and Flux Nutrition, I also worked with the apparel brand GIVIN Official and a vintage handbag resale company, MILADY. I developed their ecommerce presence on Shopify by creating a design system, brand assets and customizing their storefronts via Shopify’s builder and CSS/liquid code. "
                    image={shopify}
                    prevlink="project-link"
                    prev="webdesign"
                    nextlink="project-link"
                    next="/swiftui"/>

                <div className="gallery">
                    <Container>
                        <Row>
                            <Col>
                                <h3>gallery</h3>
                            </Col>
                        </Row>
                        <Row className="row-pad-v">
                            <Col sm={12} md={9}>
                                <img className="project-image" src={shopify1} alt=""></img>
                                <div className="spacer20 d-md-none"/>
                            </Col>
                            <Col sm={12} md={3}>
                                <div className="spacer20-top d-md-none"/>
                                <img className="project-image" src={shopify2} alt=""></img>
                            </Col>
                        </Row>

                        <Row className="row-pad-v">
                            <Col sm={12} md={2}>
                                <img className="project-image" src={shopify3} alt=""></img>
                            </Col>
                            <Col sm={12} md={2}>
                                <img className="project-image" src={shopify4} alt=""></img>
                            </Col>
                            <Col sm={12} md={8}>
                                <img className="project-image" src={shopify5} alt=""></img>
                            </Col>
                        </Row>

                        <Row className="row-pad-v">
                        <Col sm={12} md={6}>
                                <img className="project-image" src={shopify6} alt=""></img>
                            </Col>
                            <Col sm={12} md={6}>
                                <img className="project-image" src={shopify7} alt=""></img>
                            </Col>
                        </Row>

                        <Row className="row-pad-v">
                            <Col sm={12} md={9}>
                                        <img className="project-image" src={shopify8} alt=""></img>
                                        <div className="spacer20 d-md-none"/>
                                    </Col>
                                    <Col sm={12} md={3}>
                                        <div className="spacer20-top d-md-none"/>
                                        <img className="project-image" src={shopify9} alt=""></img>
                                        <div className="spacer20 d-md-none"/>
                                    </Col>
                        </Row>

                        <Row>
                            <Col sm={12} md={3}>
                                        <div className="spacer20-top d-md-none"/>
                                        <img className="project-image" src={shopify10} alt=""></img>
                                        <div className="spacer20 d-md-none"/>

                            </Col>
                            <Col sm={12} md={9}>
                                        <div className="spacer20-top d-md-none"/>
                                        <img className="project-image" src={shopify11} alt=""></img>
                                        <div className="spacer20 d-md-none"/>

                            </Col>
                        </Row>
                        <Row>
                        <Col sm={12} md={8}>
                                <div className="spacer20-top d-md-none"/>
                                <img className="project-image" src={shopify12} alt=""></img>
                            </Col>
                            <Col sm={12} md={2}>
                                <div className="spacer20-top d-md-none"/>
                                <img className="project-image" src={shopify13} alt=""></img>
                            </Col>
                            <Col sm={12} md={2}>
                                <div className="spacer20-top d-md-none"/>
                                <img className="project-image" src={shopify14} alt=""></img>
                            </Col>
                        </Row>



                    </Container>
                </div>
            </div>
        );
    }
}