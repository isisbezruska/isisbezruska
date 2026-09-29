import Image from "next/image";
import { socialPhotos } from "@/lib/content";
import { site } from "@/lib/site";

export function Social() {
  const primary = site.facebook[0];
  const secondary = site.facebook[1];

  return (
    <section aria-labelledby="social-titulo" className="bg-ink py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="text-xs font-medium tracking-[0.18em] text-gold uppercase">
          Facebook
        </p>
        <h2
          id="social-titulo"
          className="mt-3 max-w-xl font-display text-4xl leading-tight font-medium text-balance sm:text-5xl"
        >
          Acompanhe nossos trabalhos
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-paper/70 sm:text-base">
          As fotos abaixo são da oficina. Para ver as publicações, abra o Facebook da
          RECAR.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {socialPhotos.map((photo) => (
            <li key={photo.src}>
              <a
                href={primary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden bg-panel"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="aspect-[4/5] h-auto w-full object-cover transition duration-500 group-hover:opacity-90"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 text-sm sm:flex-row sm:gap-8">
          <a
            href={primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gold decoration-2 underline-offset-4"
          >
            {primary.name}
          </a>
          <a
            href={secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gold decoration-2 underline-offset-4"
          >
            {secondary.name}
          </a>
        </div>
      </div>
    </section>
  );
}
