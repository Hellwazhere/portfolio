# Verificação da integração dos projectos

Data: 27/10/2026. Âmbito: portfolio local; sem commit, push ou deploy.

## Estado e arquitectura

Branch `main`, origin `https://github.com/tiagoapsantos/tiagoapsantos.github.io.git`, HEAD `2be900e6e160930b9625d3242691f8497a22814b`. Inicialmente existiam 12 ficheiros rastreados modificados e cinco novos, relativos ao trabalho anterior de estudos de caso. Foram preservados. Estado final: 18 rastreados modificados e nove novos, nenhum preparado para commit.

Foi reutilizada a colecção Markdown PT/EN, o componente CaseStudy, o layout, o índice e a galeria existentes. `translationKey` permite associar traduções com slugs diferentes. Não foram acrescentadas dependências ou código de aplicações ao portfolio.

## Evidências das aplicações

Foram lidos README, documentação de evidências/verificação, manifestos, módulos e testes relevantes, com inventário detalhado em [project-evidence-audit.md](project-evidence-audit.md).

| Aplicação independente | Resultado de `npm.cmd test` nesta tarefa | Ficheiros preservados por SHA-256 |
| --- | --- | --- |
| Forma & Grão | 12/12 | 27/27 |
| PRISMA | 19/19 | 32/32 |
| Pauta | 24/24 | 34/34 |
| Smart Clinic Assistant | Sem suite/comando de testes configurados; não executados | 27/27 |

Comparação antes/depois de 120 ficheiros, incluindo fontes, documentação, testes e saída dist existente; excluídos node_modules, .astro e .git. Nenhuma diferença. Não se fizeram builds das aplicações. Os previews usaram dist existente; módulos e recursos dos três projectos recentes foram comparados com as fontes. Os 55 testes acima pertencem às aplicações, não ao portfolio.

O Smart Clinic foi inspeccionado ao nível do formulário, painel, scripts, tipos e armazenamento. Foram corrigidas as afirmações anteriores sobre código inacessível e validação desconhecida. Não se repetiram interacções da aplicação nem validação clínica.

## Capturas reais

Recolhidas nos previews locais em 27/10/2026 e optimizadas como JPEG, sem gerar artificialmente interfaces:

| Ficheiro em public/images/projects | Dimensões | Conteúdo |
| --- | --- | --- |
| forma-grao-home.jpg | 1425 × 990 | Homepage e aviso de negócio fictício |
| prisma-dashboard.jpg | 1424 × 2207 | Dashboard, dados sintéticos, métricas e campanhas |
| pauta-editor.jpg | 1424 × 2113 | Editor com conteúdo fictício de QA |

As imagens incluem alt e legendas PT/EN; as interfaces capturadas são PT. As duas imagens Smart Clinic foram reutilizadas e comparadas byte a byte com os originais da aplicação. A sua origem não prova uma nova execução interactiva.

## Build e verificações do portfolio

- `npm.cmd run build`: aprovado, 16 páginas geradas.
- `node_modules/.bin/tsc.cmd --noEmit`: aprovado. O build compila os templates Astro; não existe um comando/suite de testes do portfolio nem foi instalado `astro check` para uma análise adicional dos templates.
- `git diff --check`: aprovado. Apenas avisos de conversão LF/CRLF do Git, sem erros de espaços.
- HTML gerado: títulos e descrições exclusivos nas 16 páginas; um h1 por página; hierarquia de títulos sem saltos; IDs únicos; alt em todas as imagens; canónicos na raiz de `https://tiagoapsantos.github.io/`.
- Links locais, recursos e âncoras inspeccionados em todo o HTML gerado: nenhum destino em falta.
- Quatro pares PT/EN confirmados, incluindo slugs distintos. Homepage e listagem em cada idioma ligam aos quatro estudos correctos.
- HTTP local na porta 4321: 16 rotas com 200; endereço de projecto inexistente com 404.
- Todos os recursos public comparados com dist: iguais.
- Contactos PT/EN, dois PDFs de CV, astro.config.mjs, package.json, package-lock.json e ficheiros .github comparados com HEAD: intactos. Domínio, base e remote mantidos.

## Rotas finais

As oito anteriores continuam disponíveis: `/`, `/about/`, `/contact/`, `/projects/`, `/en/`, `/en/about/`, `/en/contact/`, `/en/projects/`.

| Projecto | Português | Inglês |
| --- | --- | --- |
| Forma & Grão | /projects/site-de-apresentacao/ | /en/projects/business-website/ |
| PRISMA | /projects/painel-de-marketing/ | /en/projects/marketing-dashboard/ |
| Pauta | /projects/assistente-de-conteudo/ | /en/projects/content-assistant/ |
| Smart Clinic | /projects/smart-clinic-assistant/ | /en/projects/smart-clinic-assistant/ |

## Browser e acessibilidade: âmbito real

Homepage, listagem e oito estudos abertos no browser a 1280 e 390 píxeis: 24 combinações sem transbordo horizontal. Galerias dos oito estudos carregadas e com alt. Inspecção visual de cabeçalhos, texto e galerias; a imagem pode ser aberta em tamanho original. Confirmados por clique o CTA da homepage, o CTA da listagem, a troca de idioma e as âncoras de galeria. O tema claro e o escuro foram observados.

O primeiro Tab tornou visível o link para saltar ao conteúdo, com contorno de foco; Enter activou a âncora main. Os controlos preservam os estilos partilhados de foco. Nenhum aviso/erro registado na consola da tab durante a leitura realizada.

Foram amostradas cores efectivas de texto/cabeçalhos/descrições/tags/links: rácios de contraste entre 4,63:1 e 15,14:1 nos pares medidos dos dois temas. Isto não é uma auditoria exaustiva de todos os estados, cores ou elementos.

Não se repetiram todos os fluxos das aplicações independentes, testes com utilizadores, leitores de ecrã, dispositivos físicos, auditoria integral WCAG ou segurança. Os relatórios anteriores das aplicações são identificados como documentação histórica, não como ensaios desta tarefa.

## Conclusão para revisão

Três conceitos substituídos por estudos de aplicações funcionais PT/EN, com arquitectura, decisões, testes, limites e próximos passos. Smart Clinic corrigido com evidência de código. Homepage/listagem e auditoria actualizadas; design existente preservado.

Preparado para revisão editorial e visual local. Não foi verificado um deploy deste trabalho nem publicada qualquer aplicação. Uma publicação futura exige uma instrução específica após revisão.

## Revisão final antes da publicação — 27/10/2026

Esta secção regista a etapa seguinte à integração acima. Estado inicial desta revisão: `main`, mesmo origin e HEAD, 18 ficheiros rastreados modificados e nove novos, sem staging. O estado foi preservado; não houve commit, push ou deploy.

### Problemas concretos corrigidos

- **Média:** botão de tema fora do ecrã a 320 px. A navegação passa a distribuir os controlos por linhas até 360 px, sem esconder controlos ou alterar o conteúdo.
- **Média:** texto claro dos botões principais sobre o fundo coral com contraste insuficiente, sobretudo no tema escuro. Usados os tokens existentes accent-strong e paper para fundo/texto; foco também usa accent-strong. Botões secundários preservam as suas regras próprias.
- **Média:** a âncora de salto deslocava a página mas o main não recebia efectivamente foco no browser observado. `tabindex="-1"` no main permite focá-lo sem acrescentar uma paragem à sequência Tab.
- **Baixa:** links repetidos “Ver estudo de caso”/“Read case study” passam a ter nomes acessíveis com o título do projecto, preservando o texto visível.
- **Baixa:** ordem diferente dos projectos em PT/EN, causada pela ordem dos ficheiros. A consulta partilhada ordena por identidade de tradução: Smart Clinic, Forma & Grão, PRISMA e Pauta. A homepage mantém Smart Clinic em destaque.
- **Baixa/editorial:** removida a repetição de “Projecto pessoal”/“Personal project” nos índices dos cartões. Melhoradas expressões inglesas concretas; os testes das três aplicações passam a indicar a data da integração, sem confundir essa execução com esta revisão. “Sem APIs” no Pauta foi precisado para “sem integrações com APIs externas”, pois a aplicação utiliza APIs do próprio navegador.

### Exactidão e revisão PT/EN

Lidos homepage, listagem e quatro estudos nas duas línguas, com os componentes, layout e rotas. Reconfirmados no código acessível o armazenamento Smart Clinic e ausência de comando de testes, o download TXT sem envio do Forma & Grão, as fórmulas de metrics.js do PRISMA e a configuração/modelos do Pauta. Mantêm-se explícitos negócio/dados fictícios, limitações de armazenamento, ausência de integrações publicitárias e ausência de IA generativa. Nenhuma experiência de clientes, métrica comercial ou funcionalidade acrescentada.

Os 55 testes das aplicações são os resultados da integração anterior; não foram reexecutados nesta revisão final. Foram comparados os hashes dos 81 ficheiros fora de dist/node_modules/.astro/.git das quatro aplicações antes/depois: nenhuma alteração, adição ou remoção. Não se executou código dessas aplicações nesta etapa.

### Revisão visual e funcional executada

- 12 páginas (homepage, listagem e oito estudos) × 5 larguras: **320, 375, 768, 1024 e 1440 px**. 60 combinações, capturas do topo e da galeria/final; sem transbordo horizontal, controlos de cabeçalho fora do ecrã ou falhas nas imagens visíveis.
- Capturas inspeccionadas quanto a quebras de títulos, alinhamentos, espaçamento, botões, imagens e legendas. Após uniformizar a ordem dos cartões, repetidas as quatro páginas afectadas nas cinco larguras: mais 20 verificações dirigidas, sem problemas.
- Activados por clique os quatro estudos a partir da listagem e a alternância PT → EN → PT, incluindo slugs diferentes. As âncoras das galerias funcionam. O tema foi activado também por teclado a 320 px.
- Tab, Enter e Shift+Tab em seis páginas representativas PT/EN: link de salto visível, foco transferido para main e navegação sequencial com contorno nos links observados. Controlos do cabeçalho acessíveis por Tab; botão de tema activado com Espaço.
- Medidos pares efectivos de texto/fundo na homepage, listagem e estudo Pauta nos dois temas: 434 elementos com texto directo, sem falhas nos limiares de 4,5:1 para texto normal e 3:1 para texto grande. Menor rácio observado 4,13:1 em texto grande; tags/texto normal amostrados não abaixo de 4,63:1. Trata-se de uma amostra calculada de estados normais, não de uma auditoria integral de todos os estados WCAG.
- Consola da tab de revisão sem avisos/erros registados durante os ensaios.

### Verificações técnicas finais

- Build de produção novamente aprovado: **16 rotas**.
- `tsc.cmd --noEmit`: aprovado após a última alteração de código. O build compila Astro; não foi instalada uma ferramenta adicional de análise de templates.
- `git diff --check`: aprovado, apenas avisos informativos LF/CRLF.
- HTML das 16 páginas: idioma pt-PT/en, títulos e descrições exclusivos, canónicos correctos, um main e um h1, hierarquia sem saltos, IDs únicos e alt não vazio.
- **250 links locais** e **56 referências locais de recursos** validados, incluindo âncoras com acentos; nenhum destino em falta. Quatro pares PT/EN e ordem correspondente confirmados.
- As 16 rotas responderam com HTTP 200; projecto inexistente respondeu com 404. Os dois CVs servidos foram comparados byte a byte com os PDFs locais.
- Contactos PT/EN, CVs, domínio/base, manifestos/lock e workflow .github intactos face a HEAD. Recursos public/dist iguais. Markdown de conteúdo validado como UTF-8 sem BOM.

### Ficheiros alterados nesta revisão

- `src/styles/global.css`
- `src/layouts/BaseLayout.astro`
- `src/data/projects.ts`
- `src/pages/index.astro` e `src/pages/en/index.astro`
- `src/pages/projects/index.astro` e `src/pages/en/projects/index.astro`
- `src/content/projects/pt/site-de-apresentacao.md`
- `src/content/projects/pt/painel-de-marketing.md`
- `src/content/projects/pt/assistente-de-conteudo.md`
- `src/content/projects/en/business-website.md`
- `src/content/projects/en/marketing-dashboard.md`
- `src/content/projects/en/content-assistant.md`
- `src/content/projects/en/smart-clinic-assistant.md`
- `docs/portfolio-integration-verification.md` e `docs/project-evidence-audit.md` (registo desta revisão).

Não se alteraram os outros ficheiros locais já pendentes. Nenhum ficheiro foi apagado. Estado final: os mesmos **18 rastreados modificados e nove novos**, sem staging, HEAD e remote mantidos.

### Pendências e decisão

**Sem problemas críticos, altos ou médios conhecidos por resolver no âmbito revisto. Pronto para publicação**, mediante instrução explícita futura; nenhuma publicação efectuada.

Limitações não bloqueantes: não foram usados leitores de ecrã ou dispositivos físicos, outros motores de navegador, nem feita auditoria integral WCAG/segurança. A suite inexistente do Smart Clinic e os limites das demonstrações continuam documentados; não impedem apresentar honestamente os estudos. O deploy e o comportamento do site público actualizado terão de ser confirmados após publicação autorizada.
