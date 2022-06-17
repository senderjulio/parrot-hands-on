import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Feed from './pages/Feed';
import PerfilUsuario from './pages/PerfilUsuario';
import { useSelector } from 'react-redux';
import { RootState } from './Components/store';


// import { Container } from './styles';

const AppRoutes: React.FC = () => {
  var login = useSelector((state: RootState) => state.persistedReducer.isloged);  

  // if(localStorage.getItem('login') === 'true'){
  //   login = true
  // }
  // else{
  //   login = false
  // }

  console.log(login);
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfilusuario" element={login?<PerfilUsuario />:<Login />} />
        <Route path="/feed" element={login?<Feed />:<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;