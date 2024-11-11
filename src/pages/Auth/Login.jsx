import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { isLogin, setAuthentication } from "../../utils/Auth";
import { baseURL } from "../../utils/constant";
import "../../Assets/css/Login.css";

export default function Login({ setisAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authenticate = async () => {
      if (await isLogin()) {
        navigate("/dashboard");
      }
    };
    authenticate();
  }, [navigate]);

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseURL}auth/login`, { email, password });
  
      // Ensure correct response status and bearerToken
      if (response.status === 200 && response.data.bearerToken) {
        setMessage("Login successful");
        setLoginError(null);
        setShowToast(true);
  
        setAuthentication(response.data.bearerToken);
        localStorage.setItem("token", response.data.bearerToken);
  
        setisAuthenticated(true);
        navigate("/dashboard");
      } else {
        setLoginError("Login failed, please check your credentials.");
        setMessage("Login failed");
        setShowToast(true);
      }
    } catch (error) {
      if (error.response) {
        console.error("Login error response:", error.response); // To see more details
        setLoginError(error.response.data.message || "Incorrect email or password");
      } else {
        setLoginError("Network error. Please try again.");
      }
      setMessage("Incorrect email or password");
      setShowToast(true);
    }
  };
  
  

  return (
    <>
      {/* Toast for showing messages */}
      <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1060 }}>
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={5000}
          autohide
        >
          <Toast.Body>
            {loginError ? (
              <span className="error">{loginError}</span>
            ) : (
              <span className="success">{message}</span>
            )}
          </Toast.Body>
        </Toast>
      </div>

      {/* Main login form */}
      <Container className="mt-5 mb-5 p-3 justify-content-center align-item-center">
        <Row className="d-flex justify-content-center">
          <Col md={4}>
            <Form className="rounded-md shadow-sm p-4" onSubmit={handleLogin}>
              <h2 className="text-center mb-4">Sign In</h2>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mt-3 position-relative">
                <Form.Label>Password</Form.Label>
                <div className="position-relative">
                  <Form.Control
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Enter Password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="position-absolute end-0 top-50 translate-middle-y me-2 border-0 bg-transparent"
                    onClick={handlePasswordToggle}
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </Form.Group>

              <div className="d-grid gap-2 mt-4">
                <Button variant="primary" type="submit">
                  Sign In
                </Button>
              </div>
            </Form>
            <p className="text-center mt-4">OR</p>
            <p className="text-center">
              Don&apos;t have an account?{" "}
              <a className="text-decoration-none" href="/register">
                Sign Up
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
