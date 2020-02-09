import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const PortfolioCard = props => {
    let features
    if (props.features) {
        features = "[String] features: [" + props.features + "]"
    }

    return (
        <div>
            <a name={props.function}></a>
            <span style={props.typeStyle}>public void</span> {props.function}() {'{'}
            <br />
                <div className="indented">
                    String name: {"\"" + props.name + "\""}
                </div>

                <div className="indented">
                    [String] skills: {"[" + props.skills + "]"}
                </div>

                <div className="indented">
                    {features}
                </div>
                <br/>
                <div className="indented">
                    <a href={props.github} target="_blank">
                        <FontAwesomeIcon icon={faGithub} />{' '}
                        github();
                    </a>
                </div>

                <div className="indented">
                    <a href={props.deployed} target="_blank">
                        <FontAwesomeIcon icon={faGlobe} />{' '}
                        deployedSite();
                    </a>
                </div>
                <br/>
                <div className="indented text-indent">
                    {props.description}
                </div>

            {'}'}
        </div>

    )
}

export default PortfolioCard