import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import Logo from './../../Logo.png'
import './Header.css'


const Navigation = () => {
    return (
        <div className="Navigation">
            <Navbar style={{
                backgroundColor: "#f2717c",
                height: "120px",
            }}>
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
                    <img src={Logo} alt="Logo" width="80px" />
                </NavbarBrand>
                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink href="#" className="NavLink">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" className="NavLink">Topics</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" className="NavLink">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" className="NavLink">Contact</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navigation

