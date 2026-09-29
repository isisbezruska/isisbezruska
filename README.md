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

Telefone, telefone fixo, WhatsApp, endereço, horários, redes sociais e ano de fundação ficam em `lib/site.ts`. Nenhum desses dados está escrito direto nos componentes.

Textos das seções, lista de serviços e o catálogo de fotos (com os respectivos alt) ficam em `lib/content.ts`.

## Domínio

Defina `NEXT_PUBLIC_SITE_URL` no ambiente de deploy, sem barra no final:

```
NEXT_PUBLIC_SITE_URL=https://www.seudominio.com.br
```

Enquanto essa variável estiver vazia, a URL canônica, o `sitemap.xml`, a imagem de compartilhamento e os campos `url`/`image` dos dados estruturados ficam de fora — de propósito, para não apontarem para um endereço inventado nem para o site antigo do Wix.

## Medição (GTM, GA4, Google Ads)

Os IDs ficam em `lib/analytics.ts`, no objeto `analyticsIds`. Estão vazios: não há nenhum ID fictício no projeto. Quando `gtmId` for preenchido, o snippet do Tag Manager entra em `app/layout.tsx`, no comentário que já marca o lugar.

Os eventos já são disparados no `dataLayer` por componentes reutilizáveis:

| Evento | Disparado por |
| --- | --- |
| `whatsapp_click` | `components/WhatsAppButton.tsx` |
| `phone_click` | `components/PhoneLink.tsx` |
| `directions_click` | `components/DirectionsLink.tsx` |

Parâmetros de campanha (`utm_*`, `gclid`, `gbraid`, `wbraid`) são lidos da URL e guardados em `sessionStorage`, na chave `recar_session_params`.

## Fotos

As imagens em `public/images/` têm duas origens. Os nomes dos arquivos descrevem o que cada foto realmente mostra e os `alt` em `lib/content.ts` acompanham — confira a imagem antes de mudar qualquer descrição.

- `entrega-*.webp` — publicações do Instagram [@recar_reparacao_automotiva](https://www.instagram.com/recar_reparacao_automotiva/), baixadas e convertidas para WebP. São carros prontos, fotografados no mesmo ponto da oficina. **Têm 640px no lado maior**, que é o máximo que o Instagram entrega publicamente: servem para grade e lightbox, mas não para hero nem para qualquer uso em largura total. Se a oficina tiver os originais, vale substituí-las.
- as demais — site antigo (Wix), em boa parte da página `/antesedepois`.

Duas observações sobre o acervo antigo:

- `reflexo-arvores-substituir.webp` está escura e sem assunto definido. Não é usada em lugar nenhum e deve ser trocada por uma foto nova da oficina.
- `laboratorio-de-tintas.webp` (prateleiras do laboratório de tintas) está disponível mas não é usada hoje.

Não existe no acervo nenhuma foto de reparo de colisão em andamento nem de veículo batido. As fotos disponíveis são de carro pronto, restauração, pintura e polimento. Os destaques "Colisão" e "Pintura lataria" no Instagram têm esse material em stories, mas stories não são baixáveis pelo perfil público — peça esses arquivos à oficina.
