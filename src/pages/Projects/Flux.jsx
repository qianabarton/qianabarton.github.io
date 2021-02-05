import React, {Component} from 'react';

import ProjectPageComponent from './components/ProjectPageComponent';

const images = [

];

export default class Flux extends Component {
    render() {
        return (

            <div>
                <ProjectPageComponent
                    title="Flux Nutrition"
                    shortdescription="Shopify redesign and branding"
                    tags="Branding / HTML/CSS / Product Design / Shopify / Web Design"
                    images={images}
                    description="I was contracted by Flux Nutrition and their sister brand, Relentless Labz, to develop their Shopify store and design branding assets. I led their Shopify store design and implementation. I also created an energy drink can design for their product, Activate Energy."
                    prevlink="project-link"
                    prev="/shopify"
                    nextlink="d-none"/>
            </div>
        );
    }
}