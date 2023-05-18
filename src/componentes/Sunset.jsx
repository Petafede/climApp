import React from 'react';
import styles from './Sunset.module.css';
function Sunset(props) {
  return (
    <div className={styles.sunset}>
      <span>Sunrise & Sunset</span>
      <div>{props.sunset}</div>
    </div>
  );
}

export default Sunset;
