import { BookOpen } from "lucide-react";
import { libros, site } from "@/lib/content";
import { YoutubeIcon } from "./icons";

export function MediaSpotlight() {
  return (
    <section className="bg-marino/[0.04] py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="min-w-0">
            <p className="text-sm font-semibold tracking-wide text-malva uppercase">
              Mi canal de YouTube
            </p>
            <h2 className="mt-2 font-serif-title text-2xl text-marino md:text-3xl">
              Meditaciones guiadas y el podcast Echando el cuento
            </h2>
            <p className="mt-2 max-w-md text-sm text-marino/70">
              Contenido gratuito para acompañarte entre sesión y sesión.
              Suscribite para no perderte los nuevos episodios y
              meditaciones.
            </p>
            <div className="mt-5 aspect-video w-full overflow-hidden rounded-2xl shadow-lg shadow-marino/10">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${site.videoDestacadoId}`}
                title="Video de Lina María Sánchez Uribe en YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <a
              href={site.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-marino px-6 py-3 font-medium text-crema transition-colors hover:bg-marino-suave"
            >
              <YoutubeIcon className="h-5 w-5" />
              Suscríbete en YouTube
            </a>
          </div>

          <div className="min-w-0">
            <p className="text-sm font-semibold tracking-wide text-malva uppercase">
              Libros
            </p>
            <h2 className="mt-2 font-serif-title text-2xl text-marino md:text-3xl">
              También podés adquirir mis libros
            </h2>
            <p className="mt-2 max-w-md text-sm text-marino/70">
              Libros digitales para seguir explorando el camino de sanar e
              integrar, a tu ritmo.
            </p>
            <div className="mt-8 flex gap-8 overflow-x-auto px-2 pt-2 pb-4">
              {libros.map((libro) => (
                <div key={libro.titulo} className="group shrink-0">
                  <div className="relative h-44 w-32 -rotate-3 transition-transform duration-300 group-hover:rotate-0 md:h-52 md:w-36">
                    <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-md bg-marino-suave/50" />
                    <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-md bg-marino-suave/70" />
                    <div className="relative flex h-full w-full flex-col justify-between rounded-md bg-gradient-to-br from-marino to-marino-suave p-3 text-crema shadow-xl ring-1 ring-black/10">
                      <BookOpen className="h-5 w-5 text-malva" strokeWidth={1.5} />
                      <div>
                        <p className="font-serif-title text-sm leading-tight">
                          {libro.titulo}
                        </p>
                        <div className="mt-2 h-px w-8 bg-malva/60" />
                        <p className="mt-2 text-[9px] tracking-wide text-crema/50 uppercase">
                          Lina Sánchez Uribe
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-center text-xs text-marino/50">
                    Próximamente
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
