import React, {Component} from 'react';
import {Navbar, Nav} from "react-bootstrap";

import qlogo from '../img/q-logo.svg';

export default class MyNav extends Component {
    render() {
        return (
            <Navbar sticky="top" className="nav px-md-5" bg="" expand="sm">
                <Navbar.Brand href="/">
                    <img src={qlogo} width="30" height="30" className="d-inline-block align-top" alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav className="text-center">
                        <Nav.Link className="px-md-3" href="/">Home</Nav.Link>
                        <Nav.Link className="px-md-3" href="/projects">Projects</Nav.Link>
                        <Nav.Link className="pl-md-3" href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
