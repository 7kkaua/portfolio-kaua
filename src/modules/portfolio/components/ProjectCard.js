import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';

const ProjectCard = ({ title, description, tags, githubLink, liveLink }) => {
  return (
    <article className="group relative flex flex-col h-full bg-soft-black/60 backdrop-blur-md border border-navy-blue-light/30 rounded-3xl p-7 transition-all duration-500 hover:border-accent-blue/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-blue/10 overflow-hidden">
      
      {/* 🌟 Efeito de brilho no topo do card ao passar o mouse */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <header className="flex justify-between items-start mb-6">
        <div className="p-3.5 bg-navy-blue-light/20 rounded-xl text-accent-blue group-hover:scale-110 group-hover:bg-accent-blue/20 transition-all duration-300">
          <Layers size={24} />
        </div>
        
        {/* 🔗 Links de Ação com Acessibilidade */}
        <div className="flex gap-2 text-slate-400">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noreferrer" 
              aria-label={`Ver código fonte do projeto ${title} no GitHub`}
              className="p-2 rounded-full hover:text-white hover:bg-navy-blue-light/30 focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all"
            >
              <Github size={20} />
            </a>
          )}
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noreferrer" 
              aria-label={`Visitar o projeto ${title} online`}
              className="p-2 rounded-full hover:text-white hover:bg-navy-blue-light/30 focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </header>

      {/* 📝 Conteúdo Principal */}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors duration-300 font-sans tracking-tight">
          {title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-8">
          {description}
        </p>
      </div>

      {/* 🏷️ Tags de Tecnologias Fixadas na Base */}
      <footer className="pt-5 border-t border-navy-blue-light/20 mt-auto">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-[11px] uppercase tracking-wider font-bold px-3 py-1.5 bg-navy-blue/30 border border-navy-blue-light/40 text-accent-blue rounded-full shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </footer>
    </article>
  );
};

export default ProjectCard;