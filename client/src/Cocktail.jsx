import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cocktail({ cocktail }) {
  const { ingredients, instructions } = cocktail;
  let { name } = cocktail;

  const [drink, setDrink] = useState({});

  useEffect(() => {
    const config = {
      baseURL: `https://www.thecocktaildb.com/api/json/v1/1`,
    };
    axios
      .get(`/search.php?s=${name}`, config)
      .then(({ data }) => {
        if (data.drinks) setDrink(data.drinks[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='card'>
      <div className='header'>
        <h3>{drink.strDrink || name}</h3>
        <img src={drink.strDrinkThumb} />
      </div>
      <b>Ingredients</b>
      <div className='i'>
        <div>
          {ingredients.map((ingredient, idx) =>
            idx % 2 === 0 ? <div key={ingredient}>{ingredient}</div> : null
          )}
        </div>
        <div>
          {ingredients.map((ingredient, idx) =>
            idx % 2 === 1 ? <div key={ingredient}>{ingredient}</div> : null
          )}
        </div>
      </div>
      <b>Instructions</b>
      <div>{instructions}</div>
    </div>
  );
}
