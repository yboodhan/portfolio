import React from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import NavLinks from './NavLinks';

const Contact = props => {
    return (
        <Container>
            <NavLinks back_link="#/about" back_text="aboutMe()"/>
        <div className="clear page">
            <div className="big-text">
                <span style={props.typeStyle}>public void</span> contact() {'{'}
                <br />

                    <div className="indented">
                        {/* <small className="commented">{'//yboodhan@gmail.com'}</small> */}
                        <a title="yboodhan@gmail.com" href="mailto:yboodhan@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} />{' '}
                            email();
                        </a>
                    </div>
                    <div className="indented">
                        <a title="linkedin.com/in/yboodhan" href="https://www.linkedin.com/in/yboodhan/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />{' '}
                            linkedIn();
                        </a>
                    </div>
                    <div className="indented">
                        <a title="github.com/yboodhan" href="https://github.com/yboodhan" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} id="github-icon" />{' '}
                            github();
                        </a>
                    </div>
                    <div className="indented">
                        <a title="+1(347)357-9753" href="tel:347-357-9753">
                            <FontAwesomeIcon icon={faPhone} id="github-icon" />{' '}
                            phone();
                        </a>
                    </div>

                {'}'}
            </div>
        </div>
        </Container>

    )
}

export default Contact