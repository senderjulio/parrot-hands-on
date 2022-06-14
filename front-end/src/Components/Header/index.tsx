import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../Components/assets/images/logo.png';

import * as S from "./styled"

const Header: React.FC = () => {

  const location = useLocation()
  useEffect(()=>{console.log(location.pathname)},[location.pathname])
  return (
    <S.StylesHeader>
    <S.StylesNav>
    <div>
      <S.StylesImg src={logo} alt="logo Parrot" />
    </div>
    <div>
        <S.StylesUl>
          <S.MenuLink  to="/cadastro">Olá, usuário |</S.MenuLink>
          <S.MenuLinkS to="/sair">sair</S.MenuLinkS>        
      </S.StylesUl>
      </div>
    
    </S.StylesNav>
  </S.StylesHeader>
  );
}

export default Header;