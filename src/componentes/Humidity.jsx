import React from 'react';
import styles from './Humidity.module.css';

function Humidity(props) {
  return (
    <div className={styles.humidity}>
      <span>Húmedad</span>
      <h2>Humedad en la ciudad {props.humidity}%</h2>
    </div>
  );
}

export default Humidity;
