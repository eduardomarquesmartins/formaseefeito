import re

with open('en.html', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    # Nav
    r'>\s*Sobre\s*<': '>About<',
    r'>\s*Nossas Obras\s*<': '>Our Work<',
    r'>\s*Parceiros\s*<': '>Partners<',
    r'>\s*Contato\s*<': '>Contact<',
    r'>\s*Portfólio\s*<': '>Portfolio<',
    r'>\s*Fale Conosco\s*<': '>Get in Touch<',
    r'>\s*Sobre a Empresa\s*<': '>About Us<',
    
    # Hero
    r'FUNDADA EM 1993': 'FOUNDED IN 1993',
    r'PROJETO &amp; EXECUÇÃO': 'DESIGN & EXECUTION',
    r'PROJETO \& EXECUÇÃO': 'DESIGN & EXECUTION',
    r'Arquitetura e engenharia de precisão para obras de alta complexidade.': 'Precision architecture and engineering for highly complex projects.',
    r'Mais de 30 anos integrando projeto e execução sob regime de empreitada global turnkey: rigor normativo, soluções estruturais avançadas e excelência técnica em ambientes operacionais críticos.': 'Over 30 years integrating design and execution under turnkey contracts: strict compliance, advanced structural solutions, and technical excellence in critical operational environments.',
    r'Conhecer Nossas Obras': 'View Our Work',
    r'Falar com Engenharia': 'Talk to Engineering',
    r'Baixar Portfólio Oficial \(PDF\)': 'Download Official Portfolio (PDF)',

    # Sections
    r'EXPERIÊNCIA COMPROVADA NA PRÁTICA': 'PROVEN EXPERIENCE IN PRACTICE',
    r'Obras Entregues com Rigor e Segurança.': 'Projects Delivered with Rigor and Safety.',
    r'Todas as Obras': 'All Projects',
    r'Hospitalar &amp; Saúde': 'Hospital & Healthcare',
    r'Educacional &amp; Institucional': 'Educational & Institutional',
    r'Engenharia &amp; Retrofit': 'Engineering & Retrofit',
    r'Baixar portfólio completo em PDF': 'Download complete PDF portfolio',
    r'Ver detalhes': 'View details',

    r'SOBRE A FORMAS &amp; EFEITO': 'ABOUT FORMAS & EFEITO',
    r'Engenharia de precisão para ambientes críticos.': 'Precision engineering for critical environments.',
    r'A Formas &amp; Efeito atua desde 1993': 'Formas & Efeito has been operating since 1993',
    r'Atendemos todo o Sul do Brasil': 'We serve the entire South of Brazil',
    r'Nossa metodologia "Turnkey"': 'Our "Turnkey" methodology',

    r'Parceiros de Engenharia e Projetos Complementares:': 'Engineering and Complementary Project Partners:',
    
    r'BASTIDORES DAS OBRAS': 'BEHIND THE SCENES',
    r'Acompanhe nosso Canteiro Digital': 'Follow our Digital Worksite',
    r'Acompanhe o dia a dia nos canteiros hospitalares': 'Follow the day-to-day at hospital worksites',
    r'Acompanhe no Instagram': 'Follow on Instagram',
    
    r'ESTAMOS À DISPOSIÇÃO': 'WE ARE AT YOUR DISPOSAL',
    r'Vamos discutir o seu próximo projeto técnico\?': 'Shall we discuss your next technical project?',
    r'Nossa equipe de engenheiros e arquitetos': 'Our team of engineers and architects',
    r'Horário de Atendimento': 'Business Hours',
    r'Seg - Sex, 08:00 - 18:00': 'Mon - Fri, 08:00 - 18:00',
    r'Nossos Telefones': 'Our Phones',
    r'Endereço Corporativo': 'Corporate Address',
    r'Porto Alegre, RS': 'Porto Alegre, RS - Brazil',

    r'Desenvolvido por': 'Developed by',
    r'Todos os direitos reservados': 'All rights reserved'
}

for pt, en in replacements.items():
    content = re.sub(pt, en, content)

with open('en.html', 'w', encoding='utf-8') as f:
    f.write(content)
