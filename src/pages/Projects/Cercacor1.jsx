import React, {Component} from 'react';
import {Prompt} from "react-router-dom";


import ProjectPageComponent from './components/ProjectPageComponent';

const images = [
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/cercacor.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/cercacor.png?raw=true'
    },
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/cercacor/cerc2.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/cercacor/cerc2.png?raw=true'
    }
];


export default class Cercacor1 extends Component {
    render() {
        return (
            <div>
                <ProjectPageComponent
                    title="Cercacor"
                    shortdescription="Diabetes lifestyle education app"
                    tags="Prototyping / Wireframing / UI/UX Design"
                    images={images}
                    description="I worked for Cercacor as a UX Interaction Designer. My projects included wireframing, UX architecure, prototyping, UI Designer and front end iOS dev."
                    prevlink="project-link"
                    prev="/swiftui"
                    nextlink="project-link"
                    next="/miscdesign"/>
            </div>
        );
    }
}