import React from 'react';
import { Outlet } from 'react-router-dom';

// 🚀 IMPORTAÇÃO DOS COMPONENTES DE ESTRUTURA
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PortfolioLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-soft-black text-slate-200 font-sans selection:bg-accent-blue selection:text-white relative">
      
      {/* 🌌 BARRA DE NAVEGAÇÃO SUPERIOR */}
      <Navbar />

      {/* 💻 CONTEÚDO DINÂMICO DAS PÁGINAS */}
      {/* O flex-grow garante que o footer fique sempre na base, mesmo com pouco conteúdo */}
      <main className="flex-grow w-full">
        {/* O Outlet renderiza a HomePage, ExperiencePage ou ProjectsPage dependendo da URL */}
        <Outlet />
      </main>

      {/* 🔗 RODAPÉ COM CONTATOS PROFISSIONAIS */}
      <Footer />

    </div>
  );
};

export default PortfolioLayout;