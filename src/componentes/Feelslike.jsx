import styles from './Feelslike.module.css';
import { redondearEntero } from '../helpers/helper';


function Feelslike(props){
    return(
        <div className={styles.container}>
            <div className={styles.title}>Feelslike</div>
            <div className={styles.feelslike}>{`${redondearEntero(props.feelslike_c)}°`}</div>
        </div>
    )
}

export default Feelslike;