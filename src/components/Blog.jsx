import React, { useEffect, useState } from "react";
import "./Blog.css";
import Post from "./Post";
const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="blog-container">
      <div className="blog">
      {
        posts.map(post => 
         
          <Post
          key={post.id}
          post={post}
          ></Post>
          )
      }  
      </div>

      <div className="bookmark">
        <h1>ddd</h1>
      </div>
    </div>
  );
};

export default Blog;
