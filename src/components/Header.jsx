import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <nav className='header'>
      <h2>Knowledge Cafe</h2>
      <div>
      <a href="/home">home</a>
      <a href="/bookmark">bookmark</a>
      <a href="/blog">blog</a>
      </div>
     
      
    </nav>
 
  );
};

export default Header;