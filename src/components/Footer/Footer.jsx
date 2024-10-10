import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logowithname.svg';
import '../Assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-light py-2 bottom-fixed">
      <Container>
        <Row>
          <Col md={6} className="text-md-start text-center mb-2 mb-md-0">
            <div className="logo">
              <Link to="/" className="text-black logo-text">
                <img src={logo} alt="CampaignPro" /> {/* Decreased logo size */}
              </Link>
            </div>
          </Col>
          <Col md={6} className="text-md-end text-center">
            <ul className="list-unstyled d-inline-flex">
              <li className="ms-2">
                <Link to="/terms-of-services" className="text-dark">Terms of Services</Link>
              </li>
              <li className="ms-3">
                <Link to="/privacy-policy" className="text-dark">Privacy Policy</Link>
              </li>
              <li className="ms-3">
                <Link to="/cancellations" className="text-dark">Cancellations</Link>
              </li>
              <li className="ms-3">
                <Link to="/support" className="text-dark">Support</Link>
              </li>
            </ul>
            <div className="mt-2">
              <small>&copy; {new Date().getFullYear()} CampaignPro. All rights reserved.</small>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
