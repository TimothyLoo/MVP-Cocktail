import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YourStuff from './YourStuff.jsx';
import Ing from './Ing.jsx';

export default function IngList() {
  const [list, setList] = useState([]);

  const updateList = () => {
    axios
      .get(`/ingredients`)
      .then(({ data }) => setList(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => updateList(), []);

  return (
    <>
      <div className='ingredients'>
        {list.map(({ _id, ingredient }) => (
          <Ing key={_id} ing={ingredient} />
        ))}
      </div>
      <YourStuff list={list} updateList={updateList} />
    </>
  );
}
