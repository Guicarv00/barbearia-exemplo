import { Service, Testimonial, BentoItem } from './types';

export const SHOP_INFO = {
  name: 'Imperium Barber Club',
  rating: 4.9,
  reviewsCount: 450,
  instagram: 'https://www.instagram.com/imperium_barber_club_portfolio/',
  phone: '(11) 99999-9999',
  phoneRaw: '5511999999999',
  address: 'Av. Paulista, 1000 - Subsolo do Edifício Office Premium',
  neighborhood: 'Bela Vista, São Paulo - SP',
  zipCode: '01310-100',
  hours: 'Segunda a Sábado, das 09h às 21h',
  motto: 'Excelência, Estilo e Sofisticação!',
  parkingInfo: 'Estacionamento amplo e seguro no Edifício Office Premium (Praticidade e Conveniência!)',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Imperium+Barber+Club+Av.+Paulista+1000+Sao+Paulo',
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Imperium+Barber+Club+Av.+Paulista+1000+Sao+Paulo'
};

export const SERVICES_DATA: Service[] = [
  // Cabelo
  {
    id: 'c1',
    name: 'Corte Degradê Moderno',
    description: 'Corte ultrapreciso com transição perfeita na máquina e navalha, finalizado com pomada premium.',
    category: 'cabelo',
    price: 45.00,
    duration: 35,
    popular: true
  },
  {
    id: 'c2',
    name: 'Corte Social Clássico',
    description: 'Estilo tradicional na tesoura e máquina, desenhado minuciosamente para alinhar com sua fisionomia.',
    category: 'cabelo',
    price: 40.00,
    duration: 30
  },
  {
    id: 'c3',
    name: 'Corte na Máquina',
    description: 'Corte prático com um ou dois pentes, perfeito para quem busca agilidade e uniformidade.',
    category: 'cabelo',
    price: 30.00,
    duration: 20
  },
  // Barba
  {
    id: 'b1',
    name: 'Barboterapia Premium',
    description: 'Um verdadeiro ritual. Vapor de ozônio, toalha quente, massagem facial, óleos essenciais e navalha afiada.',
    category: 'barba',
    price: 40.00,
    duration: 40,
    popular: true
  },
  {
    id: 'b2',
    name: 'Apareamento & Desenho Simples',
    description: 'Ajuste de volume com máquina e acabamento das linhas da bochecha e pescoço com navalhete.',
    category: 'barba',
    price: 30.00,
    duration: 25
  },
  // Combos
  {
    id: 'combo1',
    name: 'Combo Imperium (Corte + Barba)',
    description: 'Nosso serviço mais solicitado. Alinhamento completo do cabelo e barba clássica com acabamento impecável.',
    category: 'combos',
    price: 75.00,
    duration: 60,
    popular: true
  },
  {
    id: 'combo2',
    name: 'Combo Imperial (Corte + Barboterapia + Sobrancelha)',
    description: 'Experiência suprema de autocuidado. Corte de cabelo, barboterapia de spa e sobrancelha desenhada na navalha.',
    category: 'combos',
    price: 95.00,
    duration: 85
  },
  // Especiais
  {
    id: 'e1',
    name: 'Sobrancelha Design',
    description: 'Limpeza e harmonização das sobrancelhas navalhadas com simetria perfeita.',
    category: 'especiais',
    price: 15.00,
    duration: 15
  },
  {
    id: 'e2',
    name: 'Pigmentação Capilar ou Barba',
    description: 'Camuflagem discreta de fios brancos e preenchimento de imperfeições com tinta especial antialérgica.',
    category: 'especiais',
    price: 25.00,
    duration: 25
  },
  {
    id: 'e3',
    name: 'Selagem Térmica / Alinhamento',
    description: 'Redução de volume e frizz do cabelo masculino através de hidratação profunda e calor controlado.',
    category: 'especiais',
    price: 60.00,
    duration: 45
  }
];

export const BENTO_ITEMS: BentoItem[] = [
  {
    id: 'google-score',
    title: 'Nota Máxima 4.9 no Google',
    subtitle: 'Nossa maior medalha',
    description: 'Mais de 450 avaliações reais e espontâneas de clientes satisfeitos garantem que aqui você não corre riscos. Qualidade e compromisso.',
    size: 'large',
    stat: '4.9 ★★★★★',
    iconName: 'google'
  },
  {
    id: 'subsolo-parking',
    title: 'Estacione sem preocupações',
    description: 'Localizados no subsolo do Edifício Office Premium. Vagas gratuitas, portaria, segurança total e facilidade de acesso enquanto realiza suas tarefas diárias.',
    size: 'medium',
    iconName: 'car'
  },
  {
    id: 'mestre-barbeiro',
    title: 'Cortes Precisos de Verdade',
    description: 'Do clássico degradê fade ao corte scissor militar, nossos barbeiros dominam a técnica milenar do visagismo masculino.',
    size: 'medium',
    iconName: 'scissors'
  },
  {
    id: 'faith-respect',
    title: 'Nossa Filosofia',
    subtitle: 'Excelência em cada detalhe!',
    description: 'Mantemos um ambiente fraterno, respeitoso e otimista para sua família. Um espaço tranquilo, bem-humorado e de muito profissionalismo.',
    size: 'tall',
    iconName: 'door'
  },
  {
    id: 'spa-comfort',
    title: 'Experiência & Toalha Quente',
    description: 'Beber uma água, desfrutar de ar condicionado moderno e descansar na cadeira com toalha quente e massagem no rosto.',
    size: 'small',
    iconName: 'coffee'
  },
  {
    id: 'convenient-hours',
    title: 'Segunda a Sábado, das 09h às 21h',
    description: 'Horários flexíveis que se ajustam à sua rotina corrida. Atendemos após o trabalho ou no horário de almoço.',
    size: 'small',
    iconName: 'clock'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    author: 'Carlos Eduardo',
    role: 'Cliente há 2 anos',
    rating: 5,
    content: 'O melhor corte de cabelo e atendimento da região! Espaço excelente, e a comodidade de parar o carro com segurança dentro do Edifício Office Premium é insuperável. Indico a todos.',
    source: 'Avaliação no Google',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 't2',
    author: 'Rodrigo Mendes',
    role: 'Vizinho de Pinheiros',
    rating: 5,
    content: 'Além da habilidade extraordinária com a lâmina de barbear na barboterapia, o clima da barbearia é fantástico. O lema de "Excelência, Estilo e Sofisticação" se reflete na honestidade, simpatia e capricho de toda a equipe.',
    source: 'Avaliação no Google',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 't3',
    author: 'Gustavo Antunes',
    role: 'Cliente recorrente',
    rating: 5,
    content: 'Faço barba e degrade toda semana com eles. É difícil achar profissionais tão dedicados que se atentam aos mínimos detalhes e à simetria. Sem contar a facilidade do estacionamento gratuito no Edifício Office Premium.',
    source: 'Avaliação no Google',
    avatarUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 't4',
    author: 'Lucas Pinheiro',
    role: 'Cliente Premium',
    rating: 5,
    content: 'Sem dúvida a melhor barbearia da Avenida Paulista. O preço é super justo pela qualidade altíssima do corte e o conforto das cadeiras.',
    source: 'Avaliação no Google',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120'
  }
];

export const FAQS_DATA = [
  {
    question: 'Onde exatamente a barbearia fica localizada?',
    answer: 'Estamos no subsolo do Edifício Office Premium, localizado na Av. Paulista, 1000 - Bela Vista, São Paulo - SP. É extremamente fácil de achar: basta descer ao subsolo pela rampa ou recepção principal.'
  },
  {
    question: 'O estacionamento é gratuito para clientes da barbearia?',
    answer: 'Sim! Você pode usufruir de todo o conforto, sombra e segurança do estacionamento coberto do Edifício Office Premium sem pagar nada durante o atendimento, ideal para dias de chuva ou sol.'
  },
  {
    question: 'Preciso agendar horário ou posso ser atendido por ordem de chegada?',
    answer: 'Atendemos tanto por agendamento prévio (altamente recomendado para garantir seu horário e evitar filas) quanto por encaixe na hora por ordem de chegada, dependendo da disponibilidade instantânea dos nossos barbeiros.'
  },
  {
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'Aceitamos Pix, cartões de crédito e débito das principais bandeiras e dinheiro em espécie.'
  },
  {
    question: 'Vocês atendem público infantil?',
    answer: 'Com certeza! Contamos com barbeiros extremamente pacientes e experientes para realizar cortes infantis, garantindo uma ótima experiência e conforto para os pequenos.'
  }
];
