import React from 'react';
import * as S from './styles';

const PAlerta = ({children}:{children: React.ReactNode}) => {
  return (
    <S.StyledP>
        {children}
    </S.StyledP>
  )
}

export default PAlerta;