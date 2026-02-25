import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// 🚀 IMPORTAÇÃO DO LAYOUT GLOBAL
import PortfolioLayout from './modules/portfolio/layout/PortfolioLayout';

// 🚀 IMPORTAÇÃO DAS PÁGINAS (MÓDULO PORTFOLIO)
import HomePage from './modules/portfolio/pages/HomePage';
import AboutPage from './modules/portfolio/pages/AboutPage';
import ExperiencePage from './modules/portfolio/pages/ExperiencePage';
import ProjectsPage from './modules/portfolio/pages/ProjectsPage';

// 🌟 COMPONENTE DE SCROLL: Força a página para o topo a cada mudança de rota
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      
      <Routes>
        <Route element={<PortfolioLayout />}>
          
          {/* Rota Principal */}
          <Route path="/" element={<HomePage />} />
          
          {/* Secção Sobre Mim: Nova página com a sua história */}
          <Route path="/sobre" element={<AboutPage />} />
          
          {/* Secção de Experiência */}
          <Route path="/experiencia" element={<ExperiencePage />} />
          
          {/* Showcase de Projetos */}
          <Route path="/projetos" element={<ProjectsPage />} />

          {/* Redirecionamento de segurança */}
          <Route path="*" element={<Navigate to="/" replace />} />
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;