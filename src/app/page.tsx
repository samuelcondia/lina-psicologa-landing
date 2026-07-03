import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Credentials } from "@/components/Credentials";
import { AboutMe } from "@/components/AboutMe";
import { Reviews } from "@/components/Reviews";
import { WhyChooseMe } from "@/components/WhyChooseMe";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Credentials />
        <AboutMe />
        <Reviews />
        <WhyChooseMe />
        <Services />
        <Process />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
