import React from 'react';
import CocktailList from './CocktailList.jsx';

export default function Ing({ ing }) {
  return (
    <div id={ing}>
      <h2>{ing}</h2>
      <CocktailList ing={ing} />
    </div>
  );
}
