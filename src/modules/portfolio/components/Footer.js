import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();


  const whatsappMessage = encodeURIComponent("Olá, Kauã! Tudo bem? Vi o seu portfólio e gostaria de conversar sobre uma oportunidade.");

  return (
    <footer className="bg-soft-black border-t border-navy-blue-light/30 py-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl tracking-[0.2em] text-white uppercase font-sans flex items-center justify-center md:justify-start">
              <span className="font-light">Kauã</span>
              <span className="font-bold text-accent-blue ml-1.5">Azeredo</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-xs mx-auto md:mx-0">
              Desenvolvendo interfaces de alto impacto e centradas no usuário.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-5">
            <div className="flex space-x-5">
              <a 
                href="https://github.com/7kkaua" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Acessar o GitHub de Kauã Azeredo"
                className="p-2.5 rounded-full bg-navy-blue-light/20 text-slate-400 hover:text-accent-blue hover:bg-navy-blue hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-soft-black transition-all duration-300 shadow-sm"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/kau%C3%A3-d-a4251a213/" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Acessar o LinkedIn de Kauã Azeredo"
                className="p-2.5 rounded-full bg-navy-blue-light/20 text-slate-400 hover:text-accent-blue hover:bg-navy-blue hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-soft-black transition-all duration-300 shadow-sm"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contato.kauaazeredo@gmail.com?subject=Contato%20via%20Portfólio" 
                aria-label="Enviar um e-mail para Kauã Azeredo"
                className="p-2.5 rounded-full bg-navy-blue-light/20 text-slate-400 hover:text-accent-blue hover:bg-navy-blue hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-soft-black transition-all duration-300 shadow-sm"
              >
                <Mail size={20} />
              </a>
            </div>
            <a 
              href={`https://wa.me/5511952780693?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Entrar em contato direto via WhatsApp"
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-navy-blue-light/10 border border-navy-blue-light/20 text-slate-400 text-xs font-medium tracking-wide hover:bg-accent-blue/10 hover:border-accent-blue/50 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-soft-black cursor-pointer"
            >
              <Phone size={14} className="text-accent-blue group-hover:scale-110 transition-transform duration-300" />
              <span>(11) 95278-0693</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-blue-light/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-medium">
            © {currentYear} Kauã dos Santos Azeredo. Todos os direitos reservados.
          </p>
          <p className="text-slate-600 text-xs font-medium flex items-center gap-1">
            Feito com <span className="text-accent-blue">React</span> & <span className="text-accent-blue">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;