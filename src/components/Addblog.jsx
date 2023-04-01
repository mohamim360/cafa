import React from 'react';
import './addblog.css'
const Addblog = () => {
  return (
    <div className='addblog'>
      <h4>1.Props vs state</h4>
      <p>props is reuseable but state is not.props can receive data from their parent component but state can not be accessed and modified</p>

      <h4>2.How does useState work?</h4>
      <p>useState  allow you to add state to a component.It returns an array with two values.they are the current state and a function.First value take initial state and function update state when it called</p>

      <h4>3.Purpose of useEffect other than fetching data.</h4>
      <p>useEffect can start animation when props or state values change</p>

      <h4>4.How Does React work?</h4>
      <p>
      React help you create a collection of reusable components for better UI
      </p>


    </div>

   
  );
};

export default Addblog;