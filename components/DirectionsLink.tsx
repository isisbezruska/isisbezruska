"use client";

import { trackDirectionsClick } from "@/lib/analytics";
import { mapsDirectionsUrl } from "@/lib/site";

type DirectionsLinkProps = {
  children: React.ReactNode;
  className?: string;
};

export function DirectionsLink({ children, className = "" }: DirectionsLinkProps) {
  return (
    <a
      href={mapsDirectionsUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={trackDirectionsClick}
    >
      {children}
    </a>
  );
}
