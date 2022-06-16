import React, { useEffect } from 'react';
import logo from '../../Components/assets/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import * as S from "./styled"
import { setLogin } from '../store/users';
import { RootState } from '../store';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.persistedReducer.users);

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
        <S.StylesImg src={logo} alt="logo Parrot" />
      </div>
      <div>
          <S.StylesUl>
            <S.MenuLink  to={`/perfilusuario/?${user.id}`}>{user.name} |</S.MenuLink>
            <S.MenuButton onClick={handleLogout}>sair</S.MenuButton>        
        </S.StylesUl>
        </div>
      
      </S.StylesNav>
    </S.StylesHeader>
  );
}

export default Header;