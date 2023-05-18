import React from 'react';
import styles from './Day.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudSun, faCloudSunRain , faQuestion } from '@fortawesome/free-solid-svg-icons'
import { getIcon } from '../helpers/helper';

function Day(props) {
  
  return (
    <div className={styles.dayContainer}>
      <div className={styles.day}>{props.day}</div>
      <div className={styles.weatherIcon}><FontAwesomeIcon icon={getIcon(props.weatherThype)}/></div>
      {/* <div>{props.weatherThype}</div> */}
      <div className={styles.temperature}>
        <div>{props.tempMin}°</div>
        <div>{props.tempMax}°</div>
      </div>
    </div>
  );
}

export default Day;
