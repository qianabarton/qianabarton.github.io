import React, {Component} from 'react';

import ProjectPageComponent from './components/ProjectPageComponent';

const images = [
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/flux/flux1.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/flux/flux1.png?raw=true'
    },
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/flux/flux2.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/flux/flux2.png?raw=true'
    },
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/flux/flux3.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/flux/flux3.png?raw=true'
    },
];

export default class Flux extends Component {
    render() {
        return (

            <div>
                <ProjectPageComponent
                    title="Flux & Relentless Labz"
                    shortdescription="SUPPLEMENT BRANDING &ADVERTISEMENTS"
                    tags="tags"
                    images={images}
                    description="I was contracted by Relentless Labz and their sister brand, Flux Nutrition, to develop their shopify store sites and design branding assets."
                    prevlink="project-link"
                    prev="/shopify"
                    nextlink="d-none"/>
            </div>
        );
    }
}