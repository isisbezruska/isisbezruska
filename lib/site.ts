/**
 * Dados comerciais da RECAR.
 * Altere telefone, endereço, WhatsApp e redes aqui — o restante do site lê este arquivo.
 *
 * Horários, CEP, telefone fixo, ano de fundação e coordenadas vieram do site antigo
 * (https://oficinarecar.wixsite.com/recar) e do mapa incorporado nele.
 */

export const site = {
  name: "RECAR Reparação Automotiva",
  sinceYear: 1994,
  sinceNote: "Em Curitiba desde 1994",
  phoneDisplay: "(41) 99605-4666",
  phoneTel: "+5541996054666",
  phoneSchema: "+55-41-99605-4666",
  landlineDisplay: "(41) 3272-8141",
  landlineTel: "+554132728141",
  landlineSchema: "+55-41-3272-8141",
  whatsappDisplay: "+55 41 99605-4666",
  whatsappUrl:
    "https://api.whatsapp.com/send?phone=5541996054666&text=Ol%C3%A1!%20Encontrei%20a%20Recar%20pelo%20Google%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
  address: {
    street: "R. José Rubens de Lima, 400",
    neighborhood: "São Braz",
    city: "Curitiba",
    state: "PR",
    postalCode: "82315-230",
    country: "BR",
  },
  addressLine: "R. José Rubens de Lima, 400, São Braz — Curitiba, PR",
  mapsQuery: "R. José Rubens de Lima, 400, São Braz, Curitiba, PR",
  /** Pin do mapa no site antigo. Não usar estes números no embed — o mapa usa o endereço. */
  geo: {
    latitude: -25.415102,
    longitude: -49.3583808,
  },
  facebook: [
    {
      name: "RECAR Reparação Automotiva",
      href: "https://www.facebook.com/RecarReparacaoAutomotiva/",
    },
    {
      name: "Recar Martelinho de Ouro",
      href: "https://www.facebook.com/Recarmartelinhodeouro",
    },
  ],
  /** Nenhum perfil de Instagram foi encontrado no site antigo. */
  instagram: null as null,
  /** Site público conhecido hoje. Atualize quando o domínio novo estiver no ar. */
  knownWebsite: "https://oficinarecar.wixsite.com/recar",
  weekdayHours: [
    { opens: "09:00", closes: "12:00" },
    { opens: "13:00", closes: "18:00" },
  ],
  saturdayNote: "Mediante agendamento",
} as const;

export const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#trabalhos", label: "Antes e Depois" },
  { href: "#sobre", label: "Sobre" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
] as const;

export function weekdayHoursLabel() {
  return site.weekdayHours
    .map((slot) => `${slot.opens}–${slot.closes}`)
    .join(" e ");
}

export function mapsDirectionsUrl() {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapsQuery)}`;
}

export function mapsEmbedUrl() {
  return `https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=16&output=embed`;
}

export function localBusinessJsonLd() {
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: site.name,
    url: site.knownWebsite,
    image:
      "https://static.wixstatic.com/media/95f1fb_4288021b5b2445fe82ae4c1a3e30ab7d~mv2.jpg",
    telephone: [site.phoneSchema, site.landlineSchema],
    foundingDate: String(site.sinceYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street}, ${site.address.neighborhood}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: site.weekdayHours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: weekdays,
      opens: slot.opens,
      closes: slot.closes,
    })),
    sameAs: site.facebook.map((profile) => profile.href),
    hasMap: mapsDirectionsUrl(),
  };
}
