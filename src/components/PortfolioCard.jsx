import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


const PortfolioCard = props => {
    let features
    if (props.features) {
        features = "Features: " + props.features
    }

    return (
        <div className="small-text">
            <a name={props.function}></a>
            <span style={props.typeStyle}>public void</span> {props.function}() {'{'}
            <br />
                <div className="indented">
                    String name: {"\"" + props.name + "\""}
                </div>

                <br/>
                <div className="indented text-indent">
                    {props.description}
                </div>
                <br/>
                <div className="indented">
                    Skills: {props.skills}
                </div>

                <div className="indented">
                    {features}
                </div>
                <br/>
                <div className="indented">
                    <a href={props.deployed} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGlobe} />{' '}
                        deployedSite();
                    </a>
                </div>
                <div className="indented">
                    <a href={props.github} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />{' '}
                        githubRepo();
                    </a>
                </div>


            {'}'}
        </div>

    )
}

export default PortfolioCard