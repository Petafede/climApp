import Day from './Day';

function Days(props) {
  console.log(props.dias.daily);
  return props.dias.daily.map((dia) => {
    return (
      <div className="dias">
        <Day day={dia.day} tempMin={dia.temperature_min} tempMax={dia.temperature_max} weatherThype={dia.weather_type} />
      </div>
    );
  });
}
export default Days;
