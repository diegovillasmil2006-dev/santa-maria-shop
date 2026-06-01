"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Newsletter() {
  const [focused, setFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section id="newsletter" className="relative py-20 sm:py-28 bg-cream dot-pattern overflow-hidden">
      {/* Subtle vignette over pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-transparent to-cream pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in-image">
          {/* Decorative */}
          <div className="flex items-center gap-4 justify-center mb-8">
            <span className="h-[1px] w-16 bg-gold/50" />
            <span className="font-inter text-[9px] tracking-[0.5em] uppercase text-gold">
              Únete
            </span>
            <span className="h-[1px] w-16 bg-gold/50" />
          </div>

          <h2 className="font-playfair text-5xl sm:text-6xl text-navy font-bold mb-5 leading-tight">
            Lo mejor de
            <br />
            <span className="italic font-light text-gold">Santa Maria</span>
            <br />
            en tu bandeja
          </h2>

          <p className="font-inter text-sm text-muted leading-relaxed mb-10 max-w-sm mx-auto">
            Lanzamientos exclusivos, acceso anticipado a colecciones y contenido de estilo — antes que nadie.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto shadow-[0_4px_40px_rgba(26,39,68,0.1)]"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="tucorreo@email.com"
                className={`flex-1 font-inter text-sm text-charcoal bg-white border-y border-l px-6 py-4 outline-none transition-all duration-300 placeholder:text-muted/40 ${
                  focused
                    ? "border-gold"
                    : "border-navy/15"
                }`}
              />
              <button
                type="submit"
                className="font-inter text-xs tracking-widest uppercase bg-navy text-cream px-8 py-4 border border-navy hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300 whitespace-nowrap"
              >
                Suscribirme
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-white border border-gold/30 px-8 py-6 shadow-[0_4px_40px_rgba(26,39,68,0.08)]">
                <p className="font-playfair text-2xl text-navy mb-2">¡Bienvenida!</p>
                <p className="font-inter text-sm text-muted leading-relaxed">
                  Te has suscrito con éxito. Pronto recibirás lo mejor de Santa Maria.
                </p>
              </div>
            </motion.div>
          )}

          <p className="font-inter text-[11px] text-muted/50 mt-5 tracking-wide">
            Sin spam. Solo lo mejor de Santa Maria.
          </p>
        </div>
      </div>
    </section>
  );
}
