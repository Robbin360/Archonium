"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const solutions = [
  {
    title: "Validación de Sistemas Críticos",
    description: "Evaluación exhaustiva de sistemas críticos para garantizar su funcionamiento ininterrumpido y seguro.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    features: [
      "Análisis de vulnerabilidades",
      "Pruebas de resistencia",
      "Simulación de ataques",
      "Informes detallados"
    ]
  },
  {
    title: "Monitoreo en Tiempo Real",
    description: "Sistema de monitoreo continuo que alerta sobre amenazas potenciales en tiempo real.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    features: [
      "Alertas inmediatas",
      "Panel de control intuitivo",
      "Métricas en tiempo real",
      "Histórico de eventos"
    ]
  },
  {
    title: "Consultoría Especializada",
    description: "Asesoramiento experto para implementar las mejores prácticas en seguridad de sistemas.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    features: [
      "Auditorías de seguridad",
      "Planificación estratégica",
      "Capacitación del personal",
      "Soporte continuo"
    ]
  }
];

export const SolutionsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="py-20 md:py-32 bg-void-900 relative overflow-hidden"
      id="solutions"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-dominance-cyan bg-dominance-cyan/10 rounded-full mb-4">
            SOLUCIONES
          </span>
          <h2 className="text-3xl md:text-5xl font-power text-control-white mb-6">
            Defensa <span className="text-transparent bg-clip-text bg-gradient-to-r from-dominance-cyan to-authority-blue">Inquebrantable</span>
          </h2>
          <p className="text-control-white/70 text-lg">
            Soluciones diseñadas para proteger lo que más importa en entornos de alta exigencia.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-void-800/30 backdrop-blur-sm rounded-xl p-8 border border-control-white/5 hover:border-dominance-cyan/30 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-dominance-cyan/10 to-authority-blue/10 text-dominance-cyan mb-6 group-hover:rotate-6 transition-transform duration-300">
                {solution.icon}
              </div>
              <h3 className="text-2xl font-semibold text-control-white mb-4">
                {solution.title}
              </h3>
              <p className="text-control-white/60 mb-6">
                {solution.description}
              </p>
              <ul className="space-y-2">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-control-white/80">
                    <svg className="w-4 h-4 mr-2 text-dominance-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 inline-flex items-center text-dominance-cyan hover:text-authority-blue transition-colors group/button">
                Saber más
                <svg className="w-4 h-4 ml-2 transition-transform group-hover/button:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-20 bg-gradient-to-r from-void-800/30 to-void-900/30 border border-control-white/5 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-dominance-cyan/5 rounded-full filter blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-authority-blue/5 rounded-full filter blur-3xl" />
          
          <div className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-4xl font-power text-control-white mb-6">
                ¿Listo para llevar su seguridad al siguiente nivel?
              </h3>
              <p className="text-control-white/70 mb-8 max-w-2xl mx-auto">
                Nuestro equipo de expertos está listo para evaluar sus necesidades y ofrecerle una solución personalizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-gradient-to-r from-authority-blue to-dominance-cyan text-control-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  Solicitar Demostración
                </a>
                <a
                  href="#"
                  className="px-6 py-3 bg-transparent border border-control-white/20 text-control-white font-medium rounded-lg hover:bg-white/5 transition-colors"
                >
                  Ver Casos de Estudio
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
