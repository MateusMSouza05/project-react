import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'
import './style.css'

const icons = [perfil, sacola]

function IconesHeader() {
    return (
        <ul className='icones'>
            {icons.map( (icons) => (
              <li className='icone'><img src={icons}></img> </li>
            ) ) }
        </ul>
    )
}

export default IconesHeader;