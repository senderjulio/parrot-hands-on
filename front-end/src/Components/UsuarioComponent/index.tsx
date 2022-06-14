import ImagemUsuario from '../ImagemUsuario';
import * as S from './styles';
import imgUsuario from '../assets/images/fotousuario.png'
import { Fragment } from 'react';


const UsuarioComponent = () => {
  return (
    <Fragment>
        <ImagemUsuario img = {imgUsuario} alt = 'seu nome' width='
        20%' height='80px'/>
        <S.StyledInfUser>
            <S.StyledH1>Nome Sobrenome</S.StyledH1>
            <S.StyledP>apê 82</S.StyledP>
            <S.StyledP>user@gmail.com</S.StyledP>
            <S.StyledP>00 publicações</S.StyledP>
        </S.StyledInfUser>
        <S.StyledButton>Editar pefil</S.StyledButton>
    </Fragment>


  )
}

export default UsuarioComponent;