import React from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faEye } from '@fortawesome/free-solid-svg-icons';
import myResume from '../Yashoma_Boodhan_Resume.pdf';

import NavLinks from './NavLinks';


const Resume = props => {
    return (
        <Container>
            <NavLinks back_link="#/projects" back_text="Back to my projects" forward_link="#/about" forward_text="Go to about me"/>
        <div className="clear page">
            <div className="big-text">
                <span style={props.typeStyle}>public void</span> resume() {'{'}
                <br />

                    <div className="indented">
                        <a href={myResume} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEye} id="file-download-icon" />{' '}
                            viewResume();
                        </a>
                    </div>
                    <div className="indented">
                        <a href={myResume} target="_blank" rel="noopener noreferrer" download>
                            <FontAwesomeIcon icon={faFileDownload} id="file-download-icon" />{' '}
                            downloadResume();
                        </a>
                    </div>

                {'}'}
            </div>
        </div>
        </Container>
    )
}

export default Resume