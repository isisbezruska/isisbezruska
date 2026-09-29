import Image from "next/image";
import { beforeAfter } from "@/lib/content";

export function BeforeAfter() {
  return (
    <section
      id="trabalhos"
      className="scroll-mt-20 border-t border-paper/10 bg-ink py-20 text-paper sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="text-xs font-medium tracking-[0.18em] text-gold uppercase">
          Antes e depois
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight font-medium text-balance sm:text-5xl">
          Da lataria original à pintura final
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-paper/70 sm:text-base">
          Os registros de uma Kombi refeita na oficina, etapa por etapa.
        </p>

        <ul className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {beforeAfter.map((item) => (
            <li key={item.src}>
              <figure>
                <div className="overflow-hidden bg-panel">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-4 text-sm leading-relaxed text-paper/70">
                  {item.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
