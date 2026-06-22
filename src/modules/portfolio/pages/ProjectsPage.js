import React from "react";
import ProjectCard from "../components/ProjectCard";
import ScrollReveal from "../components/ScrollReveal";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Plataforma SaaS Alimentícia",
      description:
        "Plataforma SaaS white-label para o setor alimentício com cardápio digital, sistema de permissões (RBAC) com 5 níveis, motor inteligente de conversão de estoque em tempo real e integração com o Google Maps para rotas logísticas.",
      tags: ["MERN Stack", "RBAC", "Google Maps API", "White-label"],
    },
    {
      title: "SaaS Barbearia & Clube VIP",
      description:
        "Ecossistema multi-tenant focado no gerenciamento completo de barbearias. Construção de um motor de assinaturas recorrentes (Clube VIP) 100% automatizado via webhooks do Mercado Pago, além de isenção inteligente no carrinho.",
      tags: ["Node.js", "Mercado Pago API", "Webhooks", "MRR"],
    },
    {
      title: "SaaS Studio de Estética",
      description:
        "Sistema de gestão para Studios de Beleza desenhado com arquitetura backend 'Zero Trust' garantindo isolamento absoluto de dados. Aplicação de técnicas de fatiamento de código (Code Splitting) para alta performance mobile.",
      tags: ["React", "Zero Trust", "Segurança", "Micro-cache"],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 overflow-hidden relative">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <ScrollReveal>
        <header className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 font-sans">
            Projetos em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-blue-400">
              Destaque.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Sistemas e plataformas construídos do zero para resolver problemas reais de negócios.
          </p>
        </header>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {projects.map((project, index) => (
          <ScrollReveal key={index} delay={index * 150}>
            <ProjectCard {...project} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={300}>
        <div className="relative group mx-auto max-w-3xl">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-blue-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

          <div className="relative p-12 md:p-16 rounded-3xl bg-soft-black/80 backdrop-blur-xl border border-navy-blue-light/30 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent" />

            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
              Interessado em ver mais códigos?
            </h3>
            <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto font-light">
              Confira meu repositório completo para explorar outros projetos,
              contribuições e experimentos técnicos que construí ao longo da minha jornada.
            </p>

            <a
              href="https://github.com/7kkaua"
              target="_blank"
              rel="noreferrer"
              aria-label="Visitar o repositório completo no GitHub de Kauã Azeredo"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-soft-black font-bold text-lg rounded-full hover:bg-accent-blue hover:text-white hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-blue/50 transition-all duration-300 shadow-xl shadow-white/10"
            >
              Acessar meu GitHub
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ProjectsPage;