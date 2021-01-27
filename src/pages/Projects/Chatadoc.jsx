import React, {Component} from 'react';

import ProjectPageComponent from './components/ProjectPageComponent';

const images = [
    {
        original: 'https://raw.githubusercontent.com/qianabarton/qbdesign.co/master/src/img/projects/chatadoc/chatadoc1.png',
        thumbnail: 'https://raw.githubusercontent.com/qianabarton/qbdesign.co/master/src/img/projects/chatadoc/chatadoc1.png'
    },
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/chatadoc/chatadoc2.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/chatadoc/chatadoc2.png?raw=true'
    }
];


export default class Chatadoc extends Component {
    render() {
        return (
            <div>
               <ProjectPageComponent
                    title="Chat-a-Doc"
                    shortdescription="Chat-A-Doc’s appointment scheduling app redesign"
                    tags="UI/UX Design"
                    images={images}
                    description="I redesigned Chat-A-Doc’s iOS app for scheduling doctor’s appointments. My goal was to simplify their appointment scheduling process and better organize their app’s information structure by using an iOS tab bar."
                    prevlink="d-none"
                    nextlink="project-link"
                    next="/swiftui"
               />
            </div>
        );
    }
}