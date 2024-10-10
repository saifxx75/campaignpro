import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logowithname.svg'; // Import your logo here

const Sidebar = () => {
  return (
   <>
   <div className="vh-100">
      <img src={logo} className="img-fluid mb-3 ml-3" alt="" />
      <div className="list-group list-group-flush">
        <Link
          to="/dashboard"
          className="list-group-item border-0 py-2 fw-bold"
        >
          <i className="bi bi-house-door-fill fs-6 me-3"></i>
          <span>Dashboard</span>
        </Link>
        <Link
          to="/campaigns"
          className="list-group-item border-0 py-2 fw-bold "
        >
          <i className="bi bi-speedometer2 fs-6 me-3 "></i>{" "}
          <span>Campaigns</span>
        </Link>
        <Link
          to="/payment"
          className="list-group-item border-0 py-2 fw-bold"
        >
          <i className="bi bi-credit-card fs-6 me-3 "></i> <span>Payments</span>
        </Link>
      </div>
    </div>
   </>
  );
};

export default Sidebar;
