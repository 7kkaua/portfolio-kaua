import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Code2, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinkStyles = ({ isActive }) =>
    `transition-all duration-300 hover:text-accent-blue px-3 py-2 rounded-md text-sm font-medium ${
      isActive
        ? "text-accent-blue border-b-2 border-accent-blue"
        : "text-slate-300"
    }`;

  const mobileNavLinkStyles = ({ isActive }) =>
    `flex items-center w-full px-5 py-4 text-lg font-medium rounded-2xl transition-all duration-300 ${
      isActive
        ? "bg-accent-blue/10 text-accent-blue shadow-inner border border-accent-blue/20"
        : "text-slate-300 hover:bg-navy-blue/20 hover:text-white border border-transparent"
    }`;

  return (
    <>
      <nav className="sticky top-0 z-40 bg-soft-black/80 backdrop-blur-md border-b border-navy-blue-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(true)}
                aria-expanded={isOpen}
                aria-label="Abrir menu principal"
                className="p-2 -ml-2 rounded-md text-slate-400 hover:text-white hover:bg-navy-blue/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-blue transition-colors"
              >
                <Menu size={32} />
              </button>
            </div>
            <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer z-50">
              <div className="bg-accent-blue/10 p-2.5 rounded-xl border border-accent-blue/20 shadow-[0_0_10px_rgba(56,189,248,0.05)] group-hover:shadow-[0_0_15px_rgba(56,189,248,0.15)] transition-all duration-300">
                <Code2
                  className="text-accent-blue group-hover:rotate-12 transition-transform duration-300"
                  size={22}
                />
              </div>
              <span className="text-2xl tracking-[0.2em] text-white uppercase font-sans flex items-center">
                <span className="font-light">Kauã</span>
                <span className="font-bold text-accent-blue ml-1.5">
                  Azeredo
                </span>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/" className={navLinkStyles}>
                Início
              </NavLink>
              <NavLink to="/sobre" className={navLinkStyles}>
                Sobre Mim
              </NavLink>
              <NavLink to="/experiencia" className={navLinkStyles}>
                Experiência
              </NavLink>
              <NavLink to="/projetos" className={navLinkStyles}>
                Projetos
              </NavLink>

              <a
                href="https://www.linkedin.com/in/kau%C3%A3-d-a4251a213/"
                target="_blank"
                rel="noreferrer"
                aria-label="Acessar Perfil do LinkedIn de Kauã Azeredo"
                className="group flex items-center gap-2 bg-navy-blue border border-accent-blue/50 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-accent-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-soft-black focus:ring-accent-blue transition-all duration-300 shadow-lg shadow-accent-blue/10 tracking-wider"
              >
                <Linkedin
                  size={18}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <span>Conectar-se</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-500 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-soft-black/95 backdrop-blur-xl border-r border-navy-blue-light/30 z-50 transform transition-transform duration-500 ease-in-out md:hidden flex flex-col shadow-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-navy-blue-light/20">
          <span className="text-sm tracking-[0.3em] text-slate-400 uppercase font-bold">
            Navegação
          </span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Fechar menu principal"
            className="p-2 -mr-2 rounded-full text-slate-400 hover:text-white hover:bg-navy-blue/30 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue"
          >
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col px-6 py-10 space-y-4 overflow-y-auto flex-grow">
          <NavLink to="/" className={mobileNavLinkStyles}>
            Início
          </NavLink>
          <NavLink to="/sobre" className={mobileNavLinkStyles}>
            Sobre Mim
          </NavLink>
          <NavLink to="/experiencia" className={mobileNavLinkStyles}>
            Experiência
          </NavLink>
          <NavLink to="/projetos" className={mobileNavLinkStyles}>
            Projetos
          </NavLink>
        </div>
        <div className="p-6 border-t border-navy-blue-light/20 mt-auto bg-navy-blue/5">
          <a
            href="https://www.linkedin.com/in/kau%C3%A3-d-a4251a213/"
            target="_blank"
            rel="noreferrer"
            aria-label="Acessar Perfil do LinkedIn de Kauã Azeredo"
            className="group flex items-center justify-center gap-3 w-full bg-accent-blue/10 border border-accent-blue/40 text-accent-blue px-6 py-4 rounded-2xl text-base font-bold hover:bg-accent-blue hover:text-white transition-all duration-300 shadow-lg"
          >
            <Linkedin
              size={22}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span>Conectar no LinkedIn</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
