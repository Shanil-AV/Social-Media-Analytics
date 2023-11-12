import React, { useContext, useState } from "react";
import "./Analysis.css";
import profilePicture from "../images/social-media.png";
import ChartComponent from "./ChartComponent";
import Nextchart from "./Nextchart";
import PieChart from "./Piechart";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../context/context";

const Analysis = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    window.location.href = "/home";
  };

  const { state } = useLocation();

  console.log(state);

  const { name, setName, email, setEmail } = useContext(Context);
  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <div className="app-container">
      <div className="top-right">
        <button className="menu-button" onClick={toggleDrawer}>
          ☰ Menu
        </button>
      </div>
      {isDrawerOpen && (
        <div className={`drawer`}>
          <ul>
            <li>Dashboard</li>
            <li onClick={handleLogout}>Home</li>
            <li onClick={handleProfileClick}>Profile</li>
          </ul>
          <div className="Logout_button">
            <Link to="/" className="logout-button">
              Logout
            </Link>
          </div>
        </div>
      )}
      <div className="content">
        <div className="profile-containers">
          <div className="profile-picture">
            <img src={profilePicture} alt="Profile" />
          </div>
          <h1> {name}</h1>
        </div>
      </div>
      <div className="number-card">
        <div className="card">
          <h2>Followers</h2>
          <p>{state?.followers}</p>
        </div>
        <div className="card">
          <h2>Posts</h2>
          <p>{state?.posts}</p>
        </div>
        <div className="card">
          <h2>Following</h2>
          <p>{state?.following}</p>
        </div>
      </div>
      <div className="analytics-card">
        <h2>Engagement Overview</h2>
        <div className="linegraph">
          <ChartComponent />
        </div>
      </div>
      <div className="analytics-card">
        <h2>Monthly Followers</h2>
        <div className="bargraph">
          <Nextchart />
        </div>
      </div>
      <div className="intraction">
        <h2>Follower Distribution</h2>
        <div className="Piechart">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Analysis;
