import React, { useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'

const TopNav = (props) => {
    return(
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand><NavLink className="logo-link" to="/">Beer Stuff App</NavLink></NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="mr-3">
                            <NavLink className="link" to='random-beer'>Random Beer</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="link" to='all-beers'>All Beers</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>
        </div>
    )
}

export default connect()(TopNav)