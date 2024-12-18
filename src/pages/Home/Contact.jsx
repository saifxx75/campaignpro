import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import '../../Assets/css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send formData using EmailJS
    emailjs.send("service_rvs09jn", "template_z2h6d1m", formData, "YCP92ebmDLdZoV7sk")
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
        setSuccessMessage("Message sent successfully!");
        setErrorMessage(""); // Clear any previous error message
        
        // Clear form fields after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setErrorMessage("Failed to send message. Please try again.");
        setSuccessMessage(""); // Clear any previous success message
      });
  };

  return (
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Left Side */}
        <Col md={6}>
          <h2>Ready to validate <span className="heading">your contacts?</span></h2>
          <p>Or reach out to us - <a href="mailto:contact@campaignpro.io">contact@campaignpro.io</a></p>
        </Col>

        {/* Right Side - Form */}
        <Col md={6}>
          <Form onSubmit={handleSubmit} className="p-4 border rounded shadow">
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Business Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>What's on your mind?</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Display success or error message */}
            {successMessage && <p className="text-success mt-3">{successMessage}</p>}
            {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}

            <div className="d-grid gap-2 mt-4 p-8px align-item-center justify-content-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
