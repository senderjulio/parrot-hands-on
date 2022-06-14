import { ReactNode } from 'react';
import  * as S from './styles';

interface Props {
  children: ReactNode;
  border: string;
}

const CardUser = ({children, border}:Props) => {
  return (
    <S.StyledUser borderEspessura = {border}>
        {children}
    </S.StyledUser>
  )
}

export default CardUser;