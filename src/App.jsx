import Header from './componentes/Header';
import Hours from './componentes/Hours';
import Days from './componentes/Days';
import Humidity from './componentes/Humidity';
import Uv from './componentes/Uv';
import Sunset from './componentes/Sunset';
// import apiMock from './api/api.json';
import apiDays from './api/days.json';
import styles from './App.module.css';
import axios from 'axios'; // importamos la libreria axios de axios para pegarle a la api del clima
import { useEffect, useState } from 'react';

function App() {
  //creamos estado para clima y para cuando la info esta lista "ready"
  const [clima, setClima] = useState();
  const [ready, setReady] = useState(false);
  // cree un estado de diasClima para poder iterar la info del componente Days.
  const [diasClima, setDiasClima] = useState();

  useEffect(() => {
    // cuando se monta el componente llamamos a la funcion getForecast que nos trae el clima
    getForecast();
  }, []);

  // la función getForecast es la que nos va a traer la data de la api del clima.
  const getForecast = async () => {
    // se ejecuta la funcion getForecast
    const res = await axios.get(`${import.meta.env.VITE_CLIMA_URL}/forecast.json?key=${import.meta.env.VITE_CLIMA_API}&q=Mendoza&lang=es&days=10`);
    // guardamos en una variable res (respuesta o response) la data que nos trae
    setClima(res.data); // actualizamos el estado clima con la respuesta que nos dio la api.
    setDiasClima(res.data.forecast.forecastday);
    setReady(true); // si está todo ok, el estado de ready pasa de false a true.
    console.log(res.data);
  };

  if (!ready) {
    // si el estado de ready es falso, todavia hay que esperar que cargue..
    return 'loading...';
  }

  return (
    <div className={styles.appContainer}>
      <div className={styles.federico}></div>
      <div className={styles.fabri}></div>
      <Header
        ubicacion={clima.location.name}
        fecha={clima.current.last_updated}
        temperatura={`${clima.current.temp_c}º`}
        cielo={clima.current.condition.text}
        maxYmin={`Min: ${clima.forecast.forecastday[0].day.mintemp_c}º Max: ${clima.forecast.forecastday[0].day.maxtemp_c}º`}
      />
      {/* en el componente horas accedemos a la data de hour  */}
      <Hours horas={clima.forecast.forecastday[0].hour}></Hours>

      <Days dias={diasClima}></Days>
      <Humidity humidity={clima.current.humidity}></Humidity>
      <Uv rayosUv={clima.current.uv}></Uv>
      <Sunset sunset={`Amanece a las : ${clima.forecast.forecastday[0].astro.sunrise}`}></Sunset>
      <Sunset sunset={`Atardece  a las : ${clima.forecast.forecastday[0].astro.sunset}`}></Sunset>
    </div>
  );
}

export default App;
