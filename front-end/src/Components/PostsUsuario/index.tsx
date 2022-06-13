import { Fragment } from 'react';
import ImagemUsuario from '../ImagemUsuario';
import imgUsuario from '../assets/images/fotousuario.png';
import * as S from './styles';

interface Props{
    nome: string;
    apartamento: number;
    data?: string;
    post?: string;
}

const PostsUsuario = ({nome, apartamento}:Props) => {
  return (
    <Fragment>
        <ImagemUsuario img = {imgUsuario} alt = 'nome usuario'/>
        <S.StyledContainer>
            <S.StyledInfPost>
                <S.StyledH1>{nome} - ape {apartamento}</S.StyledH1>
                <S.StyledP margin= '10px' font = '14px'>00/00/2022 00:00</S.StyledP>
                <S.StyledP margin= '0px' font = '16px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </S.StyledP>
            </S.StyledInfPost>
        </S.StyledContainer>
    </Fragment>
  )
}

export default PostsUsuario;