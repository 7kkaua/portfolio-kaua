import React from "react";
import { Code2, BookOpen, Terminal, Sparkles } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const AboutPage = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20 overflow-hidden">
      <div className="absolute top-40 left-0 w-72 h-72 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <ScrollReveal>
        <header className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-blue-light/20 border border-accent-blue/30 text-accent-blue text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            <span>Conheça minha história</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 font-sans">
            Muito prazer, sou o{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-blue-400">
              Kauã.
            </span>
          </h2>
        </header>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
          <ScrollReveal delay={100}>
            <p>
              Sou um Desenvolvedor Full-Stack apaixonado por tirar ideias do papel e construir produtos digitais escaláveis do zero à produção. Meu foco diário é unir interfaces com design de alto padrão (UX/UI) a arquiteturas de back-end inteligentes.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p>
              Minha base técnica é consolidada no ecossistema JavaScript. Arquiteto soluções completas utilizando o stack MERN (MongoDB, Express, React.js e Node.js), possuindo versatilidade para desenvolver projetos robustos que resolvem problemas reais de negócio e aumentam a receita das empresas.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p>
              Um dos meus grandes diferenciais competitivos é a integração nativa de ferramentas de Inteligência Artificial no meu fluxo de trabalho, utilizando a IA estrategicamente como um copiloto de alta performance para acelerar entregas e otimizar códigos complexos.
            </p>
          </ScrollReveal>
        </div>

        <div className="space-y-6">
          <ScrollReveal delay={350}>
            <div className="p-6 rounded-2xl bg-soft-black/80 backdrop-blur-sm border border-navy-blue-light/30 hover:border-accent-blue/40 transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-navy-blue-light/20 rounded-lg text-accent-blue">
                  <Code2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Stack Principal
                </h3>
              </div>
              <p className="text-slate-400 text-sm">
                Domínio profundo em React.js, Node.js e MongoDB. Especializado em estilização eficiente e moderna com Tailwind CSS para garantir visuais impecáveis.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="p-6 rounded-2xl bg-soft-black/80 backdrop-blur-sm border border-navy-blue-light/30 hover:border-accent-blue/40 transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-navy-blue-light/20 rounded-lg text-accent-blue">
                  <Terminal size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Arquitetura de Software
                </h3>
              </div>
              <p className="text-slate-400 text-sm">
                Desenvolvimento focado em SaaS Multi-tenant, controle hierárquico de acessos (RBAC), modelos Zero Trust e webhooks para assinaturas e pagamentos.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={650}>
            <div className="p-6 rounded-2xl bg-soft-black/80 backdrop-blur-sm border border-navy-blue-light/30 hover:border-accent-blue/40 transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-navy-blue-light/20 rounded-lg text-accent-blue">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Evolução Acadêmica
                </h3>
              </div>
              <p className="text-slate-400 text-sm">
                Graduando em Análise e Desenvolvimento de Sistemas (UMC), consolidando a base teórica e o compromisso com padrões rigorosos de segurança e versionamento de código.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;