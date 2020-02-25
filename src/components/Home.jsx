import React from 'react';
import { Container } from 'reactstrap';
import Typing from 'react-typing-animation';


const Home = props => {
    return (
        <Container>
            <Typing>
        <div className="clear page">
                <div className="big-text">
                    <Typing.Speed ms={25} />
                    <span style={props.typeStyle}>public static void</span> main(String[] args) {'{'}
                    <br />
                        <div className="indented">
                            <span style={props.commentStyle}>{'// Hello,'}{' '}
                                <Typing.Delay ms={400} />
                                I'm{' '}
                                <Typing.Speed ms={50} />
                                Yashoma Boodhan.{' '}
                            </span>
                        </div>
                        <div className="indented">
                            <span style={props.commentStyle}>
                                <Typing.Delay ms={400} />
                                {'// Welcome to my portfolio!'}
                            </span>
                        </div>

                        <div className="indented">
                            <a href="#/projects">projects();</a>
                        </div>
                        <div className="indented">
                            <a href="#/resume">resume();</a>
                        </div>
                        <div className="indented">
                            <a href="#/about">aboutMe();</a>
                        </div>
                        <div className="indented">
                            <a href="#/contact">contact();</a>
                        </div>
                    {'}'}
                    <div className="forward-link">
                        <a href="#/projects">Start{' '}&rarr;</a>
                    </div>
                </div>
        </div>
            </Typing>
        </Container>
    )
}

export default Home