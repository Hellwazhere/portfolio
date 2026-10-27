# Smart Clinic Assistant — actualização de capturas

Data: 27/10/2026. Registo da preparação local e da revalidação para publicação.

## Auditoria e ficheiros inspeccionados

O portfolio estava limpo em `git status --short` antes das alterações. A pasta `C:/Users/Tiago/smart-clinic-assistant` não é um repositório Git; o comando devolveu essa indicação. O código fonte da aplicação não foi alterado. Os comandos Astro geraram apenas os ficheiros locais habituais de cache/build (`.astro` e `dist`). As dependências já estavam instaladas.

No portfolio foram inspeccionados:

- `package.json`, `astro.config.mjs`, `tsconfig.json` e `src/content.config.ts`.
- `src/content/projects/pt/smart-clinic-assistant.md` e `src/content/projects/en/smart-clinic-assistant.md`.
- `src/data/projects.ts`, `src/components/CaseStudy.astro` e `src/styles/case-study.css`.
- `src/pages/index.astro`, `src/pages/en/index.astro`, `src/pages/projects/index.astro`, `src/pages/en/projects/index.astro` e `src/styles/global.css`.
- As imagens anteriores `public/images/projects/smart-clinic-form.png` e `public/images/projects/smart-clinic-dashboard.png` e as suas referências em `docs/project-evidence-audit.md`.

Na aplicação fonte foram lidos `README.md`, `package.json`, `src/pages/admin.astro`, `src/components/AppointmentForm.astro`, `src/scripts/admin.ts`, `src/scripts/booking.ts`, `src/lib/appointment-store.ts` e `src/data/demo-appointments.ts`.

## Aplicação real e capturas

Execução conforme README com Astro; build de produção concluída e pré-visualizada em `http://127.0.0.1:4323/`. Capturas de browser reais, em português, sem alterar elementos da interface. Os três exemplos nativos usam nomes explicitamente fictícios, contactos `example.invalid` e números `000 000 00x`. Não foi necessário gerar outros dados nem repor dados existentes.

| Ficheiro em `public/images/projects/` | Vista | Dimensões | Tamanho |
| --- | --- | --- | --- |
| `smart-clinic-form.jpg` | Formulário completo, avisos e explicação do armazenamento | 1265 × 1432 | 106952 bytes |
| `smart-clinic-dashboard.jpg` | Contadores, pesquisa, filtro e três pedidos em estados distintos | 1265 × 1359 | 89097 bytes |
| `smart-clinic-detail.jpg` | Diálogo completo de um pedido fictício, sobre a lista | 1265 × 712 | 53267 bytes |

JPEGs para web, cerca de 244 KiB no total. As duas vistas principais foram captadas como páginas completas para não cortar campos ou pedidos. A vista de detalhe mantém o contexto do painel. Não foi acrescentada captura mobile da aplicação.

No browser foram confirmados formulário, painel, contadores e lista, pesquisa por Ana, filtro de confirmadas (apenas Rui) e abertura/fecho dos detalhes de Ana. Os controlos de estado estão visíveis; implementação inspeccionada no código. Não foram efectuados testes de submissão, alteração de estado, remoção ou reposição. Não existem histórico de actividade, quick replies ou exportação CSV nesta versão; não foram representados.

## Integração e ficheiros alterados

- Substituídas as duas imagens PNG antigas pelos três JPEGs acima.
- Actualizados os dois Markdown PT/EN: caminhos, alt/legendas e pequenas notas sobre a proveniência das novas capturas e as verificações efectivamente realizadas.
- Actualizadas as quatro páginas de homepage/listagem PT/EN para conservar duas pré-visualizações, mantendo o detalhe exclusivamente no estudo de caso.
- `src/styles/global.css`: removido o recorte quadrado das pré-visualizações Smart Clinic; imagens com largura responsiva e altura natural. Corrigida a largura dos links das imagens na homepage mobile.
- `src/content.config.ts` e `src/components/CaseStudy.astro`: dimensões opcionais das imagens para reservar espaço durante carregamento. As quatro páginas de pré-visualização também emitem essas dimensões. Apenas as imagens Smart Clinic recebem os novos metadados; conteúdo e imagens dos outros estudos não foram alterados.
- Actualizada a referência antiga em `docs/project-evidence-audit.md` e criado este relatório.

## Validação final

- `npm run build`: sucesso; 16 páginas geradas.
- `npx --no-install tsc --noEmit`: sucesso, sem erros. Não existe script específico de testes ou de `astro check` configurado no portfolio.
- `git diff --check`: sem erros de whitespace.
- Verificação dos destinos locais `href`/`src` no HTML de produção das seis páginas afectadas: 142 referências e 20 fragmentos, sem destinos em falta. URLs externas não foram testadas.
- Revisão visual no browser das homepages, listagens e estudos Smart Clinic PT/EN, em desktop e viewport mobile de 390 × 844. Todas as novas imagens carregaram ao entrar na vista respectiva; sem overflow horizontal, distorção ou recortes do interface. O carregamento diferido fora do ecrã é esperado. Dimensões do viewport repostas após os testes.
- Imagens originais acessíveis a partir das pré-visualizações/galeria para leitura de pormenores, especialmente em mobile.

Estado após a preparação local: 10 ficheiros de texto modificados, 2 PNGs removidos e 4 ficheiros novos (3 JPEGs e este relatório). Nessa fase, nada foi colocado em staging e nenhum commit, push ou deploy foi executado.

## Revalidação para publicação

Publicação autorizada pelo utilizador, exclusivamente para esta actualização visual, com um único commit de mensagem `Update Smart Clinic Assistant screenshots`.

- Directório, branch `main` e remote `origin` confirmados: `https://github.com/tiagoapsantos/tiagoapsantos.github.io.git`. Após `git fetch origin`, HEAD e `origin/main` estavam sincronizados.
- Diff e quatro ficheiros novos revistos, sem alterações inesperadas. As referências aos PNGs antigos foram removidas do site; este relatório mantém os nomes apenas como registo histórico.
- Os três JPEGs foram novamente inspeccionados visualmente: formulário vazio e exemplos fictícios identificados, emails `example.invalid`, telefones de demonstração e mensagens administrativas sem informação clínica real.
- Revisão repetida das seis páginas locais de produção, em desktop e mobile de 390 × 844: legendas/alt adequados, imagens proporcionais e carregadas na vista respectiva, sem overflow horizontal. O detalhe foi também revisto no final da galeria em PT/EN. Não foram necessárias correcções adicionais.
- Build repetida com sucesso: 16 páginas. TypeScript e `git diff --check` sem erros. Verificação repetida de 142 referências locais e 20 fragmentos: zero destinos em falta.
- A aplicação original não foi alterada nesta revalidação. Os restantes estudos de caso e respectivas imagens permanecem sem alterações.

O resultado do commit, push, GitHub Actions e comparação dos ficheiros online será apresentado no relatório final da publicação no chat, após a execução dessas operações.
