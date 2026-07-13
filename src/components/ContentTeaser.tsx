import Link from "next/link";
import { ArrowRight, BookOpen, Mic, Play, Wind } from "lucide-react";
import { site } from "@/lib/content";

const chips = [
  { icon: Wind, label: "Meditaciones" },
  { icon: Mic, label: "Podcast" },
  { icon: BookOpen, label: "Libros" },
];

export function ContentTeaser() {
  return (
    <section className="bg-marino py-16 text-crema">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
        <Link
          href="/contenido"
          className="group relative block aspect-video overflow-hidden rounded-2xl shadow-xl"
        >
          <img
            src={`https://img.youtube.com/vi/${site.videoMeditacionId}/hqdefault.jpg`}
            alt="Meditaciones y podcast de Lina María Sánchez Uribe"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-marino/30 transition-colors group-hover:bg-marino/40">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-crema/95 text-marino shadow-lg">
              <Play className="ml-1 h-6 w-6 fill-current" />
            </div>
          </div>
        </Link>

        <div>
          <p className="text-sm font-semibold tracking-wide text-malva uppercase">
            Más allá de la consulta
          </p>
          <h2 className="mt-2 font-serif-title text-3xl leading-tight md:text-4xl">
            Podcast, meditaciones y libros para tu bienestar
          </h2>
          <p className="mt-3 text-crema/70">
            Contenido gratuito entre sesión y sesión: el podcast Echando el
            cuento, meditaciones guiadas y mis libros digitales.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {chips.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-2 rounded-full border border-crema/20 px-4 py-2 text-sm"
              >
                <Icon className="h-4 w-4 text-malva" />
                {label}
              </span>
            ))}
          </div>
          <Link
            href="/contenido"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-crema px-6 py-3 font-medium text-marino transition-colors hover:bg-malva"
          >
            Explorar todo el contenido
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
