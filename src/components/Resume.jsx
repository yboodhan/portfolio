import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faEye } from '@fortawesome/free-solid-svg-icons';
import myResume from '../Yashoma_Boodhan_Resume.pdf'


const Resume = props => {
    return (
        <div className="page">
            <p className="big-text">
                <span style={props.typeStyle}>public void</span> resume() {'{'}
                <br />

                    <div className="indented">
                        <a href={myResume} target="_blank">
                            <FontAwesomeIcon icon={faEye} id="file-download-icon" />{' '}
                            viewResume();
                        </a>
                    </div>
                    <div className="indented">
                        <a href={myResume} target="_blank" download>
                            <FontAwesomeIcon icon={faFileDownload} id="file-download-icon" />{' '}
                            downloadResume();
                        </a>
                    </div>

                {'}'}
            </p>
        </div>
    )
}

export default Resume