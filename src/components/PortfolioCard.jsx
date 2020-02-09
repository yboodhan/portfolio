import React from 'react';


const PortfolioCard = props => {
    return (
        <div>
            <a name={props.function}></a>
            <span style={props.typeStyle}>public void</span> {props.function}() {'{'}
            <br />
                <div className="indented">
                    <div>
                        <div>
                            {props.name}
                        </div>
                        <div>
                            {props.skills}
                        </div>
                        <div>
                            {props.description}
                        </div>
                    </div>
                </div>
            {'}'}
        </div>

    )
}

export default PortfolioCard