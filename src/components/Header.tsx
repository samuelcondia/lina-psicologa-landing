"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/content";
import { WhatsAppButton } from "./WhatsAppButton";
import { InstagramIcon, LinkedInIcon, YoutubeIcon } from "./icons";

const socialLinks = [
  { href: () => site.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: () => site.instagramUrl, label: "Instagram", Icon: InstagramIcon },
  { href: () => site.youtubeUrl, label: "YouTube", Icon: YoutubeIcon },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-crema shadow-[0_1px_0_rgba(22,33,68,0.08)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="font-serif-title text-xl leading-tight text-marino"
        >
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
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-marino/20 text-marino transition-colors hover:bg-marino hover:text-crema"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <WhatsAppButton className="px-4 py-2 text-sm">
            Escríbeme
          </WhatsAppButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-marino/20 text-marino md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-marino/10 bg-crema px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-marino/80 transition-colors hover:text-marino"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-3 border-t border-marino/10 pt-4">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-marino/20 text-marino transition-colors hover:bg-marino hover:text-crema"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
