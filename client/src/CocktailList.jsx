import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cocktail from './Cocktail.jsx';
import { fridge } from './fridge.js';

export default function CocktailList({ ing }) {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    axios
      .get(`/ninja/${ing.replace(/\s/g, '+')}`)
      .then(({ data }) => {
        data.sort((a, b) => {
          let arrA = [];
          let arrB = [];
          for (const item of fridge) {
            for (const i of a.ingredients) {
              if (i.toLowerCase().includes(item.ingredient)) {
                arrA.push(item.ingredient);
                break;
              }
            }
            for (const i of b.ingredients) {
              if (i.toLowerCase().includes(item.ingredient)) {
                arrB.push(item.ingredient);
                break;
              }
            }
          }
          if (arrA.length < arrB.length) return 1;
          if (arrA.length > arrB.length) return -1;
          return 0;
        });
        setCocktails(data);
      })
      .catch((err) => console.log(err));
  }, [fridge]);

  return (
    <div className='cards'>
      {cocktails.map((cocktail, idx) => (
        <Cocktail key={`${idx}${cocktail.name}`} cocktail={cocktail} />
      ))}
    </div>
  );
}
