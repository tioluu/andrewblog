// src/FullPost.js
import React, { useEffect } from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './FullPost.css';

const FullPost = ({ post, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  if (!post) return null; // Handle loading state

  const shareUrl = window.location.href; // Get the current URL
  const shareTitle = post.title; // Get the post title
  const shareText = `Check out this awesome post: ${shareTitle}`; // Create a share text

  const handleShare = (platform) => {
    let shareLink = '';

    switch (platform) {
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`;
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
        break;
      default:
        console.error(`Unknown platform: ${platform}`);
        return;
    }

    window.open(shareLink, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="full-post-container">
      <h1 className="full-post-title">{post.title}</h1>
      <p className="full-post-date">{new Date(post.createdAt).toLocaleDateString()}</p>
      <img className='full-post-image' src={post.featuredImage.url} />
      <div className="rich-text">
        <RichText content={post.content.raw} />
      </div>
      <button className="back-button" onClick={onBack}>Back</button>
      <div className="share-buttons">
        <a href="#" onClick={() => handleShare('twitter')}>
          <FontAwesomeIcon icon={faXTwitter} size="lg" />
        </a>
        <h3>Share</h3>
        <a href="#" onClick={() => handleShare('facebook')}>
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
      </div>
    </div>
  );
};

export default FullPost;