import React, { useState, useContext } from "react";
import "./Profilepage.css";
import { Context } from "../context/context";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);

  const { name, setName, email, setEmail, bio, setBio, phone, setPhone } =
    useContext(Context);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src="https://placekitten.com/200/200"
          alt="Profile"
          className="profile-image"
        />
        {editMode ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="profile-name"
          />
        ) : (
          <h1 className="profile-name">{name}</h1>
        )}

        {editMode ? (
          <input
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="profile-bio"
          />
        ) : (
          <p className="profile-bio">{bio}</p>
        )}
      </div>

      <div className="profile-details">
        <h2>About Me</h2>
        {editMode ? (
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows="4"
            className="about-me-input"
          />
        ) : (
          <p>{bio}</p>
        )}

        <h2>Contact Information</h2>

        {editMode ? (
          <>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="contact-input"
            />
            <label>Phone:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="contact-input"
            />
          </>
        ) : (
          <>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
          </>
        )}

        <div className="edit-button-container">
          <button onClick={handleEditClick} className="edit-button">
            {editMode ? "Save Changes" : "Edit Profile"}
          </button>
        </div>
      </div>

      <Link to="/home" className="home-button">
        Home
      </Link>
    </div>
  );
};

export default ProfilePage;
