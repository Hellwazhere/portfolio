---
locale: pt
kind: Projecto pessoal · Demonstração funcional
title: PRISMA — Marketing Dashboard
caseStudy: true
translationKey: marketing-dashboard
demoUrl: https://tiagoapsantos.github.io/marketing-dashboard/
sourceUrl: https://github.com/tiagoapsantos/marketing-dashboard
description: Dashboard com oito indicadores, filtros combinados, gráficos e CSV, construído sobre sete campanhas fictícias. Cálculos testáveis e dados locais, sem ligação a plataformas de publicidade.
tags:
  - JavaScript
  - Análise de dados
  - SVG
  - Node.js
images:
  - src: /images/projects/prisma-dashboard.jpg
    width: 1440
    height: 2400
    alt: "Visão geral do PRISMA com oito indicadores, gráficos, comparação de canais e tabela de sete campanhas fictícias."
  - src: /images/projects/prisma-filtered.jpg
    width: 1440
    height: 2400
    alt: "PRISMA com filtro Pesquisa paga e Últimos 7 dias aplicados, indicadores recalculados e tabela de duas campanhas ordenada por nome."
---

## Contexto e objectivos

O PRISMA é um projecto pessoal para explorar um problema de marketing digital: transformar observações de campanhas numa leitura coerente de investimento, interacções e conversões. O público demonstrativo é um profissional que precisa de filtrar dados e compreender o que cada indicador representa.

Todos os valores são **sintéticos e locais**. Não são resultados históricos, trabalho de clientes ou evidência de desempenho comercial. A aplicação não está ligada a plataformas de publicidade.

## Modelo de dados e abordagem

O modelo separa sete campanhas dos respectivos registos diários: três canais genéricos e **210 observações de Setembro de 2026**. O investimento é guardado em cêntimos inteiros; impressões, cliques e conversões são contagens. Os dados são construídos de forma determinística, sem uma fonte externa.

Os filtros de período inclusivo, canal, campanha e estado seleccionam primeiro as observações. Só depois são calculados cartões, séries temporais, canais e linhas da tabela. Assim, as diferentes vistas partilham a mesma base de cálculo.

## Indicadores e raciocínio analítico

Os oito indicadores são investimento, impressões, cliques, conversões, CTR, CPC, taxa de conversão e custo por conversão.

- **CTR:** cliques ÷ impressões × 100.
- **CPC:** investimento em EUR ÷ cliques.
- **Taxa de conversão:** conversões ÷ cliques × 100.
- **Custo por conversão:** investimento em EUR ÷ conversões.

As taxas agregadas usam as somas dos valores absolutos, não a média das taxas de cada campanha. Um denominador zero devolve `null`, apresentado como “—”. Uma campanha com observações a zero distingue-se de uma selecção sem observações: a primeira mantém os valores absolutos, a segunda mostra um estado vazio.

## Funcionalidades implementadas

Dois gráficos SVG mostram investimento e conversões com escalas e unidades independentes, acompanhados por uma tabela diária. Barras comparam canais e uma distribuição percentual mostra o peso no investimento.

Os filtros combinam-se, têm atalhos e reposição. Datas inválidas impedem apresentar dados desactualizados e desactivam o CSV. A tabela permite ordenar onze colunas, mantém nulos no fim e pode deslocar-se dentro da sua região em ecrãs pequenos. A exportação contém as campanhas filtradas na ordem visível, o período e a indicação de dados fictícios, com protecção contra fórmulas em células textuais.

## Arquitectura e validação

Dados, cálculos, formatação, gráficos, apresentação e exportação são módulos distintos. As funções analíticas não dependem do DOM. HTML, CSS e JavaScript modular são servidos por ferramentas nativas do Node.js, sem dependências npm ou biblioteca de gráficos.

**19 testes automatizados aprovados.** Incluem fórmulas, agregação ponderada, integridade dos dados, filtros, coerência entre vistas, ordenação, denominadores zero, CSV e servidor. Os registos de verificação documentam interacções no browser, download real e responsividade; as capturas da demonstração pública mostram a visão geral e uma selecção filtrada.

## Limitações

Conversão é uma acção fictícia atribuída ao mesmo dia e campanha. Não se modelam utilizadores únicos, deduplicação, janelas de atribuição, receita ou ROAS. Plataformas reais podem usar definições diferentes. O estado de campanha é fixo no conjunto, não um histórico.

Não há importação, edição ou persistência de dados, backend, sincronização ou gestão de tarefas. A interface é PT-PT.

## Aprendizagens e evolução possível

A competência central demonstrada é manter a coerência entre métricas, filtros e visualizações, tornando as definições verificáveis. Separar ausência de dados, actividade zero e indicador não calculável evita conclusões visuais enganadoras.

Importação validada, comparação entre períodos e tradução EN são evoluções possíveis, não implementadas. Qualquer fonte real exigiria validar o schema e esclarecer a atribuição antes de reutilizar os cálculos.
