import type { Metadata } from "next";
import { eventos } from "@/lib/content";
import { Carousel } from "@/components/Carousel";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Experiencias | Lina María Sánchez Uribe",
  description:
    "Talleres, retiros y sesiones grupales con Lina María Sánchez Uribe, psicóloga holística.",
};

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
        <div className="space-y-16">
          {eventos.map((evento) => (
            <div
              key={evento.titulo}
              className="grid items-center gap-10 md:grid-cols-2"
            >
              <Carousel fotos={evento.fotos} />
              <div>
                <p className="text-sm font-semibold tracking-wide text-malva uppercase">
                  {evento.fecha}
                </p>
                <h2 className="mt-2 font-serif-title text-2xl text-marino md:text-3xl">
                  {evento.titulo}
                </h2>
                <p className="mt-3 text-marino/70">{evento.descripcion}</p>
              </div>
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
