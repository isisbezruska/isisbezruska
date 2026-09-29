import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { shopImage } from "@/lib/content";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-ink text-paper sm:min-h-[88svh] lg:items-center"
    >
      {/* A placa da RECAR e o Fusca ficam no terço esquerdo da foto: no celular o
          recorte se prende a eles, e no desktop o texto vai para a direita para
          não cobri-los. */}
      <Image
        src={shopImage.src}
        alt={shopImage.alt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[4%_50%] lg:object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/75 to-ink/35 lg:bg-gradient-to-l lg:from-ink/95 lg:via-ink/70 lg:to-ink/15"
      />

      <div className="mx-auto w-full max-w-6xl px-5 pt-32 pb-14 sm:px-6 sm:pb-20 lg:flex lg:justify-end lg:py-36">
        <div className="lg:w-[34rem]">
          <p className="text-xs font-medium tracking-[0.18em] text-gold uppercase">
            {site.sinceNote}
          </p>
          <h1 className="mt-5 max-w-[13ch] font-display text-[2.7rem] leading-[1.03] font-medium text-balance sm:text-6xl lg:text-7xl">
            Funilaria e Pintura em Curitiba
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-paper/85 sm:text-lg">
            Reparos de lataria e pintura automotiva com cuidado em cada detalhe.
          </p>
          <p className="mt-3 text-sm text-paper/70">Orçamento sem compromisso</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <WhatsAppButton className="w-full sm:w-auto">
              Solicitar orçamento pelo WhatsApp
            </WhatsAppButton>
            <a
              href="#trabalhos"
              className="inline-flex min-h-12 items-center justify-center text-sm font-medium text-paper underline decoration-gold decoration-2 underline-offset-4 transition hover:text-gold"
            >
              Ver nossos trabalhos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
