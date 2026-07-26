"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carousel({
  fotos,
}: {
  fotos: { src: string; alt: string }[];
}) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + fotos.length) % fotos.length);
  const next = () => setIndex((i) => (i + 1) % fotos.length);

  return (
    <div>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg shadow-marino/10 md:aspect-video">
        {fotos.map((foto, i) => (
          <Image
            key={foto.src}
            src={foto.src}
            alt={foto.alt}
            fill
            sizes="(min-width: 768px) 700px, 100vw"
            priority={i === 0}
            aria-hidden={i !== index}
            className={`object-cover transition-opacity duration-500 ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          />
        ))}

        {fotos.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Foto anterior"
              className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-crema/90 text-marino shadow hover:bg-crema"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Foto siguiente"
              className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-crema/90 text-marino shadow hover:bg-crema"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {fotos.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {fotos.map((foto, i) => (
            <button
              key={foto.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ir a la foto ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-marino" : "w-2 bg-marino/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
