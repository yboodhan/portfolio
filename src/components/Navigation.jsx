import React, { useState } from 'react';

import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

const Navigation = props => {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <nav>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/" className="nav-logo">yashomaBoodhan()</NavbarBrand>

                <NavbarToggler onClick={toggleNavbar} className="mr-2" />

                <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                        <NavItem>
                            <NavLink href="#/projects">projects()</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#/resume">resume()</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#/about">aboutMe()</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#/contact">contact()</NavLink>
                        </NavItem>
                </Nav>
                </Collapse>
                
            </Navbar>
        </nav>
    )
}

export default Navigation