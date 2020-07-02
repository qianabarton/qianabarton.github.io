import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

const ProjectHeader = props => (
    <Container className="py-5">
        <Row>
            <Col>
                <a className="project-link" href="/projects">BACK TO PROJECTS</a>
            </Col>
        </Row>
        <Row>
            <Col sm="6">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </Col>
            <Col sm="6" className="pr-0">
                <img className="project-image" src={props.image} alt=""></img>
            </Col>
        </Row>

        <Row>
            <Col className="text-left">
                <a className={props.prevlink} href={props.prev}>PREVIOUS PROJECT</a>
            </Col>
            <Col className="text-right">
                <a className={props.nextlink} href={props.next}>NEXT PROJECT</a>
            </Col>
        </Row>
    </Container>

);

export default ProjectHeader;
