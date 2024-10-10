import React from 'react';
import { Navbar, Nav, Container, Dropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logowithname.svg';
import profilePic from '../../Assets/images/Profile-icon.svg'; // Placeholder for profile picture
import './Header.css';

const Header = ({ isLoggedIn, handleLogout }) => {
  return (
    <Navbar bg="white-shadow" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={logo} alt="Campaignpro" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            {isLoggedIn ? (
              <>
                <Dropdown align="end">
                  <Dropdown.Toggle variant="white" id="dropdown-basic">
                    <Image
                      src={profilePic}
                      roundedCircle
                      width="30"
                      height="30"
                      alt="profile"
                      className="profile-icon"
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/contact" className="mt-2px">Contact Us</Nav.Link>
                <Nav.Link as={Link} to="/logIn">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">
                  <button className="signup-btn">Start For Free</button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
