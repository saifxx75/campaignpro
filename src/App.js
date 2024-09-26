import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from './components/Header';
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from './components/Footer';
import TermOfServices from './pages/TermOfServices';
import Dashboard from './pages/Dashboard'
import MainLayout from './components/MainLayout';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  const location = useLocation();

  const hideHeaderFooterRoutes = ["/logIn", "/register"];
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/terms-of-services" element={<TermOfServices/>} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/dashboard' element={<MainLayout> <Dashboard/> </MainLayout>} />
        {/* other routes */}
      </Routes>
      {!shouldHideHeaderFooter && <Footer />}
      </>
  );
}

export default App;
