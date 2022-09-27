import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { config2 } from '../../config.js';
import Cocktail from './Cocktail.jsx';

export default function CocktailList({ ing }) {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    axios
      .get(`/cocktail?ingredients=${ing}`, config2)
      .then(({ data }) => setCocktails(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='cards'>
      {cocktails.map((cocktail, idx) => (
        <Cocktail key={`${idx}${cocktail.name}`} cocktail={cocktail} />
      ))}
    </div>
  );
}
