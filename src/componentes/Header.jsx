import styles from './Header.module.css';
import { redondearEntero } from '../helpers/helper';


function Header(props) { 
  return (
    <div className={styles.headerContainer}>
      <span className={styles.locationLabel}>{props.ubicacion}</span>
      <h3 className={styles.temperature}>{redondearEntero(props.temperatura)}</h3>
      <h4 className={styles.cielo}>{props.cielo}</h4>
      <h5 className={styles.maxYmin}>{props.maxYmin}</h5>
    </div>
  );
}

export default Header;
