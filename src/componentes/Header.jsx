import styles from './Header.module.css';

function Header(props) {
  return (
    <div className={styles.headerContainer}>
      <span className={styles.locationLabel}>{props.ubicacion}</span>
      <h6 className={styles.fecha}>{props.fecha}</h6>
      <h3 className={styles.temperature}>{props.temperatura}</h3>
      <h4 className={styles.cielo}>{props.cielo}</h4>
      <h5 className={styles.minYmax}>{props.maxYmin}</h5>
    </div>
  );
}

export default Header;
