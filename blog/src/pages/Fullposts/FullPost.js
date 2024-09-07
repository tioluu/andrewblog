// src/FullPost.js
import React, {useEffect} from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';
import './FullPost.css';

const FullPost = ({ post, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);
  
  if (!post) return null; // Handle loading state

  return (
    <div className="full-post-container">
      <h1 className="full-post-title">{post.title}</h1>
      <p className="full-post-date">{new Date(post.createdAt).toLocaleDateString()}</p>
      <img className='full-post-image' src={post.featuredImage.url} />
      <div className="rich-text">
        <RichText content={post.content.raw} />
      </div>
      <button className="back-button" onClick={onBack}>Back</button>
    </div>
  );
};

export default FullPost;
