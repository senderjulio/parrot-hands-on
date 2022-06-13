import { ReactNode } from 'react';
import  * as S from './styles';

const MainPerfilUsuario = ({children}:{children:ReactNode}) => {
  return (
    <S.StyledMain>
        {children}
    </S.StyledMain>
  )
}

export default MainPerfilUsuario;