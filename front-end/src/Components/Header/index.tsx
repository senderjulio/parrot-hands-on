import React, { useEffect } from 'react';
import logo from '../../Components/assets/images/logo.png';

import * as S from "./styled"

const Header: React.FC = () => {

  return (
    <S.StylesHeader>
      <S.StylesNav>
      <div>
        <S.StylesImg src={logo} alt="logo Parrot" />
      </div>
      <div>
          <S.StylesUl>
            <S.MenuLink  to="/cadastro">Olá, usuário |</S.MenuLink>
            <S.MenuLinkS to="/">sair</S.MenuLinkS>        
        </S.StylesUl>
        </div>
      
      </S.StylesNav>
    </S.StylesHeader>
  );
}

export default Header;