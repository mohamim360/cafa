import React, { useEffect, useState } from "react";
import "./Blog.css";
import Post from "./Post";
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [time ,setTime] = useState(0);
  const [mark ,setMark] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  
 const addMark = (post) =>{
  console.log(post.time);

   setTime(time + post.time)
 }

 const addBookmark = (post) =>{
  console.log(post)
  const newMark = [...mark,post];
  setMark(newMark);
 }

  return (
    <div className="blog-container">
      <div className="blog">
      {
        posts.map(post => 
         
          <Post
          key={post.id}
          post={post}
          addMark={addMark}
          addBookmark={addBookmark}
          ></Post>
          )
      }  
      </div>

      <div className="mark">
        <div className="time">
        <h5>Spent time on read: {time} min</h5>
        </div>

        <div className="bookmark">
          <p>Bookmarked Blogs: {mark.length}</p>
          {
            mark.map(m => <li className="li">{m.header}</li>)
          }
          
        </div>
        
      </div>
    </div>
  );
};

export default Blog;
