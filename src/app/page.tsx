import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Templates from "@/components/Templates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Header />
      <Gallery />
      <Templates />
      <Contact />
      <Footer />
    </main>
  );
}
