// src/FullPost.js
import React from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';
import './FullPost.css';

const FullPost = ({ post, onBack }) => {
  if (!post) return null; // Handle loading state

  return (
    <div className="full-post-container">
      <button className="back-button" onClick={onBack}>Back</button>
      <h1 className="full-post-title">{post.title}</h1>
      <p className="full-post-date">{new Date(post.createdAt).toLocaleDateString()}</p>
      <div className="rich-text">
        <RichText content={post.content.raw} />
      </div>
    </div>
  );
};

export default FullPost;
