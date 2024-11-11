import axios from 'axios';
import { baseURL } from "../../utils/constant";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { isLogin, setAuthentication } from "../../utils/Auth";
import Toast from 'react-bootstrap/Toast';

export default function RegisterPage() {
  const [showToast, setShowToast] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [pageReady, setPageReady] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const authenticate = async () => {
      if (await isLogin()) {
        navigate("/");
      } else {
        setPageReady(true);
      }
    };
    authenticate();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${baseURL}auth/register`, formData)
      .then((res) => {
        setAuthentication(res.data.bearerToken);
        localStorage.setItem('bearerToken', res.data.bearerToken);
        setToastMessage("Registration successful!");
        setShowSuccessToast(true);
        setTimeout(() => navigate("/dashboard"), 2000);
      })
      .catch((err) => {
        setToastMessage(err?.response?.data?.message || "An error occurred");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
      });
  };

  if (!pageReady) return null;

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Container>
          <Row>
            <Col lg={4} className="mx-auto">
              <Col lg={12} className="p-5 border rounded-4 mb-3">
                <h5 className="mb-5 text-center">Create Account</h5>
                <Form onSubmit={handleSubmit}>
                  {["firstName", "lastName", "email", "password"].map((field, index) => (
                    <Form.Group className="mb-3" key={index}>
                      <Form.Control
                        type={field === "email" ? "email" : field === "password" ? "password" : "text"}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                        className="border-0 border-bottom rounded-0"
                        name={field}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  ))}
                  <div className="d-grid gap-2">
                    <Button variant="primary" type="submit" className="rounded-pill">
                      Register
                    </Button>
                  </div>
                </Form>
              </Col>
              <div className="text-center">
                <Link to="/" className="text-decoration-none">Back to Home Page</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        className="custom-toast p-2 border-0 bg-danger text-white"
      >
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>

      <Toast
        show={showSuccessToast}
        onClose={() => setShowSuccessToast(false)}
        className="custom-toast p-2 border-0 bg-success text-white"
      >
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>

      <style jsx global>{`
        .custom-toast {
          position: fixed;
          bottom: 20px;
          left: 20px;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}
