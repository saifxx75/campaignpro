import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light py-4 fixed-bottom">
      <Container>
        <Row>
          <Col md={6} className="text-md-start text-center mb-3 mb-md-0">
            {/* Replace the text with an image if you have a logo image */}
            <div className="logo">
              <Link to="/" className="text-black logo-text" style={{ textDecoration: 'none' }}>
                CampaignPro
              </Link>
            </div>
          </Col>
          <Col md={6} className="text-md-end text-center">
            <ul className="list-unstyled d-inline-flex">
              <li className="ms-3">
                <Link to="/terms-of-services" className="text-dark">Terms of Services</Link>
              </li>
              <li className="ms-3">
                <Link to="/privacy-policy" className="text-dark">Privacy Policy</Link>
              </li>
              <li className="ms-3">
                <Link to="/services" className="text-dark">Service</Link>
              </li>
              <li className="ms-3">
                <Link to="/support" className="text-dark">Support</Link>
              </li>
            </ul>
            <div className="mt-3">
              <small>&copy; {new Date().getFullYear()} CampaignPro. All rights reserved.</small>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
