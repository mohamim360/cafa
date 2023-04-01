import React from 'react';
import './Post.css'
const Post = (props) => {
 

  const { banner, profile,name,date,time ,header} = props.post;

  const addMark = props.addMark;
const addBookmark = props.addBookmark;

  return (
    <div className='post'>
      <img src={banner} alt="" />
      <div className='profile'>
        <div className='date'>
        <img src={profile} alt="" />
        <div>
        <h4>{name}</h4>
        <p>{date}</p>
        </div>
        </div>
        
        <div>
          <p>{time} min read</p>

          <button onClick={() => addBookmark(props.post)}   className='btn'>
            Bookmark
          </button>
        </div>
     
      </div>
      <h3>{header}</h3>
      <button onClick={() => addMark(props.post)} className='btn'>Mark as read</button>
    </div>
  );
};

export default Post;