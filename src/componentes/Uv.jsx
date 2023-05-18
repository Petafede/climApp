import styles from './Uv.module.css';
import React from 'react';

function Uv(props) {
  console.log(props.rayosUv);
  function getUvInfo() {
    if (props.rayosUv < 7) {
      return (
        <div>
          <h4>El indice de rayos uv es elevado en el día de hoy, tén cuidado</h4>
        </div>
      );
    } else {
      return <h4>El indice de rayos uv hoy está tranquilo, chill</h4>;
    }
  }
  return (
    <div className={styles.uv}>
      <span>Índice rayos UV</span>
      {getUvInfo()}
    </div>
  );
}

export default Uv;
