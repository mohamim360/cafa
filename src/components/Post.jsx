import React from 'react';
import './Post.css'
const Post = (props) => {
  console.log(props.post);

  const { banner, profile,name,date,time } = props.post;
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

          <button className='btn-bk'>
            Bookmark
          </button>
        </div>
      
      </div>
    </div>
  );
};

export default Post;