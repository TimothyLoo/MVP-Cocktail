import React from 'react';
import axios from 'axios';

export default function OneStuff({ ingredient, updateList }) {
  const deleteIng = () => {
    axios
      .delete(`/ingredients/${ingredient}`)
      .then(() => updateList())
      .catch((err) => console.log(err));
  };

  const jump = (e) => {
    e.preventDefault();
    window.location.href = `#${ingredient}`;
    history.pushState({}, '', window.location.origin);
  };

  return (
    <div className='oneStuff'>
      <b onClick={jump}>{ingredient}</b>
      <button className='dBut' onClick={deleteIng}>
        X
      </button>
    </div>
  );
}
