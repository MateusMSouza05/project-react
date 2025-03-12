import './App.css';
import Logo from './components/Logo'
import perfil from './images/perfil.svg'
import sacola from './images/sacola.svg'

const textoOpcoes = ['Catregorias', 'Favoritos', 'Minha estante']
const icons = [perfil, sacola]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='options'>
          {textoOpcoes.map( (texto) => (
            <li className='option'><p>{texto}</p></li>
          ) )}
        </ul>
        
        <ul className='icones'>
            {icons.map( (icons) => (
              <li className='icone'><img src={icons}></img> </li>
            ) ) }
        </ul>
      </header>
    </div>
  );
}

export default App;
