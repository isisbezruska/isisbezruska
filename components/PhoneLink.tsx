"use client";

import { trackPhoneClick } from "@/lib/analytics";

type PhoneLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function PhoneLink({
  href,
  children,
  className = "",
  ariaLabel,
}: PhoneLinkProps) {
  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={trackPhoneClick}
    >
      {children}
    </a>
  );
}
