import React, {Component} from 'react';

import ProjectPageComponent from './components/ProjectPageComponent';

const images = [
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/swiftui.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/swiftui.png?raw=true'
    }
];

export default class SwiftUI extends Component {
    render() {
        return (
            <div>
                <ProjectPageComponent
                    title="SwiftUI Apps"
                    shortdescription="short desc"
                    tags="tags"
                    images={images}
                    description="Coming soon."
                    prevlink="project-link"
                    prev="/shopify"
                    nextlink="project-link"
                    next="/flux"/>

            </div>
        );
    }
}