"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Mujer",
    slug: "mujer",
    description: "Elegancia que se lleva todos los días",
    image: "/imagenes/cat1.jpg",
    fallback: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
  },
  {
    id: 2,
    name: "Hombre",
    slug: "hombre",
    description: "Estilo sin complicaciones",
    image: "/imagenes/cat2.jpg",
    fallback: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800&q=80",
  },
  {
    id: 3,
    name: "Novedades",
    slug: "novedades",
    description: "Lo último en llegar",
    image: "/imagenes/cat3.jpg",
    fallback: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
  },
];

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function Categories() {
  return (
    <section id="categories" className="py-16 sm:py-20 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header — animación de texto se mantiene */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="font-inter text-xs tracking-[0.4em] uppercase text-gold mb-3">
            Explora
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl text-navy font-bold">
            Nuestras Categorías
          </h2>
        </motion.div>

        {/* Cards grid — CSS puro, sin Framer Motion */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <div key={cat.id}>
              <Link href="#products" className="block group">
                {/* Contenedor de imagen con fade-in CSS */}
                <div className="relative overflow-hidden aspect-[3/4] sm:aspect-[2/3] fade-in-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    onError={(e) => { e.currentTarget.src = cat.fallback; }}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="font-playfair text-3xl sm:text-4xl font-bold text-cream mb-1">
                      {cat.name}
                    </h3>
                    <p className="font-inter text-sm text-cream/70 mb-4">
                      {cat.description}
                    </p>
                    <span className="inline-flex items-center gap-2 font-inter text-xs tracking-widest uppercase text-gold group-hover:gap-4 transition-all duration-500">
                      Ver todo
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
