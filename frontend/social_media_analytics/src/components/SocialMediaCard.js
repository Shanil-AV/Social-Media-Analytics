import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faLinkedinIn,
  faYoutube,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialMediaCard.css";
import { Link } from "react-router-dom";

const SocialMediaCard = ({ platform, followers, posts, following }) => {
  let icon;
  switch (platform.toLowerCase()) {
    case "instagram":
      icon = <FontAwesomeIcon icon={faInstagram} />;
      break;
    case "twitter":
      icon = <FontAwesomeIcon icon={faTwitter} />;
      break;
    case "facebook":
      icon = <FontAwesomeIcon icon={faFacebook} />;
      break;
    case "linkedin":
      icon = <FontAwesomeIcon icon={faLinkedinIn} />;
      break;
    case "youtube":
      icon = <FontAwesomeIcon icon={faYoutube} />;
      break;
    case "telegram":
      icon = <FontAwesomeIcon icon={faTelegram} />;
      break;
    default:
      icon = null;
  }

  return (
    <Link state={{ platform, followers, posts, following }} to="/analysis">
      <div className="social-media-card">
        {icon && <div className="icon">{icon}</div>}
        <h2>{platform}</h2>
        <p>Followers: {followers}</p>
        <p>Posts: {posts}</p>
        <p>Following: {following}</p>
      </div>
    </Link>
  );
};

export default SocialMediaCard;
