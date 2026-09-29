import { WhatsAppButton } from "@/components/WhatsAppButton";

export function FinalCTA() {
  return (
    <section id="contato" className="scroll-mt-20 bg-ink-soft py-24 text-paper sm:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <h2 className="font-display text-4xl leading-tight font-medium text-balance sm:text-6xl">
          Seu carro precisa de reparo?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-paper/75 sm:text-lg">
          Envie algumas fotos pelo WhatsApp e fale com a nossa equipe.
        </p>
        <WhatsAppButton className="mt-10 min-h-14 px-8 text-base tracking-wide">
          SOLICITAR ORÇAMENTO
        </WhatsAppButton>
      </div>
    </section>
  );
}
