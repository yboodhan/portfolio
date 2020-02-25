import React from 'react';
import { Container } from 'reactstrap';
import NavLinks from './NavLinks';
import PortfolioCard from './PortfolioCard';
import { HashLink as Link } from 'react-router-hash-link';

const sizeStyle = {
    fontSize: 15
}
let projects = [{
                    function: "meetOut",
                    name: "Meet-Out",
                    skills: "Typescript, React, MongoDB, Mongoose, Express, Node, Axios, Reactstrap, Bootstrap, JavaScript, HTML, SASS",
                    features: "JSON Web Tokens, React Big Calendar, Cloudinary, Google Maps",
                    description: "Do you want to stay physically fit but have a hard time doing so because you dislike the gym? Good news! You can be a part of a health and fitness community that is all about staying fit through outdoor activities such as biking, hiking, swimming, jogging, and much more. Meet-Out is a social media and event scheduling app to promote outdoor exercise. Users can create and customize their profile as well as public or private events. A user can view all events in a calendar or navigate through their events in a scrollable list. If you want to get outdoors, meet new people, and stay fit, Meet-Out is the app for you!",
                    github: "https://github.com/yboodhan/meet-out",
                    deployed: "https://meeting-out.herokuapp.com/"
                },{
                    function: "yashYoga",
                    name: "Yash-Yoga",
                    skills: "JavaScript, Node, Express, SQL, PostgreSQL, Sequelize, EJS, Passport, Axios, Async, Bootstrap, HTML, CSS",
                    features: "Slick, OAuth",
                    description: "For coders like myself, the majority of our days is spent sitting near or hunching over a computer. This can lead to muscles feeling tight and pain in the back and shoulders. To help with this, I created Yash-Yoga! Yash-Yoga is an interactive web application that allows users to create customized yoga routines using a library of poses with varying levels of difficulty and targeting different areas of the body. For each routine a user creates, they can choose type and order of all poses, the duration of each pose, a soundtrack for the routine, and the sharing permission for the routine. The app automatically generates an interactive slideshow from the routine with audio indicators for changing poses. The user can simply create, play, and follow the routine without the need to go back to the computer every time they want to change poses or to look up constantly to see if the pose has changed. It is a great tool for beginners, seasoned yogis, and coders (of course!).",
                    github: "https://github.com/yboodhan/yash-yoga",
                    deployed: "https://yash-yoga.herokuapp.com/"
                },{
                    function: "ludo",
                    name: "Ludo",
                    skills: "JavaScript, HTML, Materialize, CSS",
                    description: "Similar to “Sorry!” and “Pachisi,” Ludo is a strategy board game that can have up to four players where each player races to get all four of their tokens to the finishing space first! It is a logic heavy game that needs to simultaneously accommodate various rules (in this particular adaptation, 13 main rules). This game is great for beginners because it highlights all possible moves for each player and each roll according to the rules of the game. It is fun, easy to learn, and a good way to bond with your team!",
                    github: "https://github.com/yboodhan/ludo",
                    deployed: "https://yboodhan.com/ludo/"
                }]

const Projects = props => {

    let myProjects = projects.map( (project, index) => {
        return (
                <PortfolioCard key={index} function={project.function} typeStyle={props.typeStyle} commentStyle={props.commentStyle} name={project.name} skills={project.skills} description={project.description} features={project.features} github={project.github} deployed={project.deployed} />
        )
    })

    let projectLinks = projects.map( (project, index) => {
        return (
            <div className="indented" key={index}>
                <Link to={"#"+project.function}>{project.function}();</Link>
            </div>
        )
    })

    return (
        <Container>
            <NavLinks back_link="/" back_text="Back to home page" forward_link="#/resume" forward_text="Go to my resume"/>
            <div className="clear page">
            <div className="big-text">
                <div>
                <span style={props.typeStyle}>public void</span> projects() {'{'}
                <br />
                    {projectLinks}
                {'}'}
                </div>
                <br />
                <br />
                <br />
                <br />
            </div>
            </div>
            <div style={sizeStyle}>
                {myProjects}
            </div>

            <br />
            <Link to="#top">Back to top of page</Link>
        </Container>
    )
}

export default Projects