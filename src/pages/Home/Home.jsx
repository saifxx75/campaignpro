import React from "react";
import { Link } from "react-router-dom";
import "../../Assets/css/Home.css";

const Home = () => {
  return (
    <>
      <div className="homepage vh-100">
        <main className="main-section">
          <div className="text-content">
            <h1>
              Welcome to the Future of{" "}
              <span className="highlight">Landings</span>
            </h1>
            <p>
              CampaignPro empowers your campaigns with precision and seamless
              quality control.<br></br> Manage, monitor, and maximize your impact for
              guaranteed success!
            </p>
            <Link to="/register" className="signup-btn text-decoration-none">
              Get Started
            </Link>
          </div>
          <div className="visuals">
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
