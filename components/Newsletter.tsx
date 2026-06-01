"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Newsletter() {
  const [focused, setFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="newsletter" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Decorative line */}
          <div className="flex items-center gap-4 justify-center mb-8">
            <span className="h-[1px] w-12 bg-gold/50" />
            <span className="font-inter text-xs tracking-[0.4em] uppercase text-gold">
              Sé el primero
            </span>
            <span className="h-[1px] w-12 bg-gold/50" />
          </div>

          <h2 className="font-playfair text-4xl sm:text-5xl text-navy font-bold mb-4 leading-tight">
            Únete a la
            <br />
            <span className="italic font-light">comunidad Santa Maria</span>
          </h2>

          <p className="font-inter text-base text-muted leading-relaxed mb-10 max-w-md mx-auto">
            Recibe lanzamientos exclusivos, acceso anticipado a colecciones y
            contenido de estilo directamente en tu bandeja de entrada.
          </p>

          {/* Form */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <motion.div
                className="flex-1 relative"
                animate={{ scale: focused ? 1.01 : 1 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="tucorreo@email.com"
                  className={`w-full font-inter text-sm text-charcoal bg-cream-light border px-5 py-4 outline-none transition-all duration-300 placeholder:text-muted/50 ${
                    focused
                      ? "border-gold shadow-[0_0_0_3px_rgba(201,169,110,0.15)]"
                      : "border-navy/20"
                  }`}
                />
              </motion.div>
              <button
                type="submit"
                className="font-inter text-sm tracking-widest uppercase bg-navy text-cream px-7 py-4 hover:bg-gold hover:text-navy transition-all duration-300 whitespace-nowrap"
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
              <div className="font-inter text-sm tracking-widest uppercase bg-navy/5 border border-gold/30 text-navy px-8 py-5">
                <p className="font-playfair text-xl text-navy mb-1">¡Bienvenida!</p>
                <p className="text-muted text-xs leading-relaxed">
                  Te has suscrito con éxito. Pronto recibirás nuestras novedades.
                </p>
              </div>
            </motion.div>
          )}

          <p className="font-inter text-xs text-muted/60 mt-5">
            Sin spam. Puedes cancelar cuando quieras.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
