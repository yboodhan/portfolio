import React from 'react';
import NavLinks from './NavLinks';

const Projects = props => {
    return (
        <div>
            <NavLinks back_link="/" back_text="Back to home page" forward_link="/resume" forward_text="Go to my resume"/>
            <div className="clear page">
                Projects
            </div>
        </div>
    )
}

export default Projects