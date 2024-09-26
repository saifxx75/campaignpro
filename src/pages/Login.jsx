import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Toast } from "react-bootstrap";
import '../Assets/css/Login.css';
// import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false); // Toast visibility control
  // const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3002/auth/logIn", {
        email,
        password,
      });

      if (response.status === 200) {
        setMessage("Login successful");
        setLoginError("");
        setShowToast(true);  // Show toast on success
        console.log("Login successful");
      } else {
        setLoginError(response.data.error || "Login failed");
        setShowToast(true);  // Show toast on failure
        console.error("Login failed:", response.data.error);
        setMessage("");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Incorrect email or password");
      setMessage("");
      setShowToast(true);  // Show toast on error
    }
  };

  return (
    <>
      {/* Toast for showing messages */}
      <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1060 }}>
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
          <Toast.Body>
            {loginError ? <span className="error">{loginError}</span> : <span className="success">{message}</span>}
          </Toast.Body>
        </Toast>
      </div>

      {/* Main login form */}
      <Container className="mt-5 mb-5 p-3 space-y-6 container-fluid justify-content-center align-item-center">
        <Row className="d-flex justify-content-center">
          <Col md={4}>
            <Form className="rounded-md shadow-sm p-4" onSubmit={handleLogin}>
              <h2 className="text-center mb-4">Sign In</h2>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="d-grid gap-2 mt-4">
                <Button variant="primary" type="submit">
                  Sign In
                </Button>
              </div>
            </Form>
            <p className="text-center mt-4">OR</p>
            <p className="text-center">
              Don&apos;t have an account? <a href="/register">Sign Up</a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
