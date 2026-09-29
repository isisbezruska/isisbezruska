import Image from "next/image";
import { socialPhotos } from "@/lib/content";
import { site } from "@/lib/site";

export function Social() {
  const { instagram } = site;

  return (
    <section aria-labelledby="social-titulo" className="bg-ink py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="text-xs font-medium tracking-[0.18em] text-gold uppercase">
          Instagram
        </p>
        <h2
          id="social-titulo"
          className="mt-3 max-w-xl font-display text-4xl leading-tight font-medium text-balance sm:text-5xl"
        >
          Acompanhe nossos trabalhos
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-paper/70 sm:text-base">
          Publicamos os carros prontos no Instagram da RECAR. Siga{" "}
          {instagram.handle} para ver os trabalhos mais recentes.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {socialPhotos.map((photo) => (
            <li key={photo.src}>
              <a
                href={instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir o Instagram da RECAR — foto: ${photo.alt}`}
                className="group block overflow-hidden bg-panel"
              >
                <Image
                  src={photo.src}
                  alt=""
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="aspect-[4/5] h-auto w-full object-cover transition duration-500 group-hover:opacity-90"
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={instagram.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm underline decoration-gold decoration-2 underline-offset-4"
        >
          Ver o perfil no Instagram
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
