# RECAR Reparação Automotiva

Landing page da oficina RECAR, em Curitiba. O objetivo é receber quem chega pelo Google Ads, mostrar os serviços e os trabalhos reais e levar o orçamento para o WhatsApp.

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Produção:

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

## Onde alterar dados comerciais

Telefone, endereço, WhatsApp, redes e ano de fundação ficam em `lib/site.ts`.

IDs de GTM, GA4 e Google Ads ficam em `lib/analytics.ts` e são injetados depois em `app/layout.tsx`. Não há IDs fictícios no projeto.
