import React, {Component} from 'react';
import {Prompt} from "react-router-dom";

import flux from '../../img/projects/flux.png';

import ad1 from '../../img/projects/flux/ad1.png';
import ad2 from '../../img/projects/flux/ad2.png';
import elevate from '../../img/projects/flux/elevate.png';
import activate from '../../img/projects/flux/activate.png';

import ProjectPageComponent from './components/ProjectPageComponent';

const images = [
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/sporttra' +
            'de.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/sporttra' +
            'de.png?raw=true'
    }
];


export default class Cercacor1 extends Component {
    render() {
        return (
            <div>
                <ProjectPageComponent
                    title="Cercacor"
                    shortdescription="short desc"
                    tags="tags"
                    images={images}
                    description="desc"
                    prevlink="project-link"
                    prev="/"
                    nextlink="project-link"
                    next="/"/>
            </div>
        );
    }
}