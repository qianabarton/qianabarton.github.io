import React, {Component} from 'react';

import ProjectPageComponent from './components/ProjectPageComponent';

const images = [
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/shopify/givin1.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/shopify/givin1.png?raw=true'
    },
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/shopify/givin2.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/shopify/givin2.png?raw=true'
    },
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/shopify/givin3.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/shopify/givin3.png?raw=true'
    },
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/shopify/givin4.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/shopify/givin4.png?raw=true'
    }
];

export default class Sporttrade extends Component {
    render() {
        return (
            <div>
                <ProjectPageComponent
                    title="GIVIN OFFICIAL"
                    shortdescription="Shopify store setup and design"
                    tags="Branding / HTML/CSS / Shopify / Web Design"
                    images={images}
                    description="I worked with the apparel brand GIVIN Official to develop their e-commerce presence on Shopify by creating a design system, brand assets and implementing my designs via Shopify’s builder and CSS/liquid code."
                    prevlink="project-link"
                    prev="/sporttrade"
                    nextlink="project-link"
                    next="/flux"/>
            </div>
        );
    }
}