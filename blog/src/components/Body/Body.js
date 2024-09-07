// src/Body.js
import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import './Body.css';
import blogimg from '../../assets/hitchcock.jpg'
import TypingText from '../TypingText';
import FullPost from '../../pages/Fullposts/FullPost';
import { motion, AnimatePresence } from 'framer-motion';

const GET_RECENT_POSTS = gql`
  {
    posts(orderBy: createdAt_DESC) {
      id
      title
      excerpt
      createdAt
      content {
        raw
      }
      featuredImage {  
        url
      }
      author{
        name
      }
    }
  }
`;
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  duration: 0.5,
};

const Body = () => {
  const introduction ="  Welcome to my blog, where I share my personal ramblings on life, films that make me question my choices, and the never-ending quest for career advancement. Think of this as a digital diary, but with fewer heartfelt confessions and more sarcastic musings about the absurdities of modern life.  ";
  const { loading, error, data } = useQuery(GET_RECENT_POSTS);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleClick = (post) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error fetching posts: {error.message}</p>;

  return (
    <div className="body-container">
      <AnimatePresence mode='wait'>
        {selectedPost ? (
          <motion.div
            key="full-post"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <FullPost post={selectedPost} onBack={handleBack} />
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <div className="main-content">
              <div className="image-container">
                <img src={blogimg} alt="Blog Image" className="content-image" />
              </div>

              <div className="content-text">
                <p> <TypingText text={introduction} /></p> 
              </div>

            </div>

            <div className="recent-posts-container">
              <h2 className="recent-posts-title">Latest Ramblings</h2>
              <div className="posts-list">
  {data.posts.slice(0, 4).map(post => (
    <div key={post.id} className="post-item" onClick={() => handleClick(post)}>
      {post.featuredImage && (
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="post-item-image"
        />
      )}
      <h3 className="post-item-title">{post.title}</h3>
      <p className="post-item-excerpt">{post.excerpt}</p>
      <p className="blog-post-author">{post.author.name}</p>
    </div>
  ))}
</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Body;