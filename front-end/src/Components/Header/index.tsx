import React, { useEffect } from 'react';
import logo from '../../Components/assets/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import * as S from "./styled"
import { setLogin } from '../store/users';
import { RootState } from '../store';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.persistedReducer.users);
  localStorage.setItem('nome', user.name);
  let nome = localStorage.getItem('nome');

  const handleLogout = () => {
    dispatch(setLogin({isloged: false}));
    localStorage.setItem('login', 'false');
    alert('Você foi deslogado');
    window.location.reload();
  }
  return (
    <S.StylesHeader>
      <S.StylesNav>
      <div>
        <S.MenuLink to={`/feed/?${user.id}`}>
          <S.StylesImg src={logo} alt="logo Parrot" />
        </S.MenuLink>

      </div>
      <div>
          <S.StylesUl>
            <S.MenuLink  to={`/perfilusuario/?${user.id}`}>{nome} |</S.MenuLink>
            <S.MenuButton onClick={handleLogout}>sair</S.MenuButton>        
        </S.StylesUl>
        </div>
      
      </S.StylesNav>
    </S.StylesHeader>
  );
}

export default Header;