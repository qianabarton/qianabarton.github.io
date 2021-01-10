import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";

const ProjectFooter = props => (

        <Row className="my-4">
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

);

export default ProjectFooter;
