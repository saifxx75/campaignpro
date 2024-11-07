import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../Assets/images/logowithname.svg';
import './Sidebar.css'; // Add custom styles here if needed

const Sidebar = () => {
  const location = useLocation(); // Get current path

  return (
    <div className="sidebar vh-100 d-flex flex-column align-items-start p-3">
      {/* Logo */}
      <div className="logo mb-4">
        <img src={logo} className="img-fluid" alt="Logo" />
      </div>

      {/* Menu Links */}
      <div className="list-group list-group-flush w-100">
        {/* Dashboard Link */}
        <Link
          to="/dashboard"
          className={`list-group-item list-group-item-action border-0 py-2 fw-bold ${
            location.pathname === '/dashboard' ? 'active' : ''
          }`}
        >
          <i className="bi bi-house-door-fill fs-6 me-3"></i>
          Dashboard
        </Link>

        {/* Campaigns Link */}
        <Link
          to="/campaigns"
          className={`list-group-item list-group-item-action border-0 py-2 fw-bold ${
            location.pathname === '/campaigns' ? 'active' : ''
          }`}
        >
          <i className="bi bi-speedometer2 fs-6 me-3"></i>
          Campaigns
        </Link>

        {/* Payments Link */}
        <Link
          to="/payment"
          className={`list-group-item list-group-item-action border-0 py-2 fw-bold ${
            location.pathname === '/payment' ? 'active' : ''
          }`}
        >
          <i className="bi bi-credit-card fs-6 me-3"></i>
          Payments
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
