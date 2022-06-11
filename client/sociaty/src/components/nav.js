import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap';


function Navigation() {
    return (
        <>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
            <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
            </Nav.Item>
            <Nav.Item>
            <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
            </Nav.Item>
            <Nav.Item>
            <LinkContainer to="/chat">
                    <Nav.Link>Chat</Nav.Link>
                  </LinkContainer>
            </Nav.Item>
            
                  
          </Nav>
          
        </>
      );
}

export default Navigation;