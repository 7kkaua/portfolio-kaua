import React from 'react';
import ProjectCard from '../components/ProjectCard';

// 🚀 IMPORTAÇÃO DO COMPONENTE DE SCROLL REVEAL
import ScrollReveal from '../components/ScrollReveal';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Adega Management System",
      description: "Ecossistema Full Stack multi-tenancy com 5+ níveis de permissões, PDV físico e App Delivery integrados em tempo real.",
      tags: ["React.js", "Node.js", "MongoDB Atlas", "Vercel"]
    },
    {
      title: "Barber-System",
      description: "Plataforma de gestão para barbearias com Clube de Assinaturas, gamificação de clientes e controle automatizado de filas.",
      tags: ["MERN Stack", "Cron Jobs", "Gamification"]
    },
    {
      title: "Studio-System",
      description: "ERP/CRM para estética de alto padrão com Dashboard financeiro avançado e agenda interativa via Kanban Drag-and-Drop.",
      tags: ["React", "Recharts", "Kanban", "Security"]
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 overflow-hidden relative">
      
      {/* 🌌 Efeito de Luz de Fundo */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <ScrollReveal>
        <header className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-5 font-sans">
            Projetos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-blue-400">Impacto</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Sistemas robustos desenvolvidos com foco em escalabilidade, 
            segurança e uma experiência de usuário impecável do início ao fim.
          </p>
        </header>
      </ScrollReveal>

      {/* 🚀 Grid de Projetos com entrada em cascata */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ScrollReveal key={index} delay={index * 200}>
            <ProjectCard {...project} />
          </ScrollReveal>
        ))}
      </div>

      {/* 🎯 CALL TO ACTION (CTA) PREMIUM */}
      <ScrollReveal delay={300}>
        <div className="mt-32 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 via-navy-blue/20 to-accent-blue/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
          
          <div className="relative p-12 md:p-16 rounded-3xl bg-soft-black/80 backdrop-blur-xl border border-navy-blue-light/30 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent" />
            
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
              Interessado em ver mais códigos?
            </h3>
            <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto font-light">
              Confira meu repositório completo para explorar outros projetos, contribuições open-source e experimentos técnicos.
            </p>
            
            <a 
              href="https://github.com/7kkaua" 
              target="_blank" 
              rel="noreferrer"
              aria-label="Visitar o repositório completo no GitHub de Kauã Azeredo"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-soft-black font-bold text-lg rounded-full hover:bg-accent-blue hover:text-white hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-blue/50 transition-all duration-300 shadow-xl shadow-white/10 hover:shadow-accent-blue/30"
            >
              Visitar GitHub Completo
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ProjectsPage;