import { site, sobreMi } from "@/lib/content";
import { Portrait } from "./Portrait";

export function AboutMe() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Portrait
          src="/images/lina-sobre-mi.jpg"
          alt={site.nombre}
          objectPosition="center 20%"
          className="mx-auto aspect-square w-full max-w-md md:order-1"
        />
        <div>
          <p className="text-sm font-semibold tracking-wide text-malva uppercase">
            Sobre mí
          </p>
          <h2 className="mt-3 font-serif-title text-3xl text-marino md:text-4xl">
            Cuidado de calidad, desde una mirada integral
          </h2>
          <div className="mt-6 space-y-4 text-marino/70">
            {sobreMi.parrafos.map((parrafo) => (
              <p key={parrafo}>{parrafo}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
