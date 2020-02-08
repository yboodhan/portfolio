import React from 'react'

const Footer = props => {
    return (
        <footer>
            © Copyright 2019 - {new Date().getFullYear()}
            <br />
            All rights reserved. Powered by {` `}
            <a href="https://www.gatsbyjs.org">React</a>.
        </footer>
    )
}

export default Footer