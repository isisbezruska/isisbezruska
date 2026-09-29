import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { AnalyticsBootstrap } from "@/components/AnalyticsBootstrap";
import { localBusinessJsonLd, site } from "@/lib/site";
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

export const metadata: Metadata = {
  title,
  description,
  applicationName: site.name,
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    type: "website",
    siteName: site.name,
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
          Marcelo: cole os IDs reais de GTM, GA4 e Google Ads em lib/analytics.ts
          (analyticsIds). Não use IDs fictícios. Quando gtmId estiver preenchido,
          injete o snippet do Tag Manager neste layout — este é o único lugar.
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
