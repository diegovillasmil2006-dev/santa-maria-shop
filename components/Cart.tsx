"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

function formatPrice(n: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(n);
}

export default function Cart() {
  const { items, isOpen, closeCart, removeItem, total, count } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-navy/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
          />

          {/* Panel */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-[400px] bg-cream-light z-50 flex flex-col shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 240 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-navy/10">
              <div className="flex items-center gap-3">
                <h2 className="font-playfair text-xl text-navy">Mi Carrito</h2>
                {count > 0 && (
                  <span className="font-inter text-[11px] bg-navy text-cream rounded-full w-5 h-5 flex items-center justify-center leading-none">
                    {count}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                aria-label="Cerrar carrito"
                className="text-navy/40 hover:text-navy transition-colors duration-200 p-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-16">
                  <svg className="w-14 h-14 text-navy/15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <p className="font-playfair text-lg text-navy/40">Tu carrito está vacío</p>
                  <p className="font-inter text-xs text-muted">Añade productos para comenzar</p>
                  <button
                    onClick={closeCart}
                    className="font-inter text-xs tracking-widest uppercase text-gold border border-gold/40 px-6 py-2.5 hover:bg-gold hover:text-navy transition-all duration-300 mt-2"
                  >
                    Ver productos
                  </button>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      transition={{ duration: 0.25 }}
                      className="flex gap-4 py-4 border-b border-navy/8 last:border-0"
                    >
                      {/* Image */}
                      <div className="w-20 h-24 flex-shrink-0 overflow-hidden bg-cream">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={item.name}
                          onError={(e) => { e.currentTarget.src = item.fallback; }}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0 py-0.5">
                        <p className="font-inter text-[9px] tracking-widest uppercase text-gold mb-0.5">
                          {item.category}
                        </p>
                        <p className="font-playfair text-sm text-navy font-semibold leading-snug mb-1 line-clamp-2">
                          {item.name}
                        </p>
                        <p className="font-inter text-sm text-charcoal/80 mb-2">
                          {formatPrice(item.price)}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="font-inter text-[10px] text-muted tracking-wide">
                            Cant: {item.quantity}
                          </span>
                        </div>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label="Eliminar producto"
                        className="text-navy/25 hover:text-red-400 transition-colors duration-200 flex-shrink-0 self-start mt-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-navy/10 bg-cream">
                <div className="flex justify-between items-center mb-5">
                  <span className="font-inter text-xs tracking-widest uppercase text-muted">Total</span>
                  <span className="font-playfair text-2xl text-navy font-bold">
                    {formatPrice(total)}
                  </span>
                </div>
                <button className="w-full bg-gold text-navy font-inter text-xs tracking-widest uppercase py-4 hover:bg-gold-light hover:shadow-[0_8px_24px_rgba(201,169,110,0.4)] transition-all duration-300 mb-2">
                  Finalizar Compra
                </button>
                <button
                  onClick={closeCart}
                  className="w-full font-inter text-xs tracking-widest uppercase text-navy/40 hover:text-navy py-2 transition-colors duration-200"
                >
                  Seguir comprando
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
