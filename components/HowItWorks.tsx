import { WhatsAppButton } from "@/components/WhatsAppButton";
import { steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-20 bg-paper py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
          Orçamento
        </p>
        <h2 className="mt-3 font-display text-4xl leading-tight font-medium sm:text-5xl">
          Como funciona
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title}>
              <p className="font-display text-4xl text-gold-deep">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{step.text}</p>
            </li>
          ))}
        </ol>
        <WhatsAppButton className="mt-12" variant="inverse">
          Enviar fotos pelo WhatsApp
        </WhatsAppButton>
      </div>
    </section>
  );
}
