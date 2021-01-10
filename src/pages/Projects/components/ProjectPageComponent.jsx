import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import ProjectHeader from './ProjectHeader';
import ProjectFooter from './ProjectFooter';

import ImageGallery from 'react-image-gallery';


const ProjectPageComponent = props => (
            <div className="pt-5">
                <ProjectHeader
                    title={props.title}
                    shortdescription={props.shortdescription}
                    tags={props.tags}/>

                <div className="h-container">
                        <ImageGallery 
                            items={props.images}
                            infinite={true}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            useTranslate3D={false}/>
                </div>

                <div className="gallery">
                    <Container>
                        <Row>
                            <Col>
                                <h6 className="h7">Overview</h6>
                            </Col>
                        </Row>
                        <Row className="row-pad-v">
                            <Col md={8}>
                                <p>{props.description}</p>
                            </Col>
                        </Row>
                        <ProjectFooter
                            prevlink={props.prevlink}
                            prev={props.prev}
                            nextlink={props.nextlink}
                            next={props.next}/>
                    </Container>
                </div>
            </div>
        );

export default ProjectPageComponent;
