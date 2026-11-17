# Residencial ORA — Landing Page Premium

Landing page oficial de alta conversão desenvolvida para o **Residencial ORA**, empreendimento imobiliário da **Lottici Construtora e Incorporadora**, localizado na região Igara/São José em Canoas/RS.

> **Responsável pelo desenvolvimento:** [Growth2Digital](https://growth2digital.com.br)  
> **Referência oficial:** [https://lottici.com.br/empreendimentos-ora/](https://lottici.com.br/empreendimentos-ora/)

---

## 1. Stack Tecnológica

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Ícones:** Lucide React
- **Animações e Microinterações:** Framer Motion / Transições CSS nativas
- **Otimização de Imagens:** `next/image` (WebP / AVIF, layouts responsivos e prioritários para LCP)
- **SEO & Metadados:** Schema.org (`ApartmentComplex`), OpenGraph, Twitter Cards, Sitemap dinâmico e Robots.txt
- **Deploy:** 100% pronto e otimizado para a Vercel

---

## 2. Inventário Completo de Imagens e Ativos Visuais

Conforme diretriz do projeto, todos os 25 arquivos de renders e plantas foram inspecionados visualmente, mantendo seus nomes de referência originais mapeados para a estrutura otimizada em `public/images/`:

| Arquivo Original | Dimensões | Conteúdo Visual Identificado | Utilização no Projeto | Destino em `public/` |
|---|---|---|---|---|
| `imgi_11_21.png` | 1920 × 1080 | Pórtico de entrada principal com guarita, cancelas, palmeiras, paisagismo florido, totem com a marca ORA e torres ao fundo | Apresentação do Empreendimento (Seção 03) / Pórtico | `public/images/hero/portico-entrada.png` |
| `imgi_7_281.png` | 1920 × 1080 | Fachada externa contemporânea da Torre B com sacadas em todas as unidades, estacionamento arborizado com ipês roxos e céu azul | Hero Principal (Seção 02) / CTA Final (Seção 11) | `public/images/hero/fachada-torre-b.png` |
| `imgi_8_Ora-13.jpg` | 1920 × 1080 | Complexo aquático com piscinas adulto e infantil, deck com espreguiçadeiras e ombrelones | Infraestrutura e Lazer (Seção 05 — Piscinas) | `public/images/amenities/piscinas.jpg` |
| `imgi_10_251.png` | 1920 × 1080 | Espaço Gourmet entregue mobiliado com churrasqueira parrilla, forno elétrico, cooktop, refrigerador e mesa de jantar | Infraestrutura e Lazer (Seção 05 — Espaço Gourmet) | `public/images/amenities/espaco-gourmet.png` |
| `imgi_14_Ora-14.jpg` | 1920 × 1080 | Salão de Festas sofisticado com mesas redondas, arranjos florais amarelos, bancada de apoio e frase "Ora, o tempo a seu favor!" | Infraestrutura e Lazer (Seção 05 — Salão de Festas) | `public/images/amenities/salao-de-festas.jpg` |
| `imgi_15_341.png` | 1920 × 1080 | Espaço Fitness Funcional com piso emborrachado, espaldar de madeira, kettlebells, halteres, bola suíça e colchonetes | Infraestrutura e Lazer (Seção 05 — Espaço Fitness) | `public/images/amenities/espaco-fitness.png` |
| `imgi_13_261.png` | 1920 × 1080 | Sala de Jogos e Brinquedoteca com mesa de sinuca oficial, pebolim, lousa de pontuação e vista ampla para o condomínio | Infraestrutura e Lazer (Seção 05 — Sala de Jogos) | `public/images/amenities/jogos-e-brinquedoteca.png` |
| `imgi_9_Quadra-Esportiva.png` | 1920 × 1080 | Quadra esportiva infantil totalmente cercada, com traves de futebol, crianças brincando e vegetação ao redor | Infraestrutura e Lazer (Seção 05 — Quadra Esportiva) | `public/images/amenities/quadra-esportiva.png` |
| `imgi_12_Ora-15.jpg` | 1920 × 1080 | Playground ao ar livre com balanços de madeira, rampa de escalada com escorregador e área de areia sob árvores | Infraestrutura e Lazer (Seção 05 — Playground) | `public/images/amenities/playground.jpg` |
| `imgi_21_14.png` | 1920 × 1080 | Mapa oficial das 17 áreas de uso comum enumeradas (guarita, delivery, pet, salão, gourmet, coworking, fitness, piscinas, etc.) | Infraestrutura e Lazer (Seção 05 — Mapa Mestre) | `public/images/amenities/mapa-areas-comuns.png` |
| `imgi_28_13.png` | 1920 × 1080 | Mapeamento completo de vagas de estacionamento privativas por torre (A até G) e acessos | Diferenciais / Garagens | `public/images/amenities/mapa-estacionamento.png` |
| `imgi_17_Ora-09.jpg` | 1920 × 1080 | Living integrado decorado com estofado modular em linho claro, poltrona terracota, mesa de centro orgânica e cozinha americana | Experiência de Morar (Seção 06 — Living Principal) | `public/images/interiors/living-principal.jpg` |
| `imgi_19_Living-Estendido-ora.jpg` | 1698 × 955 | Living Estendido decorado com painel ripado iluminado por LED, parede em cimento queimado, adega e bancada americana | Experiência de Morar (Seção 06 — Living Estendido) | `public/images/interiors/living-estendido.jpg` |
| `imgi_16_Ora-10.jpg` | 1920 × 1080 | Dormitório do Casal com cama box, cabeceira curva em madeira, penteadeira com espelho orgânico e closet envidraçado | Experiência de Morar (Seção 06 — Suíte Master) | `public/images/interiors/dormitorio-master.jpg` |
| `imgi_18_181.png` | 1920 × 1080 | Dormitório 2 decorado como Home Office / Espaço de Estudos com bancada de madeira, estante com portas de vidro e piso chevron | Experiência de Morar (Seção 06 — Dormitório Office) | `public/images/interiors/dormitorio-office.png` |
| `imgi_27_05.png` | 1920 × 1080 | Planta humanizada do apartamento de 48,94 m² privativos (Final 03, 04, 05 e 06) com 2 dormitórios, sacada com churrasqueira | Plantas dos Apartamentos (Seção 07) | `public/images/floor-plans/planta-48m2.png` |
| `imgi_31_06.png` | 1920 × 1080 | Planta humanizada de 48,94 m² privativos na configuração exclusiva Living Estendido (living ampliado de 18,95 m² integrado) | Plantas dos Apartamentos (Seção 07) | `public/images/floor-plans/planta-48m2-living-estendido.png` |
| `imgi_22_08.png` | 1920 × 1080 | Planta humanizada do apartamento de 49,67 m² privativos (Final 02 e 08) com 2 dormitórios, sacada com churrasqueira | Plantas dos Apartamentos (Seção 07) | `public/images/floor-plans/planta-49m2.png` |
| `imgi_25_10.png` | 1920 × 1080 | Planta humanizada do apartamento de 60,86 m² privativos (Final 01 e 07) com 3 dormitórios, sacada com churrasqueira | Plantas dos Apartamentos (Seção 07) | `public/images/floor-plans/planta-60m2.png` |
| `imgi_29_11.png` | 1920 × 1080 | Planta humanizada de 60,86 m² privativos na configuração exclusiva Living Estendido (living ampliado de 20,11 m² + 2 quartos/office) | Plantas dos Apartamentos (Seção 07) | `public/images/floor-plans/planta-60m2-living-estendido.png` |
| `imgi_26_09.png` | 1920 × 1080 | Planta humanizada de apartamento Garden de 101,19 m² privativos totais com pátio privativo de 40 m² (Final 02 e 08) | Plantas dos Apartamentos (Seção 07) | `public/images/floor-plans/planta-garden-101m2.png` |
| `imgi_23_07.png` | 1920 × 1080 | Planta humanizada de apartamento Garden de 105,46 m² privativos totais com pátio privativo de 45 m² (Final 04 e 06) | Plantas dos Apartamentos (Seção 07) | `public/images/floor-plans/planta-garden-105m2.png` |
| `imgi_24_12.png` | 1920 × 1080 | Disposição e orientação das 8 unidades por andar no pavimento tipo da torre | Plantas dos Apartamentos (Seção 07) | `public/images/floor-plans/disposicao-unidades-torre.png` |
| `imgi_30_04.png` | 1920 × 1080 | Implantação da torre destacando as unidades térreas Garden (finais 02, 04, 06 e 08) e seus quintais privativos | Plantas dos Apartamentos (Seção 07) | `public/images/floor-plans/implantacao-unidades-garden.png` |
| `imgi_20_02.png` | 1920 × 1080 | Ficha técnica oficial do empreendimento com mapa das 7 torres, 9 andares, 8 aptos/andar e 497 unidades | Apresentação (Seção 03) | `public/images/about/ficha-tecnica-implantacao.png` |
| `Logo.svg` | Vetor SVG | Logotipo oficial institucional da Lottici Construtora e Incorporadora | Seção Construtora (Seção 09) e Rodapé | `public/images/branding/Logo.svg` |
| `Favicon.png` | 192 × 192 | Ícone triangular verde-limão da Lottici | Favicon do site | `public/favicon.png` |
| `Growth2DigitalBranco.png` | 2048 × 1040 | Logotipo oficial da Growth2Digital com tipografia branca para fundos escuros | Crédito obrigatório no Rodapé | `public/images/branding/Growth2DigitalBranco.png` |
| `logo-ora.png` | 1000 × 334 | Logotipo oficial do Residencial ORA (Emblema espiral dourado + tipografia metálica ORA + Condomínio Residencial) | Header (Navegação) e Rodapé | `public/images/branding/logo-ora.png` |
| `logo-ora-dark.png` | 1000 × 334 | Logotipo oficial do Residencial ORA adaptado para fundos claros | Identidade Visual ORA | `public/images/branding/logo-ora-dark.png` |
| `Growth2DigitalBranco.png` | 1866 × 497 | Logotipo oficial da Growth2Digital com tipografia branca para fundos escuros | Crédito obrigatório no Rodapé | `public/images/branding/Growth2DigitalBranco.png` |
| `Growth2DigitalPreto.png` | 2048 × 1040 | Logotipo oficial da Growth2Digital com tipografia escura | Ativo de identidade institucional | `public/images/branding/Growth2DigitalPreto.png` |
| `whatsapp_float.png` | 512 × 512 | Ícone oficial do WhatsApp em alta resolução | Botão flutuante de conversão | `public/images/branding/whatsapp_float.png` |

---

## 3. Identidade Visual e Cores

Baseada no `manual_identidade_visual_lottici_ora.pdf` e nas peças publicitárias do empreendimento:

- **Verde Principal:** `#073B32` (Sofisticação, natureza e segurança)
- **Verde Profundo:** `#082D29` / `#05241E` (Fundos escuros de alto contraste e elegância)
- **Dourado:** `#C9974A` / `#DFB772` (Acentos nobres, botões primários e detalhes arquitetônicos)
- **Areia / Linho:** `#F3EFE6` / `#FAF8F5` (Fundos claros, leitura confortável e respiro visual)
- **Sálvia:** `#99AD98` (Apoio botânico e harmonia com o paisagismo)
- **Tipografia:** Plus Jakarta Sans & Playfair Display

---

## 4. Estrutura de Seções Implementadas

1. **Header Fixo:** Logotipo ORA, menu por âncoras com scroll suave, efeito glassmorphism no scroll e botão de WhatsApp.
2. **Hero Principal:** Fachada imponente, headline editorial, badges de tipologia/metragem/localização e CTAs primário e secundário.
3. **Apresentação do Empreendimento:** Composição editorial em 2 colunas com o pórtico de acesso e faixa de 4 indicadores verificados.
4. **Diferenciais dos Apartamentos:** 11 diferenciais com ícones lineares elegantes e nota explicativa sobre os apartamentos Garden.
5. **Infraestrutura e Lazer:** Galeria de 12 comodidades com filtros por categoria, visualização em alta resolução e Lightbox interativo.
6. **Experiência de Morar:** Renders internos dos ambientes decorados (Living, Living Estendido, Quarto Master e Home Office).
7. **Plantas dos Apartamentos:** Seletor interativo com as metragens oficiais (48,94 m², 49,67 m², 60,86 m²), versões com Living Estendido, unidades Garden (101,19 m² e 105,46 m²) e medidas cômodo por cômodo.
8. **Localização Estratégica:** Endereço confirmado na Rua Pirapó, 1553 (bairro Igara/São José, Canoas/RS), mapa Google Maps interativo e link direto de navegação.
9. **Construtora Lottici:** Apresentação institucional com logotipo oficial, mais de 44 anos de tradição e link para o site da construtora.
10. **FAQ:** Perguntas frequentes em formato accordion expansível com respostas objetivas e confirmadas.
11. **CTA Final:** Chamada emocional de conversão com fundo cinematográfico e acesso rápido a consultores.
12. **Rodapé Completo:** Dados comerciais de contato, links, aviso legal e crédito obrigatório da Growth2Digital com logotipo e link em nova aba (`rel="noopener noreferrer"`).
13. **Botão Flutuante de WhatsApp:** Atendimento ágil com pulso animado e mensagem contextual pré-configurada.

---

## 5. Como Executar Localmente

```bash
# Instalar dependências (caso necessário)
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build otimizada de produção
npm run build

# Executar build de produção
npm run start
```

---

## 6. Créditos e Responsabilidade

- **Cliente / Empreendimento:** Residencial ORA — Lottici Construtora e Incorporadora
- **Desenvolvido por:** [Growth2Digital](https://growth2digital.com.br)

