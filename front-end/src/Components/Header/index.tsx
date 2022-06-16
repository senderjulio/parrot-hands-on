import React, { useEffect } from 'react';
import logo from '../../Components/assets/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import * as S from "./styled"
import { setLogin } from '../store/users';
import { RootState } from '../store';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.usersSlice.users);
  return (
    <S.StylesHeader>
      <S.StylesNav>
      <div>
        <S.StylesImg src={logo} alt="logo Parrot" />
      </div>
      <div>
          <S.StylesUl>
            <S.MenuLink  to={`/perfilusuario/?${user.id}`}>{user.name} |</S.MenuLink>
            <S.MenuLinkS to="/" onClick={()=>{dispatch(setLogin({isloged:false}))}}>sair</S.MenuLinkS>        
        </S.StylesUl>
        </div>
      
      </S.StylesNav>
    </S.StylesHeader>
  );
}

export default Header;