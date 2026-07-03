import { Award, Brain, GraduationCap, HeartHandshake, Wind } from "lucide-react";

const credenciales = [
  { icono: GraduationCap, etiqueta: "U. San Buenaventura" },
  { icono: Brain, etiqueta: "Psicología Junguiana" },
  { icono: Wind, etiqueta: "Mindfulness · MBSR" },
  { icono: HeartHandshake, etiqueta: "Pareja Consciente" },
  { icono: Award, etiqueta: "20 años de trayectoria" },
];

export function Credentials() {
  return (
    <section className="border-y border-marino/10 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm text-marino/60">
          Con el respaldo de{" "}
          <span className="font-semibold text-marino">
            más de 20 años
          </span>{" "}
          de trayectoria clínica
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {credenciales.map((item) => {
            const Icon = item.icono;
            return (
              <div
                key={item.etiqueta}
                className="flex items-center gap-2 text-marino/50"
              >
                <Icon className="h-5 w-5" strokeWidth={1.5} />
                <span className="text-sm font-medium tracking-wide whitespace-nowrap">
                  {item.etiqueta}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
