import React from 'react';

import ClickableIcon from './ClickableIcon';

const Footer = props => {
    return (
        <footer>
            <ClickableIcon />
            © Copyright 2019 - {new Date().getFullYear()}
            <br />
            All rights reserved. Powered by {` `}
            <a href="https://www.gatsbyjs.org">React</a>.
        </footer>
    )
}

export default Footer