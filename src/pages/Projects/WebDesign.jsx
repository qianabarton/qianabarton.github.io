import React, {Component} from 'react';

import ProjectPageComponent from './components/ProjectPageComponent';

const images = [
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/webdesign.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/webdesign.png?raw=true'
    }
];

export default class WebDesign extends Component {
    render() {
        return (
            <div>
               <ProjectPageComponent
                    title="Venue Rental Web Design"
                    shortdescription="short desc"
                    tags="tags"
                    images={images}
                    description="I worked with TryonCloset Creative to design a website to that cleanly and simply showcased their venue rental space to their potential customers."
                    prevlink="project-link"
                    prev="/swiftui"
                    nextlink="project-link"
                    next="/sporttrade"
               />
            </div>
        );
    }
}