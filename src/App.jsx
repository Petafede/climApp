import './App.css';
import Header from './componentes/Header';
import Hours from './componentes/Hours';
import Days from './componentes/Days';
import './App.css';
import apiMock from './api/api.json';
import apiDays from './api/days.json';

function App() {
  console.log(apiMock);
  return (
    <div className={'app-container'}>
      <Header ubicacion={'Guaymallén'} temperatura={20} cielo={'nublado'} maxYmin={['Min: 12º', ' ', 'Max: 31º']} />
      <Hours horas={apiMock}></Hours>
      <Days dias={apiDays}></Days>
    </div>
  );
}

export default App;
