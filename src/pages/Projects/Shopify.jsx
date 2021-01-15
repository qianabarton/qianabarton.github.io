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
                    title="CLOTHING BRAND SHOPIFY DEV/DESIGN"
                    shortdescription="short desc"
                    tags="tags"
                    images={images}
                    description="In additional to Relentless Labz and Flux Nutrition, I also worked with the apparel brand GIVIN Official and a vintage handbag resale company, MILADY. I developed their ecommerce presence on Shopify by creating a design system, brand assets and customizing their storefronts via Shopify’s builder and CSS/liquid code."
                    prevlink="project-link"
                    prev="/sporttrade"
                    nextlink="project-link"
                    next="/flux"/>
            </div>
        );
    }
}