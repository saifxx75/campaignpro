import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import axios from "axios"; // Assuming you're using Axios for API calls
// import { useNavigate } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  // const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3002/auth/register", {
        firstName,
        lastName,
        email,
        password,
      });
      setMessage(response.data.message || "Registration successful!");
      setError("");
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred during registration."
      );
      setMessage("");
    }
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center vh-70 mt-4" // Vertically and horizontally center
      style={{ overflowY: "auto" }} // Ensures scrollability
    >
      <Row className="justify-content-center w-100">
        <Col md={3} lg={3}>
        {/* <Button
            variant="secondary"
            className="mb-3"
            style={{ position: 'absolute', top: '10px', left: '10px' }} // Positioning in top-left corner
            onClick={() => navigate("/")}
          >
            Back
          </Button> */}
          <Form className="p-4 shadow-sm rounded" onSubmit={handleRegister}>
            <h2 className="text-center mb-4">Create Your Free Account</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <div className="d-grid gap-2 mt-4">
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </div>
          </Form>
          <div className="text-center mt-3">
            <p>OR</p>
            <p>
              Already registered? <a className="text-decoration-none" href="/logIn">Sign In</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
