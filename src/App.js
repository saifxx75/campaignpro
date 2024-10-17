import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import Header from './components/Header/Header';
import Home from "./pages/Home/Home";
import About from './pages/Home/About';
import Contact from './pages/Home/Contact';
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Footer from './components/Footer/Footer';
import TermOfServices from './pages/Home/TermOfServices';
import Dashboard from './pages/Dashboard/Dashboard';
import MainLayout from './components/MainLayout';
import PrivacyPolicy from './pages/Home/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';
import Cancellations from './pages/Home/Cancellations';
import Support from './pages/Home/Support';

function App() {
  const location = useLocation();

  // Check whether header and footer should be hidden based on the current route
  const hideHeaderFooterRoutes = ["/logIn", "/register"];
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); // Remove the login state from localStorage
    window.location.href = '/logIn';  // Redirect to login on logout
  };

  return (
    <>
      {/* Conditionally render Header based on current route */}
      {!shouldHideHeaderFooter && <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />}

      {/* Scroll to top functionality */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register onRegister={handleLogin} />} />
        <Route path="/logIn" element={<Login onLogin={handleLogin} />} />
        <Route path="/terms-of-services" element={<TermOfServices />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cancellations" element={<Cancellations />} />
        <Route path="/support" element={<Support />} />

        {/* Main Layout: Dashboard */}
        <Route 
          path="/dashboard" 
          element={isLoggedIn 
            ? <MainLayout><Dashboard /></MainLayout> 
            : <Login onLogin={handleLogin} />} 
        />
      </Routes>

      {/* Conditionally render Footer based on current route */}
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
