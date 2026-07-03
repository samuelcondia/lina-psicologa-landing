import { HeartHandshake, Sparkles, Video } from "lucide-react";
import { porQueElegirme } from "@/lib/content";

const iconos = [HeartHandshake, Sparkles, Video];

export function WhyChooseMe() {
  return (
    <section className="bg-marino/[0.04] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold tracking-wide text-malva uppercase">
          Por qué elegirme
        </p>
        <h2 className="mt-3 max-w-xl font-serif-title text-3xl text-marino md:text-4xl">
          Acompañándote de vuelta a tu equilibrio
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {porQueElegirme.map((item, i) => {
            const Icon = iconos[i];
            return (
              <div
                key={item.titulo}
                className="rounded-2xl bg-crema p-8 shadow-sm shadow-marino/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-malva/20 text-marino">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-serif-title text-xl text-marino">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm text-marino/70">{item.descripcion}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
