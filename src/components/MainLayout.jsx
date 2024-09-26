import React from 'react';
import Sidebar from './Sidebar'; // Import Sidebar component
import { Container } from 'react-bootstrap';

const MainLayout = ({ children }) => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Container fluid className="p-4" style={{ marginLeft: '250px' }}>
        {children}
      </Container>
    </div>
  );
};

export default MainLayout;
