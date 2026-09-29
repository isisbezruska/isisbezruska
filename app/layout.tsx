import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { AnalyticsBootstrap } from "@/components/AnalyticsBootstrap";
import { localBusinessJsonLd, site, siteUrl, socialPreviewImage } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["400", "500", "600"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["500", "600"],
});

const title = "Funilaria e Pintura em Curitiba | RECAR Reparação Automotiva";
const description =
  "Funilaria, pintura automotiva e reparos de lataria em Curitiba. Fale com a RECAR e solicite seu orçamento pelo WhatsApp.";

const previewImage = {
  url: socialPreviewImage,
  width: 1920,
  height: 961,
  alt: "Fachada da RECAR Reparação Automotiva, no bairro São Braz, em Curitiba",
};

export const metadata: Metadata = {
  title,
  description,
  applicationName: site.name,
  robots: { index: true, follow: true },
  // Sem `NEXT_PUBLIC_SITE_URL` não há como montar URLs absolutas, então canonical
  // e imagens de compartilhamento só entram quando o domínio estiver definido.
  ...(siteUrl
    ? { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } }
    : {}),
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    type: "website",
    siteName: site.name,
    ...(siteUrl ? { url: "/", images: [previewImage] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    ...(siteUrl ? { images: [previewImage] } : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = localBusinessJsonLd();

  return (
    <html lang="pt-BR" className={`${outfit.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">
        {/*
          Os IDs de GTM, GA4 e Google Ads ficam em lib/analytics.ts (analyticsIds).
          Quando gtmId estiver preenchido, o snippet do Tag Manager entra aqui —
          este é o único lugar do projeto que carrega scripts de medição.
        */}
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-paper focus:px-4 focus:py-3 focus:text-ink"
        >
          Pular para o conteúdo
        </a>
        <AnalyticsBootstrap />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
