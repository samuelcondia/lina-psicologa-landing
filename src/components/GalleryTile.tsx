import { Flower2 } from "lucide-react";

export function GalleryTile({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-malva/30 via-crema to-marino/10 ${className}`}
    >
      <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-malva/30 blur-2xl" />
      <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-marino/20 blur-2xl" />
      <Flower2
        className="relative h-7 w-7 text-marino/50"
        strokeWidth={1.25}
      />
    </div>
  );
}
