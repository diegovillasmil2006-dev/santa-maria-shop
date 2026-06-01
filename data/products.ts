export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  image: string;
  fallback: string;
  tag: string | null;
  description: string;
  sizes: string[];
}

export const products: Product[] = [
  {
    id: 1,
    slug: "blusa-mediterranea",
    name: "Blusa Mediterránea",
    category: "Mujer",
    price: 89900,
    image: "/imagenes/product1.jpg",
    fallback: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800&q=80",
    tag: "Nuevo",
    description:
      "Confeccionada en lino de primera calidad con caída natural y transpirable. El diseño limpio y versátil la lleva del día a la noche con elegancia. Acabados a mano que reflejan nuestra dedicación a la calidad artesanal.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 2,
    slug: "pantalon-lino-porto",
    name: "Pantalón Lino Porto",
    category: "Hombre",
    price: 124900,
    image: "/imagenes/product2.jpg",
    fallback: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
    tag: null,
    description:
      "Corte recto y relajado en lino puro de doble torsión. La textura del tejido premium se adapta al cuerpo con movimiento natural. Un básico de armario que combina con todo y dura toda la temporada.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    slug: "vestido-riviera",
    name: "Vestido Riviera",
    category: "Mujer",
    price: 159900,
    image: "/imagenes/product3.jpg",
    fallback: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
    tag: "Favorito",
    description:
      "Silueta fluida confeccionada en mezcla de seda y viscosa italiana. La caída del tejido abraza la figura con elegancia sin esfuerzo. Detalles cosidos a mano que lo convierten en una pieza única.",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: 4,
    slug: "camisa-capri",
    name: "Camisa Capri",
    category: "Hombre",
    price: 98900,
    image: "/imagenes/product4.jpg",
    fallback: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
    tag: null,
    description:
      "Algodón egipcio de 200 hilos con acabado suavizado. Corte slim fit con botones de nácar y cuello italiano refinado. La pieza esencial de un guardarropa masculino bien construido.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    slug: "falda-palma",
    name: "Falda Palma",
    category: "Mujer",
    price: 79900,
    image: "/imagenes/product5.jpg",
    fallback: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=800&q=80",
    tag: "Nuevo",
    description:
      "Midi en popelín de algodón con caída estructurada e impecable. Cintura elástica que garantiza comodidad sin sacrificar la silueta. Un clásico reinventado con elegancia contemporánea.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 6,
    slug: "chaqueta-amalfi",
    name: "Chaqueta Amalfi",
    category: "Hombre",
    price: 219900,
    image: "/imagenes/product6.jpg",
    fallback: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    tag: "Edición limitada",
    description:
      "Lana merino italiana de gramaje medio con forro interior de seda natural. Confeccionada a mano en talleres locales comprometidos con la excelencia. Una inversión en estilo atemporal.",
    sizes: ["S", "M", "L", "XL"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
