import React from 'react';
import styles from './Day.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIcon } from '../helpers/helpers';

function Day(props) {
  return (
    <div className={styles.diaContainer}>
      <div style={{ width: '60px' }}>{props.day}</div>
      <div>
        <FontAwesomeIcon icon={getIcon(props.estadoDelCielo)} />
      </div>
      {/* <div>{props.weatherThype}</div> */}
      <div className={styles.temperature}>
        <div>{props.tempMin}</div>
        <div>{props.tempMax}</div>
      </div>
    </div>
  );
}

export default Day;
