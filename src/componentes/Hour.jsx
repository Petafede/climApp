import React from 'react';
import styles from './Hour.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIcon } from '../helpers/helpers';

function Hour(props) {
  return (
    <div className={styles.hourContainer}>
      <div>{props.hora}</div>
      <div>
        <FontAwesomeIcon icon={getIcon(props.estadoDelCielo)} />
      </div>
      {/* <div>{props.estadoDelCielo}</div> */}
      <div>{props.temperatura}</div>
    </div>
  );
}

export default Hour;
