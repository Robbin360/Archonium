"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const HeroSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.1,
      transition: { duration: 1 },
    },
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      id="home"
    >
      {/* Background Grid */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        variants={gridVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="absolute inset-0 sovereign-grid" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-power mb-6 text-transparent bg-clip-text bg-gradient-to-r from-authority-blue to-dominance-cyan"
            variants={itemVariants}
          >
            ARCHONIUM
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-control-white/80 mb-12 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Validación de Sistemas Soberanos para los Inquebrantables
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-authority-blue to-dominance-cyan hover:opacity-90 text-control-white font-medium rounded-lg transition-all duration-300 border border-transparent hover:border-dominance-cyan"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Comenzar Validación
            </motion.a>
            <motion.a
              href="#solutions"
              className="px-8 py-4 bg-transparent hover:bg-white/5 text-control-white font-medium rounded-lg transition-all duration-300 border border-control-white/20"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Nuestras Soluciones
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
            variants={itemVariants}
          >
            {[
              { value: "100%", label: "Integridad del Sistema" },
              { value: "24/7", label: "Tiempo Activo" },
              { value: "0", label: "Tolerancia a Fallos" },
              { value: "∞", label: "Precisión" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-4 md:p-6 bg-void-900/30 backdrop-blur-sm rounded-xl border border-control-white/5 hover:border-authority-blue/30 transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl md:text-4xl font-power text-authority-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-control-white/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Animated cursor effect */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute w-64 h-64 rounded-full bg-dominance-cyan/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <span className="text-xs text-control-white/50 mb-2">Desplázate</span>
        <div className="w-4 h-8 border-2 border-control-white/30 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-control-white/80 rounded-full"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};
