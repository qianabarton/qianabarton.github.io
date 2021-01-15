import React, {Component} from 'react';

import ProjectPageComponent from './components/ProjectPageComponent';

const images = [
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/chatadoc1.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/chatadoc1.png?raw=true'
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
                    shortdescription="short desc"
                    tags="tags"
                    images={images}
                    description="Chatadoc description"
                    prevlink="d-none"
                    nextlink="project-link"
                    next="/swiftui"
               />
            </div>
        );
    }
}