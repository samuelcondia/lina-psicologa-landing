import { navLinks, site } from "@/lib/content";
import { WhatsAppButton } from "./WhatsAppButton";
import { InstagramIcon, LinkedInIcon, YoutubeIcon } from "./icons";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-crema shadow-[0_1px_0_rgba(22,33,68,0.08)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-serif-title text-xl leading-tight text-marino">
          Lina María <br className="md:hidden" />
          Sánchez Uribe
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-marino/80 transition-colors hover:text-marino"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-marino/20 text-marino transition-colors hover:bg-marino hover:text-crema"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-marino/20 text-marino transition-colors hover:bg-marino hover:text-crema"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={site.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-marino/20 text-marino transition-colors hover:bg-marino hover:text-crema"
            >
              <YoutubeIcon className="h-4 w-4" />
            </a>
          </div>
          <WhatsAppButton className="px-4 py-2 text-sm">Escríbeme</WhatsAppButton>
        </div>
      </div>
    </header>
  );
}
