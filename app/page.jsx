import Blogs from "@/components/Blogs";
import Experts from "@/components/Experts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Products from "@/components/Products";
import QualityAssurance from "@/components/QualityAssurance";

export default function Home() {
  return (
    <main className="h-[200vh]">
      <Hero />
      <Products />
      <QualityAssurance />
      <Experts />
      <Blogs />
      <Footer />
    </main>
  );
}
