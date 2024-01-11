import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, DropdownItem, DropdownToggle, UncontrolledDropdown, DropdownMenu } from 'reactstrap'
import { Route } from "react-router-dom"
import Logo from './../../Logo.png'
import './Header.css'


const Navigation = () => {
    return (
        <div className="Navigation">
            <Navbar style={{
                backgroundColor: "#f2717c",
                height: "60px",
            }}>
                <NavbarBrand href='/' className='mr-auto ml-md-5 Brand'>
                    Photo Blog
                </NavbarBrand>

                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink href="/" className="NavLink">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Topics
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem >
                                    <NavLink href='/wildlife'>
                                        Wildlife
                                    </NavLink>

                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href='/automobile'>
                                        Automobile
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href='/art'>
                                        Art
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href='/tech'>
                                        Technology
                                    </NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" className="NavLink">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" className="NavLink">Contact</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/login" className="NavLink">Login</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div >
    )
}

export default Navigation

