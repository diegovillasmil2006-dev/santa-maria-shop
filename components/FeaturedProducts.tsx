"use client";

import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

const products = [
  {
    id: 1,
    name: "Blusa Mediterránea",
    category: "Mujer",
    price: 89900,
    image: "/imagenes/product1.jpg",
    fallback: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=600&q=80",
    tag: "Nuevo",
  },
  {
    id: 2,
    name: "Pantalón Lino Porto",
    category: "Hombre",
    price: 124900,
    image: "/imagenes/product2.jpg",
    fallback: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
    tag: null,
  },
  {
    id: 3,
    name: "Vestido Riviera",
    category: "Mujer",
    price: 159900,
    image: "/imagenes/product3.jpg",
    fallback: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80",
    tag: "Favorito",
  },
  {
    id: 4,
    name: "Camisa Capri",
    category: "Hombre",
    price: 98900,
    image: "/imagenes/product4.jpg",
    fallback: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
    tag: null,
  },
  {
    id: 5,
    name: "Falda Palma",
    category: "Mujer",
    price: 79900,
    image: "/imagenes/product5.jpg",
    fallback: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=600&q=80",
    tag: "Nuevo",
  },
  {
    id: 6,
    name: "Chaqueta Amalfi",
    category: "Hombre",
    price: 219900,
    image: "/imagenes/product6.jpg",
    fallback: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
    tag: "Edición limitada",
  },
];

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

        {/* Header — animación de texto se mantiene */}
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

        {/* Grid — CSS puro, sin Framer Motion */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <article key={product.id} className="group cursor-pointer">

              {/* Contenedor de imagen con fade-in CSS */}
              <div className="relative aspect-[3/4] overflow-hidden bg-cream-light mb-3 sm:mb-4 fade-in-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => { e.currentTarget.src = product.fallback; }}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 z-10 font-inter text-[10px] tracking-widest uppercase bg-navy text-cream px-2.5 py-1">
                    {product.tag}
                  </span>
                )}
                {/* Quick action overlay */}
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
                    className="w-[82%] font-inter text-[10px] tracking-widest uppercase bg-gold text-navy py-2.5 hover:bg-gold-light transition-all duration-300"
                  >
                    Agregar al carrito
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2, ease: EASE }}
                    className="w-[82%] font-inter text-[10px] tracking-widest uppercase bg-cream/90 text-navy py-2 hover:bg-cream transition-all duration-300"
                  >
                    Ver prenda
                  </motion.button>
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
