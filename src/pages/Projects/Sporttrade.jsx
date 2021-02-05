import React, {Component} from 'react';

import ProjectPageComponent from './components/ProjectPageComponent';

const images = [
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/sporttrade/sporttra' +
            'de1.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/sporttrade/sporttra' +
            'de1.png?raw=true'
    },
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/sporttrade/sporttra' +
            'de2.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/sporttrade/sporttra' +
            'de2.png?raw=true'
    },
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/sporttrade/sporttra' +
            'de3.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/sporttrade/sporttra' +
            'de3.png?raw=true'
    },
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/sporttrade/sporttra' +
            'de4.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/sporttrade/sporttra' +
            'de4.png?raw=true'
    },
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/sporttrade/sporttra' +
            'de5.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/sporttrade/sporttra' +
            'de5.png?raw=true'
    },
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/sporttrade/sporttra' +
            'de6.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/sporttrade/sporttra' +
            'de6.png?raw=true'
    },
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/sporttrade/sporttra' +
            'de7.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/sporttrade/sporttra' +
            'de7.png?raw=true'
    }
];



export default class Sporttrade extends Component {
    render() {
        return (
            <div>
                <ProjectPageComponent
                    title="SPORTTRADE"
                    shortdescription="Sports betting app redesign and online presence branding"
                    tags="Branding / HTML/CSS / Prototyping / Swift / UI/UX Design / Web Design"
                    images={images}
                    description="I was contracted by Sporttrade for a hybrid role as a UI Designer and Front End iOS Developer but ended up wearing even more hats working with this 4 person startup. I redesigned their iOS app, cleaned up existing code structure and implemented my new designs using Swift and Xcode’s Storyboard. I also created branding assets, designed their logo, app store presence and company landing page."
                    prevlink="project-link"
                    prev="/miscdesign"
                    nextlink="project-link"
                    next="/shopify"/>
            </div>
        );
    }
}