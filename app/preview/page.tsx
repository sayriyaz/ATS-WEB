import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Commercial from "@/components/Commercial";
import PoolTypes from "@/components/PoolTypes";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Wellness from "@/components/Wellness";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Preview | Alwahaa Technical Services LLC",
  robots: { index: false, follow: false },
};

export default function PreviewPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white">
      <Navbar />
      <Hero />
      <About />
      <Commercial />
      <PoolTypes />
      <Services />
      <Process />
      <Gallery />
      <Wellness />
      <CTA />
      <Footer />
    </main>
  );
}
