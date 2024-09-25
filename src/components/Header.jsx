import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logowithname.svg';
import '../Assets/css/Header.css';

const Header = () => {
  return (
    <Navbar bg="white-shadow" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={logo} alt='Campaignpro'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            {/* <Nav.Link as={Link} to="/about">About</Nav.Link> */}
            <Nav.Link as={Link} to="/contact" className='mt-2px'>Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register"><button className='signup-btn'>Start For Free</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
