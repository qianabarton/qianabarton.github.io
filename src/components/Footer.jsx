import React, {Component} from 'react';
import {Nav} from "react-bootstrap";

import qlogo from '../img/q-logo.svg';
import linkedin from '../img/footer-icons/linkedin.png';
import behance from '../img/footer-icons/behance.png';
import github from '../img/footer-icons/github.png';
import mail from '../img/footer-icons/mail.png';

/*
const Test = () => (
    <div>Test</div>
);
*/

export default class Footer extends Component {
    render() {
        return (
            <div className="footer text-center">
                <div className="mt-5 mb-4">
                    <Nav className="justify-content-center">
                        <Nav.Link
                            target="_blank"
                            href="http://www.linkedin.com/in/qiana-barton-484a5793">
                            <img className="footer-icon" src={linkedin} alt=""></img>
                        </Nav.Link>
                        <Nav.Link target="_blank" href="https://www.behance.net/qianabarton">
                            <img className="footer-icon" src={behance} alt=""></img>

                        </Nav.Link>
                        <Nav.Link target="_blank" href="https://github.com/qianabarton">
                            <img className="footer-icon" src={github} alt=""></img>
                        </Nav.Link>
                        <Nav.Link href="/contact">
                            <img className="footer-icon" src={mail} alt=""></img>
                        </Nav.Link>
                    </Nav>
                </div>
                <ul className="contact-details pl-0">
                    <li>
                        
                        <a target="_blank" href="mailto:barton.qiana@gmail.com">barton.qiana@gmail.com</a>
                    </li>
                    <li className="mx-3">
                        |
                    </li>
                    <li>
                        Los Angeles, CA</li>
                </ul>
                <div className="mt-4 mb-5">
                    <a href="/">
                        <img src={qlogo} alt=""></img>
                    </a>

                </div>
            </div>
        );
    }
}
