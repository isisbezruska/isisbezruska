/**
 * Catálogo das fotos e dos textos da página.
 *
 * Origem das imagens:
 * - `entrega-*.webp` — publicações do Instagram @recar_reparacao_automotiva,
 *   baixadas e convertidas para WebP. São 640px no lado maior, o máximo que o
 *   Instagram entrega publicamente; use-as só em grade/lightbox, nunca em hero.
 * - as demais — site antigo (https://oficinarecar.wixsite.com/recar), sobretudo
 *   a página /antesedepois.
 *
 * Cada alt descreve o que a foto realmente mostra — confira a imagem antes de
 * editar qualquer descrição aqui.
 */

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * Enquadramento fechado na lataria: mostra o acabamento da pintura sem depender
 * de um modelo de carro específico e não quebra em nenhuma proporção de tela.
 */
export const aboutImage: Photo = {
  src: "/images/pintura-preta-polida.webp",
  alt: "Lateral de um carro preto com a pintura polida refletindo o entorno, ao lado da roda esportiva",
  width: 960,
  height: 720,
};

/**
 * Fachada da oficina na R. José Rubens de Lima, 400, com a placa da RECAR. Usada
 * no hero em tela cheia: com 1920px de largura, fica um pouco macia em telas de
 * alta densidade, o que o véu escuro por cima disfarça.
 */
export const shopImage: Photo = {
  src: "/images/recar-fachada-sao-braz.webp",
  alt: "Fachada da RECAR no bairro São Braz, em Curitiba, com a placa da oficina e um Fusca preto estacionado na frente",
  width: 1920,
  height: 961,
};

export const trustItems = [
  "+30 anos de experiência",
  "Orçamento sem compromisso",
  "Atendimento em Curitiba",
  "Equipe especializada",
] as const;

export const services = [
  {
    title: "Funilaria",
    description:
      "Batidas, portas, capô, pinos e soldas, com avaliação técnica para um reparo cuidadoso.",
    featured: true,
    image: {
      src: "/images/fusca-preto-restaurado.webp",
      alt: "Fusca preto com a lataria e a pintura refeitas, fotografado ao lado de outros Fuscas",
      width: 1280,
      height: 1122,
    },
  },
  {
    title: "Pintura automotiva",
    description:
      "Repintura e acerto de cor, em pinturas comuns e especiais. Parceria com a Tropical Tintas há mais de vinte anos.",
    featured: true,
    image: {
      src: "/images/classico-azul-paralama.webp",
      alt: "Paralama dianteiro de um carro clássico com a pintura azul refeita e o friso lateral cromado",
      width: 960,
      height: 717,
    },
  },
  {
    title: "Martelinho de ouro",
    description:
      "Amassados tratados com martelinho de ouro, no mesmo cuidado da funilaria.",
    featured: false,
  },
  {
    title: "Restauração automotiva",
    description: "Restauração de veículos e de carros antigos.",
    featured: false,
  },
  {
    title: "Polimento",
    description:
      "Polimento técnico, com proteção por selagem, cristalização ou vitrificação.",
    featured: false,
  },
  {
    title: "Estética automotiva",
    description:
      "Detalhamento do veículo: lavagem, higienização interna e limpeza de rodas e motor.",
    featured: false,
  },
] as const;

/**
 * As duas únicas imagens do site antigo em que o antes e o depois aparecem juntos,
 * montados pela própria oficina. Não monte pares novos a partir de fotos soltas —
 * não há como saber se são do mesmo veículo.
 */
export const beforeAfter: Array<Photo & { caption: string }> = [
  {
    src: "/images/antes-depois-kombi-amarela.webp",
    alt: "Quatro etapas da restauração de uma Kombi: a lataria bege original, a carroceria lixada, o primer cinza e a pintura final em amarelo e branco",
    width: 1600,
    height: 1600,
    caption:
      "Kombi refeita da lataria à pintura: chapa recuperada, primer e o acabamento final em amarelo e branco.",
  },
  {
    src: "/images/antes-depois-kombi-bege.webp",
    alt: "Comparação de uma Kombi antes e depois: embaixo, a pintura bege desgastada; em cima, a Kombi pronta em amarelo e branco",
    width: 900,
    height: 900,
    caption: "A mesma Kombi antes do reparo e depois de pronta.",
  },
];

/**
 * Carros prontos, fotografados no mesmo ponto da oficina (o painel amarelo com a
 * marca da RECAR) antes de voltarem para o cliente. É o conjunto mais recente e o
 * que melhor mostra o carro do dia a dia, então abre a galeria.
 */
export const deliveredPhotos: Photo[] = [
  {
    src: "/images/entrega-toyota-corolla-branco.webp",
    alt: "Toyota Corolla branco pronto para a entrega",
    width: 640,
    height: 640,
  },
  {
    src: "/images/entrega-renault-captur.webp",
    alt: "Renault Captur marrom com a pintura refeita, pronto para a entrega na oficina",
    width: 624,
    height: 640,
  },
  {
    src: "/images/entrega-ford-fiesta-vermelho.webp",
    alt: "Ford Fiesta vermelho com a pintura polida, pronto para a entrega na oficina",
    width: 640,
    height: 640,
  },
  {
    src: "/images/entrega-renault-fluence-branco.webp",
    alt: "Renault Fluence branco pronto para a entrega",
    width: 640,
    height: 640,
  },
  {
    src: "/images/entrega-mitsubishi-lancer-branco.webp",
    alt: "Mitsubishi Lancer branco pronto após o serviço",
    width: 613,
    height: 640,
  },
  {
    src: "/images/entrega-bmw-preto.webp",
    alt: "BMW preto com a pintura espelhada, pronto para a entrega",
    width: 640,
    height: 640,
  },
  {
    src: "/images/entrega-hatch-prata.webp",
    alt: "Hatch prata com a frente recuperada e a pintura polida, pronto para a entrega",
    width: 512,
    height: 640,
  },
  {
    src: "/images/entrega-cupe-vermelho.webp",
    alt: "Cupê esportivo vermelho com a pintura refeita",
    width: 640,
    height: 640,
  },
  {
    src: "/images/entrega-fusca-azul.webp",
    alt: "Fusca azul restaurado, com para-choques cromados e faróis auxiliares, pronto na oficina",
    width: 640,
    height: 640,
  },
  {
    src: "/images/entrega-perua-preta.webp",
    alt: "Perua preta com rack de teto, pronta para a entrega",
    width: 640,
    height: 640,
  },
  {
    src: "/images/entrega-sedan-fiat-preto.webp",
    alt: "Sedã Fiat preto com a pintura espelhada e rodas de liga, pronto para a entrega",
    width: 640,
    height: 640,
  },
];

/** Demais trabalhos da oficina, sem pares de antes e depois identificáveis. */
export const workPhotos: Photo[] = [
  {
    src: "/images/kombi-amarela-restaurada.webp",
    alt: "Kombi amarela e branca restaurada, estacionada ao lado de uma perua vermelha",
    width: 1280,
    height: 853,
  },
  {
    src: "/images/pintura-preta-reflexo-placa.webp",
    alt: "Placa da RECAR refletida na pintura preta espelhada de um carro recém-polido",
    width: 960,
    height: 720,
  },
  {
    src: "/images/ford-f100-lateral.webp",
    alt: "Lateral de uma picape Ford F-100 azul restaurada, com o emblema do modelo no paralama",
    width: 750,
    height: 1000,
  },
  {
    src: "/images/mustang-verde-restaurado.webp",
    alt: "Frente de um Ford Mustang verde escuro restaurado, com os faróis e a grade recuperados",
    width: 800,
    height: 600,
  },
  {
    src: "/images/chevrolet-vermelho-restaurado.webp",
    alt: "Chevrolet vermelho restaurado estacionado ao lado de um Mustang preto, em frente a uma parede laranja",
    width: 800,
    height: 600,
  },
  {
    src: "/images/ford-f100-frente.webp",
    alt: "Frente de uma picape Ford F-100 azul e branca restaurada, com o para-choque e a grade cromados",
    width: 750,
    height: 1000,
  },
  {
    src: "/images/fusca-bege-traseira.webp",
    alt: "Traseira de um Fusca bege rebaixado, com a pintura polida e roda esportiva",
    width: 720,
    height: 1280,
  },
  {
    src: "/images/moto-tanque-polido.webp",
    alt: "Tanque de uma moto preta com a pintura espelhada, refletindo o céu e as nuvens",
    width: 704,
    height: 960,
  },
];

export const steps = [
  {
    title: "Envie fotos",
    text: "Mostre pelo WhatsApp o que aconteceu com o veículo.",
  },
  {
    title: "Solicite seu orçamento",
    text: "Nossa equipe avalia o serviço necessário.",
  },
  {
    title: "Agende o reparo",
    text: "Combine o melhor momento para trazer seu veículo.",
  },
] as const;

/** Tudo o que entra na galeria, dos carros mais recentes aos restaurados. */
export const galleryPhotos: Photo[] = [...deliveredPhotos, ...workPhotos];
