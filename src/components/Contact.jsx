import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = props => {
    return (
        <div className="page">
            <p>
                <span style={props.typeStyle}>public void</span> contact() {'{'}
                <br />

                    <div className="indented">
                        <a href="https://github.com/yboodhan" target="_blank">
                            <FontAwesomeIcon icon={faGithub} id="github-icon" />{' '}
                            github();
                        </a>
                    </div>
                    <div className="indented">
                        <a href="https://www.linkedin.com/in/yboodhan/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedinIn} />{' '}
                            linkedIn();
                        </a>
                    </div>
                    <div className="indented">
                        <a href="mailto:yboodhan@gmail.com" target="_blank">
                            <FontAwesomeIcon icon={faEnvelope} />{' '}
                            email();
                        </a>
                    </div>

                {'}'}
            </p>
        </div>
    )
}

export default Contact