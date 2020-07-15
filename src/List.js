import React from 'react';
import './List.css';
import Card from './Card.js'

function List() {
  return (
    <div className="list">
      <h1>List</h1>
      <ul>
        <li> <Card /> </li>
        <li> <Card /> </li>
        <li> <Card /> </li>
        <li> <Card /> </li>
      </ul>

      <button> + Add Random Card </button>
    </div>
  );
}

export default List;
