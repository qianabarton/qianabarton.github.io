import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

const ProjectHeader = props => (
    <Container className="py-5">
        <Row className="mb-4">
            <Col>
                <a className="project-link" href="/projects">BACK TO PROJECTS</a>
            </Col>
        </Row>
        <Row>
            <Col sm="6">
                <h3>{props.title}</h3>
                <div className="spacer20"/>
                <p>{props.description}</p>
            </Col>
            <Col sm="6" className="pr-0">
                <img className="project-image" src={props.image} alt=""></img>
            </Col>
        </Row>

        <Row className="mt-4">
            <Col className="text-left">
                <a className={props.prevlink} href={props.prev}>PREVIOUS</a>
            </Col>
            <Col className="text-right">
                <a className={props.nextlink} href={props.next}>NEXT</a>
            </Col>
        </Row>
    </Container>

);

export default ProjectHeader;
