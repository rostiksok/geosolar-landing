import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Products from "./components/Products";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-white text-black">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Products />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}
