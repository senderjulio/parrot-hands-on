import React from 'react';
import * as S from './styles';

const ContainerMain = ({children}:{children:React.ReactNode}) => {
  return (
    <S.StyledMain>
        {children}
    </S.StyledMain>
  )
}

export default ContainerMain;