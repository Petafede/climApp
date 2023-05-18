import Hour from './Hour';
import styles from './Hours.module.css';

function Hours(props) {
  function redondearTemperatura(temp_c) {
    return Math.round(temp_c) + 'º';
  }

  function obtener_hora(fecha_texto) {
    var fecha = new Date(fecha_texto);
    var hora = fecha.getHours();
    var hora_texto = hora.toString().padStart(2, '0');
    return hora_texto;
  }

  return (
    <div className={styles.hoursContainer}>
      <div className={styles.conditions}>Clear conditions tonight, continuing throug the morning. Wind gusts are up to 11 km/h</div>
      <div className={styles.hoursDisplay}>
        {props.horas
          .filter((hora, index) => index < 7)
          .map((hora) => {
            return <Hour key={hora.time_epoch} hora={obtener_hora(hora.time)} estadoDelCielo={hora.condition.text} temperatura={redondearTemperatura(hora.temp_c)} />;
          })}
      </div>
    </div>
  );
}

export default Hours;
