import Header from './componentes/Header';
import Hours from './componentes/Hours';
import Days from './componentes/Days';
import Humidity from './componentes/humidity';
import Feelslike from './componentes/Feelslike';
import Wind from './componentes/Wind';
import Uv from './componentes/Uv';
import styles from './App.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { obtenerFondo } from './helpers/helper';



function App() {
  const [clima, setClima] = useState();
  const [ready, setReady] = useState(false);

  const getForecast = async () => {
    const res = await axios.get(`${import.meta.env.VITE_CLIMA_URL}/forecast.json?key=${import.meta.env.VITE_CLIMA_API}&q=Mendoza&lang=es&days=10`);

    setClima(res.data);
    setReady(true);
    console.log(res.data);
  };

  useEffect(() => {
    getForecast();
  }, []);

  if (!ready) {
    return "Loading...";
  }

  const imagenFondo = obtenerFondo(clima.current.condition.text);

  return (
    <div className={styles.appContainer} style={{ backgroundImage: `url(${imagenFondo})` }}>
      <Header ubicacion={clima.location.name}
        temperatura={clima.current.temp_c}
        cielo={clima.current.condition.text}
        maxYmin={`Max: ${clima.forecast.forecastday[0].day.maxtemp_c} Min: ${clima.forecast.forecastday[0].day.mintemp_c}`} />
      <Hours horas={clima.forecast.forecastday[0].hour} />
      <Days dias={clima.forecast.forecastday} />
      <div className={styles.appSubContainer1}>
        <Humidity humedad={clima.current.humidity} />
        <Feelslike feelslike_c={clima.current.feelslike_c} />
      </div>
      <div className={styles.appSubContainer2}>
        <Wind wind={clima.current.wind_kph} />
        <Uv uv={clima.current.uv} />
      </div>
    </div>
  );
}

export default App;

