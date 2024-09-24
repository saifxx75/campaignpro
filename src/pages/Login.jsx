import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const [message, setMessage] = useState("");
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
        console.log("Login successful");
      } else {
        setLoginError(response.data.error || "Login failed");
        console.error("Login failed:", response.data.error);
        setMessage("");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Incorrect email or password");
      setMessage("");
    }
  };

  return (
    <Container className="mt-5 mb-5 p-3 space-y-6 container-fluid justify-content-center align-item-center">
      <Row className="d-flex justify-content-center">
        <Col md={4}>
        {/* <Button
            variant="secondary"
            className="mb-3"
            style={{ position: 'absolute', top: '10px', left: '10px' }} // Positioning in top-left corner
            onClick={() => navigate("/")}
          >
            Back
          </Button> */}
          <Form className="rounded-md shadow-sm p-4" onSubmit={handleLogin}>
            <h2 className="text-center mb-4">Sign In</h2>
            {loginError && <Alert variant="danger">{loginError}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            
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
            
            {/* Center-align button using "d-grid" class */}
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
  );
}
