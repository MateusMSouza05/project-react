import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader';
import './style.css'

function Header() {
    return (
 <header className='App-header'>
    <Logo></Logo>
    <OpcoesHeader></OpcoesHeader>
    <IconesHeader></IconesHeader>
</header> 
)
}

export default Header;