"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Colección", href: "#categories" },
  { label: "Productos", href: "#products" },
  { label: "Nosotros", href: "#about" },
  { label: "Lookbook", href: "#lookbook" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy/95 backdrop-blur-sm sm:backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="#hero" className="flex flex-col leading-none group">
          <span className="font-playfair text-lg sm:text-xl font-bold tracking-widest text-cream uppercase">
            Santa Maria
          </span>
          <span className="font-inter text-[10px] sm:text-xs tracking-[0.35em] text-gold uppercase">
            Shop
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-inter text-sm tracking-widest uppercase text-cream/80 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Newsletter + Cart (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#newsletter"
            className="font-inter text-sm tracking-widest uppercase border border-gold/60 text-gold px-5 py-2 hover:bg-gold hover:text-navy transition-all duration-300"
          >
            Newsletter
          </Link>

          {/* Cart icon */}
          <button
            onClick={openCart}
            aria-label="Abrir carrito"
            className="relative text-cream/80 hover:text-gold transition-colors duration-300 p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] bg-red-500 text-white font-inter text-[10px] font-bold rounded-full flex items-center justify-center px-0.5 leading-none">
                {count}
              </span>
            )}
          </button>
        </div>

        {/* Mobile: Cart + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={openCart}
            aria-label="Abrir carrito"
            className="relative text-cream/80 hover:text-gold transition-colors duration-300 p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] bg-red-500 text-white font-inter text-[10px] font-bold rounded-full flex items-center justify-center px-0.5 leading-none">
                {count}
              </span>
            )}
          </button>

          <button
            className="flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span className={`block w-6 h-[1.5px] bg-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-cream transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-navy/97 backdrop-blur-md overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-inter text-sm tracking-widest uppercase text-cream/80 hover:text-gold transition-colors duration-300 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#newsletter"
                  onClick={() => setMenuOpen(false)}
                  className="font-inter text-sm tracking-widest uppercase border border-gold/60 text-gold px-5 py-2 inline-block hover:bg-gold hover:text-navy transition-all duration-300 mt-2"
                >
                  Newsletter
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
