import { MessageCircle } from "lucide-react";
import { site } from "@/lib/content";

function buildWhatsAppUrl() {
  const texto = encodeURIComponent(site.whatsappMensaje);
  return `https://wa.me/${site.whatsapp}?text=${texto}`;
}

export function WhatsAppButton({
  className = "",
  children = "Agenda tu sesión",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-marino px-6 py-3 font-medium text-crema transition-colors hover:bg-marino-suave ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {children}
    </a>
  );
}

export function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-marino text-crema shadow-lg shadow-marino/30 transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
