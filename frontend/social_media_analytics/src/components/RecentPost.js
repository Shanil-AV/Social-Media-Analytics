import React from 'react';
import './RecentPost.css'; 

const RecentPost = ({ id, title, content, date, onClick }) => {
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <div className="post-card" onClick={() => onClick(id)}>
      <h2 className="post-title">{title}</h2>
      <p className="post-content">{content}</p>
      <p className="post-date">Posted on: {formattedDate}</p>
      <h2 className="post-title">{title}</h2>
      <p className="post-content">{content}</p>
      <p className="post-date">Posted on: {formattedDate}</p>
      <h2 className="post-title">{title}</h2>
      <p className="post-content">{content}</p>
      <p className="post-date">Posted on: {formattedDate}</p> <h2 className="post-title">{title}</h2>
      <p className="post-content">{content}</p>
      <p className="post-date">Posted on: {formattedDate}</p>
      
    </div>
  );
};

export default RecentPost;
