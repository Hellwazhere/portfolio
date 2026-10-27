# Auditoria técnica e inventário de evidências dos projectos

Data: 27/10/2026. Revisão de integração posterior à auditoria inicial, na mesma data.

## Âmbito e evolução das conclusões

A auditoria inicial inspeccionou apenas o portfolio e classificou os três projectos como conceitos, sem código acessível nesse âmbito. Essa conclusão descrevia a evidência então disponível, não a inexistência de aplicações noutro local. Nesta revisão foram abertas as quatro pastas independentes abaixo. As conclusões actuais substituem as classificações anteriores.

Portfolio: `C:\Users\Tiago\portfolio`, branch `main`, origin `https://github.com/tiagoapsantos/tiagoapsantos.github.io.git`. HEAD inicial `2be900e6e160930b9625d3242691f8497a22814b`. O estudo Smart Clinic, componentes, rotas e este documento já tinham alterações locais não publicadas: 12 ficheiros rastreados modificados e cinco ficheiros novos (incluindo esta auditoria). Foram preservados e desenvolvidos no âmbito autorizado. Não houve commit, push, deploy ou alteração do remote.

As três aplicações recentes continuam independentes e sem links públicos inventados. Os testes foram executados sobre a implementação existente, sem builds nas aplicações ou instalação de dependências. Os previews serviram a saída já existente; nos três projectos recentes, módulos e recursos de navegador foram comparados byte a byte com as fontes actuais. As quatro pastas foram registadas por hash antes da tarefa para confirmar a preservação final.

## Categorias de evidência

- **Implementado e inspeccionado:** comportamento sustentado por código lido; não equivale a execução de todo o fluxo.
- **Testado:** verificação realmente executada, com âmbito indicado.
- **Documentado:** descrito em README/relatório sem repetição independente de todos os passos nesta tarefa.
- **Visualmente demonstrado:** visível numa captura real; não prova a interacção.
- **Planeado ou conceptual:** evolução proposta, não funcionalidade entregue.
- **Não verificável:** faltam acesso, recursos ou execução suficiente.

A documentação de uma aplicação e o seu estudo de caso não são provas independentes entre si. A revisão distingue testes das aplicações, verificações do portfolio e registos anteriores de browser.

## Resumo actual

| Projecto | Localização confirmada | Implementação inspeccionada | Testes executados nesta revisão | Apresentação |
| --- | --- | --- | --- | --- |
| Forma & Grão | `C:\Users\Tiago\business-website` | Website estático, validação, resumo e download local | 12/12 aprovados | Estudo PT/EN e captura actual |
| PRISMA | `C:\Users\Tiago\marketing-dashboard` | Modelo sintético, métricas, filtros, gráficos e CSV | 19/19 aprovados | Estudo PT/EN e captura actual |
| Pauta | `C:\Users\Tiago\content-assistant` | Modelos determinísticos, editor, biblioteca, persistência e backups | 24/24 aprovados | Estudo PT/EN e captura actual |
| Smart Clinic Assistant | `C:\Users\Tiago\smart-clinic-assistant` | Formulário, painel, tipos e armazenamento | Sem comando/suite configurados; não executados | Estudo PT/EN corrigido e duas capturas reutilizadas |

São aplicações pessoais/demonstrativas. Não comprovam clientes, resultados comerciais, validação clínica, integrações de publicidade ou IA generativa. O desenvolvimento com assistência de IA é documentado nas aplicações recentes; não deve ser confundido com uma capacidade de IA em execução no Pauta.

## Forma & Grão — Business Website

**Problema e âmbito:** apresentar um pequeno negócio e preparar um pedido com um percurso claro. A marca e os serviços de mobiliário/restauro/interiores são fictícios.

**Inventário relativo à pasta da aplicação:** `README.md`, `docs/verification.md`, `docs/evidence-for-portfolio.md`, `package.json`, `src/content.mjs`, `src/render.mjs`, `src/assets/validation.js`, `src/assets/main.js`, `src/assets/styles.css`, `src/assets/atelier.svg`, `scripts/build.mjs`, `scripts/serve.mjs`, `tests/validation.test.mjs`, `tests/site.test.mjs`.

**Implementado e inspeccionado:** quatro páginas e 404; catálogo; selecção de serviço por query string; validação de nome/email/serviço/mensagem; erros por campo e resumo focável; preview textual; download TXT; limpeza e invalidação após edição. O texto usa textContent. Node nativo gera HTML com componentes partilhados; zero dependências npm no manifesto. O SVG é ilustração original da própria aplicação, não uma imagem que substitua funcionalidades.

**Testado nesta revisão:** `npm.cmd test`, 12 testes aprovados: validação/limites, resumo, rotas, recursos, âncoras, estrutura de acessibilidade, métodos HTTP e isolamento da saída. O preview respondeu e a homepage actual foi capturada.

**Documentado anteriormente:** ensaios interactivos do formulário, download real, quatro larguras, teclado e consola. Não foram repetidos todos esses fluxos nesta integração.

**Limitações:** sem backend, envio de email, encomenda, orçamento ou persistência. O ficheiro local é a alternativa funcional ao envio. PT-PT apenas; sem validação com utilizadores/leitores de ecrã ou demonstração pública confirmada.

## PRISMA — Marketing Dashboard

**Problema e âmbito:** leitura coerente de indicadores e campanhas para análise demonstrativa de marketing, sem fontes ou resultados reais.

**Inventário relativo à aplicação:** `README.md`, `docs/verification.md`, `docs/evidence-for-portfolio.md`, `package.json`, `src/data.js`, `src/metrics.js`, `src/format.js`, `src/charts.js`, `src/view.js`, `src/csv.js`, `src/app.js`, `src/index.html`, `src/styles.css`, `tests/metrics.test.mjs`, `tests/view-csv.test.mjs`, `tests/server.test.mjs`.

**Implementado e inspeccionado:** sete campanhas, três canais e 210 observações determinísticas de Setembro de 2026. Investimento em cêntimos; oito indicadores; filtros de datas inclusivas/canal/campanha/estado; séries SVG com unidades e tabela diária alternativa; comparação/distribuição por canal; onze colunas ordenáveis; CSV filtrado e na ordem visível, com neutralização de fórmulas textuais. Dados, cálculo e apresentação estão separados, sem dependências npm.

**Cálculos confirmados e testados:** CTR = cliques/impressões × 100; CPC = investimento EUR/cliques; taxa de conversão = conversões/cliques × 100; custo por conversão = investimento EUR/conversões. As taxas usam totais agregados, não média de taxas. Denominador zero devolve null/“—”; observações com actividade zero distinguem-se de ausência de observações.

**Testado nesta revisão:** `npm.cmd test`, 19 testes aprovados: fórmulas, integridade, filtros, coerência entre cartões/séries/canais/tabela, ordenação, CSV e servidor. Preview e captura actual confirmados.

**Documentado anteriormente:** filtros e estados vazios no browser, CSV descarregado/lido, teclado, tabela móvel e responsividade. Não são novos ensaios completos nesta integração.

**Limitações:** sem publicidade real, atribuição universal, receita, ROAS, importação, edição, persistência ou tarefas. Estado de campanha fixo no conjunto, não histórico. Interface PT-PT; demo pública não confirmada.

## Pauta — Content Assistant

**Problema e âmbito:** estruturar um briefing, editar e organizar conteúdos por estado/data com trabalho local preservado. A assistência é por modelos, sem IA generativa.

**Inventário relativo à aplicação:** `README.md`, `docs/verification.md`, `docs/evidence-for-portfolio.md`, `package.json`, `src/config.js`, `src/validation.js`, `src/suggestions.js`, `src/contents.js`, `src/storage.js`, `src/export.js`, `src/ui.js`, `src/app.js`, `src/index.html`, `src/styles.css`, `tests/core.test.mjs`, `tests/storage.test.mjs`, `tests/server-ui.test.mjs`.

**Implementado e inspeccionado:** briefing; três títulos e blocos dependentes dos campos/canal/abordagem; tom como orientação; editor; biblioteca; pesquisa/filtros/ordenação; cópias e variantes manuais; estados; planeamento com strings de data local; cópia/TXT/CSV; backup JSON validado e importação merge/substituição; confirmação de remoção/substituição; metadados e limites. O fornecedor local tem contrato isolado, sem chamadas a modelos externos. Manifesto sem dependências npm.

**Persistência:** localStorage versionado para biblioteca, briefing e editor; cópia anterior; tratamento de quota/corrupção; protecção contra sobrescrita por outra janela. Não é seguro para dados sensíveis nem sincroniza dispositivos. Limites de 200 itens e backup 2 MB, sujeitos à quota real.

**Testado nesta revisão:** `npm.cmd test`, 24 testes aprovados: briefing, determinismo/influência dos campos, gestão/estados/datas, exportação, schema/referências de importação, recuperação/corrupção/quota/conflitos no adaptador em memória e HTTP/UI estrutural. Preview e captura real do editor com exemplos fictícios confirmados.

**Documentado anteriormente:** fluxo editorial completo no browser, persistência após actualizar, downloads reais, importação, confirmação de eliminação e restauração; cinco vistas entre 320 e 1280 píxeis. Não se atribui ao browser real a simulação de quota/corrupção feita apenas no adaptador.

**Limitações:** não gera linguagem com IA, não verifica a verdade do briefing, não publica nem envia notificações. Sem backend, calendário externo, tradução da interface ou colaboração. A preparação futura para IA é apenas arquitectura/documentação; nenhum fornecedor, chave ou serviço pago está configurado.

## Smart Clinic Assistant — revisão das afirmações anteriores

**Inventário relativo à aplicação:** `README.md`, `package.json`, `src/types/appointment.ts`, `src/data/demo-appointments.ts`, `src/lib/appointment-store.ts`, `src/scripts/booking.ts`, `src/scripts/admin.ts`, `src/components/AppointmentForm.astro`, `src/components/AppointmentStats.astro`, `src/pages/index.astro`, `src/pages/admin.astro`, `screenshots/smart-clinic-form.PNG`, `screenshots/smart-clinic-dashboard.PNG`.

**Implementado e inspeccionado agora:** Astro/TypeScript/CSS; criação de pedido com crypto.randomUUID e estado pending; validação HTML/email, limites e data mínima local; contadores; pesquisa por nome/email/telefone/serviço combinada com estado; detalhes em dialog; actualização; remoção e reposição confirmadas; persistência local e validação de estrutura/datas/horas/estados na leitura.

**Discrepâncias corrigidas no estudo PT/EN:** já não se afirma que o código está inacessível ou que a validação interna é desconhecida. O código existe fora do portfolio e foi lido. A validação e persistência são descritas como implementadas/inspeccionadas, sem promover essas afirmações a testes interactivos executados nesta tarefa.

**Limitação concreta:** uma lista JSON válida com schema inválido é substituída por exemplos; erros de leitura/parsing devolvem exemplos em memória. Não existe backup versionado ou recuperação de dados originais. Erros de gravação são comunicados, mas a vista pode continuar com alterações apenas em memória. Não há backend, autenticação, clínica real ou armazenamento seguro.

**Testes:** manifesto apenas com dev/build/preview e sem pasta/suite de testes encontrada. Não se executaram build, testes de interacção ou testes clínicos desta aplicação nesta revisão. Não se atribuem as 55 verificações automatizadas das outras aplicações ao Smart Clinic.

As duas capturas existentes do portfolio coincidem com os ficheiros de screenshots da aplicação; foram reutilizadas. Isso confirma a origem dos ficheiros, não uma nova execução interactiva ou correspondência de cada pixel a uma versão compilada agora.

## Capturas e integração no portfolio

Capturas novas de browser, com previews locais, em 27/10/2026:

- `public/images/projects/forma-grao-home.jpg`: homepage, marca/serviços fictícios e ilustração da aplicação.
- `public/images/projects/prisma-dashboard.jpg`: indicadores, filtros, séries, canais e campanhas sintéticas.
- `public/images/projects/pauta-editor.jpg`: editor com conteúdo fictício de QA, aviso de modelos e estado manual.

São capturas reais JPEG, optimizadas sem substituir elementos por imagens artificiais. As aplicações permanecem em português nas imagens; ambos os estudos explicam esse facto. Alt e legendas são traduzidos. As capturas Smart Clinic inicialmente reutilizadas foram entretanto substituídas por três capturas reais actuais: `public/images/projects/smart-clinic-form.jpg`, `public/images/projects/smart-clinic-dashboard.jpg` e `public/images/projects/smart-clinic-detail.jpg`. Ver `docs/smart-clinic-captures-verification.md` para a verificação desta actualização.

Arquitectura partilhada: `src/content.config.ts`, `src/data/projects.ts`, `src/components/CaseStudy.astro`, `src/styles/case-study.css`, `src/layouts/BaseLayout.astro`, `src/components/SiteHeader.astro` e rotas dinâmicas PT/EN. translationKey associa slugs diferentes sem duplicar páginas ou componente. A homepage/listagem mostram os nomes reais dos projectos, descrições actualizadas e CTA para cada estudo; não há botão com destino público inexistente.

## Validação do portfolio e limites

O registo final da integração está em `docs/portfolio-integration-verification.md`, separado dos testes das aplicações. Inclui build, TypeScript, links, imagens, canónicos, pares de idioma, CVs/contactos e revisão de browser.

Não foram repetidos testes completos de todos os dispositivos, leitores de ecrã, pesquisa com utilizadores, auditoria de segurança ou confirmação de URLs públicos das aplicações. Não há métricas de negócio ou experiência de clientes a inferir destes resultados. Os próximos passos são revisão editorial/visual e, só após autorização futura, eventual publicação; não criação automática de repositórios ou integrações.

## Revisão final pré-publicação — etapa seguinte, 27/10/2026

A revisão editorial, visual e funcional posterior à integração foi concluída e registada na secção final de `portfolio-integration-verification.md`. Corrigidos contraste dos botões, navegação a 320 px, transferência de foco para main, nomes acessíveis de links, ordem consistente PT/EN e pequenas imprecisões editoriais. Os resultados de 12/19/24 testes acima pertencem à integração anterior; não houve nova execução das suites nesta etapa.

Foram verificadas as 12 páginas principais em cinco larguras (320, 375, 768, 1024 e 1440 px), teclado, troca de idiomas, amostras de contraste nos dois temas e as 16 rotas compiladas. Build, TypeScript e verificação de espaços aprovados; links, recursos, contactos e CVs confirmados. Os 81 ficheiros das quatro aplicações fora de dist/node_modules/.astro/.git mantêm os hashes do início desta revisão.

Sem problemas bloqueantes conhecidos no âmbito revisto: pronto para publicação mediante instrução futura. Não houve commit, push ou deploy. Não se declara conformidade WCAG integral, validação das aplicações com utilizadores ou publicação deste trabalho.
