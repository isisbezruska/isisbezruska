import { trustItems } from "@/lib/content";

export function TrustBar() {
  return (
    <section aria-label="Informações da oficina" className="border-y border-paper/10 bg-ink-soft text-paper">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-paper/10 lg:grid-cols-4 lg:divide-y-0">
        {trustItems.map((item) => (
          <li key={item} className="px-5 py-5 text-sm leading-snug text-paper/85 sm:px-6 sm:py-6">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
