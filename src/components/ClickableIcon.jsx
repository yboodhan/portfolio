import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ClickableIcon = props => {
    return (
        <div className="brand-icon-dock">
            <div className="brand-icon">
                <a href="https://github.com/yboodhan" target="_blank">
                    <FontAwesomeIcon size="3x" icon={faGithub} id="github-icon" />
                </a>
            </div>
            <div className="brand-icon">
                <a href="https://www.linkedin.com/in/yboodhan/" target="_blank">
                    <FontAwesomeIcon size="3x" icon={faLinkedinIn} id="linkedin-icon" />
                </a>
            </div>
            <div className="brand-icon">
                <a href="mailto:yboodhan@gmail.com" target="_blank">
                    <FontAwesomeIcon size="3x" icon={faEnvelope} id="envelope-icon" />
                </a>
            </div>
        </div>
    )
}

export default ClickableIcon