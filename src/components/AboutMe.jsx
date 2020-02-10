import React from 'react';
import NavLinks from './NavLinks';
import { HashLink as Link } from 'react-router-hash-link';

const AboutMe = props => {
    return (
        <div>
            <NavLinks back_link="#/resume" back_text="Back to my resume" forward_link="#/contact" forward_text="Go to my contact info"/>
        <div className="clear page">
            <div className="small-text">
                <span style={props.typeStyle}>public void</span> aboutMe() {'{'}
                <br />
                    <div className="indented">
                        String name = "Yashoma Boodhan";
                    </div>

                    <div className="indented">
                        String university = "The City College of New York";
                    </div>

                    <div className="indented">
                        String degree = "B.E. Chemical Engineering";
                    </div>

                    <div className="indented">
                        Integer yearOf = 2019;
                    </div>

                    <div className="indented">
                        String currentCity = "Seattle, WA";
                    </div>

                    <br/>
                    <div className="indented text-indent">
                    After reading my details above, you are probably wondering why a New Yorker who majored in chemical engineering would move to Seattle and decide to pursue software engineering. My relocation to Seattle was a result of personal circumstances and was a big step for me toward independence. However, it meant giving up my previous role as an engineering supervisor in NYC. Presented with a blank slate, I wanted to rewrite my career path to one that would allow me to feed my desire to create without any of the physical dangers of my previous roles. I briefly dabbled in code in college and enjoyed the freedom it offered me to create as well as the challenge it presented me with to constantly learn a new skill or language. I made the bold step to transition into the software engineering field and decided that supplementing my self-teaching with a bootcamp would be a great way to learn the skills I need to in order to be successful in the software engineering field.
                    </div>
                    <div className="indented text-indent">
                    While the majority of my time is spent coding, in my free time I enjoy painting and knitting. Both of these activities allow me to create products that I can share and require me to learn more advanced techniques in order to create better products. The freedom to create and constant challenge to learn is what draws me to my hobbies and to coding as well.
                    </div>
                    <div className="indented text-indent">
                    If you would like to learn more about me, feel free to <a title="linkedin.com/in/yboodhan" href="https://www.linkedin.com/in/yboodhan/" target="_blank" rel="noopener noreferrer">reach out through LinkedIn</a> or to <a title="yboodhan@gmail.com" href="mailto:yboodhan@gmail.com" target="_blank" rel="noopener noreferrer">send me an email</a>. Feel free to check out the rest of my website portfolio or to <a title="github.com/yboodhan" href="https://github.com/yboodhan" target="_blank" rel="noopener noreferrer">view my projects on Github</a>.
                    </div>

                {'}'}
            </div>

        </div>
        <br />
        <Link to="#top">Back to top of page</Link>
        </div>
    )
}

export default AboutMe