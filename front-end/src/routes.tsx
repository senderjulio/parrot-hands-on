import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import PerfilUsuario from './pages/PerfilUsuario';

// import { Container } from './styles';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/perfilusuario" element={<PerfilUsuario/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;