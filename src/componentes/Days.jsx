import Day from './Day';
import styles from './Days.module.css';
import { redondearEntero } from '../helpers/helper';


function Days(props) {
  function getDayName(dateString) {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    return weekdays[dayIndex];
  }

  return (
    <div className={styles.diasContainer}>
      <div className={styles.forecastLabel}>10-Days FORECAST</div>
      {
        props.dias.map((dia, index) => {
          return (
              <Day key={index} 
              day={getDayName(dia.date)} 
              tempMin={redondearEntero(dia.day.mintemp_c)} 
              tempMax={redondearEntero(dia.day.maxtemp_c)} 
              weatherThype={dia.day.condition.text} />
          );
        })
      }
    </div>
  )
}
export default Days;
