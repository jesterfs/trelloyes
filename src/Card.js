import React from 'react';
import './Card.css';


function Card() {
  return (
    <div className="card">
      <div className='line1'>
        <div className= 'item item1'>
          <h2>Card</h2>
          <p>Lorem</p>
        </div>
        <button className='item'>Delete</button>
      </div>

    </div>
  );
}

export default Card;
