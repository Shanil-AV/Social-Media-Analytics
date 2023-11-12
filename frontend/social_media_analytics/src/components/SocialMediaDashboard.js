import React from "react";
import "./SocialMediaDashboard.css";
import SocialMediaCard from "./SocialMediaCard";

const SocialMediaDashboard = () => {
  return (
    <div className="dashboard">
      <h1>Choose Your Social Media Account</h1>
      <div className="social-media-cards">
        <SocialMediaCard
          platform="Facebook"
          followers={5000}
          posts={100}
          following={2000}
        />
        <SocialMediaCard
          platform="Twitter"
          followers={8000}
          posts={170}
          following={2570}
        />
        <SocialMediaCard
          platform="Instagram"
          followers={8000}
          posts={120}
          following={1500}
        />
      </div>
      <div className="social-media-cards">
        <SocialMediaCard
          platform="Linkedin"
          followers={1000}
          posts={720}
          following={2800}
        />
        <SocialMediaCard
          platform="Youtube"
          followers={3000}
          posts={160}
          following={2540}
        />
        <SocialMediaCard
          platform="telegram"
          followers={7000}
          posts={128}
          following={4500}
        />
      </div>
    </div>
  );
};

export default SocialMediaDashboard;
