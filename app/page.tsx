import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Prices from "@/components/Prices";
import Advantages from "@/components/Advantages";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import MapSection from "@/components/MapSection";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Menu />
      <Prices />
      <Advantages />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <MapSection />
      <Contacts />
      <Footer />
    </main>
  );
}
