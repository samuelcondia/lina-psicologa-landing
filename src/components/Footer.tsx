import { MapPin } from "lucide-react";
import { site } from "@/lib/content";
import { WhatsAppButton } from "./WhatsAppButton";
import { InstagramIcon } from "./icons";

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-marino/10 bg-marino/[0.04] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif-title text-3xl text-marino">
              Empecemos tu proceso
            </h2>
            <p className="mt-3 max-w-sm text-marino/70">
              Escríbeme por WhatsApp y con gusto te cuento cómo trabajamos y
              agendamos tu primera sesión.
            </p>
            <WhatsAppButton className="mt-6" />
          </div>
          <div className="space-y-3 text-sm text-marino/70 md:text-right">
            <p className="flex items-center gap-2 md:justify-end">
              <MapPin className="h-4 w-4" />
              {site.ubicacion}
            </p>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-marino md:justify-end"
            >
              <InstagramIcon />
              {site.instagram}
            </a>
          </div>
        </div>
        <p className="mt-12 text-center text-xs text-marino/40">
          © {new Date().getFullYear()} {site.nombre}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
