import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cocktail from './Cocktail.jsx';

export default function CocktailList({ ing }) {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const config2 = {
      baseURL: `https://api.api-ninjas.com/v1`,
      headers: { 'X-Api-Key': 'V7MpFDsb7VAMlgRjMYq0cw==lTR20Oy57RKUZKho' },
    };
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
