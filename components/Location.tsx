import { DirectionsLink } from "@/components/DirectionsLink";
import { PhoneLink } from "@/components/PhoneLink";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { mapsEmbedUrl, site, weekdayHoursLabel } from "@/lib/site";

const buttonClass =
  "inline-flex min-h-12 items-center justify-center border border-ink/15 px-5 text-sm font-medium transition hover:border-ink";

export function Location() {
  return (
    <section id="localizacao" className="scroll-mt-20 border-t border-ink/10 bg-paper py-20 text-ink sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
            Localização
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight font-medium sm:text-5xl">
            Estamos em Curitiba
          </h2>
          <address className="mt-6 text-lg leading-relaxed not-italic">
            {site.address.street}
            <br />
            {site.address.neighborhood} — {site.address.city}, {site.address.state}
            <br />
            <span className="text-base text-muted">CEP {site.address.postalCode}</span>
          </address>

          <dl className="mt-8 space-y-4 text-base">
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted uppercase">WhatsApp</dt>
              <dd className="mt-1 text-xl">
                <PhoneLink
                  href={`tel:${site.phoneTel}`}
                  ariaLabel={`Ligar para ${site.phoneDisplay}`}
                  className="underline decoration-gold decoration-2 underline-offset-4"
                >
                  {site.phoneDisplay}
                </PhoneLink>
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted uppercase">Telefone fixo</dt>
              <dd className="mt-1">
                <PhoneLink
                  href={`tel:${site.landlineTel}`}
                  ariaLabel={`Ligar para ${site.landlineDisplay}`}
                  className="underline decoration-gold decoration-2 underline-offset-4"
                >
                  {site.landlineDisplay}
                </PhoneLink>
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted uppercase">Horário</dt>
              <dd className="mt-1">
                Segunda a sexta, {weekdayHoursLabel()}
                <br />
                Sábado: {site.saturdayNote}
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <DirectionsLink className={buttonClass}>Como chegar</DirectionsLink>
            <WhatsAppButton variant="inverse">Falar no WhatsApp</WhatsAppButton>
          </div>
        </div>

        <div className="overflow-hidden border border-ink/10 bg-paper-2 grayscale transition duration-300 hover:grayscale-0 focus-within:grayscale-0">
          <iframe
            title="Mapa da RECAR na R. José Rubens de Lima, 400, São Braz, Curitiba"
            src={mapsEmbedUrl()}
            className="h-80 w-full sm:h-[28rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
