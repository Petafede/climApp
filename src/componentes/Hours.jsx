import Hour from './Hour';
import styles from './Hours.module.css';
import { redondearEntero } from '../helpers/helper';

function Hours(props) {
  function obtenerHora(fechaString) {
    let fecha = new Date(fechaString);
    let hora = fecha.getHours();
    let horaString = hora.toString().padStart(2, '0');
    return horaString;
  }
  return (
    <div className={styles.hoursContainer}>
      <div className={styles.condition}>
        Clear condition tonight, continuing through the morning. 
        <br />
        Wind gusts are up to {`${redondearEntero(props.wind)} kph`}
      </div>
      <div className={styles.hoursDisplay}>
          {
            props.horas.map((hora) => {
              return (
                <Hour key={hora.time} 
                hora= {obtenerHora(hora.time)}
                estadoDelCielo={hora.condition.text} 
                temperatura={`${redondearEntero(hora.temp_c)}°`} />
              )
            })
          }
    </div>
    </div>
  );
}

export default Hours;

