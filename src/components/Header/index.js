import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    
    background-color: #FFFFFF;
    justify-content: center;
    display: flex;

  
`

function Header() {
    return (
 <HeaderContainer>
    <Logo></Logo>
    <OpcoesHeader></OpcoesHeader>
    <IconesHeader></IconesHeader>
</HeaderContainer> 
)
}

export default Header;