import './style.css'

const textoOpcoes = ['Catregorias', 'Favoritos', 'Minha estante'];

function OpcoesHeader() {
    return (
        <ul className='options'>
          {textoOpcoes.map( (texto) => (
            <li className='option'><p>{texto}</p></li>
          ) )}
        </ul>
    )
}

export default OpcoesHeader;