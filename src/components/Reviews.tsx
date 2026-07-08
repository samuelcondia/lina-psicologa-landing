import { Quote, Star } from "lucide-react";
import { resenas, site } from "@/lib/content";

export function Reviews() {
  return (
    <section className="bg-marino py-20 text-crema">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-malva">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="mt-3 font-serif-title text-2xl md:text-3xl">
            78 reseñas verificadas
          </p>
          <p className="mt-2 text-sm text-crema/60">
            Reseñas reales de pacientes en{" "}
            <a
              href={site.doctoraliaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-malva"
            >
              Doctoralia
            </a>
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resenas.map((resena) => (
            <div
              key={resena.nombre}
              className="rounded-2xl bg-crema/5 p-6 ring-1 ring-crema/10"
            >
              <Quote className="h-6 w-6 text-malva" strokeWidth={1.5} />
              <p className="mt-4 text-sm text-crema/90">
                &ldquo;{resena.texto}&rdquo;
              </p>
              <div className="mt-5 flex items-center justify-between">
                <p className="text-sm font-semibold">{resena.nombre}</p>
                <p className="text-xs text-crema/50">{resena.fecha}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
