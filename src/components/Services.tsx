import { servicios } from "@/lib/content";
import { WhatsAppButton } from "./WhatsAppButton";

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold tracking-wide text-malva uppercase">
        Servicios
      </p>
      <h2 className="mt-3 max-w-xl font-serif-title text-3xl text-marino md:text-4xl">
        Cuidado integral para tu salud mental
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {servicios.map((servicio) => (
          <div
            key={servicio.titulo}
            className="flex flex-col justify-between rounded-2xl border border-marino/10 p-8"
          >
            <div>
              <h3 className="font-serif-title text-xl text-marino">
                {servicio.titulo}
              </h3>
              <p className="mt-2 text-sm text-marino/70">
                {servicio.descripcion}
              </p>
            </div>
            <p className="mt-6 text-sm font-semibold text-marino">
              {servicio.precio}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <WhatsAppButton>Consulta disponibilidad</WhatsAppButton>
      </div>
    </section>
  );
}
