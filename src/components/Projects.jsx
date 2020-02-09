import React from 'react';
import NavLinks from './NavLinks';
import PortfolioCard from './PortfolioCard';

let projects = [{
                    function: "meetOut",
                    name: "Project 1",
                    skills: "All",
                    description: "Describe project 1."
                },{
                    function: "ludo",
                    name: "Project 2",
                    skills: "Most of em",
                    description: "Descrive project 2."
                }]

const Projects = props => {

    let myProjects = projects.map( project => {
        return (
                <PortfolioCard function={project.function} typeStyle={props.typeStyle} commentStyle={props.commentStyle} name={project.name} skills={project.skills} description={project.description} />
        )
    })

    let projectLinks = projects.map( project => {
        return (
            <div className="indented">
                <a href={"#"+project.function}>{project.function}();</a>
            </div>
        )
    })

    return (
        <div>
            <NavLinks back_link="/" back_text="Back to home page" forward_link="/resume" forward_text="Go to my resume"/>
            <div className="clear page">
            <p className="small-text">
                <span style={props.typeStyle}>public void</span> projects() {'{'}
                <br />
                    {projectLinks}
                {'}'}
                <br />
                {myProjects}
            </p>
            </div>

            <br />
            <a href="#top">Back to top of page</a>
        </div>
    )
}

export default Projects