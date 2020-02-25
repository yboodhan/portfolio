import React from 'react';
import { Container } from 'reactstrap';

const NavLinks = props => {

    let forward_arrow
    let back_arrow
    if (props.forward_link) {
        forward_arrow = <span>&rarr;</span>
    }
    if (props.back_link) {
        back_arrow = <span>&larr;</span>
    }
    return (
        <Container className="back-forward-links">
            <div className="back-link">
                <a href={props.back_link}>{back_arrow}{' '}{props.back_text}</a>
            </div>
            <div className="forward-link">
                <a href={props.forward_link}>{props.forward_text}{' '}{forward_arrow}</a>
            </div>
        </Container>
    )
}

export default NavLinks