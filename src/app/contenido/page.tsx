import type { Metadata } from "next";
import { MediaSpotlight } from "@/components/MediaSpotlight";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contenido | Lina María Sánchez Uribe",
  description:
    "Podcast, meditaciones guiadas y libros digitales de Lina María Sánchez Uribe, psicóloga holística.",
};

export default function ContenidoPage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-malva/20 via-crema to-crema py-14">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm font-semibold tracking-wide text-malva uppercase">
            Contenido
          </p>
          <h1 className="mt-3 font-serif-title text-4xl text-marino md:text-5xl">
            Podcast, meditaciones y libros
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-marino/70">
            Recursos gratuitos y libros digitales para acompañarte entre
            sesión y sesión, desde un enfoque holístico.
          </p>
        </div>
      </section>

      <MediaSpotlight />

      <section className="py-14 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif-title text-2xl text-marino">
            ¿Es momento de dar el siguiente paso?
          </h2>
          <p className="mt-2 text-marino/70">
            Si sientes que es momento de un acompañamiento más profundo,
            escríbeme y conversamos.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </main>
  );
}
