"use client";

import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();

  // Durations reduced to 0.4s on mobile/reduced-motion, full on desktop
  const dur = shouldReduce ? 0.4 : 0.8;
  const durSlow = shouldReduce ? 0.3 : 1.4;

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 40 },
    visible: { opacity: 1, y: 0, transition: { duration: dur, ease: EASE } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: durSlow, ease: EASE } },
  };

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [0, shouldReduce ? 0 : 120]);
  const imageY = useSpring(rawY, { stiffness: 60, damping: 20 });

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image — parallax on desktop, eager load, mobile focus point */}
      <motion.div
        className="absolute inset-x-0 pointer-events-none"
        style={{ top: -80, bottom: -80, y: imageY }}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/imagenes/hero.jpg"
          alt="Santa Maria Shop — colección principal"
          loading="eager"
          fetchPriority="high"
          onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1800&q=80"; }}
          className="object-[center_20%] sm:object-center"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/30 via-transparent to-navy/30" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="font-inter text-[9px] tracking-[0.65em] uppercase text-gold/80 mb-5 sm:mb-7"
        >
          Colección 2025
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-playfair text-5xl sm:text-7xl lg:text-8xl font-bold text-cream leading-[1.05] mb-4 sm:mb-6 text-balance"
        >
          Santa Maria
          <br />
          <span className="italic font-light text-gold-light">Shop</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="font-inter text-base sm:text-lg text-cream/80 max-w-md mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          Lujo accesible. Estilo sin esfuerzo.
          <br className="hidden sm:block" />
          Cada prenda cuenta tu historia.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.25, ease: EASE }}>
            <Link
              href="#products"
              className="group inline-flex items-center gap-3 bg-gold text-navy font-inter text-sm tracking-widest uppercase px-8 py-4 hover:bg-gold-light hover:shadow-[0_8px_32px_rgba(201,169,110,0.4)] transition-all duration-500"
            >
              Ver colección
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.25, ease: EASE }}>
            <Link
              href="#about"
              className="font-inter text-sm tracking-widest uppercase text-cream/80 hover:text-gold border border-cream/30 hover:border-gold px-8 py-4 transition-all duration-500"
            >
              Nuestra historia
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduce ? 0.5 : 1.8, duration: 0.8 }}
      >
        <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-cream/50">Scroll</span>
        <motion.div
          className="w-[1px] h-8 bg-cream/40"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
