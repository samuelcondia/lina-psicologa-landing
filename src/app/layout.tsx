import type { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lina María Sánchez Uribe | Psicóloga Holística",
  description:
    "Terapia individual, de pareja y familiar con enfoque holístico, junguiano y mindfulness. Acompañamiento en Pereira y virtual para todo el país.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${raleway.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
