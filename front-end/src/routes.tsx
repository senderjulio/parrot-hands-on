import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

// import { Container } from './styles';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;