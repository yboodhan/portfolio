import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ClickableIcon = props => {
    return (
        <div>
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faEnvelope} />
        </div>
    )
}

export default ClickableIcon