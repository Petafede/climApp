import styles from './Humidity.module.css';
import { redondearEntero } from '../helpers/helper';


function Humidity(props) {
            return(
             <div className={styles.container}>
                <div className={styles.title}>Humidity</div>
                <div className={styles.humidity}>{`${redondearEntero(props.humedad)}°`}</div>
             </div>
            )
        }

export default Humidity;