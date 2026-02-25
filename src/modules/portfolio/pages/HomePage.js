import React from "react";
import {
  ChevronRight,
  Code2,
  Layout,
  Database,
  Briefcase,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[85vh] flex items-center justify-center py-20 px-4">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px] -z-10 animate-pulse duration-1000" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-navy-blue/20 rounded-full blur-[100px] -z-10" />

        <div className="max-w-4xl text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-navy-blue-light/20 border border-accent-blue/30 text-accent-blue text-xs font-bold uppercase tracking-widest mb-8 cursor-default group hover:bg-navy-blue-light/40 transition-colors duration-300 shadow-[0_0_15px_rgba(56,189,248,0.1)]">
              <Briefcase
                size={14}
                className="shrink-0 animate-pulse"
                aria-hidden="true"
              />
              <span className="leading-none tracking-wider">
                Disponível para novos desafios
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.1] font-sans">
              Transformando ideias em <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-blue-400 to-indigo-400 drop-shadow-sm">
                interfaces funcionais.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Desenvolvedor Front-end especializado na criação de experiências
              digitais responsivas, intuitivas e estritamente centradas no
              utilizador (UX).
            </p>
          </ScrollReveal>

          <ScrollReveal delay={450}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                to="/projetos"
                className="group w-full sm:w-auto px-10 py-4 bg-accent-blue text-white rounded-xl font-bold hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-blue/50 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-accent-blue/20"
              >
                Ver Projetos
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
              <Link
                to="/experiencia"
                className="group w-full sm:w-auto px-10 py-4 bg-soft-black/50 backdrop-blur-sm text-white border border-slate-700 rounded-xl font-bold hover:border-accent-blue hover:bg-navy-blue/30 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-slate-700/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <UserRound
                  size={18}
                  className="text-slate-400 group-hover:text-accent-blue transition-colors duration-300"
                />
                Minha Trajetória
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-navy-blue/5 to-soft-black border-y border-navy-blue-light/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Minha Especialidade
              </h2>
              <div className="w-20 h-1 bg-accent-blue/50 mx-auto rounded-full" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={150}>
              <div className="group h-full p-8 rounded-3xl bg-soft-black/80 backdrop-blur-sm border border-navy-blue-light/30 hover:border-accent-blue/50 hover:bg-navy-blue/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-blue/5">
                <div className="w-14 h-14 rounded-2xl bg-navy-blue-light/20 flex items-center justify-center mb-6 group-hover:bg-accent-blue/20 transition-colors duration-300">
                  <Layout
                    className="text-accent-blue group-hover:scale-110 transition-transform duration-300"
                    size={28}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors duration-300">
                  Front-end Expertise
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Domínio de React.js e Vue.js para a entrega de layouts
                  escaláveis, arquitetura moderna e performance otimizada.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="group h-full p-8 rounded-3xl bg-soft-black/80 backdrop-blur-sm border border-navy-blue-light/30 hover:border-accent-blue/50 hover:bg-navy-blue/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-blue/5">
                <div className="w-14 h-14 rounded-2xl bg-navy-blue-light/20 flex items-center justify-center mb-6 group-hover:bg-accent-blue/20 transition-colors duration-300">
                  <Code2
                    className="text-accent-blue group-hover:scale-110 transition-transform duration-300"
                    size={28}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors duration-300">
                  Design Responsivo
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Construção de interfaces estritamente centradas na experiência
                  do utilizador (UX) utilizando o poder do Tailwind CSS.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={450}>
              <div className="group h-full p-8 rounded-3xl bg-soft-black/80 backdrop-blur-sm border border-navy-blue-light/30 hover:border-accent-blue/50 hover:bg-navy-blue/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-blue/5">
                <div className="w-14 h-14 rounded-2xl bg-navy-blue-light/20 flex items-center justify-center mb-6 group-hover:bg-accent-blue/20 transition-colors duration-300">
                  <Database
                    className="text-accent-blue group-hover:scale-110 transition-transform duration-300"
                    size={28}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors duration-300">
                  Integração de APIs
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Experiência prática no consumo, tratamento de dados e
                  integração de APIs RESTful para comunicação eficiente e
                  segura.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
