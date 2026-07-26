import type { Metadata } from "next";
import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Experiencias | Lina María Sánchez Uribe",
  description:
    "Talleres, retiros y sesiones grupales con Lina María Sánchez Uribe, psicóloga holística.",
};

const fotos = [
  { src: "/images/experiencias/experiencia-1.jpg", alt: "Encuentro grupal junto a la piscina" },
  { src: "/images/experiencias/experiencia-2.jpg", alt: "Círculo de conversación en el taller" },
  { src: "/images/experiencias/experiencia-3.jpg", alt: "Encendiendo una vela durante la ceremonia" },
  { src: "/images/experiencias/experiencia-4.jpg", alt: "Ceremonia de velas al aire libre" },
];

export default function ExperienciasPage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-malva/20 via-crema to-crema py-14">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm font-semibold tracking-wide text-malva uppercase">
            Experiencias
          </p>
          <h1 className="mt-3 font-serif-title text-4xl text-marino md:text-5xl">
            Un vistazo a los espacios que compartimos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-marino/70">
            Talleres, retiros y sesiones grupales para sanar en comunidad.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {fotos.map((foto) => (
            <div
              key={foto.src}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg shadow-marino/10"
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-marino py-16 text-crema">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="font-serif-title text-2xl leading-relaxed md:text-3xl">
            &ldquo;El cambio no toma años; lo que toma años es decidirse a
            comenzar.&rdquo;
          </p>
        </div>
      </section>

      <section className="py-14 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif-title text-2xl text-marino">
            ¿Quieres ser parte del próximo espacio?
          </h2>
          <p className="mt-2 text-marino/70">
            Escríbeme para conocer las próximas fechas de talleres y
            retiros.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </main>
  );
}
