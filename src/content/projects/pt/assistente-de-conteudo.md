---
locale: pt
kind: Projecto pessoal · Demonstração funcional
title: Pauta — Content Assistant
caseStudy: true
translationKey: content-assistant
demoUrl: https://tiagoapsantos.github.io/content-assistant/
sourceUrl: https://github.com/tiagoapsantos/content-assistant
description: Ferramenta editorial local com briefing, modelos determinísticos, editor, biblioteca e planeamento. Persistência no navegador e backups validados, sem IA generativa ou publicação automática.
tags:
  - JavaScript
  - Modelos determinísticos
  - localStorage
  - Node.js
images:
  - src: /images/projects/pauta-editor.jpg
    alt: Editor real do Pauta com texto fictício, campos editáveis, aviso de assistência por modelos e opções de estado e exportação.
---

## Contexto e problema

O Pauta é uma aplicação pessoal de produtividade editorial para pequenos negócios, profissionais de marketing e criadores de conteúdo. Aborda o percurso entre uma ideia inicial, um rascunho revisto e uma publicação organizada por data.

A primeira versão funciona inteiramente no navegador. A assistência é feita por **regras e modelos determinísticos**, não por IA generativa. O desenvolvimento com assistência de IA não deve ser confundido com uma integração de IA na aplicação entregue.

## Abordagem ao fluxo editorial

O briefing recolhe marca, produto, público, canal, objectivo, tom, tema, chamada à acção e informação adicional. A abordagem escolhida — informativa, promocional ou educativa — organiza os blocos do modelo.

Os dados alimentam três títulos e uma estrutura adaptada a Instagram, Facebook, LinkedIn ou blog. O tom é uma orientação nas notas; não é uma transformação linguística automática. Campos explícitos convidam a acrescentar apenas detalhes verificáveis. O resultado é um ponto de partida sujeito a escrita e revisão humanas, não uma resposta autónoma ou factualmente verificada.

## Funcionalidades implementadas

O editor permite alterar título, texto, CTA, canal, formato, notas, estado e data. A contagem de caracteres é acompanhada por orientações próprias, sem apresentar limites oficiais das plataformas.

A biblioteca suporta pesquisa sem distinção de acentos, filtros, ordenação, selecção para CSV, duplicação e variantes manuais. As cópias têm novo ID, estado Rascunho e data vazia. O planeamento é uma lista cronológica que identifica conteúdos sem data. “Publicado manualmente” é apenas um registo do utilizador: a aplicação não publica.

As exportações incluem cópia, TXT individual, CSV e backup JSON. O TXT omite notas editoriais; o CSV neutraliza células textuais que possam ser interpretadas como fórmulas. A importação valida o schema, IDs, metadados e tamanho. Adicionar rejeita conflitos; substituir a biblioteca e eliminar conteúdos requerem confirmação.

## Arquitectura e persistência

Configuração/modelos de dados, validação, motor de sugestões, gestão, armazenamento, exportação e componentes de interface são módulos separados. O fornecedor local tem um contrato isolado para permitir uma futura substituição sem reescrever a biblioteca ou o editor. HTML, CSS e JavaScript usam apenas ferramentas nativas do Node.js, sem dependências npm.

Um repositório versionado em `localStorage` preserva a biblioteca, o briefing e o editor em curso. Guardar trabalho em curso não equivale a adicioná-lo à biblioteca. Há cópia anterior, tratamento de corrupção/quota e protecção contra sobrescrita silenciosa por outra janela. Datas de planeamento são strings de calendário, sem conversões indevidas para UTC.

## Testes e validação

**24 testes foram reexecutados e aprovados na integração de 27 de Outubro de 2026.** Cobrem briefing, influência dos campos, determinismo, criação/actualização, cópias, estados, pesquisa, datas, exportação, importação, corrupção, quota e conflitos através de um adaptador de armazenamento em memória.

Os registos anteriores documentam o fluxo completo no browser, downloads reais, confirmação de remoção e restauração JSON. A captura actual mostra o editor no preview local com conteúdo fictício. Testes de armazenamento em memória não equivalem a provocar todas as falhas num browser real.

## Limitações e disponibilidade

`localStorage` não é armazenamento seguro para dados sensíveis, nem sincroniza dispositivos. A versão tem limites técnicos de 200 conteúdos e backup de 2 MB; a quota real do navegador pode ser inferior. A interface é PT-PT e não houve validação com utilizadores ou leitores de ecrã.

Não há integrações com APIs externas, backend, IA generativa, publicação, notificações ou calendário externo. Não existe demonstração pública ou repositório específico confirmado para ligar aqui.

## Aprendizagens e próximos passos

A decisão central foi separar assistência editorial de geração de linguagem: organizar informação é útil sem prometer criatividade automática. A distinção entre editor em curso, biblioteca guardada e backup evita falsas garantias de persistência.

Uma futura integração de IA exigiria backend seguro, credenciais no servidor, consentimento para envio de conteúdo, controlo de custos e identificação das respostas geradas. Essa arquitectura está apenas documentada; não foi configurada. Tradução EN, leitores de ecrã e histórico de revisões são outras evoluções possíveis.
