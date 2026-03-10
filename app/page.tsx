import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import FeatureMenu from "../components/FeatureMenu";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeatureMenu />
      <About />
      <Gallery />
      <Footer />
    </main>
  );
}
