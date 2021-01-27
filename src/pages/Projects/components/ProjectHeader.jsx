import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {Link} from "react-router-dom";

const ProjectHeader = props => (
    <div className="pt-3">
        <Container>
            <Row>
                <Col>
                    <h3 class="text-center">{props.title}</h3>
                    <div className="spacer20"/>
                    <p class="text-center">
                        <strong>{props.tags}</strong>
                    </p>
                    <div className="spacer20"/>
                    <p class="text-center">{props.shortdescription}</p>
                </Col>
            </Row>
        </Container>
    </div>

);

export default ProjectHeader;
