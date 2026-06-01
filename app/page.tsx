import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutUs from "@/components/AboutUs";
import Lookbook from "@/components/Lookbook";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Categories />
        <FeaturedProducts />
        <AboutUs />
        <Lookbook />
        <Newsletter />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
