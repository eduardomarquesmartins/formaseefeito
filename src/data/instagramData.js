export const INSTAGRAM_CONFIG = {
  handle: 'formaseefeito',
  displayName: 'FORMAS & EFEITO Engenharia e Gerenciamento',
  profileUrl: 'https://www.instagram.com/formaseefeito/',
  avatarUrl: '/images/logo/logo-cropped.png',
  postsLimit: 6
};

export const INSTAGRAM_POSTS = [
  {
    id: 'DeKtztMvNim',
    caption: 'Neste Outubro Rosa, reforçamos a importância do autoexame, da mamografia e do acompanhamento médico regular. O diagnóstico precoce aumenta muito as chances de cura. Cuide de você e incentive quem você ama a fazer o mesmo. #OutubroRosa #CâncerDeMama #DiagnósticoPrecoce #Prevenção #FormasEEfeito',
    media_type: 'IMAGE',
    media_url: '/images/instagram/2026-10-06-outubro-rosa.webp',
    thumbnail_url: '/images/instagram/2026-10-06-outubro-rosa.webp',
    timestamp: '2026-10-06T12:00:00-03:00',
    permalink: 'https://www.instagram.com/p/DeKtztMvNim/',
    likes: 9,
    slides: []
  },
  {
    id: 'Dd7QfKYPR61',
    caption: 'Ao longo de mais de três décadas, acumulamos experiência técnica em diferentes tipos de obra, o que chamamos de know-how: o conhecimento prático que só se constrói com tempo e repertório. É essa bagagem que nos permite lidar com desafios específicos, como os do setor hospitalar, unindo tradição e atualização constante às novas exigências do mercado. #Autoridade #ExperiênciaTécnica #EngenhariaHospitalar #TradiçãoETecnologia #ConfiançaEmCadaObra',
    media_type: 'IMAGE',
    media_url: '/images/instagram/2026-09-30-experiencia.webp',
    thumbnail_url: '/images/instagram/2026-09-30-experiencia.webp',
    timestamp: '2026-09-30T12:00:00-03:00',
    permalink: 'https://www.instagram.com/p/Dd7QfKYPR61/',
    likes: 12,
    slides: []
  },
  {
    id: 'DdrzwLOPniL',
    caption: 'Atuamos na construção e no gerenciamento de projetos e obras, do planejamento à entrega. Temos atuação especializada no setor hospitalar, área que exige atenção redobrada a normas técnicas, segurança e prazos, e é justamente nesse tipo de obra que construímos boa parte da nossa experiência. #GerenciamentoDeObras #ConstruçãoHospitalar #ProjetosDeEngenharia #ObrasComQualidade #InfraestruturaHospitalar',
    media_type: 'IMAGE',
    media_url: '/images/instagram/2026-09-24-atuacao.webp',
    thumbnail_url: '/images/instagram/2026-09-24-atuacao.webp',
    timestamp: '2026-09-24T12:00:00-03:00',
    permalink: 'https://www.instagram.com/p/DdrzwLOPniL/',
    likes: 27,
    slides: []
  },
  {
    id: 'DdpPxtaPATN',
    caption: 'A Formas & Efeito atua no mercado de engenharia desde 1993, unindo tradição familiar e experiência técnica em cada projeto. Ao longo desses mais de 30 anos, construímos uma trajetória sólida, sempre acompanhando as transformações do setor sem perder nossa essência. #FormasEEfeito #Engenharia #EmpresaFamiliar #TrajetoriaSolida #ConstruçãoCivil',
    media_type: 'IMAGE',
    media_url: '/images/instagram/2026-09-23-historia.webp',
    thumbnail_url: '/images/instagram/2026-09-23-historia.webp',
    timestamp: '2026-09-23T12:00:00-03:00',
    permalink: 'https://www.instagram.com/p/DdpPxtaPATN/',
    likes: 19,
    slides: []
  },
  {
    id: 'DcJ5EipPLnw',
    post_format: 'REEL',
    caption: 'Reforma em uma Sala de exames de Mamografia. Obra rápida, organizada, segura e com cliente final satisfeito! Entre em contato conosco! Somos especialistas em Reformas/Obras hospitalares #reformahospitalar #saúde #mamografia #engenhariaclinica #hospitalmoinhosdevento',
    media_type: 'IMAGE',
    media_url: '/images/instagram/2026-08-17-mamografia.webp',
    thumbnail_url: '/images/instagram/2026-08-17-mamografia.webp',
    timestamp: '2026-08-17T12:00:00-03:00',
    permalink: 'https://www.instagram.com/reel/DcJ5EipPLnw/',
    likes: 27,
    slides: []
  },
  {
    id: 'DbnvG9UkR0z',
    caption: 'Entregamos mais uma obra referência: Segurança, conforto e tecnologia no novo Centro de Recuperação do Hospital Moinhos de Vento. 🏥✨\n\nA @formasefeito executou toda a reforma com as áreas adjacentes em pleno funcionamento, incluindo Bloco Cirúrgico e CTI 🚧, sem nenhum impacto no atendimento aos pacientes. Isso é engenharia hospitalar de verdade!\n\nUm espaço pensado para oferecer segurança, agilidade e conforto para pacientes e equipe, seguindo todas as normas e protocolos hospitalares.\n\nO que entregamos:\n🔹 Leitos individuais com esquadrias de alumínio e privacidade total\n🔹 Posto Assistencial central para suporte imediato\n🔹 Novos vestiários para equipe, com mais conforto e funcionalidade\n🔹 Sala de espera humanizada para familiares e acompanhantes.\n\nNa saúde, não dá pra parar!\nE na Formas e Efeito, a gente reforma com excelência junto aos nossos Clientes!\n\nQuer reformar seu ambiente de saúde? Entre em contato conosco!\n\n#formaseefeito #hospitalmoinhosdevento #reformahospitalar #arquiteturahospitalar #engenhariaclinica',
    media_type: 'IMAGE',
    media_url: '/images/instagram/2026-08-04-centro-recuperacao.webp',
    thumbnail_url: '/images/instagram/2026-08-04-centro-recuperacao.webp',
    timestamp: '2026-08-04T12:00:00-03:00',
    permalink: 'https://www.instagram.com/p/DbnvG9UkR0z/',
    likes: 82,
    slides: []
  }
];

export async function fetchInstagramFeed() {
  return INSTAGRAM_POSTS.slice(0, INSTAGRAM_CONFIG.postsLimit);
}
