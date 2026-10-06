export const SERVICES = [
  {
    id: 'arquitetura-hospitalar',
    code: 'SER-01',
    title: 'Arquitetura & Engenharia Hospitalar',
    shortDesc: 'Ambientes cirúrgicos, terapêuticos e de diagnóstico de altíssima complexidade sob conformidade RDC 50 ANVISA.',
    fullDesc: 'Mais de três décadas de experiência comprovada na concepção, adequação e execução de unidades assistenciais críticas. Projetamos e executamos blocos cirúrgicos, unidades de terapia intensiva (UTI adulto e neonatal), centros oncológicos com aceleradores lineares, salas de hemodinâmica, CME, farmácias de manipulação estéril e emergências hospitalares de alta rotatividade.',
    deliverables: [
      'Projetos executivos integrados com normas ANVISA RDC 50, RDC 307 e RDC 330',
      'Compatibilização de gases medicinais, elétrica estabilizada, no-break e climatização HVAC com pressão positiva/negativa e filtros HEPA',
      'Execução de blindagens radiológicas com barita ou chumbo homologadas pela CNEN',
      'Acabamentos bacteriostáticos, cantos arredondados e revestimentos vinílicos condutivos de alta assepsia'
    ],
    clients: ['Hospital Moinhos de Vento', 'Hospital São Lucas da PUCRS', 'Hospital Divina Providência', 'Hospital Banco de Olhos']
  },
  {
    id: 'empreitada-global',
    code: 'SER-02',
    title: 'Empreitada Global, Gerenciamento & Assessoria',
    shortDesc: 'Controle rigoroso de cronograma físico-financeiro, gestão de suprimentos e execução chave na mão (turnkey).',
    fullDesc: 'Assumimos a responsabilidade total da obra do planejamento preliminar à entrega de chaves com comissionamento e validação sanitária. Através do regime de empreitada global ou administração técnica, garantimos previsibilidade orçamentária, eliminamos perdas de materiais e mitigamos riscos contratuais.',
    deliverables: [
      'Gerenciamento físico-financeiro em tempo real com curvas de avanço e relatórios técnicos',
      'Fiscalização rigorosa de qualidade, segurança do trabalho (SST) e conformidades normativas',
      'Gestão qualificada de fornecedores especializados em infraestrutura de saúde e indústria',
      'Garantia de cumprimento de prazos contratuais mesmo em cronogramas acelerados'
    ],
    clients: ['Grupos Hospitalares', 'Redes de Ensino', 'Operadoras de Saúde', 'Investidores Privados']
  },
  {
    id: 'projetos-arquitetonicos',
    code: 'SER-03',
    title: 'Projetos Arquitetônicos & Compatibilização BIM',
    shortDesc: 'Estudos de viabilidade, layouts funcionais, fluxos de circulação e detalhamentos executivos de alto rigor.',
    fullDesc: 'Desenvolvemos soluções espaciais que aliam estética atemporal, funcionalidade operacional e inteligência construtiva. Nossos projetos traduzem o programa de necessidades do cliente em arquitetura perene, otimizando o metro quadrado útil e assegurando fluidez nos fluxos de pessoas, materiais e resíduos.',
    deliverables: [
      'Estudos preliminares, anteprojetos, maquetes 3D e renderizações hiper-realistas',
      'Projetos executivos completos com detalhamentos construtivos milimétricos',
      'Compatibilização multidisciplinar (Estrutura, Hidrossanitário, Elétrica, Climatização, Prevenção contra Incêndio PPCI)',
      'Aprovação técnica junto aos órgãos reguladores municipais, estaduais e sanitários'
    ],
    clients: ['Edifícios Comerciais', 'Clínicas Médicas', 'Complexos Multiuso', 'Residências Premium']
  },
  {
    id: 'retrofit-estrutural',
    code: 'SER-04',
    title: 'Retrofit, Ampliação & Restauro Estrutural',
    shortDesc: 'Intervenções de alta complexidade em edifícios históricos e prédios existentes em pleno funcionamento.',
    fullDesc: 'Especialistas em dar nova vida a edificações existentes através de reforço estrutural, demolições controladas, renovação de envelopes arquitetônicos e modernização de instalações técnicas, mantendo o patrimônio histórico ou garantindo que o edifício continue operando sem paralisação das atividades centrais.',
    deliverables: [
      'Projetos de reforço de sapatas, blocos, pilares e vigas com materiais poliméricos e microestacas',
      'Demolições internas com preservação e escoramento de envoltórias históricas tombadas',
      'Retrofit de fachadas com novos isolamentos térmicos e acústicos de alta eficiência',
      'Plano rigoroso de contingência de poeira, ruído e vibrações estruturais'
    ],
    clients: ['Colégio Bom Conselho', 'Hospital Divina Providência', 'Hospital Independência', 'Rede Marista']
  },
  {
    id: 'educacional-corporativo',
    code: 'SER-05',
    title: 'Edificações Educacionais, Comerciais & Esportivas',
    shortDesc: 'Ginásios poliesportivos, complexos de ensino, centros empresariais e hubs de atendimento.',
    fullDesc: 'Desenvolvimento e construção de espaços educativos e corporativos focados em ergonomia, durabilidade e experiência do usuário. Projetamos ginásios esportivos de grande vão livre, centros acadêmicos com salas inteligentes, hubs de saúde corporativos e edifícios comerciais preparados para novas tecnologias.',
    deliverables: [
      'Projetos de estruturas com grandes vãos (metálicas e concreto protendido)',
      'Acústica arquitetônica para salas de aula, auditórios e centros de conferências',
      'Eficiência energética com valorização de iluminação natural e ventilação cruzada',
      'Normas de acessibilidade integral (NBR 9050) e rotas de fuga contra pânico'
    ],
    clients: ['Colégio São José', 'Irmãos Maristas', 'Maxplaza Canoas', 'Empreendimentos Comerciais']
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Diagnóstico & Viabilidade Técnica',
    description: 'Análise aprofundada das diretrizes do cliente, levantamento topográfico e cadastral in loco, diagnóstico sanitário (RDC ANVISA) e estudo de viabilidade físico-financeira.',
    details: 'Mapeamento de interferências, verificação de cargas estruturais e diretrizes de biossegurança.'
  },
  {
    step: '02',
    title: 'Concepção Arquitetônica & Compatibilização',
    description: 'Desenvolvimento de layout com fluxos limpos/sujos setorizados, modelagem 3D, especificações de materiais de alto desempenho e compatibilização multidisciplinar completa.',
    details: 'Integração de elétrica estabilizada, HVAC hospitalar, gases e combate a incêndio (PPCI).'
  },
  {
    step: '03',
    title: 'Planejamento Físico-Financeiro & Gestão de Riscos',
    description: 'Elaboração de orçamento discriminado detalhado (composições SINAPI/mercado), cronograma executivo de barras e matriz de contenção para obras em ambientes ativos.',
    details: 'Plano de fases por módulos para zero impacto na rotina operacional do cliente.'
  },
  {
    step: '04',
    title: 'Execução Técnica & Engenharia de Campo',
    description: 'Mobilização de equipes técnicas especializadas, fiscalização de segurança e qualidade diária, isolamento asséptico rigoroso e acompanhamento de medições.',
    details: 'Relatórios fotográficos semanais e controle milimétrico de conformidade com os projetos.'
  },
  {
    step: '05',
    title: 'Comissionamento, Validação & Entrega Turnkey',
    description: 'Testes de estanqueidade e vazão de ar, validação de blindagens radiológicas, comissionamento de utilidades críticas, habite-se, aprovação sanitária e entrega de manuais.',
    details: 'Entrega final com memorial as-built e garantia técnica com suporte pós-obra.'
  }
];

export const PARTNERS_AND_CLIENTS = [
  { name: 'Hospital Moinhos de Vento', category: 'Saúde' },
  { name: 'Hospital São Lucas da PUCRS', category: 'Saúde' },
  { name: 'Hospital Divina Providência', category: 'Saúde' },
  { name: 'Hospital Dom João Becker', category: 'Saúde' },
  { name: 'Hospital Banco de Olhos', category: 'Saúde' },
  { name: 'Hospital Independência', category: 'Saúde' },
  { name: 'Oncoclínicas', category: 'Saúde' },
  { name: 'Rede Marista', category: 'Educação' },
  { name: 'Colégio Bom Conselho', category: 'Educação' },
  { name: 'Colégio São José', category: 'Educação' },
  { name: 'Congregação Santa Catarina', category: 'Institucional' },
  { name: 'Raio Som Diagnósticos', category: 'Saúde' }
];
