import { Fragment } from 'react';
import ImagemUsuario from '../ImagemUsuario';
import imgUsuario from '../assets/images/fotousuario.png';
import * as S from './styles';

interface Props{
    name: string;
    apartment: string;
    data?: string;
    post?: string;
}

const PostsUsuario = ({name, apartment, post, data}:Props) => {
  return (
    <Fragment>
        <ImagemUsuario img = {imgUsuario} alt = 'nome usuario' width='10%' height='50px'/>
        <S.StyledContainer>
            <S.StyledInfPost>
                <S.StyledH1>{name} - ape {apartment}</S.StyledH1>
                <S.StyledP margin= '10px' font = '14px'>{data}</S.StyledP>
                <S.StyledP margin= '0px' font = '16px'>{post} </S.StyledP>
            </S.StyledInfPost>
        </S.StyledContainer>
    </Fragment>
  )
}

export default PostsUsuario;