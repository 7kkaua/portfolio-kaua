import React from 'react';
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const ExperiencePage = () => {
  const experiences = [
    {
      company: "SMJ CodeSystem",
      role: "Desenvolvedor Front-end",
      period: "06/2024 - 10/2025",
      description: "Focado no desenvolvimento de sites e sistemas de gerenciamento com ênfase em UX. Criação de interfaces responsivas e intuitivas.",
      techs: ["React.js", "Vue.js", "Tailwind CSS", "API RESTful"]
    },
    {
      company: "Nova Presto",
      role: "Jovem Aprendiz",
      period: "03/2022 - 06/2023",
      description: "Atuação no desenvolvimento web, correção de bugs e aplicação de boas práticas de codificação.",
      techs: ["Web Development", "Bug Fixing", "Clean Code"]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 overflow-hidden">
      
      <ScrollReveal>
        <header className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 font-sans">
            Minha <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-blue-400">Trajetória</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg font-light">
            Um resumo da minha jornada acadêmica e profissional no desenvolvimento web, com foco na evolução contínua.
          </p>
        </header>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12">
        <section className="space-y-8">
          <ScrollReveal delay={150}>
            <div className="flex items-center gap-3 text-accent-blue font-bold text-xl uppercase tracking-wider">
              <GraduationCap size={24} /> Formação
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <article className="group p-6 bg-soft-black/80 backdrop-blur-sm border-l-2 border-accent-blue rounded-r-2xl hover:bg-navy-blue/10 transition-colors duration-300 shadow-lg hover:shadow-accent-blue/5">
              <h4 className="text-white font-bold text-lg group-hover:text-accent-blue transition-colors">
                Análise e Desenvolvimento de Sistemas
              </h4>
              <p className="text-slate-400 text-sm mt-2 font-medium">Universidade Mogi das Cruzes</p>
              <div className="inline-flex items-center gap-2 text-slate-500 text-sm mt-4 font-mono bg-navy-blue-light/10 px-3 py-1.5 rounded-md">
                <Calendar size={14} className="text-accent-blue" /> 
                <time dateTime="2025-08/2027-12">08/2025 - 12/2027</time>
              </div>
            </article>
          </ScrollReveal>
        </section>
        <section className="lg:col-span-2 space-y-12">
          <ScrollReveal delay={150}>
            <div className="flex items-center gap-3 text-accent-blue font-bold text-xl uppercase tracking-wider">
              <Briefcase size={24} /> Experiência Profissional
            </div>
          </ScrollReveal>
          
          <div className="relative border-l-2 border-navy-blue-light/30 pl-8 space-y-12 ml-3">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={300 + (index * 150)}>
                <article className="relative group">
                  <div className="absolute -left-[43px] top-1.5 w-5 h-5 bg-soft-black border-2 border-navy-blue-light group-hover:border-accent-blue rounded-full transition-all duration-300 shadow-[0_0_0_0_rgba(56,189,248,0)] group-hover:shadow-[0_0_12px_3px_rgba(56,189,248,0.4)] z-10" />
                  
                  <div className="mb-2 flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent-blue transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-accent-blue bg-accent-blue/10 px-4 py-1.5 rounded-full border border-accent-blue/20 whitespace-nowrap shadow-sm">
                      <time>{exp.period}</time>
                    </span>
                  </div>
                  
                  <p className="text-accent-blue text-base font-semibold mb-4 tracking-wide">
                    {exp.company}
                  </p>
                  
                  <p className="text-slate-400 text-base leading-relaxed mb-6 font-light">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {exp.techs.map((tech, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-navy-blue-light/20 px-3 py-1.5 rounded-md border border-navy-blue-light/30 group-hover:border-accent-blue/40 transition-colors duration-300"
                      >
                        <CheckCircle2 size={14} className="text-accent-blue" /> 
                        {tech}
                      </div>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExperiencePage;