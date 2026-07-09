import Link from "next/link";

export function CrossLinks() {
  return (
    <section className="border-t border-marino/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 text-center text-sm">
        <p className="text-marino/60">¿Quieres conocer más de mi trabajo?</p>
        <Link
          href="/contenido"
          className="font-medium text-marino underline underline-offset-4 hover:text-malva"
        >
          Podcast y libros
        </Link>
        <Link
          href="/experiencias"
          className="font-medium text-marino underline underline-offset-4 hover:text-malva"
        >
          Experiencias
        </Link>
      </div>
    </section>
  );
}
