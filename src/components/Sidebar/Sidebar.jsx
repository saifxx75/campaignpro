import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logowithname.svg'; // Import your logo here

const Sidebar = () => {
  return (
    <div className="d-flex flex-column bg-light" style={{ height: '100vh', width: '250px', padding: '1rem' }}>
      <Container>
        <Row>
          <Col className="text-center mb-4">
            <img src={logo} alt="CampaignPro Logo" width={120} height={120} />
          </Col>
        </Row>

        <Nav className="flex-column">
          <Nav.Link as={Link} to="/dashboard" className="mb-2">
            <i className="bi bi-speedometer2"></i> Dashboard
          </Nav.Link>
          {/* Add more modules here as needed */}
        </Nav>
      </Container>
    </div>
  );
};

export default Sidebar;
