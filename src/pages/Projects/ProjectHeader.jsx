import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {Link} from "react-router-dom";

const ProjectHeader = props => (
    <Container className="py-5">
        <Row className="mb-4">
            <Col>
                <a className="project-link" href="/">BACK TO PROJECTS</a>
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

                <Link to={props.prev} className={props.prevlink}>
                    <a>PREVIOUS</a>
                </Link>
            </Col>
            <Col className="text-right">
                <Link to={props.next} className={props.nextlink}>
                    <a>NEXT</a>
                </Link>
            </Col>
        </Row>
    </Container>

);

export default ProjectHeader;
