import React, {Component} from 'react';

import ProjectPageComponent from './components/ProjectPageComponent';

const images = [
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/swiftui/swiftui1.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/swiftui/swiftui1.png?raw=true'
    },
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/swiftui/swiftui2.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/swiftui/swiftui2.png?raw=true'
    },
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/swiftui/swiftui3.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/swiftui/swiftui3.png?raw=true'
    },
];

export default class SwiftUI extends Component {
    render() {
        return (
            <div>
                <ProjectPageComponent
                    title="The Plant Shop"
                    shortdescription="Plant store app design and prototype"
                    tags="Swift / UI/UX Design"
                    images={images}
                    description="I created a design for a plant shopping app and started an app prototype using Swift UI."
                    prevlink="project-link"
                    prev="/chatadoc"
                    nextlink="project-link"
                    next="/cercacor1"/>
            </div>
        );
    }
}