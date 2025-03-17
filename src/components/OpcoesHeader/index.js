import styled from 'styled-components'

const Option = styled.li`
   display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
  font-size: 16px;
`
const Options = styled.ul`
    display: flex;
`

const textoOpcoes = ['Catregorias', 'Favoritos', 'Minha estante'];

function OpcoesHeader() {
    return (
        <Option>
          {textoOpcoes.map( (texto) => (
            <Options><p>{texto}</p></Options>
          ) )}
        </Option>
    )
}

export default OpcoesHeader;