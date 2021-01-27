import React, {Component} from 'react';

import qlogo from '../img/q-logo.svg';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer text-center">
                <div className="mt-5 mb-4">
                    <ul className="contact-details">
                        <a className="px-3" target="_blank" href="https://github.com/qianabarton">
                            GITHUB
                        </a>
                        <a className="px-3" target="_blank" href="http://www.linkedin.com/in/qiana-barton-484a5793">
                            LINKEDIN
                        </a>
                    </ul>
                </div>

                <div>
                    <a href="/">
                        <img className="footer-icon" src={qlogo} alt=""></img>
                    </a>
                </div>

                <ul className="contact-details pl-0 mt-4 mb-5">
                    <li>Los Angeles, CA</li>
                </ul>
            </div>
        );
    }
}
