import React from "react";
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const ExperiencePage = () => {
  const experiences = [
    {
      company: "Ecossistema SaaS (Projetos Independentes)",
      role: "Fundador & Desenvolvedor Full-Stack",
      period: "2023 - Presente",
      description:
        "Idealização, arquitetura e desenvolvimento do zero de três plataformas SaaS multi-tenant. Criação de sistemas complexos com controle hierárquico (RBAC), motores de assinatura recorrente via Mercado Pago, gestão de estoque inteligente e integrações com Google Maps.",
      techs: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "APIs"],
    },
    {
      company: "SMJ CodeSystem",
      role: "Desenvolvedor Full-Stack",
      period: "06/2024 - 10/2025",
      description:
        "Atuação no desenvolvimento de sistemas de gerenciamento e plataformas web escaláveis, unindo a criação de interfaces responsivas e intuitivas com integrações avançadas de back-end.",
      techs: ["React.js", "Vue.js", "Node.js", "API RESTful"],
    },
    {
      company: "Nova Presto",
      role: "Aprendiz em Gestão e Serviços",
      period: "03/2022 - 06/2023",
      description:
        "Utilização de recursos tecnológicos para análise e controle de informações. Atuação com resolução de problemas lógicos e suporte operacional estratégico.",
      techs: ["Gestão de Dados", "Processos Operacionais", "Soft Skills"],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 overflow-hidden">
      <ScrollReveal>
        <header className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 font-sans">
            Minha{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-blue-400">
              Trajetória.
            </span>
          </h2>
          <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto md:mx-0">
            A jornada acadêmica e profissional que moldou minha visão e
            habilidades na engenharia de software.
          </p>
        </header>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <section className="md:col-span-12">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10 pb-4 border-b border-navy-blue-light/30">
              <div className="p-2.5 bg-accent-blue/10 rounded-lg text-accent-blue">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Experiência Prática
              </h3>
            </div>
          </ScrollReveal>

          <div className="relative border-l-2 border-navy-blue-light/30 ml-4 md:ml-6 space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <article className="relative pl-8 md:pl-10 group">
                  <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-soft-black border-4 border-navy-blue-light group-hover:border-accent-blue transition-colors duration-300 shadow-[0_0_10px_rgba(56,189,248,0)] group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent-blue transition-colors duration-300">
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