import React from 'react';
import styles from './Input.module.css';
import { useState } from 'react';

function Input({ setCity }) {
  const [inputCity, setInputCity] = useState();

  const handleClick = ({ setCity }) => {
    console.log(inputCity);
    setCity(inputCity);
  };
  return (
    <div className={styles.container}>
      <input
        placeholder="ingrese ciudad"
        onChange={(e) => {
          setInputCity(e.target.value);
        }}
      ></input>
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
}

export default Input;
