import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Prices from "@/components/Prices";
import Contact from "@/components/Contact";
import type { Metadata } from "next";
import content from "../../../content.json";

export const metadata: Metadata = {
  title: content.ikonopisanje.meta.title,
  description: content.ikonopisanje.meta.description,
};

export default function IkonopisanjePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Prices section="ikonopisanje" />
      </main>
      <Footer />
    </>
  );
}
