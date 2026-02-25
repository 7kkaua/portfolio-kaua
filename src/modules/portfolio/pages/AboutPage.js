import React from 'react';
import { User, Code2, BookOpen, Terminal, Sparkles } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

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
            Muito prazer,  sou o <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-blue-400">Kauã.</span>
          </h2>
        </header>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-8 text-slate-400 text-lg leading-relaxed font-light">
          <ScrollReveal delay={150}>
            <p>
              Minha paixão pela tecnologia não é de hoje; ela me acompanha desde a infância. Sempre fui fascinado por entender como as coisas funcionam por trás das telas. Hoje, dedico essa mesma curiosidade e energia para transformar conceitos visuais em interfaces funcionais, dinâmicas e estritamente centradas na experiência do usuário.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p>
              Iniciei minha jornada profissional cedo, em 2022, como Jovem Aprendiz aos 19 anos na <strong className="text-slate-200 font-medium">Nova Presto</strong>, onde consolidei minha base em desenvolvimento web e boas práticas de <em>Clean Code</em>. Essa vivência inicial foi fundamental para que eu assumisse, em 2024, o cargo de Desenvolvedor Front-end na <strong className="text-slate-200 font-medium">SMJ CodeSystem</strong>, focando na criação de sistemas de gerenciamento complexos e interfaces responsivas.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={450}>
            <p>
              Minha especialidade reside no ecossistema JavaScript. Tenho versatilidade para arquitetar soluções tanto com <strong className="text-slate-200 font-medium">React.js</strong> quanto com <strong className="text-slate-200 font-medium">Vue.js</strong>, aliado à agilidade do <strong className="text-slate-200 font-medium">Tailwind CSS</strong> para entregas acessíveis e visualmente impecáveis. Além de dominar o consumo de APIs RESTful, fiz questão de desenvolver conhecimentos introdutórios em Back-end. Essa visão sistêmica me permite dialogar com clareza com toda a equipe técnica e propor soluções integradas mais inteligentes.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <p>
              Sou um profissional movido pelo aprendizado constante. Atualmente, estou cursando <strong className="text-accent-blue font-medium">Análise e Desenvolvimento de Sistemas pela Universidade Mogi das Cruzes</strong>, fortalecendo minha base teórica para continuar criando produtos digitais que geram impacto real e valor para os usuários.
            </p>
          </ScrollReveal>
        </div>
        <div className="lg:col-span-5 space-y-6">
          <ScrollReveal delay={200}>
            <div className="p-6 rounded-2xl bg-soft-black/80 backdrop-blur-sm border border-navy-blue-light/30 hover:border-accent-blue/40 transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-navy-blue-light/20 rounded-lg text-accent-blue">
                  <User size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Perfil</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Profissional dedicado, comunicativo e apaixonado por resolver problemas complexos através de interfaces intuitivas (UX/UI).
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <div className="p-6 rounded-2xl bg-soft-black/80 backdrop-blur-sm border border-navy-blue-light/30 hover:border-accent-blue/40 transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-navy-blue-light/20 rounded-lg text-accent-blue">
                  <Code2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Versatilidade</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Domínio de React e Vue, escolhendo a melhor ferramenta para garantir escalabilidade e performance em cada projeto.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="p-6 rounded-2xl bg-soft-black/80 backdrop-blur-sm border border-navy-blue-light/30 hover:border-accent-blue/40 transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-navy-blue-light/20 rounded-lg text-accent-blue">
                  <Terminal size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Visão Sistêmica</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Foco total no Front-end, mas com a bagagem de Back-end necessária para integrações de APIs eficientes e trabalho em equipe fluido.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={650}>
            <div className="p-6 rounded-2xl bg-soft-black/80 backdrop-blur-sm border border-navy-blue-light/30 hover:border-accent-blue/40 transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-navy-blue-light/20 rounded-lg text-accent-blue">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Evolução Contínua</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Graduação em Análise e Desenvolvimento de Sistemas (UMC) prevista para 12/2027, mantendo-me sempre alinhado às melhores práticas e novas tecnologias do mercado.
              </p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;