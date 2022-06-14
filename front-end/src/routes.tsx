import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import PerfilDoUsuario from './pages/PerfilDoUsuario';
import Feed from './pages/Feed';
import PerfilUsuario from './pages/PerfilUsuario';

// import { Container } from './styles';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil-do-usuario" element={<PerfilDoUsuario />} />
        <Route path="/perfilusuario" element={<PerfilUsuario />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;