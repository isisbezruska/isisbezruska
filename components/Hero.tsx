import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { heroImage } from "@/lib/content";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="topo" className="relative min-h-[100svh] bg-ink text-paper">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_40%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/62 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-6 sm:pb-20">
        <p className="text-xs font-medium tracking-[0.18em] text-gold uppercase">
          {site.sinceNote}
        </p>
        <h1 className="mt-4 max-w-[14ch] font-display text-[2.6rem] leading-[1.02] font-medium text-balance sm:text-6xl lg:text-7xl">
          Funilaria e Pintura em Curitiba
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-paper/85 sm:text-lg">
          Reparos de lataria e pintura automotiva com cuidado em cada detalhe.
        </p>
        <p className="mt-3 text-sm text-paper/70">Orçamento sem compromisso</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <WhatsAppButton className="w-full sm:w-auto">
            Solicitar orçamento pelo WhatsApp
          </WhatsAppButton>
          <a
            href="#trabalhos"
            className="inline-flex min-h-12 items-center justify-center px-2 text-sm font-medium text-paper underline decoration-gold decoration-2 underline-offset-4"
          >
            Ver nossos trabalhos
          </a>
        </div>
      </div>
    </section>
  );
}
