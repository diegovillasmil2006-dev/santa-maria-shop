import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Promise from "@/components/Promise";
import AboutUs from "@/components/AboutUs";
import Lookbook from "@/components/Lookbook";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScroll from "@/components/SmoothScroll";
import { CartProvider } from "@/context/CartContext";

export default function Home() {
  return (
    <CartProvider>
      <SmoothScroll>
        <main className="overflow-x-hidden">
          <Navbar />
          <Cart />
          <Hero />
          <Categories />
          <FeaturedProducts />
          <Promise />
          <Lookbook />
          <AboutUs />
          <Newsletter />
          <Contact />
          <Footer />
          <WhatsAppButton />
        </main>
      </SmoothScroll>
    </CartProvider>
  );
}
