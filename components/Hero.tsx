import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { heroImage } from "@/lib/content";
import { site } from "@/lib/site";

/**
 * A foto fica num painel próprio em vez de preencher a tela inteira: as fotos da
 * RECAR são de celular (a maior tem 1920px) e, esticadas no fundo, perdiam
 * definição no desktop e cortavam mal no celular.
 */
export function Hero() {
  return (
    <section id="topo" className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-16 lg:pt-36 lg:pb-28">
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-gold uppercase">
            {site.sinceNote}
          </p>
          <h1 className="mt-5 max-w-[13ch] font-display text-[2.7rem] leading-[1.03] font-medium text-balance sm:text-6xl lg:text-7xl">
            Funilaria e Pintura em Curitiba
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-paper/80 sm:text-lg">
            Reparos de lataria e pintura automotiva com cuidado em cada detalhe.
          </p>
          <p className="mt-3 text-sm text-paper/60">Orçamento sem compromisso</p>

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

        <div className="relative aspect-[16/10] overflow-hidden bg-panel sm:aspect-[3/2] lg:aspect-square">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
