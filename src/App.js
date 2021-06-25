import logo from './img/logo.svg';
import './App.css';
import Listado from './components/ContenedorDeItems.js'

function App() {
  return (
    <div className="App">
      esta es la app
      <Listado Titulo = 'Listado de artículos' />
      volvio a la app
    </div>
  );
}

export default App;
