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

Os projectos incluídos são conceitos demonstrativos ou exercícios de aprendizagem, não trabalho de clientes. Actualizar `site` em `astro.config.mjs` quando existir um domínio público, para activar URLs canónicos.
