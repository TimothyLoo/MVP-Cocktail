import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../.config.js';
import { fridge } from './fridge.js';

export default function Cocktail({ cocktail }) {
  const { ingredients, instructions } = cocktail;
  let { name } = cocktail;

  const [drink, setDrink] = useState({});

  useEffect(() => {
    axios
      .get(`/search.php?s=${name}`, config)
      .then(({ data }) => {
        if (data.drinks) setDrink(data.drinks[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const hilgtIng = (array) => {
    let temp = array.slice();
    for (let a of temp) {
      for (const item of fridge) {
        if (
          typeof a === 'string' &&
          a.toLowerCase().includes(item.ingredient)
        ) {
          temp[temp.indexOf(a)] = a.split(' ');
        }
      }
    }
    return temp;
  };

  return (
    <div className='card'>
      <div className='header'>
        <h3>{drink.strDrink || name}</h3>
        <img src={drink.strDrinkThumb} />
      </div>
      <b>Ingredients</b>
      <div className='i'>
        <div>
          {hilgtIng(ingredients).map((ingredient, idx) =>
            idx % 2 === 0 ? (
              <div key={ingredient}>
                {Array.isArray(ingredient) ? (
                  <span style={{ backgroundColor: 'lightyellow' }}>
                    {ingredient.join(' ')}
                  </span>
                ) : (
                  ingredient
                )}
              </div>
            ) : null
          )}
        </div>
        <div>
          {hilgtIng(ingredients).map((ingredient, idx) =>
            idx % 2 === 1 ? (
              <div key={ingredient}>
                {Array.isArray(ingredient) ? (
                  <span style={{ backgroundColor: 'lightyellow' }}>
                    {ingredient.join(' ')}
                  </span>
                ) : (
                  ingredient
                )}
              </div>
            ) : null
          )}
        </div>
      </div>
      <br />
      <b>Instructions</b>
      <div>{instructions}</div>
    </div>
  );
}
