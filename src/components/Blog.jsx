import React, { useEffect, useState } from "react";
import "./Blog.css";
import Post from "./Post";
import Addblog from "./Addblog";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

   setTime(time + post.time)
 }

 const addBookmark = (post) =>{
  console.log(mark.id)
  
  const newMark = [...mark,post];
  setMark(newMark);
  
  toast.success('Success Notification !', {
    position: toast.POSITION.TOP_RIGHT
});
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
      <Addblog></Addblog>
     
      </div>

      <div className="mark">
        <div className="time">
        <h5>Spent time on read: {time} min</h5>
        </div>

        <div className="bookmark">
          <p>Bookmarked Blogs: {mark.length}</p>
          { 
            mark.map(m => <li  key={m.id} className="li">{m.header}</li>)
          }
          
          
          
           <ToastContainer />
          
             
        </div>
        
      </div>
    </div>
  );
};

export default Blog;
