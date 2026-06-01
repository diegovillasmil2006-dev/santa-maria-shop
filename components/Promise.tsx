"use client";

const promises = [
  {
    icon: "🚚",
    title: "Envío Gratis",
    description: "En compras sobre $150.000",
  },
  {
    icon: "🔄",
    title: "Cambios Fáciles",
    description: "30 días para cambiar tu talla",
  },
  {
    icon: "✨",
    title: "Calidad Premium",
    description: "Materiales seleccionados",
  },
  {
    icon: "🔒",
    title: "Pago Seguro",
    description: "Transacciones protegidas",
  },
];

export default function Promise() {
  return (
    <section className="bg-navy py-12 sm:py-14 border-t border-cream/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {promises.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center gap-3 px-2"
            >
              <span className="text-3xl sm:text-4xl leading-none">{item.icon}</span>
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
