import Hour from '../Hour';

function Hours(props) {
  console.log(props.horas.hourly);
  return props.horas.hourly.map((hora) => {
    return (
      <div className="hours">
        <Hour hora={hora.time} estadoDelCielo={hora.weather_type} temperatura={hora.temperature} />
      </div>
    );
  });
}

export default Hours;
