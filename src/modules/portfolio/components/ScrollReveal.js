import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    // Configuramos o observador para detectar quando o elemento entra na tela
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Quando o elemento cruzar a margem da tela (threshold), ativamos a visibilidade
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Paramos de observar após a primeira animação para não repetir toda hora
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.15, // Dispara quando 15% do elemento estiver visível
        rootMargin: "0px 0px -50px 0px" // Dá um pequeno respiro antes de animar
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out will-change-[opacity,transform] ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;