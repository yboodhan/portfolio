import React from 'react';

import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

const Navigation = props => {

    return (
        <nav>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/" className="nav-logo">yashomaBoodhan()</NavbarBrand>
                
                <Collapse navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="nav-link">
                            <NavLink href="/projects">projects()</NavLink>
                        </NavItem>
                        <NavItem className="nav-link">
                            <NavLink href="/resume">resume()</NavLink>
                        </NavItem>
                        <NavItem className="nav-link">
                            <NavLink href="/about">aboutMe()</NavLink>
                        </NavItem>
                        <NavItem className="nav-link">
                            <NavLink href="/contact">contact()</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </nav>
    )
}

export default Navigation