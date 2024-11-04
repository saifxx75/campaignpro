import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import { useState } from "react";

function App() {
 const [toggle, setToggle] = useState(true);
 const Toggle = () => {
  setToggle(!toggle);
 };
 return(
  <>
  <div className="container-fluid min-vh-100 bg-light">
    <div className="row ">
      {toggle && (
        <div className="col-lg-2 p-3 bg-white vh-100 position-fixed">
          <Sidebar />
        </div>
      )}
      {toggle && <div className="col-lg-2"></div>}
      <div className="col">

        <Dashboard Toggle={Toggle} />
      </div>
    </div>
  </div>
  </>
 )
}

export default App;
