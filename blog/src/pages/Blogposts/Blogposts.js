import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import FullPost from '../Fullposts/FullPost';
import './Blogposts.css';
import { motion, AnimatePresence } from 'framer-motion';

const GET_BLOG_POSTS = gql`
  {
    posts {
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

const BlogPosts = () => {
  const { loading, error, data } = useQuery(GET_BLOG_POSTS);
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
    <div className="blog-posts-container">
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
            key="post-list"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <h1 className="blog-posts-title">Blog Posts</h1>
            <div className="blog-posts-list">
              {data.posts.map(post => (
                <div key={post.id} className="blog-post-item" onClick={() => handleClick(post)}>
                  {post.featuredImage && (
                    <img 
                      src={post.featuredImage.url} 
                      alt={post.title} 
                      className="blog-post-item-image" 
                    />
                  )}
                  <h2 className="blog-post-item-title">{post.title}</h2>
                  <p className="blog-post-item-excerpt">{post.excerpt}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogPosts;
