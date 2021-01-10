import React, {Component} from 'react';

import ProjectPageComponent from './components/ProjectPageComponent';

const images = [
    {
        original: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/sporttra' +
            'de.png?raw=true',
        thumbnail: 'https://github.com/qianabarton/qbdesign.co/blob/master/src/img/projects/sporttra' +
            'de.png?raw=true'
    }
];

import sporttrade from '../../img/projects/sporttrade.png';

import screens1 from '../../img/projects/sporttrade/screens 1.png';
import screens2 from '../../img/projects/sporttrade/screens 2.png';
import screens3 from '../../img/projects/sporttrade/screens 3.png';
import web1 from '../../img/projects/sporttrade/web 1.png';
import logo1 from '../../img/projects/sporttrade/logo 1.png';
import logo2 from '../../img/projects/sporttrade/logo 2.png';
import appstore1 from '../../img/projects/sporttrade/app store 1.png';
import appstore2 from '../../img/projects/sporttrade/app store 2.png';
import webdesign from '../../img/projects/sporttrade/web design.png';

export default class Sporttrade extends Component {
    render() {
        return (
            <div>
                <ProjectPageComponent
                    title="SPORTTRADE"
                    shortdescription="short desc"
                    tags="tags"
                    images={images}
                    description="I was contracted by Sporttrade as a hybrid UI Designer and Front End iOS
                    Developer but ended up wearing even more hats working with this 4 person
                    startup. I redesigned their iOS app, cleaned up existing code structure and
                    implented the new designs using Swift and Xcode’s Storyboard. I also created
                    branding assets, designing their logo, app store presence and company landing
                    page."
                    prevlink="project-link"
                    prev="/swiftui"
                    nextlink="project-link"
                    next="/flux"/>
            </div>
        );
    }
}