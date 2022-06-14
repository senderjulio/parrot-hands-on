import ImagemUsuario from '../ImagemUsuario';
import icone from '../assets/images/iconetransparente.png';
import * as S from './styles';



const NoPostsUsuario = () => {
  return (
    <S.StyledContainer>
        <S.StyledP>
          Você ainda não publicou nada :(
        </S.StyledP>
        <ImagemUsuario img = {icone} alt = 'nome usuario' width='
        auto' height='auto'/>
    </S.StyledContainer>
  )
}

export default NoPostsUsuario;