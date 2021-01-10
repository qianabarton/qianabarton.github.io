import React, {Component} from 'react';

import shopify from '../../img/projects/shopify.png';

import shopify1 from '../../img/projects/shopify/shopify-1.png';
import shopify2 from '../../img/projects/shopify/shopify-2.png';
import shopify3 from '../../img/projects/shopify/shopify-3.png';
import shopify4 from '../../img/projects/shopify/shopify-4.png';
import shopify5 from '../../img/projects/shopify/shopify-5.png';
import shopify6 from '../../img/projects/shopify/shopify-6.png';
import shopify7 from '../../img/projects/shopify/shopify-7.png';
import shopify8 from '../../img/projects/shopify/shopify-8.png';
import shopify9 from '../../img/projects/shopify/shopify-9.png';
import shopify10 from '../../img/projects/shopify/shopify-10.png';
import shopify11 from '../../img/projects/shopify/shopify-11.png';
import shopify12 from '../../img/projects/shopify/shopify-12.png';
import shopify13 from '../../img/projects/shopify/shopify-13.png';
import shopify14 from '../../img/projects/shopify/shopify-14.png';

import ProjectPageComponent from './components/ProjectPageComponent';

const images = [
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/shopify.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/shopify.png?raw=true'
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
                    prev="webdesign"
                    nextlink="project-link"
                    next="/swiftui"/>
            </div>
        );
    }
}