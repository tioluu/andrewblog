import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import FullPost from '../Fullposts/FullPost'; // Import the new component
import './Blogposts.css';

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

const BlogPosts = () => {
  const { loading, error, data } = useQuery(GET_BLOG_POSTS);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleClick = (post) => {
    setSelectedPost(post); // Set the selected post state
  };

  const handleBack = () => {
    setSelectedPost(null); // Reset the selected post when going back
  };

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error fetching posts: {error.message}</p>;

  return (
    <div className="blog-posts-container">
      {selectedPost ? (
        <FullPost post={selectedPost} onBack={handleBack} />
      ) : (
        <>
          
          <div className="blog-posts-list">
            {data.posts.map(post => (
              <div key={post.id} className="blog-post-item" onClick={() => handleClick(post)}>
                {post.featuredImage && (  // Check if the featuredImage exists before rendering
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
        </>
      )}
    </div>
  );
};

export default BlogPosts;
