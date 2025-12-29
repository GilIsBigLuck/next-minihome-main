import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Templates from "@/components/Templates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Header />
      <Projects />
      <Templates />
      <Contact />
      <Footer />
    </main>
  );
}
