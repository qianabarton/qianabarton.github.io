import React, {Component} from 'react';
import {Row, Col, Container} from 'react-bootstrap';

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
                <div className="screenshot">
                    <h1>Contact Page</h1>
                </div>
            </div>
        );
    }
}

class ContactForm extends Component {
    render() {
        return (
            <div className="vertical-margin">
                
                <h3 className="text-center">Reach Out to me</h3>
                <div className="spacer20" />
                <form action="https://formspree.io/mrgyqgaz" method="POST">                   
                 <Container>
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
                                    <textarea className="" type="text" name="message" placeholder="Write a message"/>
                                </div>
                            </Col>
                        </Row>

                    <button className="header-button submit-button">
                        Submit
                    </button>
                    </Container>
                    <div className="input">

                    </div>
                </form>
            </div>
        );
    }
}



