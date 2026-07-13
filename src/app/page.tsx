import { Hero } from "@/components/Hero";
import { ContentTeaser } from "@/components/ContentTeaser";
import { Credentials } from "@/components/Credentials";
import { AboutMe } from "@/components/AboutMe";
import { Reviews } from "@/components/Reviews";
import { WhyChooseMe } from "@/components/WhyChooseMe";
import { Services } from "@/components/Services";
import { CrossLinks } from "@/components/CrossLinks";

export default function Home() {
  return (
    <main>
      <Hero />
      <ContentTeaser />
      <Credentials />
      <AboutMe />
      <Reviews />
      <WhyChooseMe />
      <Services />
      <CrossLinks />
    </main>
  );
}
