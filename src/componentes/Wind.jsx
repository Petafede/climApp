import styles from './Wind.module.css';
import { redondearEntero } from '../helpers/helper';
import { faWind } from '@fortawesome/free-solid-svg-icons'



function Wind (props){
    return(
        <div className={styles.container}>
            <div className={styles.title} >Wind</div>
            <div className={styles.wind}>{`${redondearEntero(props.wind)}kph`}</div>
        </div>
    )
}

export default Wind;