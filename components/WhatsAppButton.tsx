"use client";

import { trackWhatsAppClick } from "@/lib/analytics";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Icons";

type Variant = "primary" | "inverse" | "ghost" | "link" | "linkLight" | "icon" | "float";

const variants: Record<Variant, string> = {
  primary:
    "inline-flex min-h-12 items-center justify-center gap-2 bg-paper px-5 text-sm font-medium text-ink shadow-[inset_3px_0_0_var(--color-gold)] transition hover:bg-white",
  inverse:
    "inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-5 text-sm font-medium text-paper shadow-[inset_3px_0_0_var(--color-gold)] transition hover:bg-ink-soft",
  ghost:
    "inline-flex min-h-12 items-center justify-center gap-2 border border-paper/30 px-5 text-sm font-medium text-paper transition hover:border-paper/70",
  link: "inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink underline decoration-gold decoration-2 underline-offset-4 transition hover:text-ink-soft",
  linkLight:
    "inline-flex min-h-11 items-center text-sm font-medium text-paper underline decoration-gold decoration-2 underline-offset-4",
  icon: "inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1f8f4e] text-white transition hover:bg-[#187743]",
  float:
    "fixed right-5 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1f8f4e] text-white shadow-lg transition hover:bg-[#187743]",
};

type WhatsAppButtonProps = {
  children?: React.ReactNode;
  /**
   * Não use `hidden` nem outra classe de `display` aqui: cada variante já traz a
   * sua e, com a mesma especificidade, quem vence é a ordem da folha de estilo,
   * não a ordem do atributo. Para esconder o botão, envolva-o num elemento.
   */
  className?: string;
  variant?: Variant;
  ariaLabel?: string;
};

export function WhatsAppButton({
  children,
  className = "",
  variant = "primary",
  ariaLabel,
}: WhatsAppButtonProps) {
  const label =
    ariaLabel ??
    (typeof children === "string" ? children : "Solicitar orçamento pelo WhatsApp");

  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variants[variant]} ${className}`}
      aria-label={label}
      onClick={trackWhatsAppClick}
    >
      {variant === "float" || variant === "icon" ? (
        <WhatsAppIcon className={variant === "float" ? "h-7 w-7" : "h-6 w-6"} />
      ) : (
        children
      )}
    </a>
  );
}
