import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';

import linkedin from '../img/icons/linkedin.png';
import behance from '../img/icons/behance.png';
import github from '../img/icons/github.png';
import mail from '../img/icons/mail.png';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ContactForm/>

            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <div className="parallax-wrapper contact-bg">
                    <h1 className="center pt-5 text-center">CONTACT ME</h1>
                </div>
            </div>
        );
    }
}

class ContactForm extends Component {
    render() {
        return (
            <div className="vertical-margin">
                <form action="https://formspree.io/mrgyqgaz" method="POST">
                    <Container className="contact-row">
                        <Row>
                            <Col>
                                <h4 className="text-left">Enter your info</h4>
                            </Col>
                            <div className="spacer20"/>
                        </Row>
                        <Row>
                            <Col sm="6">
                                <div className="input">
                                    <input className="" type="text" name="name" placeholder="Name"/>
                                </div>
                            </Col>
                            <Col sm="6">
                                <div className="input">
                                    <input className="" type="text" name="email" placeholder="Email Address"/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12">
                                <div className="input">
                                    <textarea
                                        className=""
                                        type="text"
                                        name="message"
                                        placeholder="Write a message"/>
                                </div>
                            </Col>
                        </Row>

                        <button className="header-button submit-button">
                            Submit
                        </button>
                    </Container>
                    <div className="input"></div>
                </form>
            </div>
        );
    }
}
