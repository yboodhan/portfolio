import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AboutMe from './AboutMe';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';

const typeStyle = {
    color: 'purple'
}

const commentStyle = {
    color: 'green'
}


const Content = props => {
    return (
        <div className="content-container">
            <Route exact path="/" render={
                () => <Home typeStyle={typeStyle} commentStyle={commentStyle}/>
            } />
            <Route path="/#/projects" render={
                () => <Projects typeStyle={typeStyle} commentStyle={commentStyle}/>
            } />
            <Route path="/#/resume" render={
                () => <Resume typeStyle={typeStyle} commentStyle={commentStyle}/>
            } />
            <Route path="/#/about" render={
                () => <AboutMe typeStyle={typeStyle} commentStyle={commentStyle}/>
            } />
            <Route path="/#/contact" render={
                () => <Contact typeStyle={typeStyle} commentStyle={commentStyle}/>
            } />
        </div>
    )
}

export default Content
