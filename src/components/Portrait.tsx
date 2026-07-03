import Image from "next/image";

export function Portrait({
  src,
  alt,
  className = "",
  objectPosition = "center",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  objectPosition?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 400px, 100vw"
        className="object-cover"
        style={{ objectPosition }}
        priority={priority}
      />
    </div>
  );
}
