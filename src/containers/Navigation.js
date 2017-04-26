import React from 'react';
import {Navbar, Nav, NavItem, Button } from 'react-bootstrap' 
import {LinkContainer} from 'react-router-bootstrap'

export const Navigation = () => (
        <Navbar default collapseOnSelect>
        <Navbar.Header>
        <Navbar.Brand>
           <LinkContainer to="/">   
                  <NavItem >  <img src="/favicon.ico" width="36px" height="36px" alt=''/></NavItem >
            </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav pullRight>
            <LinkContainer to="/" exact>
              <NavItem >Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/text">
              <NavItem >Loren</NavItem>
            </LinkContainer>
            <LinkContainer to="/translate">
              <NavItem >translator</NavItem>
            </LinkContainer>
            <LinkContainer to="/todos/all">
              <NavItem >Todos</NavItem>
            </LinkContainer> 
            <LinkContainer to="/news">
              <NavItem >News</NavItem>
            </LinkContainer>
            <LinkContainer to="/github">
              <NavItem >Github</NavItem>
            </LinkContainer>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
)
    
    console.log(typeof Button);