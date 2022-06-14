import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
<<<<<<< HEAD
import PerfilDoUsuario from './pages/PerfilDoUsuario';
import Feed from './pages/Feed';
=======
import PerfilUsuario from './pages/PerfilUsuario';
>>>>>>> 4b655c2c50931d33e15f408aeeb91876c4bb3f0c

// import { Container } from './styles';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil-do-usuario" element={<PerfilDoUsuario />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
=======
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/perfilusuario" element={<PerfilUsuario/>} />
        </Routes>
>>>>>>> 4b655c2c50931d33e15f408aeeb91876c4bb3f0c
    </BrowserRouter>
  )
}

export default AppRoutes;