import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/Home/About";
import Contact from "./pages/Home/Contact";
import PrivacyPolicy from './pages/Home/PrivacyPolicy';
import Cancellations from './pages/Home/Cancellations';
import Support from './pages/Home/Support';
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Footer from "./components/Footer/Footer";
import TermOfServices from "./pages/Home/TermOfServices";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const hideHeaderFooter =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {/* Conditionally render Header */}
      {!hideHeaderFooter && (
        <Header isLoggedIn={isAuthenticated} handleLogout={handleLogout} />
      )}

      <div className="container-fluid min-vh-100 bg-light">
        <div className="row">
          {/* Sidebar for authenticated users only on dashboard */}
          {isAuthenticated && location.pathname === "/dashboard" && (
            <div className="col-lg-2 p-3 bg-white vh-100 position-fixed">
              <Sidebar />
            </div>
          )}
          <div className={isAuthenticated && location.pathname === "/dashboard" ? "col-lg-10" : "col"}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/login"
                element={<Login setIsAuthenticated={setIsAuthenticated} />}
              />
              <Route
                path="/register"
                element={<Register setIsAuthenticated={setIsAuthenticated} />}
              />
              <Route path="/terms-of-services" element={<TermOfServices />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cancellations" element={<Cancellations />} />
              <Route path="/support" element={<Support />} />
              <Route
                path="/dashboard"
                element={
                  isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
                }
              />
            </Routes>
          </div>
        </div>
      </div>

      {/* Conditionally render Footer */}
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
