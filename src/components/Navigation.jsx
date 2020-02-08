import React, { useState } from 'react';

import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

const Navigation = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <nav>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/" className="nav-link">yashomaBoodhan()</NavbarBrand>
                
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="nav-link">
                            <NavLink href="/projects">myProjects()</NavLink>
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