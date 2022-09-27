import React from 'react';
import axios from 'axios';
import OneStuff from './OneStuff.jsx';

export default function YourStuff({ list, updateList }) {
  const addIng = (e) => {
    e.preventDefault();
    const newI = e.target.elements.newIng.value.toLowerCase();
    if (!newI.length) return;
    axios
      .post(`/ingredients`, { ingredient: newI })
      .then(({ data }) => updateList())
      .catch((err) => console.log(err));
  };

  return (
    <div className='yourStuff'>
      <h2>What's in your fridge?</h2>
      <form onSubmit={addIng}>
        <input style={{ width: '245px' }} type='text' name='newIng' />
        <button>Add</button>
      </form>
      {list.map(({ _id, ingredient }) => (
        <OneStuff key={_id} ingredient={ingredient} updateList={updateList} />
      ))}
    </div>
  );
}
