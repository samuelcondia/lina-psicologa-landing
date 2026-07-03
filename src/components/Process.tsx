import { proceso } from "@/lib/content";

export function Process() {
  return (
    <section id="proceso" className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold tracking-wide text-malva uppercase">
        Cómo funciona
      </p>
      <h2 className="mt-3 max-w-xl font-serif-title text-3xl text-marino md:text-4xl">
        Pasos simples para empezar tu proceso
      </h2>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {proceso.map((item) => (
          <div key={item.paso}>
            <span className="font-serif-title text-4xl text-malva">
              {item.paso}
            </span>
            <h3 className="mt-3 font-serif-title text-xl text-marino">
              {item.titulo}
            </h3>
            <p className="mt-2 text-sm text-marino/70">{item.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
