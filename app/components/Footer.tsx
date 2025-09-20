"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Soluciones', href: '#solutions' },
    { name: 'Características', href: '#features' },
    { name: 'Contacto', href: '#contact' },
    { name: 'Términos', href: '#' },
    { name: 'Privacidad', href: '#' },
  ];

  const socials = [
    { name: 'GitHub', href: '#', icon: 'github' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  ];

  return (
    <footer className="bg-void-950 border-t border-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-power bg-gradient-to-r from-authority-blue to-dominance-cyan bg-clip-text text-transparent">
                ARCHONIUM
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Soluciones de validación de sistemas para entornos de misión crítica donde la seguridad no es negociable.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Enlaces</h3>
            <ul className="space-y-2">
              {links.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              {links.slice(4).map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Archonium. Todos los derechos reservados.
          </p>
          
          <div className="flex space-x-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <span className="sr-only">{social.name}</span>
                <div className="w-8 h-8 flex items-center justify-center border border-gray-700 rounded-full hover:bg-gray-800/50">
                  <i className={`fab fa-${social.icon}`}></i>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
