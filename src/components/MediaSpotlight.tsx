import { BookOpen } from "lucide-react";
import { libros, site } from "@/lib/content";
import { YoutubeIcon } from "./icons";

export function MediaSpotlight() {
  return (
    <section className="bg-marino/[0.04] py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
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

          <div>
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
            <div className="mt-5 flex gap-5 overflow-x-auto pb-2">
              {libros.map((libro) => (
                <div key={libro.titulo} className="shrink-0">
                  <div className="flex aspect-[2/3] w-32 flex-col items-center justify-center gap-3 rounded-xl bg-gradient-to-br from-marino via-marino to-marino-suave text-crema shadow-lg shadow-marino/20 md:w-36">
                    <BookOpen className="h-8 w-8 text-malva" strokeWidth={1.5} />
                    <span className="font-serif-title text-lg">
                      {libro.titulo}
                    </span>
                  </div>
                  <p className="mt-2 text-center text-xs text-marino/50">
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
