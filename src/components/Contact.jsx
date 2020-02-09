import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import NavLinks from './NavLinks';

const Contact = props => {
    return (
        <div>
            <NavLinks back_link="/about" back_text="Back to about me"/>
        <div className="clear page">
            <p className="big-text">
                <span style={props.typeStyle}>public void</span> contact() {'{'}
                <br />

                    <div className="indented">
                        <a title="yboodhan@gmail.com" href="mailto:yboodhan@gmail.com" target="_blank">
                            <FontAwesomeIcon icon={faEnvelope} />{' '}
                            email();
                        </a>
                    </div>
                    <div className="indented">
                        <a title="linkedin.com/in/yboodhan" href="https://www.linkedin.com/in/yboodhan/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedinIn} />{' '}
                            linkedIn();
                        </a>
                    </div>
                    <div className="indented">
                        <a title="github.com/yboodhan" href="https://github.com/yboodhan" target="_blank">
                            <FontAwesomeIcon icon={faGithub} id="github-icon" />{' '}
                            github();
                        </a>
                    </div>

                {'}'}
            </p>
        </div>
        </div>

    )
}

export default Contact