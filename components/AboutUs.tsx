"use client";

import { motion } from "framer-motion";
import FallbackImage from "@/components/FallbackImage";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-cream-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image — en móvil va arriba */}
          <motion.div
            className="relative aspect-[4/5] lg:aspect-auto lg:h-[620px] order-1 lg:order-none"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <FallbackImage
              src="/imagenes/lifestyle.jpg"
              fallback="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
              alt="Santa Maria Shop — estilo de vida"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Accent border */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-gold/30 pointer-events-none hidden lg:block" />
          </motion.div>

          {/* Text */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          >
            <p className="font-inter text-xs tracking-[0.4em] uppercase text-gold mb-4">
              Nuestra historia
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl text-navy font-bold leading-tight mb-6">
              Nacidos del amor
              <br />
              <span className="italic font-light">por el buen vestir</span>
            </h2>

            <div className="space-y-5 font-inter text-base text-muted leading-relaxed max-w-lg">
              <p>
                Santa Maria Shop nació en 2018 con una idea sencilla: que la ropa
                hermosa no debería ser inalcanzable. Cada colección es una conversación
                entre el lujo y lo cotidiano, entre lo clásico y lo contemporáneo.
              </p>
              <p>
                Trabajamos con confeccionistas locales y materiales seleccionados que
                honran la piel y el planeta. Creemos que vestirse bien es un acto de
                cuidado propio — y queremos ser parte de ese ritual.
              </p>
              <p>
                Desde nuestra primera boutique en el corazón de la ciudad hasta hoy,
                cada prenda lleva el alma de quienes la hicieron.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-navy/10">
              {[
                { value: "7+", label: "Años de historia" },
                { value: "3K+", label: "Clientes felices" },
                { value: "100%", label: "Hecho localmente" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="font-playfair text-3xl sm:text-4xl text-navy font-bold">
                    {stat.value}
                  </p>
                  <p className="font-inter text-xs text-muted mt-1 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
