"use client";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center">
        <section className="text-center px-6">
          <motion.h1 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-[4rem] md:text-[6rem] leading-[0.9] uppercase font-grotesk">ARCHONIUM</motion.h1>
          <motion.h2 initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.18,duration:0.6}} className="mt-6 text-xl md:text-2xl text-archBlue">Validation for systems that cannot fail.</motion.h2>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4}} className="mt-6 text-gray-300 max-w-2xl mx-auto">We do not promise outcomes. We make inevitability visible. Exclusive validation and governance for organizations operating above competition.</motion.p>
          <div className="mt-10 flex justify-center gap-4">
            <a href="mailto:counsel@archonium.global" className="rounded-2xl px-6 py-3 border border-archBlue">Request Private Access</a>
            <a href="/manifest.pdf" className="rounded-2xl px-6 py-3 bg-archBlue text-black">Download Manifest</a>
          </div>
        </section>
      </main>
    </>
  );
}
