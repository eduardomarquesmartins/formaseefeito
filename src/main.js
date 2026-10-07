
const TRANSLATIONS = {
  'Centro de Terapia Intensiva Adulto (3º Andar)': 'Adult Intensive Care Unit (3rd Floor)',
  'Hospital Moinhos de Vento • CTI executado sem interromper a rotina assistencial': 'Moinhos de Vento Hospital • ICU executed without interrupting care routines',
  'Leitos de isolamento individuais, pressão controlada e filtragem de ar de alta eficiência para proteção total dos pacientes.': 'Individual isolation beds, controlled pressure and high efficiency air filtration for total patient protection.',
  'Saúde Crítica • Cuidado Máximo': 'Critical Healthcare • Maximum Care',

  'Rebaixamento de Sapatas Diretas — Bloco A': 'Direct Footing Lowering — Block A',
  'Hospital Divina Providência • Engenharia geotécnica e estrutural avançada': 'Divina Providência Hospital • Advanced geotechnical and structural engineering',
  'Reforço de fundações executado em subsolo confinado, garantindo a estabilidade da estrutura principal sem impactos na operação hospitalar.': 'Foundation reinforcement executed in a confined basement, ensuring stability of the main structure without impacting hospital operations.',
  'Fundação Profunda • Risco Zero': 'Deep Foundation • Zero Risk',

  'Arquitetura • Conforto': 'Architecture • Comfort',
  'Hospital Mãe de Deus • Retrofit em tempo recorde': 'Mãe de Deus Hospital • Retrofit in record time',
  'Arquitetura humanizada aliada a rigorosos padrões normativos, priorizando o bem-estar dos pacientes.': 'Humanized architecture combined with strict regulatory standards, prioritizing patient well-being.',
  'Unidade de Internação — Nível 4': 'Inpatient Unit — Level 4',

  'Abrir Projeto Completo': 'Open Full Project',
  'Fechar projeto': 'Close project',
  'Ficha Técnica': 'Technical Details',
  'Cliente': 'Client',
  'Local': 'Location',
  'Área': 'Area',
  'Foco Principal': 'Main Focus',
  'Desafio Superado': 'Overcome Challenge',
  'O que entregamos': 'What we delivered',

  'Nossos Telefones': 'Our Phones',
  'Horário de Atendimento': 'Business Hours',
  'Endereço Corporativo': 'Corporate Address',
  'Detalhes do Projeto': 'Project Details',
};

function t(text) {
  if (window.LANGUAGE === 'en' && TRANSLATIONS[text]) {
    return TRANSLATIONS[text];
  }
  return text;
}

import { PROJECTS, CATEGORIES } from './data/projectsData.js';
import { ENGINEERING_CHALLENGES } from './data/challengesData.js';
import { SERVICES } from './data/servicesData.js';
import { fetchInstagramFeed, INSTAGRAM_CONFIG } from './data/instagramData.js';

const HERO_PROJECTS = [
  {
    id: 'cti-hmv',
    shortName: 'CTI Adulto — HMV',
    title: t('Centro de Terapia Intensiva Adulto (3º Andar)'),
    client: 'Hospital Moinhos de Vento',
    location: 'Porto Alegre, RS',
    tag: t('Saúde Crítica • Cuidado Máximo'),
    image: '/images/obras/hmv-uti-adulto-01.jpg',
    stat: t('Hospital Moinhos de Vento • CTI executado sem interromper a rotina assistencial'),
    summary: t('Leitos de isolamento individuais, pressão controlada e filtragem de ar de alta eficiência para proteção total dos pacientes.')
  },
  {
    id: 'hdp-oitavo',
    shortName: '8º Andar — HDP',
    title: 'Construção do 8º Andar — Bloco Cirúrgico, CME & CTI',
    client: 'Hospital Divina Providência',
    location: 'Porto Alegre, RS',
    tag: 'Superestrutura • 1.822 m²',
    image: '/images/obras/hdp-oitavo-andar.jpg',
    stat: 'Hospital Divina Providência • 1.822 m² construídos sem fechar o hospital',
    summary: 'Construção de novo pavimento cobrindo 90% do hospital ativo, mantendo todas as cirurgias e pacientes em segurança absoluta.'
  },
  {
    id: 'acelerador-hmv',
    shortName: 'Radioterapia — HMV',
    title: 'Búnquer de Radioterapia & Acelerador Linear',
    client: 'Hospital Moinhos de Vento',
    location: 'Porto Alegre, RS',
    tag: 'Proteção Radiológica • CNEN',
    image: '/images/obras/hmv-acelerador-linear.jpg',
    stat: 'Hospital Moinhos de Vento • Blindagem pesada de concreto baritado',
    summary: 'Estrutura de alta precisão para tratamento oncológico com proteção radiológica rigorosa e conforto térmico para os pacientes.'
  },
  {
    id: 'bom-conselho',
    shortName: 'Bom Conselho',
    title: 'Retrofit Estrutural & Preservação Histórica',
    client: 'Colégio Bom Conselho',
    location: 'Porto Alegre, RS',
    tag: 'Patrimônio & História',
    image: '/images/obras/colegio-bom-conselho-fachada.jpg',
    stat: 'Colégio Bom Conselho • Fachada centenária preservada com novo andar',
    summary: 'Reconstrução estrutural moderna e ampliação de salas, respeitando a memória afetiva e a arquitetura original de 1900.'
  },
  {
    id: 'unique-hmv',
    shortName: 'Ala UNIQUE — HMV',
    title: 'Internação Hospitalar Premium UNIQUE',
    client: 'Hospital Moinhos de Vento',
    location: 'Porto Alegre, RS',
    tag: 'Hotelaria Hospitalar',
    image: '/images/obras/hmv-unique-internacao.jpg',
    stat: 'Hospital Moinhos de Vento • Ala de internação premium e humanizada',
    summary: 'Acabamentos nobres, conforto acústico e iluminação acolhedora para o bem-estar e recuperação dos pacientes.'
  },
  {
    id: 'hmd-becker',
    shortName: '8 Andares — Dom Becker',
    title: 'Ampliação Geral — Novo Bloco Hospitalar',
    client: 'Hospital Dom João Becker',
    location: 'Gravataí, RS',
    tag: 'Complexo de Saúde',
    image: '/images/obras/hmd-acesso-principal.jpg',
    stat: 'Hospital Dom João Becker • Novo prédio de 8 andares com emergência e cirurgias',
    summary: 'Prédio completo com emergência, hemodinâmica, centro cirúrgico e UTIs para atender a comunidade regional.'
  },
  {
    id: 'puc-onco',
    shortName: 'Oncologia — PUCRS',
    title: 'Centro de Quimioterapia & Infusão',
    client: 'Hospital São Lucas da PUCRS',
    location: 'Porto Alegre, RS',
    tag: 'Cuidado Oncológico',
    image: '/images/obras/puc-oncoclinicas-posto.jpg',
    stat: 'Hospital São Lucas da PUCRS • Unidade de quimioterapia e infusão humanizada',
    summary: 'Espaço ergonômico com visão 360° para a equipe de enfermagem e ambiente acolhedor para o tratamento dos pacientes.'
  },
  {
    id: 'raioson',
    shortName: 'Raio Som — Diagnóstico',
    title: 'Centro Clínico de Diagnóstico Avançado',
    client: 'Centro Clínico Raio Som',
    location: 'Gravataí, RS',
    tag: 'Diagnóstico & Imagem',
    image: '/images/obras/raioson-gravatai.jpg',
    stat: 'Centro Clínico Raio Som • Complexo com ressonância magnética e tomografia',
    summary: 'Construção especializada com salas blindadas para ressonância e raio-x, com acessibilidade e conforto integral.'
  }
];

const SPECIALTIES = [
  {
    id: 'centros-cirurgicos',
    title: 'Centros Cirúrgicos & Salas de Hemodinâmica',
    norm: 'ANVISA RDC 50 • CLASSE DE RISCO 4',
    scope: 'Fluxo Laminar & Proteção Antiestática',
    description: 'Projetos e reformas de salas cirúrgicas de alta complexidade com insuflamento de ar laminar estéril sobre o campo operatório, pisos condutivos dissipativos para aterramento de descargas eletrostáticas, portas automáticas herméticas e antecâmaras assépticas.',
    deliverables: ['Piso condutivo com medição ôhmica', 'Dutos de climatização com filtros HEPA H14', 'Painéis de comando cirúrgico integrados', 'Blindagem para radioscopia intervencionista'],
    image: '/images/obras/hmv-uti-corredor.jpg',
    reference: 'Hospital Moinhos de Vento'
  },
  {
    id: 'radioterapia',
    title: 'Búnqueres de Radioterapia & Oncologia',
    norm: 'CONFORMIDADE CNEN NN 3.01 / RDC 330',
    scope: 'Blindagem Radiológica Pesada',
    description: 'Cálculo volumétrico, compatibilização executiva e execução de búnqueres com paredes e labirintos em concreto baritado de altíssima densidade para aceleradores lineares, garantindo contenção absoluta de radiação ionizante.',
    deliverables: ['Cálculo de blindagem conforme CNEN', 'Paredes e lajes em concreto de alta densidade', 'Portas de chumbo maciço motorizadas', 'Farmácia de manipulação de quimioterápicos'],
    image: '/images/obras/hmv-acelerador-linear.jpg',
    reference: 'Hospital Moinhos de Vento'
  },
  {
    id: 'terapia-intensiva',
    title: 'CTIs, UTIs Adulto, Pediátrica & Neonatal',
    norm: 'ISO 14644-1 • CLASSES ISO 5 / ISO 7',
    scope: 'Isolamentos com Pressão Diferencial',
    description: 'Unidades de terapia intensiva individualizadas com controle rigoroso de pressão positiva (imunodeprimidos) e pressão negativa (isolamento de aerossóis), garantindo que agentes infecciosos não se propaguem pelo hospital.',
    deliverables: ['Antecâmaras com intertravamento de portas', 'Monitoramento digital de pressão e vazão de ar', 'Postos de enfermagem com linha de visão 100%', 'Gases medicinais em réguas cabeceiras ergonômicas'],
    image: '/images/obras/hmv-uti-adulto-01.jpg',
    reference: 'Hospital Moinhos de Vento'
  },
  {
    id: 'cme',
    title: 'Centrais de Material Esterilizado (CME)',
    norm: 'ANVISA RDC 15 / FLUXO UNIDIRECIONAL',
    scope: 'Barreira Asséptica Absoluta',
    description: 'Arquitetura com barreira física intransponível e fluxo unidirecional rígido: setor sujo (expurgo e lavagem ultrassônica), setor limpo (preparo e empacotamento) e setor estéril (autoclaves de dupla porta e arsenal cirúrgico).',
    deliverables: ['Zoneamento sem cruzamento de fluxos', 'Autoclaves com barreira física de vedação', 'Água desmineralizada e ar comprimido medicinal', 'Exaustão forçada de vapores e calor'],
    image: '/images/obras/hdp-oitavo-andar.jpg',
    reference: 'Hospital Divina Providência'
  },
  {
    id: 'instalacoes-criticas',
    title: 'Instalações Críticas & Redundância',
    norm: 'NBR 12188 • GASES MEDICINAIS & IT MÉDICO',
    scope: 'Continuidade Operacional Ininterrupta',
    description: 'Dimensionamento de centrais de oxigênio, ar comprimido medicinal, óxido nitroso e vácuo clínico, associados a sistemas elétricos com transformadores de isolamento (IT Médico) e grupos geradores de acionamento em milissegundos.',
    deliverables: ['Redes de gases em cobre fosforoso medicinal', 'Sistemas de alarme visual e sonoro de pressão', 'Quadros elétricos IT médico dedicados', 'No-breaks centrais para suporte vital'],
    image: '/images/obras/hmv-centro-cancer.jpg',
    reference: 'Hospital Moinhos de Vento'
  },
  {
    id: 'hospital-ativo',
    title: 'Obras em Hospitais Ativos (Impacto Zero)',
    norm: 'PROTOCOLO ASSISTENCIAL ZERO',
    scope: 'Contenção de Contaminação e Ruído',
    description: 'Metodologia exclusiva da Formas & Efeito para reformas sem interrupção de leitos ou cirurgias: barreiras estanques com exaustão por pressão negativa, bloqueio de vibrações, horários de transporte de entulho noturno e vistorias sanitárias diárias.',
    deliverables: ['Barreiras físicas de fechamento total', 'Pressão negativa com filtros HEPA para pó', 'Rotas de circulação de obra independentes', 'Horários negociados com a diretoria clínica'],
    image: '/images/obras/hdp-reforco-fundacao-01.jpg',
    reference: 'Hospital Divina Providência'
  }
];

function safeInit(name, fn) {
  try {
    fn();
  } catch (err) {
    console.error(`[Init Error] ${name}:`, err);
  }
}

function initApp() {
  safeInit('initHeader', initHeader);
  safeInit('initHeroBackgroundCarousel', initHeroBackgroundCarousel);
  safeInit('initHeroTetris', initHeroTetris);
  safeInit('initHospitalSpecialties', initHospitalSpecialties);
  safeInit('initEngineeringChallenges', initEngineeringChallenges);
  safeInit('initPortfolio', initPortfolio);
  safeInit('initInstagramFeed', initInstagramFeed);
  safeInit('initExpertiseAccordion', initExpertiseAccordion);
  safeInit('initContactForm', initContactForm);
  safeInit('initScrollEffects', initScrollEffects);
}

function initHeroBackgroundCarousel() {
  const slideGroups = ['hero-background-carousel']
    .map(id => document.getElementById(id))
    .filter(Boolean)
    .map(carousel => Array.from(carousel.querySelectorAll('.hero-background-slide, .header-background-slide')));
  if (!slideGroups.length || slideGroups.some(slides => slides.length < 2)) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobileViewport = window.matchMedia('(max-width: 639px)');
  let activeIndex = Math.max(0, slideGroups[0].findIndex(slide => slide.classList.contains('is-active')));
  let timer = null;
  let isChangingSlide = false;
  const unavailableSlides = new Set();

  const setActiveSlide = async nextIndex => {
    if (isChangingSlide) return;
    isChangingSlide = true;

    try {
      const slideCount = slideGroups[0].length;
      for (let offset = 0; offset < slideCount; offset++) {
        const candidateIndex = (nextIndex + offset) % slideCount;
        if (candidateIndex === activeIndex || unavailableSlides.has(candidateIndex)) continue;

        const candidateSlides = slideGroups.map(slides => slides[candidateIndex]);
        try {
          await Promise.all(candidateSlides.map(slide => slide.decode?.()));
        } catch {
          unavailableSlides.add(candidateIndex);
          continue;
        }

        if (candidateSlides.some(slide => !slide.naturalWidth)) {
          unavailableSlides.add(candidateIndex);
          continue;
        }

        slideGroups.forEach(slides => {
          slides.forEach((slide, index) => slide.classList.toggle('is-active', index === candidateIndex));
        });
        activeIndex = candidateIndex;
        return;
      }
    } finally {
      isChangingSlide = false;
    }
  };

  const stop = () => {
    if (timer !== null) {
      window.clearInterval(timer);
      timer = null;
    }
  };

  const start = () => {
    if (timer !== null || document.hidden || reducedMotion.matches) return;
    timer = window.setInterval(() => {
      setActiveSlide((activeIndex + 1) % slideGroups[0].length);
    }, mobileViewport.matches ? 5200 : 7600);
  };

  const syncPlayback = () => {
    if (document.hidden || reducedMotion.matches) stop();
    else start();
  };

  document.addEventListener('visibilitychange', syncPlayback);
  reducedMotion.addEventListener?.('change', syncPlayback);
  mobileViewport.addEventListener?.('change', () => {
    stop();
    start();
  });
  syncPlayback();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

function initHeader() {
  const header = document.getElementById('site-header');
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menuDrawer = document.getElementById('mobile-menu-drawer');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  let isScrolled = false;
  const onScroll = () => {
    const scrolled = window.scrollY > 10;
    if (scrolled !== isScrolled) {
      isScrolled = scrolled;
      if (isScrolled) {
        header.classList.add('shadow-md', 'bg-white/95');
        header.classList.remove('bg-[#faf7f2]/95');
      } else {
        header.classList.remove('shadow-md', 'bg-white/95');
        header.classList.add('bg-[#faf7f2]/95');
      }
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  let isOpen = false;
  const toggleMobileMenu = () => {
    isOpen = !isOpen;
    if (isOpen) {
      menuDrawer.classList.remove('opacity-0', 'pointer-events-none');
      menuDrawer.classList.add('opacity-100', 'pointer-events-auto');
      menuIconOpen.classList.add('hidden');
      menuIconClose.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      menuDrawer.classList.add('opacity-0', 'pointer-events-none');
      menuDrawer.classList.remove('opacity-100', 'pointer-events-auto');
      menuIconOpen.classList.remove('hidden');
      menuIconClose.classList.add('hidden');
      document.body.style.overflow = 'unset';
    }
  };

  if (menuBtn) menuBtn.addEventListener('click', toggleMobileMenu);
  const drawerCloseBtn = document.getElementById('mobile-drawer-close');
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', () => {
      if (isOpen) toggleMobileMenu();
    });
  }
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isOpen) toggleMobileMenu();
    });
  });
}

function initHeroTetris() {
  const canvas = document.getElementById('hero-tetris-canvas');
  const heroSection = document.getElementById('hero');
  if (!canvas || !heroSection) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const BRAND_ORANGE = '#ea580c';
  const BRAND_CORAL = '#f28e79';
  const STRUCT_DARK = '#141211';
  const STRUCT_MID = '#23201e';
  const STRUCT_STEEL = '#383330';
  const STRUCT_LIGHT = '#6b645f';
  const GLASS_BG = '#1e2633';
  const GLASS_LIT = '#fef3c7';
  const GLASS_AMBER = '#fed7aa';
  const GLASS_WARM = '#fde68a';
  const GRID_LINE = 'rgba(214, 211, 209, 0.4)';
  const BG_BUILDING_COLOR = 'rgba(224, 219, 211, 0.65)';

  let width = 0;
  let height = 0;
  let animId = null;
  let isVisible = true;
  let lastTime = performance.now();
  let time = 0;
  let mouseX = -1000;
  let mouseY = -1000;
  let targetMouseX = -1000;
  let targetMouseY = -1000;
  let pointerActive = false;

  let bgBuildings = [];
  let buildings = [];
  let crane = {
    x: 0,
    y: 0,
    anchorX: 0,
    roofWidth: 0,
    roofY: null,
    lateralOffset: 0,
    targetLateralOffset: 0,
    armAngle: 0.08,
    targetAngle: 0.08,
    cableLen: 38,
    targetCable: 38,
    trolleyX: 25,
    targetTrolleyX: 25,
    cargo: true,
    timer: 0
  };

  let scanLines = [];

  function setupBuildings() {
    buildings = [];
    bgBuildings = [];
    const isMobile = width < 640;
    const isTablet = width < 1024;
    const baseY = height - 1;

    const bgStartX = isMobile ? width * 0.32 : width * 0.46;
    const bgStep = isMobile ? 50 : 85;
    for (let i = 0; i < (isMobile ? 4 : 8); i++) {
      bgBuildings.push({
        x: bgStartX + i * bgStep,
        w: bgStep * 0.85,
        h: height * (0.28 + ((i * 3) % 5) * 0.06),
        spire: i % 2 === 1,
        spireH: 20 + (i % 3) * 10
      });
    }

    if (isMobile) {
      const bWidth = Math.min(width * 0.32, 95);
      const startX = width * 0.18;

      buildings.push({
        id: 0,
        x: startX,
        w: bWidth * 0.88,
        targetH: height * 0.42,
        currentH: height * 0.26,
        floors: 8,
        builtFloors: 5,
        style: 'modern',
        accent: BRAND_ORANGE,
        windows: createWindows(8, 3),
        state: 'building',
        timer: 0
      });

      buildings.push({
        id: 1,
        x: startX + bWidth * 0.78,
        w: bWidth * 1.05,
        targetH: height * 0.55,
        currentH: height * 0.38,
        floors: 11,
        builtFloors: 8,
        style: 'curtain',
        accent: BRAND_CORAL,
        hasCrane: true,
        hasAntenna: true,
        hasHelipad: true,
        windows: createWindows(11, 3),
        state: 'building',
        timer: 0
      });

      buildings.push({
        id: 2,
        x: startX + bWidth * 1.82,
        w: bWidth * 0.72,
        targetH: height * 0.4,
        currentH: height * 0.25,
        floors: 9,
        builtFloors: 6,
        style: 'louvers',
        accent: BRAND_ORANGE,
        windows: createWindows(9, 3),
        state: 'building',
        timer: 0
      });
    } else if (isTablet) {
      const bWidth = 115;
      const startX = Math.max(width * 0.52, width - (bWidth * 2.35));

      buildings.push({
        id: 0,
        x: startX,
        w: bWidth,
        targetH: height * 0.5,
        currentH: height * 0.35,
        floors: 10,
        builtFloors: 7,
        style: 'terraced',
        accent: BRAND_ORANGE,
        hasLobby: true,
        windows: createWindows(10, 4),
        state: 'building',
        timer: 0
      });

      buildings.push({
        id: 1,
        x: startX + bWidth + 24,
        w: bWidth * 1.25,
        targetH: height * 0.7,
        currentH: height * 0.52,
        floors: 15,
        builtFloors: 11,
        style: 'curtain',
        accent: BRAND_CORAL,
        hasCrane: true,
        hasAntenna: true,
        hasHelipad: true,
        hasLobby: true,
        windows: createWindows(15, 5),
        state: 'building',
        timer: 0
      });

      buildings.push({
        id: 2,
        x: startX + bWidth * 2.38 + 42,
        w: bWidth * 0.98,
        targetH: height * 0.54,
        currentH: height * 0.4,
        floors: 12,
        builtFloors: 9,
        style: 'louvers',
        accent: BRAND_ORANGE,
        hasAntenna: true,
        hasLobby: true,
        windows: createWindows(12, 4),
        state: 'building',
        timer: 0
      });
    } else {
      const startX = width * 0.51;
      const bWidth = Math.min((width * 0.46) / 4, 140);

      buildings.push({
        id: 0,
        x: startX,
        w: bWidth * 0.94,
        targetH: height * 0.48,
        currentH: height * 0.34,
        floors: 9,
        builtFloors: 7,
        style: 'brutalist',
        accent: BRAND_ORANGE,
        hasLobby: true,
        windows: createWindows(9, 4),
        state: 'building',
        timer: 0
      });

      buildings.push({
        id: 1,
        x: startX + bWidth + 18,
        w: bWidth * 1.18,
        targetH: height * 0.74,
        currentH: height * 0.54,
        floors: 16,
        builtFloors: 12,
        style: 'curtain',
        accent: BRAND_ORANGE,
        hasCrane: true,
        hasAntenna: true,
        hasHelipad: true,
        hasLobby: true,
        windows: createWindows(16, 5),
        state: 'building',
        timer: 0
      });

      buildings.push({
        id: 2,
        x: startX + bWidth * 2.28 + 28,
        w: bWidth * 1.08,
        targetH: height * 0.6,
        currentH: height * 0.46,
        floors: 13,
        builtFloors: 10,
        style: 'terraced',
        accent: BRAND_CORAL,
        hasAntenna: true,
        hasLobby: true,
        windows: createWindows(13, 4),
        state: 'building',
        timer: 0
      });

      buildings.push({
        id: 3,
        x: startX + bWidth * 3.46 + 40,
        w: bWidth * 0.9,
        targetH: height * 0.5,
        currentH: height * 0.36,
        floors: 11,
        builtFloors: 8,
        style: 'louvers',
        accent: BRAND_ORANGE,
        hasAntenna: true,
        hasLobby: true,
        windows: createWindows(11, 3),
        state: 'building',
        timer: 0
      });
    }
  }

  function createWindows(floors, cols) {
    const list = [];
    for (let f = 0; f < floors; f++) {
      const row = [];
      for (let c = 0; c < cols; c++) {
        const rand = Math.random();
        row.push({
          lit: rand < 0.72,
          color: rand < 0.4 ? GLASS_LIT : (rand < 0.8 ? GLASS_AMBER : GLASS_WARM),
          intensity: 0.65 + Math.random() * 0.35,
          twinkle: Math.random() * 8
        });
      }
      list.push(row);
    }
    return list;
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = heroSection.getBoundingClientRect();
    width = rect.width;
    height = rect.height;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    setupBuildings();
  }

  function triggerFloorBuild(b) {
    if (b.builtFloors < b.floors) {
      b.builtFloors++;
      const floorH = b.targetH / b.floors;
      const targetBuildingH = floorH * b.builtFloors;
      
      const baseY = height - 1;
      const topY = baseY - targetBuildingH;
      
      scanLines.push({
        x: b.x - 14,
        y: topY,
        w: b.w + 28,
        alpha: 1,
        color: b.accent
      });
    } else {
      b.builtFloors = Math.max(3, Math.floor(b.floors * 0.45));
    }
  }

  function update(dt) {
    time += dt;

    mouseX += (targetMouseX - mouseX) * 0.08;
    mouseY += (targetMouseY - mouseY) * 0.08;

    const isMobile = width < 640;
    crane.timer += dt;
    crane.targetLateralOffset = 0;
    crane.targetTrolleyX = (isMobile ? 18 : 25) + Math.sin(time * 0.7) * (isMobile ? 16 : 24);
    if (crane.timer > 3.8) {
      crane.timer = 0;
      crane.targetAngle = (Math.random() - 0.5) * 0.6;
      crane.targetCable = 22 + Math.random() * 48;
      crane.cargo = !crane.cargo;
    }

    crane.armAngle += (crane.targetAngle - crane.armAngle) * dt * 1.6;
    crane.cableLen += (crane.targetCable - crane.cableLen) * dt * 1.9;
    crane.trolleyX += (crane.targetTrolleyX - crane.trolleyX) * dt * 2.4;
    crane.lateralOffset += (crane.targetLateralOffset - crane.lateralOffset) * dt * 1.8;

    buildings.forEach((b, idx) => {
      b.timer += dt;
      if (b.timer > 2.6 + idx * 1.1) {
        b.timer = 0;
        triggerFloorBuild(b);
      }

      const targetH = (b.targetH / b.floors) * b.builtFloors;
      b.currentH += (targetH - b.currentH) * dt * 3.4;

      b.windows.forEach(row => {
        row.forEach(w => {
          w.twinkle += dt;
          if (w.twinkle > 5.5) {
            w.twinkle = 0;
            if (Math.random() < 0.18) {
              w.lit = !w.lit;
            }
          }
        });
      });
    });

    for (let i = scanLines.length - 1; i >= 0; i--) {
      const s = scanLines[i];
      s.alpha -= dt * 1.4;
      if (s.alpha <= 0) scanLines.splice(i, 1);
    }
  }

  function drawBackgroundSkyline(baseY) {
    ctx.save();
    ctx.fillStyle = BG_BUILDING_COLOR;

    bgBuildings.forEach(bg => {
      const y = baseY - bg.h;
      ctx.fillRect(bg.x, y, bg.w, bg.h);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 0.5;
      for (let gy = y + 16; gy < baseY; gy += 16) {
        ctx.beginPath();
        ctx.moveTo(bg.x + 4, gy);
        ctx.lineTo(bg.x + bg.w - 4, gy);
        ctx.stroke();
      }

      if (bg.spire) {
        ctx.strokeStyle = '#c5bfb4';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(bg.x + bg.w * 0.5, y);
        ctx.lineTo(bg.x + bg.w * 0.5, y - bg.spireH);
        ctx.stroke();
      }
    });

    ctx.restore();
  }

  function drawDraftingGrid(baseY) {
    ctx.save();
    ctx.strokeStyle = GRID_LINE;
    ctx.lineWidth = 0.75;
    ctx.setLineDash([3, 6]);

    const isMobile = width < 640;
    const gridStep = isMobile ? 36 : 46;
    const startGridX = isMobile ? width * 0.25 : width * 0.42;
    for (let x = startGridX; x < width; x += gridStep) {
      ctx.beginPath();
      ctx.moveTo(x, 30);
      ctx.lineTo(x, baseY + 12);
      ctx.stroke();
    }

    for (let y = height * 0.16; y < baseY; y += gridStep) {
      ctx.beginPath();
      ctx.moveTo(startGridX, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    ctx.setLineDash([]);
    ctx.restore();
  }

  function drawCrane(x, y) {
    crane.x = x;
    crane.y = y;
    ctx.save();
    ctx.translate(x, y);

    const isMobile = width < 640;
    const mastH = isMobile ? 48 : 65;
    const jibLen = isMobile ? 65 : 95;
    const counterJib = isMobile ? 24 : 35;
    const mastW = isMobile ? 7 : 9;

    ctx.fillStyle = STRUCT_DARK;
    ctx.fillRect(-mastW/2, -mastH, mastW, mastH);

    ctx.strokeStyle = BRAND_ORANGE;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(-mastW/2, 0);
    ctx.lineTo(-mastW/2, -mastH);
    ctx.moveTo(mastW/2, 0);
    ctx.lineTo(mastW/2, -mastH);
    ctx.stroke();

    ctx.lineWidth = 1;
    ctx.strokeStyle = STRUCT_STEEL;
    for (let my = 0; my < mastH; my += 8) {
      ctx.beginPath();
      ctx.moveTo(-mastW/2, -my);
      ctx.lineTo(mastW/2, -my - 8);
      ctx.moveTo(mastW/2, -my);
      ctx.lineTo(-mastW/2, -my - 8);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(-mastW/2, -my);
      ctx.lineTo(mastW/2, -my);
      ctx.stroke();
    }

    ctx.save();
    ctx.translate(0, -mastH);
    ctx.rotate(crane.armAngle);

    ctx.fillStyle = STRUCT_STEEL;
    ctx.beginPath();
    ctx.moveTo(0, -8);
    ctx.lineTo(6, 6);
    ctx.lineTo(-6, 6);
    ctx.fill();
    
    ctx.fillStyle = BRAND_ORANGE;
    ctx.beginPath();
    ctx.arc(0, 0, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = STRUCT_DARK;
    ctx.beginPath();
    ctx.arc(0, 0, 3, 0, Math.PI * 2);
    ctx.fill();
    
    const topBoomH = isMobile ? 16 : 22;
    ctx.strokeStyle = BRAND_ORANGE;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -topBoomH);
    ctx.stroke();
    
    ctx.strokeStyle = STRUCT_LIGHT;
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(0, -topBoomH);
    ctx.lineTo(jibLen * 0.7, -4);
    ctx.moveTo(0, -topBoomH);
    ctx.lineTo(-counterJib * 0.8, -4);
    ctx.stroke();

    const jibThickness = isMobile ? 5 : 6;
    ctx.fillStyle = STRUCT_DARK;
    ctx.fillRect(-counterJib, -jibThickness/2, counterJib + jibLen, jibThickness);
    
    ctx.strokeStyle = BRAND_ORANGE;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(-counterJib, -jibThickness/2);
    ctx.lineTo(jibLen, -jibThickness/2);
    ctx.moveTo(-counterJib, jibThickness/2);
    ctx.lineTo(jibLen, jibThickness/2);
    ctx.stroke();

    ctx.lineWidth = 0.8;
    ctx.strokeStyle = STRUCT_STEEL;
    for (let jx = -counterJib; jx < jibLen; jx += 9) {
      ctx.beginPath();
      ctx.moveTo(jx, -jibThickness/2);
      ctx.lineTo(jx + 4.5, jibThickness/2);
      ctx.lineTo(jx + 9, -jibThickness/2);
      ctx.stroke();
    }

    ctx.fillStyle = STRUCT_DARK;
    ctx.fillRect(-counterJib + 2, -10, 18, 14);
    
    ctx.fillStyle = STRUCT_STEEL;
    ctx.fillRect(-counterJib + 20, -7, 10, 11);

    const trolleyX = crane.trolleyX;
    
    ctx.fillStyle = STRUCT_DARK;
    ctx.fillRect(trolleyX - 5, jibThickness/2, 10, 6);
    ctx.fillStyle = BRAND_ORANGE;
    ctx.beginPath();
    ctx.arc(trolleyX - 3, jibThickness/2 + 3, 2, 0, Math.PI*2);
    ctx.arc(trolleyX + 3, jibThickness/2 + 3, 2, 0, Math.PI*2);
    ctx.fill();

    const swing = Math.sin(time * 1.2) * 0.08;
    
    ctx.save();
    ctx.translate(trolleyX, jibThickness/2 + 6);
    ctx.rotate(swing);

    ctx.strokeStyle = 'rgba(214, 211, 209, 0.85)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-1.5, 0);
    ctx.lineTo(-1.5, crane.cableLen);
    ctx.moveTo(1.5, 0);
    ctx.lineTo(1.5, crane.cableLen);
    ctx.stroke();
    
    ctx.fillStyle = BRAND_ORANGE;
    ctx.fillRect(-4, crane.cableLen - 2, 8, 4);

    if (crane.cargo) {
      ctx.fillStyle = STRUCT_STEEL;
      ctx.fillRect(-14, crane.cableLen + 2, 28, 6);
      
      ctx.strokeStyle = BRAND_ORANGE;
      ctx.lineWidth = 1;
      ctx.strokeRect(-14, crane.cableLen + 2, 28, 6);
      
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(-10, crane.cableLen + 2);
      ctx.lineTo(-4, crane.cableLen - 2);
      ctx.moveTo(10, crane.cableLen + 2);
      ctx.lineTo(4, crane.cableLen - 2);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(-10, crane.cableLen + 8);
      ctx.lineTo(10, crane.cableLen + 8);
      ctx.moveTo(-6, crane.cableLen + 2);
      ctx.lineTo(-6, crane.cableLen + 8);
      ctx.moveTo(6, crane.cableLen + 2);
      ctx.lineTo(6, crane.cableLen + 8);
      ctx.stroke();
    }

    ctx.restore(); 

    const pulse = (Math.sin(time * 6) + 1) / 2;
    ctx.fillStyle = BRAND_ORANGE;
    ctx.globalAlpha = 0.4 + 0.6 * pulse;
    
    ctx.beginPath();
    ctx.arc(jibLen, 0, 3.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(-counterJib, 0, 3, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(0, -topBoomH, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
    ctx.restore();
  }

  function drawBuilding(b, baseY) {
    const x = b.x;
    const h = b.currentH;
    const y = baseY - h;
    const w = b.w;
    const floorH = b.targetH / b.floors;

    ctx.save();

    const grad = ctx.createLinearGradient(x, y, x + w, y);
    grad.addColorStop(0, '#151312');
    grad.addColorStop(0.25, '#24211f');
    grad.addColorStop(0.75, '#211e1c');
    grad.addColorStop(1, '#131110');

    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 16;
    ctx.shadowOffsetY = 2;

    ctx.fillStyle = grad;
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(x, y, w, h, [5, 5, 0, 0]);
    } else {
      ctx.rect(x, y, w, h);
    }
    ctx.fill();
    ctx.restore();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
    ctx.lineWidth = 1.2;
    ctx.stroke();

    const maxVisibleFloor = Math.min(b.builtFloors, Math.floor(h / floorH) + 1);

    for (let f = 0; f < maxVisibleFloor; f++) {
      const fy = baseY - (f + 1) * floorH;
      if (fy < y - 4) continue;

      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.fillRect(x, fy + floorH - 2.5, w, 2.5);

      if (f === 0 && b.hasLobby) {
        ctx.fillStyle = 'rgba(254, 243, 199, 0.85)';
        ctx.fillRect(x + 10, fy + 4, w - 20, floorH - 6);

        ctx.strokeStyle = STRUCT_DARK;
        ctx.lineWidth = 1;
        ctx.strokeRect(x + 10, fy + 4, w - 20, floorH - 6);

        ctx.fillStyle = STRUCT_DARK;
        const colW = (w - 20) / 4;
        for (let ci = 1; ci < 4; ci++) {
          ctx.fillRect(x + 10 + ci * colW - 1.5, fy + 4, 3, floorH - 6);
        }
        continue;
      }

      const numCols = b.windows[f] ? b.windows[f].length : 3;
      const padX = 8;
      const winW = (w - padX * 2 - (numCols - 1) * 6) / numCols;
      const winH = floorH - 6;

      for (let c = 0; c < numCols; c++) {
        const wx = x + padX + c * (winW + 6);
        const wy = fy + 3;

        if (wy < y) continue;

        const winData = b.windows[f] ? b.windows[f][c] : { lit: true, color: GLASS_LIT, intensity: 1 };

        if (b.style === 'louvers') {
          ctx.fillStyle = winData && winData.lit ? winData.color : GLASS_BG;
          ctx.globalAlpha = winData && winData.lit ? 0.85 : 0.6;
          ctx.fillRect(wx, wy, winW, winH);

          ctx.strokeStyle = BRAND_ORANGE;
          ctx.lineWidth = 0.75;
          for (let ly = wy + 3; ly < wy + winH; ly += 4) {
            ctx.beginPath();
            ctx.moveTo(wx, ly);
            ctx.lineTo(wx + winW, ly);
            ctx.stroke();
          }
        } else if (winData && winData.lit) {
          ctx.fillStyle = winData.color;
          ctx.globalAlpha = winData.intensity || 0.85;
          ctx.fillRect(wx, wy, winW, winH);

          ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
          ctx.fillRect(wx, wy, winW * 0.4, winH * 0.35);

          ctx.strokeStyle = 'rgba(20, 18, 17, 0.65)';
          ctx.lineWidth = 0.6;
          ctx.strokeRect(wx, wy, winW, winH);
        } else {
          ctx.fillStyle = GLASS_BG;
          ctx.globalAlpha = 0.7;
          ctx.fillRect(wx, wy, winW, winH);

          ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.fillRect(wx + winW * 0.45, wy, winW * 0.55, winH);
        }
        ctx.globalAlpha = 1;
      }

      if (b.style === 'curtain') {
        ctx.strokeStyle = 'rgba(234, 88, 12, 0.35)';
        ctx.lineWidth = 0.6;
        for (let mx = x + 12; mx < x + w - 8; mx += 14) {
          ctx.beginPath();
          ctx.moveTo(mx, fy);
          ctx.lineTo(mx, fy + floorH);
          ctx.stroke();
        }
      }
    }

    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.clip();

    const sheenPos1 = (time * 0.16 + (b.id * 0.35)) % 2.2;
    const sheenX1 = x - w + sheenPos1 * w * 2.4;
    const sheenGrad1 = ctx.createLinearGradient(sheenX1, y, sheenX1 + 40, y + h);
    sheenGrad1.addColorStop(0, 'rgba(255, 255, 255, 0)');
    sheenGrad1.addColorStop(0.5, 'rgba(255, 255, 255, 0.09)');
    sheenGrad1.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = sheenGrad1;
    ctx.fillRect(x, y, w, h);

    const sheenPos2 = (time * 0.11 + (b.id * 0.6) + 1.1) % 2.5;
    const sheenX2 = x - w + sheenPos2 * w * 2.2;
    const sheenGrad2 = ctx.createLinearGradient(sheenX2, y, sheenX2 + 25, y + h);
    sheenGrad2.addColorStop(0, 'rgba(242, 142, 121, 0)');
    sheenGrad2.addColorStop(0.5, 'rgba(242, 142, 121, 0.06)');
    sheenGrad2.addColorStop(1, 'rgba(242, 142, 121, 0)');
    ctx.fillStyle = sheenGrad2;
    ctx.fillRect(x, y, w, h);

    ctx.restore();

    ctx.fillStyle = b.accent;
    ctx.fillRect(x, y, w, 4);

    if (b.hasHelipad && b.builtFloors >= b.floors) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.font = 'bold 9px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('[ H ]', x + w * 0.28, y - 4);
    }

    if (b.hasCrane) {
      crane.anchorX = x + w * 0.68;
      crane.roofWidth = w;
      crane.roofY = y;
    }

    const isHovered = mouseX >= x - 10 && mouseX <= x + w + 10;
    ctx.fillStyle = isHovered ? BRAND_ORANGE : 'rgba(120, 113, 108, 0.8)';
    ctx.font = isHovered ? 'bold 10px "JetBrains Mono", monospace' : '9px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`${Math.round((b.builtFloors / b.floors) * 100)}%`, x + w / 2, y - 6);

    if (isHovered) {
      ctx.strokeStyle = BRAND_ORANGE;
      ctx.lineWidth = 0.8;
      ctx.setLineDash([2, 2]);
      ctx.beginPath();
      ctx.moveTo(x - 12, y);
      ctx.lineTo(x - 12, baseY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = BRAND_ORANGE;
      ctx.font = '8px "JetBrains Mono", monospace';
      ctx.textAlign = 'right';
      ctx.fillText(`+${Math.round(h * 0.15)}m`, x - 16, y + h * 0.5);
    }

    ctx.restore();
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    const baseY = height - 1;

    drawBackgroundSkyline(baseY);
    drawDraftingGrid(baseY);

    ctx.strokeStyle = '#d6d3d1';
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(width * 0.32, baseY);
    ctx.lineTo(width, baseY);
    ctx.stroke();

    buildings.forEach(b => {
      drawBuilding(b, baseY);
    });

    if (crane.roofY !== null) {
      drawCrane(crane.anchorX + crane.lateralOffset, crane.roofY);
    }

    scanLines.forEach(s => {
      ctx.save();
      ctx.strokeStyle = s.color;
      ctx.lineWidth = 2.2;
      ctx.globalAlpha = s.alpha;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x + s.w, s.y);
      ctx.stroke();

      const scanGrad = ctx.createLinearGradient(s.x, s.y - 14, s.x, s.y + 14);
      scanGrad.addColorStop(0, 'rgba(234, 88, 12, 0)');
      scanGrad.addColorStop(0.5, 'rgba(234, 88, 12, 0.3)');
      scanGrad.addColorStop(1, 'rgba(234, 88, 12, 0)');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(s.x, s.y - 14, s.w, 28);
      ctx.restore();
    });

    if (mouseX > width * 0.4 && mouseY > 0 && mouseY < baseY) {
      ctx.save();
      ctx.strokeStyle = 'rgba(234, 88, 12, 0.45)';
      ctx.lineWidth = 0.8;
      ctx.setLineDash([3, 3]);

      ctx.beginPath();
      ctx.moveTo(mouseX, 0);
      ctx.lineTo(mouseX, baseY);
      ctx.moveTo(width * 0.4, mouseY);
      ctx.lineTo(width, mouseY);
      ctx.stroke();

      ctx.setLineDash([]);
      ctx.fillStyle = BRAND_ORANGE;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function loop(now) {
    if (!isVisible) {
      animId = requestAnimationFrame(loop);
      return;
    }

    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;

    update(dt);
    render();

    animId = requestAnimationFrame(loop);
  }

  window.addEventListener('resize', resize, { passive: true });

  heroSection.addEventListener('pointermove', (e) => {
    pointerActive = e.pointerType !== 'touch';
    const rect = heroSection.getBoundingClientRect();
    targetMouseX = e.clientX - rect.left;
    targetMouseY = e.clientY - rect.top;
  }, { passive: true });

  heroSection.addEventListener('pointerleave', () => {
    pointerActive = false;
    crane.timer = 3.8;
    targetMouseX = -1000;
    targetMouseY = -1000;
  });

  heroSection.addEventListener('pointerdown', (e) => {
    if (e.target.closest('a, button, input, textarea')) return;
    const rect = heroSection.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const clickedB = buildings.find(b => mx >= b.x - 14 && mx <= b.x + b.w + 14);
    if (clickedB) {
      triggerFloorBuild(clickedB);
    } else if (buildings.length > 0) {
      const randB = buildings[Math.floor(Math.random() * buildings.length)];
      triggerFloorBuild(randB);
    }
  });

  const observer = new IntersectionObserver((entries) => {
    isVisible = entries[0].isIntersecting;
  }, { threshold: 0.05 });
  observer.observe(heroSection);

  resize();
  animId = requestAnimationFrame(loop);
}

function initHospitalSpecialties() {
  const listContainer = document.getElementById('hospital-specialties-list');
  const imgEl = document.getElementById('hospital-dossier-img');
  const refEl = document.getElementById('hospital-dossier-ref');
  const normEl = document.getElementById('hospital-dossier-norm');
  const titleEl = document.getElementById('hospital-dossier-title');
  const descEl = document.getElementById('hospital-dossier-desc');
  const deliverablesEl = document.getElementById('hospital-dossier-deliverables');
  const footerRefEl = document.getElementById('hospital-footer-ref');

  if (!listContainer) return;

  const renderActive = (idx) => {
    const current = SPECIALTIES[idx];
    if (!current) return;
    if (imgEl && current.image) {
      imgEl.src = current.image;
      imgEl.alt = current.title;
    }
    if (refEl && current.reference) refEl.textContent = `Obra: ${current.reference}`;
    if (normEl && current.norm) normEl.textContent = current.norm;
    if (titleEl && current.title) titleEl.textContent = current.title;
    if (descEl && current.description) descEl.textContent = current.description;
    if (footerRefEl && current.reference) footerRefEl.textContent = current.reference;

    if (deliverablesEl && current.deliverables) {
      deliverablesEl.innerHTML = current.deliverables.map(d => `
        <div class="flex items-start gap-2.5 text-neutral-700 bg-neutral-50 p-2.5 rounded border border-neutral-100">
          <svg class="w-4 h-4 text-brand-orange shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-xs font-normal leading-relaxed">${d}</span>
        </div>
      `).join('');
    }

    listContainer.querySelectorAll('button').forEach((btn, i) => {
      const isSelected = i === idx;
      const scopeEl = btn.querySelector('.specialty-scope');
      const titleEl = btn.querySelector('.specialty-title');
      const arrowEl = btn.querySelector('.specialty-arrow');
      if (isSelected) {
        btn.className = 'w-full text-left p-4 rounded-lg border transition-all flex items-center justify-between group bg-neutral-900 text-white border-neutral-900 shadow-sm';
        if (scopeEl) scopeEl.className = 'specialty-scope text-xs mb-0.5 text-brand-orange font-medium';
        if (titleEl) titleEl.className = 'specialty-title text-sm font-semibold leading-snug text-white';
        if (arrowEl) arrowEl.className = 'specialty-arrow text-sm font-semibold text-brand-orange';
      } else {
        btn.className = 'w-full text-left p-4 rounded-lg border transition-all flex items-center justify-between group bg-white text-neutral-800 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50';
        if (scopeEl) scopeEl.className = 'specialty-scope text-xs mb-0.5 text-neutral-500 group-hover:text-neutral-700';
        if (titleEl) titleEl.className = 'specialty-title text-sm font-semibold leading-snug text-neutral-800 group-hover:text-black transition-colors';
        if (arrowEl) arrowEl.className = 'specialty-arrow text-sm font-semibold text-neutral-300 group-hover:text-neutral-600';
      }
    });
  };

  listContainer.innerHTML = '';
  SPECIALTIES.forEach((item, idx) => {
    const btn = document.createElement('button');
    btn.className = idx === 0
      ? 'w-full text-left p-4 rounded-lg border transition-all flex items-center justify-between group bg-neutral-900 text-white border-neutral-900 shadow-sm'
      : 'w-full text-left p-4 rounded-lg border transition-all flex items-center justify-between group bg-white text-neutral-800 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50';

    btn.innerHTML = `
      <div class="pr-3">
        <div class="specialty-scope text-xs mb-0.5 ${idx === 0 ? 'text-brand-orange font-medium' : 'text-neutral-500 group-hover:text-neutral-700'}">
          ${item.scope}
        </div>
        <div class="specialty-title text-sm font-semibold leading-snug ${idx === 0 ? 'text-white' : 'text-neutral-800 group-hover:text-black transition-colors'}">
          ${item.title}
        </div>
      </div>
      <span class="specialty-arrow text-sm font-semibold ${idx === 0 ? 'text-brand-orange' : 'text-neutral-300 group-hover:text-neutral-600'}">→</span>
    `;

    btn.addEventListener('click', () => renderActive(idx));
    listContainer.appendChild(btn);
  });

  renderActive(0);
}

function initEngineeringChallenges() {
  const tabsContainer = document.getElementById('challenges-tabs');
  const clientEl = document.getElementById('challenge-client');
  const locationEl = document.getElementById('challenge-location');
  const tagEl = document.getElementById('challenge-tag');
  const titleEl = document.getElementById('challenge-title');
  const summaryEl = document.getElementById('challenge-summary');
  const scopeEl = document.getElementById('challenge-scope');
  const solutionEl = document.getElementById('challenge-solution');
  const metricsEl = document.getElementById('challenge-metrics');
  const imgEl = document.getElementById('challenge-img');

  if (!tabsContainer) return;

  const renderChallenge = (idx) => {
    const current = ENGINEERING_CHALLENGES[idx];
    if (!current) return;
    if (clientEl && current.client) clientEl.textContent = current.client;
    if (locationEl && current.location) locationEl.textContent = current.location;
    if (tagEl && current.tag) tagEl.textContent = current.tag;
    if (titleEl && current.title) titleEl.textContent = current.title;
    if (summaryEl && current.summary) summaryEl.textContent = current.summary;
    if (solutionEl && current.technicalSolution) solutionEl.textContent = current.technicalSolution;
    if (imgEl && current.image) {
      imgEl.src = current.image;
      imgEl.alt = current.title;
    }

    if (scopeEl && current.scope) {
      scopeEl.innerHTML = current.scope.map(s => `
        <div class="flex items-start gap-2.5 text-xs text-neutral-700 bg-neutral-50 p-3 rounded border border-neutral-100">
          <svg class="w-4 h-4 text-brand-orange shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span class="font-normal text-xs leading-relaxed">${s}</span>
        </div>
      `).join('');
    }

    if (metricsEl && current.metrics) {
      metricsEl.innerHTML = Object.entries(current.metrics).map(([k, v]) => `
        <div class="p-3 bg-neutral-50 rounded border border-neutral-100">
          <div class="text-[10px] text-neutral-500 uppercase tracking-wider">${k}</div>
          <div class="text-sm font-semibold text-neutral-900 mt-1">${v}</div>
        </div>
      `).join('');
    }

    tabsContainer.querySelectorAll('button').forEach((btn, i) => {
      const isSelected = i === idx;
      const client = btn.querySelector('.case-client');
      const title = btn.querySelector('.case-title');
      const tag = btn.querySelector('.case-tag');
      const arrow = btn.querySelector('.case-arrow');

      if (isSelected) {
        btn.className = 'w-full text-left p-4 rounded-lg border transition-all flex items-start justify-between group bg-neutral-900 text-white border-neutral-900 shadow-sm';
        if (client) client.className = 'case-client text-xs text-brand-orange font-medium';
        if (title) title.className = 'case-title text-sm font-semibold leading-tight text-white';
        if (tag) tag.className = 'case-tag text-[11px] text-neutral-300';
        if (arrow) arrow.className = 'case-arrow text-base font-semibold mt-0.5 text-brand-orange';
      } else {
        btn.className = 'w-full text-left p-4 rounded-lg border transition-all flex items-start justify-between group bg-white text-neutral-800 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50';
        if (client) client.className = 'case-client text-xs text-neutral-500';
        if (title) title.className = 'case-title text-sm font-semibold leading-tight text-neutral-800';
        if (tag) tag.className = 'case-tag text-[11px] text-neutral-400';
        if (arrow) arrow.className = 'case-arrow text-base font-semibold mt-0.5 text-neutral-300 group-hover:text-neutral-700';
      }
    });
  };

  tabsContainer.innerHTML = '';
  ENGINEERING_CHALLENGES.forEach((item, idx) => {
    const btn = document.createElement('button');
    btn.className = idx === 0
      ? 'w-full text-left p-4 rounded-lg border transition-all flex items-start justify-between group bg-neutral-900 text-white border-neutral-900 shadow-sm'
      : 'w-full text-left p-4 rounded-lg border transition-all flex items-start justify-between group bg-white text-neutral-800 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50';

    btn.innerHTML = `
      <div class="space-y-1 pr-3">
        <div class="case-client text-xs ${idx === 0 ? 'text-brand-orange font-medium' : 'text-neutral-500'}">
          ${item.client.split('—')[0].trim()}
        </div>
        <div class="case-title text-sm font-semibold leading-tight ${idx === 0 ? 'text-white' : 'text-neutral-800'}">
          ${item.title}
        </div>
        <div class="case-tag text-[11px] ${idx === 0 ? 'text-neutral-300' : 'text-neutral-400'}">
          ${item.tag}
        </div>
      </div>
      <span class="case-arrow text-base font-semibold mt-0.5 ${idx === 0 ? 'text-brand-orange' : 'text-neutral-300 group-hover:text-neutral-700'}">→</span>
    `;

    btn.addEventListener('click', () => renderChallenge(idx));
    tabsContainer.appendChild(btn);
  });

  renderChallenge(0);
}

function initCuratedCards() {
  const cards = document.querySelectorAll('.curated-project-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.dataset.curatedId;
      const proj = PROJECTS.find(p => p.id === pid);
      if (proj) {
        openProjectModal(proj);
      }
    });
  });
}

function initPortfolio() {
  initModalListeners();

  const filtersContainer = document.getElementById('portfolio-filters');
  const gridContainer = document.getElementById('portfolio-grid');
  const showMoreBtn = document.getElementById('portfolio-show-more');
  const countHeaderEl = document.getElementById('portfolio-total-count');

  if (!gridContainer) {
    initCuratedCards();
    return;
  }

  let activeCategory = 'todos';
  let showAll = false;

  if (countHeaderEl) countHeaderEl.textContent = `${PROJECTS.length} Obras Catalogadas`;

  if (filtersContainer) {
    filtersContainer.innerHTML = '';
    CATEGORIES.forEach(cat => {
      const count = cat.id === 'todos' ? PROJECTS.length : PROJECTS.filter(p => p.category === cat.id).length;
      const btn = document.createElement('button');
      btn.dataset.category = cat.id;
      btn.className = `px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border text-xs transition-all flex items-center gap-2 cursor-pointer ${
        cat.id === 'todos'
          ? 'bg-neutral-900 text-white border-neutral-900 font-semibold shadow-sm'
          : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300 hover:text-black'
      }`;
      btn.innerHTML = `
        <span>${cat.label}</span>
        <span class="text-[10px] px-1.5 py-0.5 rounded-full ${cat.id === 'todos' ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-600'}">${count}</span>
      `;

      btn.addEventListener('click', () => {
        activeCategory = cat.id;
        showAll = false;
        filtersContainer.querySelectorAll('button').forEach(b => {
          const isAct = b.dataset.category === activeCategory;
          b.className = `px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border text-xs transition-all flex items-center gap-2 cursor-pointer ${
            isAct
              ? 'bg-neutral-900 text-white border-neutral-900 font-semibold shadow-sm'
              : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300 hover:text-black'
          }`;
          const badge = b.querySelector('span:last-child');
          if (badge) {
            badge.className = `text-[10px] px-1.5 py-0.5 rounded-full ${isAct ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-600'}`;
          }
        });

        renderProjects();
      });

      filtersContainer.appendChild(btn);
    });
  }

  const renderProjects = () => {
    const filtered = activeCategory === 'todos'
      ? PROJECTS
      : PROJECTS.filter(p => p.category === activeCategory);

    const visible = showAll ? filtered : filtered.slice(0, 12);
    gridContainer.innerHTML = '';

    visible.forEach(project => {
      const card = document.createElement('div');
      card.dataset.curatedId = project.id;
      card.className = 'curated-project-card bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col justify-between';

      card.innerHTML = `
        <div>
          <div class="aspect-[16/10] overflow-hidden bg-neutral-100 relative">
            <img
              src="${project.image}"
              alt="${project.title}"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div class="p-5 sm:p-6 space-y-2">
            <span class="text-xs text-neutral-400 block font-medium uppercase tracking-wider truncate">${project.client}</span>
            <h3 class="font-medium text-base sm:text-lg text-neutral-900 group-hover:text-brand-orange transition-colors leading-snug line-clamp-2">
              ${project.title}
            </h3>
            <div class="text-xs sm:text-sm text-neutral-500 font-light flex items-center gap-2 sm:gap-3 pt-1 sm:pt-2">
              <span>${project.area || project.location}</span>
              <span>•</span>
              <span>${project.norm || 'Engenharia & Obras'}</span>
            </div>
          </div>
        </div>
        <div class="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-neutral-800 group-hover:text-brand-orange">
          <span>Ver detalhes</span>
          <span>→</span>
        </div>
      `;

      const img = card.querySelector('img');
      img.onerror = () => {
        img.src = '/images/obras/hmv-uti-adulto-01.jpg';
      };

      card.addEventListener('click', () => openProjectModal(project));
      gridContainer.appendChild(card);
    });

    if (showMoreBtn) {
      if (filtered.length > 12) {
        showMoreBtn.parentElement.classList.remove('hidden');
        showMoreBtn.innerHTML = showAll
          ? `<span>${window.LANGUAGE === 'en' ? 'Show fewer projects' : 'Mostrar menos obras'}</span>`
          : `<span>${window.LANGUAGE === 'en' ? `Show all ${filtered.length} projects` : `Mostrar todas as ${filtered.length} obras`}</span> <span class="text-brand-orange">→</span>`;
      } else {
        showMoreBtn.parentElement.classList.add('hidden');
      }
    }
  };

  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', () => {
      showAll = !showAll;
      renderProjects();
    });
  }

  renderProjects();
}

let activeModalProject = null;
function openProjectModal(project) {
  activeModalProject = project;
  const modal = document.getElementById('project-modal');
  const imgEl = document.getElementById('modal-img');
  const titleEl = document.getElementById('modal-title');
  const clientEl = document.getElementById('modal-client');
  const locationEl = document.getElementById('modal-location');
  const catEl = document.getElementById('modal-category');
  const challengeWrap = document.getElementById('modal-challenge-wrap');
  const challengeEl = document.getElementById('modal-challenge');
  const solutionWrap = document.getElementById('modal-solution-wrap');
  const solutionEl = document.getElementById('modal-solution');
  const linkEl = document.getElementById('modal-external-link');
  const headerCatEl = document.getElementById('modal-header-category');

  if (imgEl) {
    imgEl.src = project.image;
    imgEl.alt = project.title;
    imgEl.onerror = () => {
      imgEl.src = '/images/obras/hmv-uti-adulto-01.jpg';
    };
  }

  if (titleEl) titleEl.textContent = project.title;
  if (clientEl) clientEl.textContent = project.client;
  if (locationEl) locationEl.textContent = `Local: ${project.location} ${project.area ? `• Área: ${project.area}` : ''}`;
  if (catEl) catEl.textContent = project.categoryLabel;
  if (headerCatEl) headerCatEl.textContent = t('Detalhes do Projeto');

  if (challengeWrap && challengeEl) {
    if (project.challenge) {
      challengeWrap.classList.remove('hidden');
      challengeEl.textContent = project.challenge;
    } else {
      challengeWrap.classList.add('hidden');
    }
  }

  if (solutionWrap && solutionEl) {
    if (project.solution) {
      solutionWrap.classList.remove('hidden');
      solutionEl.textContent = project.solution;
    } else {
      solutionWrap.classList.add('hidden');
    }
  }

  if (linkEl) {
    if (project.externalUrl) {
      linkEl.href = project.externalUrl;
      linkEl.classList.remove('hidden');
    } else {
      linkEl.classList.add('hidden');
    }
  }

  if (modal) modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = 'unset';
  activeModalProject = null;
}

function initModalListeners() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const consultBtn = document.getElementById('modal-consult-btn');

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
  if (consultBtn) consultBtn.addEventListener('click', closeProjectModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activeModalProject) {
      closeProjectModal();
    }
  });
}

function initInstagramFeed() {
  const gridContainer = document.getElementById('instagram-feed-grid');
  if (!gridContainer) return;

  const modal = document.getElementById('instagram-lightbox-modal');
  const modalCloseBtn = document.getElementById('insta-modal-close-btn');
  const sliderTrack = document.getElementById('insta-slider-track');
  const prevBtn = document.getElementById('insta-slide-prev');
  const nextBtn = document.getElementById('insta-slide-next');
  const dotsContainer = document.getElementById('insta-slide-dots');
  const slideTitleEl = document.getElementById('insta-modal-slide-title');
  const captionEl = document.getElementById('insta-modal-caption');
  const dateEl = document.getElementById('insta-modal-date');
  const likesEl = document.getElementById('insta-modal-likes');
  const permalinkEl = document.getElementById('insta-modal-permalink');
  const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
  const safeMediaUrl = (value = '') => {
    try {
      const url = new URL(value, window.location.origin);
      return url.protocol === 'https:' || url.origin === window.location.origin ? url.href : '';
    } catch {
      return '';
    }
  };
  const safeInstagramPermalink = (value = '') => {
    try {
      const url = new URL(value);
      return url.protocol === 'https:' && /(^|\.)instagram\.com$/i.test(url.hostname)
        ? url.href
        : INSTAGRAM_CONFIG.profileUrl;
    } catch {
      return INSTAGRAM_CONFIG.profileUrl;
    }
  };

  if (gridContainer.children.length === 0) {
    gridContainer.innerHTML = Array.from({ length: INSTAGRAM_CONFIG.postsLimit }).map(() => `
      <div class="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-sm">
        <div class="aspect-square shimmer w-full"></div>
        <div class="p-5 space-y-3">
          <div class="h-3.5 bg-neutral-100 rounded w-1/3 shimmer"></div>
          <div class="h-3 bg-neutral-100 rounded w-full shimmer"></div>
          <div class="h-3 bg-neutral-100 rounded w-4/5 shimmer"></div>
        </div>
      </div>
    `).join('');
  }

  let activePost = null;
  let currentSlide = 0;
  let totalSlides = 0;

  const updateSlidePosition = () => {
    if (!sliderTrack) return;
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

    if (prevBtn) {
      prevBtn.style.opacity = currentSlide === 0 ? '0.25' : '1';
      prevBtn.style.pointerEvents = currentSlide === 0 ? 'none' : 'auto';
    }
    if (nextBtn) {
      nextBtn.style.opacity = currentSlide === totalSlides - 1 ? '0.25' : '1';
      nextBtn.style.pointerEvents = currentSlide === totalSlides - 1 ? 'none' : 'auto';
    }

    if (dotsContainer) {
      dotsContainer.querySelectorAll('.insta-dot').forEach((dot, idx) => {
        if (idx === currentSlide) {
          dot.className = 'insta-dot w-6 h-1.5 rounded-full bg-brand-orange transition-all cursor-pointer';
        } else {
          dot.className = 'insta-dot w-1.5 h-1.5 rounded-full bg-white/60 hover:bg-white transition-all cursor-pointer';
        }
      });
    }

    if (slideTitleEl && activePost && activePost.slides && activePost.slides[currentSlide]) {
      const cur = activePost.slides[currentSlide];
      if (cur.title) {
        slideTitleEl.textContent = `${currentSlide + 1}/${totalSlides} • ${cur.title}`;
        slideTitleEl.classList.remove('hidden');
      } else {
        slideTitleEl.classList.add('hidden');
      }
    }
  };

  const openModal = (post) => {
    activePost = post;
    currentSlide = 0;

    const slides = post.slides && post.slides.length > 0
      ? post.slides
      : [{ id: 'slide-single', media_url: post.media_url, media_type: post.media_type || 'IMAGE' }];

    totalSlides = slides.length;

    sliderTrack.innerHTML = slides.map((s, idx) => `
      <div class="w-full h-full shrink-0 flex items-center justify-center bg-[#f8f6f2] relative">
        ${s.media_type === 'VIDEO' ? `
          <video src="${escapeHtml(safeMediaUrl(s.media_url))}" controls playsinline preload="metadata" poster="${escapeHtml(safeMediaUrl(s.thumbnail_url || ''))}" class="w-full h-full object-contain">
            Seu navegador não suporta reprodução de vídeos.
          </video>
        ` : `
          <img src="${escapeHtml(safeMediaUrl(s.media_url))}" alt="${escapeHtml(post.caption ? post.caption.substring(0, 50) : `Slide ${idx + 1}`)}" class="w-full h-full object-contain select-none" />
        `}
      </div>
    `).join('');

    if (totalSlides > 1) {
      prevBtn.classList.remove('hidden');
      nextBtn.classList.remove('hidden');
      dotsContainer.classList.remove('hidden');
      dotsContainer.innerHTML = slides.map((_, idx) => `
        <button class="insta-dot ${idx === 0 ? 'w-6 h-1.5 rounded-full bg-brand-orange' : 'w-1.5 h-1.5 rounded-full bg-white/60'} transition-all cursor-pointer" data-index="${idx}" aria-label="Slide ${idx + 1}"></button>
      `).join('');

      dotsContainer.querySelectorAll('.insta-dot').forEach(d => {
        d.addEventListener('click', (e) => {
          e.stopPropagation();
          currentSlide = parseInt(d.dataset.index, 10);
          updateSlidePosition();
        });
      });
    } else {
      prevBtn.classList.add('hidden');
      nextBtn.classList.add('hidden');
      dotsContainer.classList.add('hidden');
      dotsContainer.innerHTML = '';
      if (slideTitleEl) slideTitleEl.classList.add('hidden');
    }

    if (captionEl) captionEl.textContent = post.caption || 'Acompanhe as obras da FORMAS & EFEITO no Instagram.';
    if (dateEl) {
      const d = post.timestamp ? new Date(post.timestamp) : new Date();
      dateEl.textContent = d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
    }
    if (likesEl) {
      const likes = Number(post.likes);
      likesEl.textContent = Number.isFinite(likes) && likes > 0 ? `❤️ ${likes} curtidas` : '';
      likesEl.classList.toggle('hidden', !Number.isFinite(likes) || likes <= 0);
    }
    if (permalinkEl) {
      permalinkEl.href = safeInstagramPermalink(post.permalink);
    }

    updateSlidePosition();

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    if (sliderTrack) {
      sliderTrack.querySelectorAll('video').forEach(v => v.pause());
      sliderTrack.innerHTML = '';
    }
    activePost = null;
  };

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentSlide > 0) {
        currentSlide--;
        updateSlidePosition();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlidePosition();
      }
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (modal.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft' && currentSlide > 0) {
      currentSlide--;
      updateSlidePosition();
    }
    if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
      currentSlide++;
      updateSlidePosition();
    }
  });

  fetchInstagramFeed().then(posts => {
    if (!posts || posts.length === 0) {
      const message = window.LANGUAGE === 'en'
        ? 'Instagram posts are unavailable right now. Visit the profile'
        : 'Não foi possível carregar as publicações agora. Acesse o perfil';
      gridContainer.innerHTML = `
        <div class="col-span-full p-8 text-center bg-white rounded-xl border border-neutral-200 text-neutral-500 text-xs">
          ${message} <a href="${INSTAGRAM_CONFIG.profileUrl}" target="_blank" rel="noopener noreferrer" class="text-brand-orange font-semibold hover:underline">@${INSTAGRAM_CONFIG.handle}</a>.
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = '';
    posts.forEach(post => {
      const card = document.createElement('article');
    card.className = 'insta-card group border border-neutral-200 hover:border-neutral-300 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer';

      const isAlbum = post.media_type === 'CAROUSEL_ALBUM' || post.post_format === 'CAROUSEL' || (post.slides && post.slides.length > 1);
      const isVideo = post.media_type === 'VIDEO' || post.post_format === 'REEL';
      const formattedDate = post.timestamp
        ? new Date(post.timestamp).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })
        : 'Recente';
      const thumbnailUrl = safeMediaUrl(post.thumbnail_url || post.media_url);
      const likes = Number(post.likes);

      if (!thumbnailUrl) return;

      card.innerHTML = `
        <div class="relative aspect-square overflow-hidden bg-neutral-100">
          <img
            src="${escapeHtml(thumbnailUrl)}"
            alt="${escapeHtml(post.caption ? post.caption.substring(0, 60) : 'Publicação Instagram')}"
            class="insta-card-img w-full h-full object-cover"
            loading="lazy"
          />

          <!-- Top Badges -->
          <div class="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] pointer-events-none">
            <span class="bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded-full text-white font-medium flex items-center gap-1.5 shadow-sm">
              <svg class="w-3.5 h-3.5 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>@${INSTAGRAM_CONFIG.handle}</span>
            </span>

            ${isAlbum ? `
              <span class="bg-black/75 backdrop-blur-sm px-2 py-1 rounded-full text-white font-medium flex items-center gap-1 shadow-sm">
                <svg class="w-3.5 h-3.5 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <rect x="7" y="7" width="10" height="10" rx="1" ry="1"/>
                </svg>
                <span>${post.slides && post.slides.length > 1 ? post.slides.length : 'Álbum'}</span>
              </span>
            ` : isVideo ? `
              <span class="bg-black/75 backdrop-blur-sm px-2 py-1 rounded-full text-white font-medium flex items-center gap-1 shadow-sm">
                <svg class="w-3.5 h-3.5 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                <span>Vídeo</span>
              </span>
            ` : ''}
          </div>

          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
            <span class="text-white text-xs font-semibold flex items-center gap-1.5">
              <span>Abrir publicação</span>
              <svg class="w-4 h-4 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
          </div>
        </div>

        <div class="p-5 flex flex-col justify-between flex-grow space-y-3">
          <div class="space-y-1.5">
            <div class="flex items-center justify-between text-[11px] text-neutral-400">
              <span>${formattedDate}</span>
              ${Number.isFinite(likes) && likes > 0 ? `<span class="text-neutral-500 font-medium">❤️ ${likes}</span>` : ''}
            </div>
            <p class="text-xs text-neutral-700 font-light leading-relaxed line-clamp-3">
              ${escapeHtml(post.caption || '')}
            </p>
          </div>

          <div class="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
            <span class="text-[11px] text-brand-orange font-medium">Ver detalhes</span>
            <span class="text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all">→</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openModal(post));
      gridContainer.appendChild(card);
    });
  });
}

function initExpertiseAccordion() {
  const container = document.getElementById('expertise-accordion');
  if (!container) return;

  let openIdx = 0;

  const render = () => {
    container.innerHTML = '';
    SERVICES.forEach((service, idx) => {
      const isOpen = openIdx === idx;
      const card = document.createElement('div');
      card.className = `border rounded-lg transition-all duration-200 overflow-hidden ${
        isOpen
          ? 'bg-white border-neutral-300 shadow-sm'
          : 'bg-white border-neutral-200 hover:border-neutral-300'
      }`;

      card.innerHTML = `
        <button
          type="button"
          class="w-full p-5 sm:p-6 text-left flex flex-col md:flex-row md:items-center justify-between gap-4 focus:outline-none"
          aria-expanded="${isOpen}"
        >
          <div class="flex items-start md:items-center gap-4">
            <div class="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0 mt-0.5 md:mt-0 font-semibold text-xs">
              0${idx + 1}
            </div>
            <div>
              <h3 class="font-display text-lg sm:text-xl font-medium text-neutral-900">
                ${service.title}
              </h3>
              <p class="text-xs sm:text-sm text-neutral-600 font-light mt-0.5 max-w-3xl">
                ${service.shortDesc}
              </p>
            </div>
          </div>

          <div class="flex items-center gap-3 self-end md:self-center text-xs text-neutral-500">
            <span class="hidden sm:inline font-medium">
              ${isOpen ? 'Recolher' : 'Ver Detalhes'}
            </span>
            <div class="w-7 h-7 rounded-full border border-neutral-200 flex items-center justify-center transition-colors ${
              isOpen ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-neutral-600'
            }">
              ${isOpen
                ? `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>`
                : `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`
              }
            </div>
          </div>
        </button>

        ${isOpen ? `
          <div class="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start border-t border-neutral-100">
            <div class="lg:col-span-6 space-y-4">
              <p class="text-sm text-neutral-700 font-light leading-relaxed">
                ${service.fullDesc}
              </p>
              <div class="pt-2">
                <span class="text-xs text-brand-orange font-semibold block mb-2">
                  Principais Referências e Clientes:
                </span>
                <div class="flex flex-wrap gap-2">
                  ${service.clients.map(c => `
                    <span class="px-3 py-1 bg-neutral-100 border border-neutral-200 rounded text-xs text-neutral-700 font-medium">
                      ${c}
                    </span>
                  `).join('')}
                </div>
              </div>
            </div>

            <div class="lg:col-span-6 bg-neutral-50 p-5 rounded border border-neutral-200 space-y-3">
              <span class="text-xs font-semibold text-neutral-900 block">
                Entregáveis &amp; Padrões Técnicos:
              </span>
              <ul class="space-y-2 text-xs text-neutral-700">
                ${service.deliverables.map(item => `
                  <li class="flex items-start gap-2.5">
                    <svg class="w-4 h-4 text-brand-orange shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span class="font-normal text-xs text-neutral-700">${item}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        ` : ''}
      `;

      card.querySelector('button').addEventListener('click', () => {
        openIdx = openIdx === idx ? -1 : idx;
        render();
      });

      container.appendChild(card);
    });
  };

  render();
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusBox = document.getElementById('contact-form-status');
  const errorBox = document.getElementById('contact-form-error');
  const errorText = document.getElementById('contact-error-text');
  const resetBtn = document.getElementById('contact-reset-btn');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.elements['name']?.value?.trim() || '';
    const email = form.elements['email']?.value?.trim() || '';
    const phone = form.elements['phone']?.value?.trim() || '';
    const projectTypeSelect = form.elements['projectType'];
    const demandType = projectTypeSelect ? (projectTypeSelect.options[projectTypeSelect.selectedIndex]?.text || projectTypeSelect.value) : '';
    const message = form.elements['message']?.value?.trim() || '';
    const lgpd = form.elements['lgpdConsent']?.checked;

    if (!name || !email || !phone || !message) {
      errorText.textContent = t('Por favor, preencha todos os campos obrigatórios (*).');
      errorBox.classList.remove('hidden');
      return;
    }

    if (!lgpd) {
      errorText.textContent = t('É necessário aceitar os termos da LGPD para envio dos dados.');
      errorBox.classList.remove('hidden');
      return;
    }

    errorBox.classList.add('hidden');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>${t('Enviando dados...')}</span>`;

    try {
      const response = await fetch('https://iqeohgbheumlepnnosdf.supabase.co/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          demandType,
          message,
          lgpdConsent: lgpd
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao processar o formulário.');
      }

      form.classList.add('hidden');
      statusBox.classList.remove('hidden');
      form.reset();
    } catch (err) {
      console.error('Erro no envio do formulário:', err);
      errorText.textContent = t('Não foi possível enviar a mensagem no momento. Por favor, tente novamente ou contate diretamente via WhatsApp ou telefone.');
      errorBox.classList.remove('hidden');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      statusBox.classList.add('hidden');
      form.classList.remove('hidden');
    });
  }
}

function initScrollEffects() {
  const toTopButtons = document.querySelectorAll('.scroll-to-top');
  toTopButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  const reveals = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && reveals.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    reveals.forEach(el => {
      el.classList.add('reveal-init');
      observer.observe(el);
    });
  }
}
