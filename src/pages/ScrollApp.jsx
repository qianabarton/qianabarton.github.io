import React, {Component} from 'react';
import {ScrollingProvider, SectionLink, Section} from 'react-scroll-section';

export default class ScrollApp extends Component {
    render() {
        return (
            <ScrollingProvider>
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <SectionLink section="home">
                        {({onClick, isSelected}) => (
                            <a onClick={onClick} selected={isSelected}>
                                Home
                            </a>
                        )}
                    </SectionLink>
                    <SectionLink section="about">
                        {({onClick, isSelected}) => (
                            <a onClick={onClick} selected={isSelected}>
                                About
                            </a>
                        )}
                    </SectionLink>
                </div>
                <Section id="home">Home section</Section>
                <Section id="about">About section</Section>
            </ScrollingProvider>
        );
    }
}