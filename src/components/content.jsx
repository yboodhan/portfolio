import React from 'react';
import { Route } from 'react-router-dom';

import AboutMe from './AboutMe';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';



const Content = props => {
    return (
        <div className="content-container">
            <Route exact path="/" render={
                () => <Home />
            } />
            <Route exact path="/projects" render={
                () => <Projects />
            } />
            <Route exact path="/resume" render={
                () => <Resume />
            } />
            <Route exact path="/about" render={
                () => <AboutMe />
            } />
            <Route exact path="/contact" render={
                () => <Contact />
            } />
        </div>
    )
}

export default Content