import React from 'react';
import './Blog.css';
import { useQuery, gql } from '@apollo/client';

// Define the GraphQL query as a string inside the gql template literal
const GET_BLOG_POSTS = gql`
  query GetBlogPosts {
    posts {
      id
      title
      excerpt
      author {
        name
      }
    }
  }
`;

const Blog = () => {
  const { loading, error, data } = useQuery(GET_BLOG_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error('GraphQL Error:', error);
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className='blogs'>
      {data.posts.map(post => (
        <div key={post.id} className='blog-post'>
          <h2>{post.title}</h2>
          <p>By {post.author ? post.author.name : 'Unknown Author'}</p>
          <p>{post.excerpt}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
