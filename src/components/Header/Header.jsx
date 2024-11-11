import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logowithname.svg';
import profilePic from '../../Assets/images/Profile-icon.svg';
import './Header.css';

const Header = ({ isLoggedIn, handleLogout }) => {
  return (
    <Navbar bg="white-shadow" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Campaignpro" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            {isLoggedIn ? (
              <>
                <NavDropdown
                  title={
                    <Image
                      src={profilePic}
                      roundedCircle
                      width="30"
                      height="30"
                      alt="profile"
                      className="profile-icon"
                    />
                  }
                  id="profile-dropdown"
                  align="end"
                >
                  <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/contact" className='text-decoration-none'>Contact Us</Nav.Link>
                <Nav.Link as={Link} to="/login" className='text-decoration-none'>Login</Nav.Link>
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
