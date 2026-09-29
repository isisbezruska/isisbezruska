export type WorkPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const heroImage = {
  src: "/images/funilaria-hero.webp",
  alt: "Carro branco na oficina da RECAR, com a porta dianteira danificada, durante um reparo de funilaria",
  width: 1920,
  height: 961,
} as const;

export const shopImage = {
  src: "/images/recar-oficina.webp",
  alt: "Carro vermelho no elevador da oficina RECAR, em Curitiba",
  width: 1600,
  height: 1200,
} as const;

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
      src: "/images/funilaria-02.webp",
      alt: "Porta desmontada de um carro branco ao lado da carroceria, em reparo de lataria",
      width: 1600,
      height: 1025,
    },
  },
  {
    title: "Pintura automotiva",
    description:
      "Repintura e acerto de cor, em pinturas comuns e especiais. Parceria com a Tropical Tintas há mais de vinte anos.",
    featured: true,
    image: {
      src: "/images/pintura-automotiva-02.webp",
      alt: "Carro prata com áreas mascaradas, preparado para pintura na oficina",
      width: 960,
      height: 720,
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

export const workPhotos: WorkPhoto[] = [
  {
    src: "/images/funilaria-01.webp",
    alt: "Porta dianteira branca com um amassado largo, em reparo de funilaria na RECAR",
    width: 1600,
    height: 1600,
  },
  {
    src: "/images/pintura-automotiva-02.webp",
    alt: "Carro prata com papel de proteção nas áreas que não serão pintadas",
    width: 960,
    height: 720,
  },
  {
    src: "/images/funilaria-02.webp",
    alt: "Carro branco com a porta removida, expondo a estrutura para funilaria",
    width: 1600,
    height: 1025,
  },
  {
    src: "/images/restauracao-01.webp",
    alt: "Porta de Fusca azul com ferrugem, durante restauração na oficina",
    width: 900,
    height: 900,
  },
  {
    src: "/images/funilaria-03.webp",
    alt: "Traseira de hatch branco com a tampa aberta, em serviço de funilaria",
    width: 1280,
    height: 1122,
  },
  {
    src: "/images/pintura-automotiva-03.webp",
    alt: "Carro preto com a lateral protegida por papel para pintura da lataria",
    width: 960,
    height: 720,
  },
  {
    src: "/images/funilaria-06.webp",
    alt: "Lateral traseira de carro branco com a porta removida para reparo",
    width: 1280,
    height: 853,
  },
  {
    src: "/images/restauracao-02.webp",
    alt: "Interior de Fusca com a porta aberta, em processo de restauração",
    width: 800,
    height: 600,
  },
  {
    src: "/images/funilaria-04.webp",
    alt: "Porta de carro branco com amassado, vista de perto na oficina",
    width: 750,
    height: 1000,
  },
  {
    src: "/images/pintura-automotiva-01.webp",
    alt: "Carro vermelho sobre o elevador da oficina, em serviço de pintura e funilaria",
    width: 960,
    height: 717,
  },
  {
    src: "/images/funilaria-07.webp",
    alt: "Frente de carro branco com o para-choque removido, em reparo de lataria",
    width: 800,
    height: 600,
  },
  {
    src: "/images/restauracao-03.webp",
    alt: "Fusca azul visto de lado, em trabalho de restauração",
    width: 750,
    height: 1000,
  },
  {
    src: "/images/funilaria-05.webp",
    alt: "Porta de carro branco com dano na lataria, fotografada de perto",
    width: 720,
    height: 1280,
  },
  {
    src: "/images/funilaria-08.webp",
    alt: "Lateral traseira de carro azul com a porta desmontada para funilaria",
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

export const socialPhotos = [
  workPhotos[3],
  workPhotos[5],
  workPhotos[0],
] as const;
