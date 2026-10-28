# Portfolio

Portfolio pessoal bilingue feito com Astro, TypeScript e CSS. O português europeu é a língua principal; as páginas em inglês estão em `/en/`.

## Executar localmente

1. Instalar Node.js (versão LTS recomendada).
2. Na pasta do projecto, executar `npm install`.
3. Executar `npm run dev` e abrir o endereço local indicado no terminal.
4. Executar `npm run build` para gerar o site de produção em `dist/`.
5. Executar `npm run preview` para pré-visualizar a versão compilada.

## Estrutura

- `src/pages/`: rotas em português e inglês.
- `src/components/`: navegação e rodapé partilhados.
- `src/layouts/`: estrutura comum, metadados e idioma da página.
- `src/content/projects/`: conteúdos Markdown separados por idioma.
- `src/data/projects.ts`: consulta e filtra os projectos do idioma pedido.
- `src/styles/global.css`: estilos e tokens visuais globais.

## Estudos de caso

Os estudos de caso usam o corpo dos ficheiros Markdown da colecção `projects`. Para publicar uma página individual, adicionar `caseStudy: true` ao frontmatter e conteúdo ao corpo. Os cartões só mostram o link quando ambos existem; os restantes projectos continuam como conceitos na listagem.

As rotas `src/pages/projects/[slug].astro` e `src/pages/en/projects/[slug].astro` geram apenas as entradas elegíveis. O componente `CaseStudy.astro` partilha a apresentação, o índice de secções e a galeria, preservando os textos de cada idioma. Traduções usam `translationKey` partilhada quando os slugs diferem entre idiomas; com o mesmo slug, a correspondência funciona sem esse campo. O selector abre a página equivalente. Sem tradução, o selector mantém o acesso à listagem no outro idioma.

Os seis projectos têm estudos de caso PT/EN: Pedro Pires, Smart Clinic Assistant, Forma & Grão, PRISMA, Pauta e MyJobs. As aplicações mantêm-se em pastas independentes; o portfolio contém apenas apresentação, conteúdo e capturas reais. A auditoria actualizada em `docs/project-evidence-audit.md` regista código inspeccionado, testes reexecutados e limitações. As capturas das três aplicações recentes foram recolhidas dos previews locais; não existem links inventados para demonstrações públicas.

O Portfolio combina o website profissional de Pedro Pires com cinco aplicações pessoais e demonstrativas. O `site` em `astro.config.mjs` já aponta para `https://tiagoapsantos.github.io`, com publicação na raiz e URLs canónicos correspondentes. Esta integração fica apenas em revisão local, sem publicação.

## Projectos actuais

O Portfolio apresenta seis projectos PT/EN: Pedro Pires, Smart Clinic Assistant, Forma & Grão, PRISMA, Pauta e MyJobs. Pedro Pires é um website profissional para um ilustrador; os restantes são aplicações pessoais. As ilustrações são de Pedro Pires; o desenvolvimento do website é de Tiago Santos, com assistência de ferramentas de IA.

As capturas de Pedro Pires foram recolhidas do website público em 28/10/2026: Homepage e Galeria a 1440 × 1100 e Homepage mobile a 390 × 1000 (a área capturada exclui as barras do browser). As versões públicas WebP estão em public/images/projects/pedro-pires/. São capturas reais, sem recorte nem imagens geradas. Os PNG de trabalho ficam em docs/pedro-captures/ e não entram no build. O sitemap é gerado em /sitemap.xml.

Para validar esta integração: executar `npm run build`, `node node_modules/typescript/bin/tsc --noEmit` e `node scripts/verify-build.mjs`. A verificação confirma seis projectos por idioma, rotas, imagens, links locais e sitemap.
