import Day from './Day';
import styles from './Days.module.css';

function Days(props) {
  function obtenerDiaDeLaSemana(fecha_texto) {
    const dias_semana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const fecha = new Date(fecha_texto);
    const indice_dia = fecha.getDay();
    return dias_semana[indice_dia];
  }

  function redondearTemperatura(temp_c) {
    return Math.round(temp_c) + 'º';
  }

  return (
    <div className={styles.diasContainer}>
      <div className={styles.forecastLabel}>10-Day Forecast</div>
      {props.dias.slice(1, 8).map((dia) => {
        return (
          <Day
            key={dia.date}
            day={obtenerDiaDeLaSemana(dia.date)}
            tempMin={redondearTemperatura(dia.day.mintemp_c)}
            tempMax={redondearTemperatura(dia.day.mintemp_c)}
            estadoDelCielo={dia.day.condition.text}
          />
        );
      })}
    </div>
  );
}
export default Days;
