"use client";

import { motion } from "framer-motion";

const lookbookImages = [
  {
    id: 1,
    src: "/imagenes/look1.jpg",
    fallback: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    alt: "Lookbook Santa Maria — imagen 1",
    caption: "Colección Verano",
    span: "row-span-2",
  },
  {
    id: 2,
    src: "/imagenes/look2.jpg",
    fallback: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=80",
    alt: "Lookbook Santa Maria — imagen 2",
    caption: "Siluetas del atardecer",
    span: "",
  },
  {
    id: 3,
    src: "/imagenes/look3.jpg",
    fallback: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=80",
    alt: "Lookbook Santa Maria — imagen 3",
    caption: "Paseos de domingo",
    span: "",
  },
  {
    id: 4,
    src: "/imagenes/look4.jpg",
    fallback: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=700&q=80",
    alt: "Lookbook Santa Maria — imagen 4",
    caption: "La ciudad, nuestra pasarela",
    span: "col-span-2 sm:col-span-1",
  },
];

const EASE = [0.25, 0.46, 0.45, 0.94] as const;
const REVEAL_EASE = [0.76, 0, 0.24, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const imgVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function Lookbook() {
  return (
    <section id="lookbook" className="py-16 sm:py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-inter text-xs tracking-[0.4em] uppercase text-gold mb-3">
            Inspiración
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl text-cream font-bold">
            Lookbook
          </h2>
          <p className="font-inter text-sm text-cream/50 mt-4 max-w-sm mx-auto leading-relaxed">
            Cada imagen es una invitación a imaginar cómo la ropa puede transformar un momento.
          </p>
        </motion.div>

        {/* Mosaic grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 auto-rows-[220px] sm:auto-rows-[280px] lg:auto-rows-[320px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {lookbookImages.map((img, i) => (
            <motion.div
              key={img.id}
              variants={imgVariants}
              className={`relative overflow-hidden group cursor-pointer ${img.span}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                onError={(e) => { e.currentTarget.src = img.fallback; }}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover overlay with caption */}
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-all duration-500 flex items-end p-5 sm:p-6">
                <p className="font-inter text-xs sm:text-sm tracking-widest uppercase text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  {img.caption}
                </p>
              </div>

              {/* Reveal mask */}
              <motion.div
                className="absolute inset-0 bg-navy pointer-events-none"
                style={{ originY: 0 }}
                initial={{ scaleY: 1 }}
                whileInView={{ scaleY: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.9, delay: i * 0.12, ease: REVEAL_EASE }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
