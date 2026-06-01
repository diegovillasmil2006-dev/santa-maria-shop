import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProductBySlug } from "@/data/products";
import Navbar from "@/components/Navbar";
import Cart from "@/components/Cart";
import ProductDetail from "@/components/ProductDetail";
import WhatsAppButton from "@/components/WhatsAppButton";

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = getProductBySlug(params.id);
  return {
    title: product
      ? `${product.name} — Santa Maria Shop`
      : "Producto — Santa Maria Shop",
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductBySlug(params.id);
  if (!product) notFound();

  return (
    <>
      <Navbar />
      <ProductDetail product={product} />
      <WhatsAppButton />
    </>
  );
}
