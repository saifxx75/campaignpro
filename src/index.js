import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
  Outlet,
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
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = localStorage.getItem("token");
  return isAuthenticated && token ? <Outlet /> : <Navigate replace to="/" />;
};

const AppRoutes = () => {
  const [isAuthenticated, setisAuthenticated] = useState(() => {
    const token = localStorage.getItem("token");
    return !!token;
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    setisAuthenticated(!!token);
  }, []);

  return (
    <BrowserRouter>
    <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/logIn"
          element={<Login setisAuthenticated={setisAuthenticated} />}
        />
        <Route
          path="/register"
          element={<Register setisAuthenticated={setisAuthenticated} />}
        />
        <Route path="/terms-of-services" element={<TermOfServices />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cancellations" element={<Cancellations />} />
        <Route path="/support" element={<Support />} />
        <Route path="/dashboard" element={<Dashboard  isAuthenticated={isAuthenticated}/>} />
        <Route path="/sidebar" element={<Sidebar/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <AppRoutes />
  </React.Fragment>
);
