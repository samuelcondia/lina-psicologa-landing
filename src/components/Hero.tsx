import { Flower2, Star } from "lucide-react";
import { site, stats } from "@/lib/content";
import { WhatsAppButton } from "./WhatsAppButton";
import { Portrait } from "./Portrait";
import { YoutubeIcon } from "./icons";

const avatarStack = ["bg-malva/50", "bg-marino/30", "bg-marino/60"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-malva/20 via-crema to-crema">
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-malva/30 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-24 h-72 w-72 rounded-full bg-marino/15 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 pt-8 pb-16 md:pt-12">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-wide text-malva uppercase">
              Te doy la bienvenida a mi consulta
            </p>
            <h1 className="mt-3 font-serif-title text-4xl leading-tight text-marino md:text-5xl">
              Una mente{" "}
              <span className="inline-block rounded-lg bg-malva px-2 py-0.5 text-marino">
                sana
              </span>{" "}
              es un alma en paz
            </h1>
            <p className="mt-4 max-w-md text-marino/70">
              Acompañamiento psicológico holístico, presencial en Pereira o
              virtual desde cualquier lugar, para quienes buscan una vida más
              consciente y equilibrada.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <WhatsAppButton>Agendar por WhatsApp</WhatsAppButton>
              <a
                href={site.doctoraliaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-marino px-6 py-3 font-medium text-marino transition-colors hover:bg-marino hover:text-crema"
              >
                Agendar por Doctoralia
              </a>
            </div>
            <a
              href={site.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-marino/70 transition-colors hover:text-marino"
            >
              <YoutubeIcon className="h-4 w-4" />
              Mira mis contenidos en YouTube
            </a>
            <dl className="mt-8 flex gap-10">
              {stats.map((stat) => (
                <div key={stat.etiqueta}>
                  <dt className="sr-only">{stat.etiqueta}</dt>
                  <dd className="font-serif-title text-2xl text-marino md:text-3xl">
                    {stat.valor}
                  </dd>
                  <p className="mt-1 text-xs text-marino/60">{stat.etiqueta}</p>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <Portrait
              src="/images/lina-sobre-mi.jpg"
              alt={`${site.nombre}, ${site.titulo}`}
              objectPosition="center 25%"
              className="aspect-[4/5] w-full"
              priority
            />

            <div className="absolute -top-5 right-4 flex items-center gap-3 rounded-2xl bg-crema px-4 py-3 shadow-lg shadow-marino/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-malva/40 to-marino/20 text-marino">
                <Flower2 className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-semibold text-marino">
                  {site.nombre}
                </p>
                <p className="text-[11px] text-marino/60">{site.titulo}</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-crema px-5 py-4 shadow-lg shadow-marino/10">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-malva text-malva" />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {avatarStack.map((color, i) => (
                    <span
                      key={i}
                      className={`h-6 w-6 rounded-full border-2 border-crema ${color}`}
                    />
                  ))}
                </div>
                <p className="text-xs font-medium text-marino">
                  78 reseñas
                  <br />
                  verificadas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
