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
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-navy-blue-light/20 border border-accent-blue/30 text-accent-blue text-xs font-bold uppercase tracking-widest mb-8 cursor-default group hover:bg-navy-blue-light/40 transition-colors duration-300 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
              </span>
              Desenvolvedor Full-Stack
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight font-sans">
              Construindo produtos <br className="hidden md:block" />
              digitais de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-blue-400 relative">
                alto impacto.
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-accent-blue/30 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                  />
                </svg>
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Especializado no ecossistema JavaScript (MERN Stack). Arquiteto soluções completas, desde a concepção de interfaces premium até a engenharia de plataformas SaaS escaláveis e multi-tenant.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={450}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/projetos"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-accent-blue text-white font-bold rounded-full hover:bg-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/25 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-accent-blue/50"
              >
                <Briefcase size={20} />
                Explorar Projetos
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
              <Link
                to="/sobre"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-navy-blue-light/20 text-white font-bold rounded-full border border-navy-blue-light/50 hover:bg-navy-blue-light/40 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-navy-blue-light/50"
              >
                <UserRound size={20} />
                Sobre Mim
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-soft-black to-navy-blue-light/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                Minhas Especialidades
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Unindo design de alto padrão a uma engenharia de software inteligente e orientada a resultados.
              </p>
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
                  Arquitetura SaaS
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Construção de ecossistemas multi-tenant e white-label, desenvolvendo sistemas de permissão (RBAC) e lógicas avançadas de negócio.
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
                  Full-Stack MERN
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Domínio completo do stack JavaScript. Criação de interfaces responsivas e premium atreladas a back-ends robustos e seguros (Zero Trust).
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
                  Integrações Complexas
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Experiência prática na integração de APIs de alta complexidade, incluindo motores de pagamento, assinaturas recorrentes e geolocalização.
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