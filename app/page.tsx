import Header from "./components/Header";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Products from "./components/Products";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Calculator from "./components/Calculator";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-white text-black">
      <Header />
      <Hero />
      <About />
      <Solutions />
      <Products />
      <Services />
      <Projects />
      <Calculator />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}
