import About from "./components/About";
import Books from "./components/Books";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GivingBack from "./components/GivingBack";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Photography from "./components/Photography";
import MeetKai from "./components/MeetKai";

export default function Home() {
  return (
    <main>
      <Hero />
      <MeetKai />
      <About />
      <Mission />
      <Books />
      <Photography />
      <GivingBack />
      <Contact />
      <Footer />
    </main>
  );
}