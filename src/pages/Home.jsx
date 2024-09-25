import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../Assets/css/Home.css";

const Home = () => {
  return (
    <>
      <div className="homepage">
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
            {/* Use Link here as well */}
            <Link to="/register" className="signup-btn">
              Get Started
            </Link>
          </div>
          <div className="visuals">
            {/* Add placeholder for screenshots, like two images */}
            {/* <img
            src="dashboard1.png"
            alt="Dashboard 1"
            className="dashboard-img"
          />
          <img
            src="dashboard2.png"
            alt="Dashboard 2"
            className="dashboard-img"
          /> */}
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
