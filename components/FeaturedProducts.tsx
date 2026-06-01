"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price);
}

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function FeaturedProducts() {
  const { addItem } = useCart();

  return (
    <section id="products" className="py-16 sm:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div>
            <p className="font-inter text-xs tracking-[0.4em] uppercase text-gold mb-3">
              Selección
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl text-navy font-bold">
              Productos Destacados
            </h2>
          </div>
          <a
            href="#categories"
            className="font-inter text-sm tracking-widest uppercase text-navy/60 hover:text-gold transition-colors duration-300 whitespace-nowrap"
          >
            Ver todo →
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <article key={product.id} className="group cursor-pointer">

              {/* Image container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-cream-light mb-3 sm:mb-4 fade-in-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => { e.currentTarget.src = product.fallback; }}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 z-10 font-inter text-[10px] tracking-widest uppercase bg-navy text-cream px-2.5 py-1">
                    {product.tag}
                  </span>
                )}

                {/* Hover overlay with two buttons */}
                <div className="absolute inset-0 z-20 bg-navy/0 group-hover:bg-navy/25 transition-all duration-500 flex flex-col items-center justify-end pb-5 gap-2 opacity-0 group-hover:opacity-100">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2, ease: EASE }}
                    onClick={() => addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      fallback: product.fallback,
                      category: product.category,
                    })}
                    className="w-[82%] font-inter text-[10px] tracking-widest uppercase bg-gold text-navy py-2.5 hover:bg-gold-light transition-all duration-300 text-center"
                  >
                    Agregar al carrito
                  </motion.button>
                  <Link
                    href={`/productos/${product.slug}`}
                    className="w-[82%] font-inter text-[10px] tracking-widest uppercase bg-cream/90 text-navy py-2 hover:bg-cream transition-all duration-300 text-center"
                  >
                    Ver prenda
                  </Link>
                </div>
              </div>

              {/* Info */}
              <div className="px-0.5">
                <p className="font-inter text-[10px] tracking-widest uppercase text-gold mb-1">
                  {product.category}
                </p>
                <h3 className="font-playfair text-base sm:text-lg text-navy font-semibold mb-1 group-hover:text-gold transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="font-inter text-sm text-charcoal/80">
                  {formatPrice(product.price)}
                </p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
