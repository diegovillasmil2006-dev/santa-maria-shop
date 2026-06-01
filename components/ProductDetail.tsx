"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { type Product } from "@/data/products";
import Cart from "@/components/Cart";

function formatPrice(n: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(n);
}

export default function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      fallback: product.fallback,
      category: product.category,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-cream-light">
      <Cart />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Back */}
        <Link
          href="/#products"
          className="inline-flex items-center gap-2 font-inter text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors duration-300 mb-10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5m7-7l-7 7 7 7" />
          </svg>
          Volver
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* ── Image ── */}
          <div className="relative aspect-[3/4] overflow-hidden bg-cream fade-in-image">
            {product.tag && (
              <span className="absolute top-4 left-4 z-10 font-inter text-[10px] tracking-widest uppercase bg-navy text-cream px-3 py-1">
                {product.tag}
              </span>
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              onError={(e) => { e.currentTarget.src = product.fallback; }}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          {/* ── Info ── */}
          <motion.div
            className="flex flex-col justify-start lg:pt-4"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Category */}
            <p className="font-inter text-[10px] tracking-[0.45em] uppercase text-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="font-playfair text-4xl sm:text-5xl text-navy font-bold leading-tight mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-playfair text-3xl text-navy mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Divider */}
            <div className="h-[1px] bg-navy/10 mb-6" />

            {/* Description */}
            <p className="font-inter text-sm text-muted leading-relaxed mb-8 max-w-md">
              {product.description}
            </p>

            {/* Size selector */}
            <div className="mb-8">
              <p className="font-inter text-[10px] tracking-widest uppercase text-navy/60 mb-3">
                Talla {selectedSize && <span className="text-gold">— {selectedSize}</span>}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 font-inter text-xs tracking-wide border transition-all duration-300 ${
                      selectedSize === size
                        ? "border-gold bg-gold text-navy font-semibold"
                        : "border-navy/20 text-navy/60 hover:border-navy/50 hover:text-navy"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <motion.button
              onClick={handleAddToCart}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`w-full font-inter text-sm tracking-widest uppercase py-4 mb-3 transition-all duration-500 ${
                added
                  ? "bg-navy text-cream"
                  : "bg-gold text-navy hover:bg-gold-light hover:shadow-[0_8px_32px_rgba(201,169,110,0.4)]"
              }`}
            >
              {added ? "¡Añadido al carrito!" : "Agregar al carrito"}
            </motion.button>

            {/* Subtle note */}
            <p className="font-inter text-[11px] text-muted/60 text-center">
              Envío gratis en compras sobre $150.000 · Cambios hasta 30 días
            </p>

            {/* Divider + details */}
            <div className="h-[1px] bg-navy/10 mt-8 mb-6" />
            <div className="space-y-2">
              {["Materiales de primera calidad", "Confección local artesanal", "Despacho en 3-5 días hábiles"].map((detail) => (
                <div key={detail} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                  <p className="font-inter text-xs text-muted">{detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
