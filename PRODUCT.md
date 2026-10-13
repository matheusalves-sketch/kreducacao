# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS (Ashley template base, no framework, no build tooling). Multi-page site (home-1.html, services.html, team.html, blog.html, contact.html, portfolio-*.html, project-*.html, etc.).

## Users

Confirmed: the broad automotive-sector ecosystem, not one narrow persona — oficina owners (gestão, financeiro, liderança), dealership/concessionária managers (pós-venda, comercial, operações), and technicians/mechanics (diagnóstico, novas tecnologias, boas práticas). The product is designed to serve all three under one ecosystem rather than segment the site per audience.

## Product Purpose

Impulsionar a evolução do setor automotivo por meio do conhecimento e da mentalidade: desenvolver pessoas, ampliar visões, e transformar aprendizado em resultados. Slogan: "Conhecimento que gera performance." Frase-mãe: "A KR Educação existe para fortalecer profissionais, ampliar mentalidade e visão e transformar conhecimento em performance."

## Positioning

KR Educação is not a course library or a traditional school — it is an ecosystem formed by (1) a platform of education and development, (2) a permanent knowledge channel, and (3) a strong community, all specific to the automotive sector. Its differentiator versus generic business-education competitors (e.g. G4 Educação, which this project's Ashley template and earlier Next.js clone were adapted from) is sector specificity: content organized around three pillars — Gestão, Técnica, Performance — applied directly to oficinas, concessionárias, and automotive operations, not generic entrepreneurship. Karter is the creator brand that enables and powers the initiative, generating value for the market beyond the product itself.

## Operating Context

Learning happens both presencial (in-person trilhas/events) and online. Audience operates inside real automotive businesses (oficinas, redes de autopeças, concessionárias) — content must read as applicable on the shop floor and in day-to-day management, not abstract business theory. Mentors/specialists are presented as practitioners ("quem ensina, aplica"), not distant instructors.

## Capabilities and Constraints

- Three strategic pillars every piece of content must connect to: **Gestão** (visão de negócio, liderança, pessoas, processos, estratégia, vendas, produtividade), **Técnica** (atualização profissional, novas tecnologias, diagnóstico, boas práticas, aplicação prática na oficina), **Performance** (transformação de conhecimento em ação e resultado, mentalidade, evolução contínua).
- Site currently has trilhas/programas, mentores, comunidade, conteúdos (blog/podcast), and "KR Tools" (ferramentas/soluções validadas) as named product surfaces.
- No e-commerce/checkout flow implemented yet; CTAs are lead-style ("Quero fazer parte", "Conhecer as trilhas").
- Undecided: real pricing, enrollment flow, and whether presencial events (à la "G4Valley") have a KR equivalent — not yet confirmed, do not invent one.

## Brand Commitments

- Name: **KR Educação**, an initiative created and powered by **Karter** (always framed as enabling brand, never "Karter vai ensinar o mercado").
- Voice: professional, modern, didactic, motivational, focused on practical results.
- Approved vocabulary: "plataforma de educação e desenvolvimento", "canal permanente de conhecimento", "comunidade forte do setor automotivo", "conecta grandes nomes e profissionais", "conhecimento que gera performance"; supporting words: desenvolvimento, mentalidade, visão, capacitação, aplicação, evolução, conexão, ecossistema.
- Forbidden: never "Escola Karter" / "escola tradicional" / "curso da Karter" (the word "escola" undersells the project); never "apenas um site de cursos" or "biblioteca de aulas"; never "projeto de marketing"; never imply Karter unilaterally "ensina o mercado"; never promise guaranteed results or revenue increase (performance depends on each professional's own application).
- Visual hierarchy: **Azul** is the dominant/base color across backgrounds and major blocks (stability, credibility, professionalism) — Azul Principal 1 `#0047BC`, Azul Principal 2 `#1782FA`, Azul Base/Escuro `#0456B4`, Azul Vibrante `#218FFD`, Azul Claro `#80C0FE`. **Verde** is reserved exclusively for contrast/accent elements (CTAs, icons, arrows, highlight points) — never as a background or large block — Verde Escuro `#007A2F`, Verde Vibrante `#04B456`.
- Typography: Kallisto for headings/marking compositions; Forma for body/didactic text (not yet implemented in the Ashley template, which currently uses "Outfit").
- Visual anchor: three inclined bars ("///"), visible in the real KR logo, used to mark titles and guide the eye.
- Full guidelines: `Manual de Marca KR Educação v5.pdf` at `C:\Users\Marketing\OneDrive - KARTER\Imagens\Manual de Marca - KR\Manual de Marca KR Educação v5.pdf` (received, not yet fully read into this session — treat as the authoritative source when in doubt).

## Evidence on Hand

- Real vector logo: `C:\Users\Marketing\Downloads\Ativo 2.svg` ("KR" + three inclined bars, on-brand blues `#0048be` / `#1782fa` / `#80c0fe`) — not yet applied; the Ashley template currently uses a text-only "KR." placeholder logo.
- Real mentor/specialist photography: 11 photos of people in navy KR-branded uniforms (some with Brazil flag patch, name tags), available in `C:\Users\Marketing\OneDrive - KARTER\Imagens\Criativos\Criativo KR Educação\Carrosséis\#001 - Base\Arquivos usados\Elementos para criativos\` — not yet swapped into the mentors/team sections, which still use stock template faces.
- No real testimonials, case studies, addresses, CNPJ, or enrollment numbers exist yet. Current home-1.html and the earlier Next.js clone use clearly-labeled placeholder testimonials/mentors/stats (e.g. "50.000+ profissionais") — future work must not present these as real without the user supplying actual data.

## Product Principles

1. Azul dominates, verde is exclusive: every surface must keep blue as the structural/background color and green strictly for small accent/action elements — never the reverse.
2. Ecosystem framing over course-catalog framing: always speak as platform + channel + community, never as "just a course site."
3. Sector-specific application over generic business advice: every pillar (Gestão/Técnica/Performance) must read as automotive-shop-floor practical, not abstract entrepreneurship content.
4. Karter enables, KR delivers: Karter is credited as the creator/enabling brand, never positioned as directly "teaching the market."
5. No fabricated proof: never present placeholder numbers, names, or addresses as real; label them and prompt the user for real data before shipping.

## Accessibility & Inclusion

No formal standard confirmed by the user yet. This session already enforced WCAG AA contrast ad hoc while retheming the Ashley template (swapped Verde Vibrante for the darker Verde Escuro on text/icon/border uses, since the vibrant green failed 4.5:1 against white) — treat AA contrast as the working bar until told otherwise.
