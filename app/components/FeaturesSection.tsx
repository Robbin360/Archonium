"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Seguridad Inquebrantable",
    description: "Protección de nivel militar para sus sistemas más críticos con cifrado de última generación.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Rendimiento Extremo",
    description: "Optimización de sistemas para el máximo rendimiento y eficiencia operativa.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Autenticación Avanzada",
    description: "Sistemas de autenticación multifactor y biométrica para acceso seguro.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Auditoría Completa",
    description: "Registros detallados para garantizar trazabilidad y cumplimiento normativo.",
  },
];

export const FeaturesSection = () => {
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
    hidden: { opacity: 0, y: 20 },
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
      className="py-20 md:py-32 bg-void-950 relative overflow-hidden"
      id="features"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-gradient-radial from-authority-blue/5 to-transparent opacity-30" />
        <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-gradient-radial from-dominance-cyan/5 to-transparent opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-authority-blue bg-authority-blue/10 rounded-full mb-4">
            CARACTERÍSTICAS
          </span>
          <h2 className="text-3xl md:text-5xl font-power text-control-white mb-6">
            Tecnología de <span className="text-transparent bg-clip-text bg-gradient-to-r from-authority-blue to-dominance-cyan">Vanguardia</span>
          </h2>
          <p className="text-control-white/70 text-lg">
            Soluciones de validación diseñadas para operaciones donde el fracaso no es una opción.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-void-900/50 backdrop-blur-sm rounded-xl p-8 border border-control-white/5 hover:border-authority-blue/30 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gradient-to-br from-authority-blue/10 to-dominance-cyan/10 text-authority-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-control-white mb-3">
                {feature.title}
              </h3>
              <p className="text-control-white/60">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
