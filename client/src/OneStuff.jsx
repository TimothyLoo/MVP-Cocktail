import React from 'react';
import axios from 'axios';

export default function OneStuff({ ingredient, updateList }) {
  const deleteIng = () => {
    axios
      .delete(`/ingredients/${ingredient}`)
      .then(() => updateList())
      .catch((err) => console.log(err));
  };

  return (
    <div className='oneStuff'>
      <b>{ingredient}</b>
      <button className='dBut' onClick={deleteIng}>
        X
      </button>
    </div>
  );
}
