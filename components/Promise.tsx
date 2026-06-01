"use client";

const promises = [
  {
    title: "Envío Gratis",
    description: "En compras sobre $150.000",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="8" width="14" height="10" rx="1" />
        <path d="M15 11h4l3 3v4h-7V11z" />
        <circle cx="5.5" cy="19.5" r="2" />
        <circle cx="18.5" cy="19.5" r="2" />
      </svg>
    ),
  },
  {
    title: "Cambios Fáciles",
    description: "30 días para cambiar tu talla",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M23 4v6h-6" />
        <path d="M1 20v-6h6" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
        <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
      </svg>
    ),
  },
  {
    title: "Calidad Premium",
    description: "Materiales seleccionados",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Pago Seguro",
    description: "Transacciones protegidas",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

export default function Promise() {
  return (
    <section className="bg-navy py-12 sm:py-14 border-t border-cream/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {promises.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center gap-4 px-2">
              <div className="opacity-90">{item.icon}</div>
              <div>
                <p className="font-playfair text-base sm:text-lg text-gold font-semibold mb-1">
                  {item.title}
                </p>
                <p className="font-inter text-xs text-cream/55 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
