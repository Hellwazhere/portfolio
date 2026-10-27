---
locale: pt
kind: Demonstração local
title: Smart Clinic Assistant
caseStudy: true
description: Demonstração fictícia de gestão local de marcações, com formulário de pedido e painel administrativo para pesquisa, filtros, consulta de detalhes e actualização de estados. Guarda os dados no localStorage; não tem backend nem autenticação e não utiliza dados reais de pacientes.
tags:
  - Astro
  - TypeScript
  - CSS
  - localStorage
images:
  - src: /images/projects/smart-clinic-form.png
    alt: Captura de ecrã do formulário de pedido de marcação do Smart Clinic Assistant.
  - src: /images/projects/smart-clinic-dashboard.png
    alt: Captura de ecrã do painel administrativo com totais, pesquisa, filtros e gestão de estados.
---

## Contexto e objectivo

O Smart Clinic Assistant é uma **demonstração local e fictícia** de um fluxo de pedidos de marcação. O exercício aproxima duas tarefas de operações digitais: recolher um pedido de forma estruturada e facilitar a sua consulta num painel administrativo.

Não representa trabalho para uma clínica, um serviço de marcações em produção ou um produto clínico validado. O seu interesse está na organização da informação e na clareza da interface.

## Problema e abordagem

Um pedido precisa de reunir contacto, serviço pretendido e disponibilidade; a consulta administrativa precisa de permitir encontrar esse pedido e reconhecer o seu estado. A proposta separa estas necessidades em duas vistas: **formulário de pedido** e **painel de gestão**.

Nas capturas, a primeira vista dá prioridade ao preenchimento e explica onde ficam os dados. A segunda reúne totais, pesquisa, filtro por estado e uma lista de pedidos fictícios. Esta separação torna o percurso visível sem misturar recolha e gestão na mesma interface.

## Funcionalidades confirmadas no código

O código da aplicação independente foi agora inspeccionado: componentes Astro, tipos TypeScript, scripts do formulário e painel e módulo de armazenamento confirmam o formulário, pesquisa, filtros, detalhes, estados e persistência em `localStorage`. As capturas reutilizadas mostram:

- **Pedido estruturado:** campos para nome, email, telefone, serviço, data, hora e mensagem administrativa opcional, com uma acção para guardar o pedido.
- **Visão de conjunto:** contadores de pedidos totais, pendentes, confirmados e cancelados.
- **Consulta administrativa:** campo de pesquisa por contacto ou serviço e selector de estado.
- **Acções por pedido:** controlos para ver detalhes, alterar o estado e apagar; existe também um controlo para repor dados de demonstração.
- **Transparência no ecrã:** avisos de demonstração fictícia, ausência de envio para uma clínica e instruções para não introduzir informação de saúde.

Os scripts implementam a criação de pedidos, contadores, pesquisa combinada com estado, diálogo de detalhes, alteração de estado e remoção/reposição com confirmação. Esta revisão confirma a implementação pela leitura do código; não executou novamente essas interacções no browser. A aplicação mantém-se separada do portfolio.

## Decisões técnicas e implicações

A configuração e o código confirmam **Astro, TypeScript, CSS e localStorage**. A persistência no navegador permite explorar o fluxo local descrito sem backend. Em contrapartida, não constitui armazenamento seguro nem um sistema partilhado entre pessoas ou dispositivos.

A demonstração é documentada como não tendo autenticação. Assim, a existência de um painel administrativo não deve ser confundida com controlo de acesso. O formulário usa validação HTML, verificação adicional de email e data mínima no dia local. A leitura do armazenamento verifica campos, datas, horas e estados conhecidos. Se uma lista JSON válida tiver estrutura inválida, o código repõe exemplos fictícios; erros de leitura devolvem exemplos em memória. Não há backup versionado ou recuperação dos dados originais.

## Limitações e alcance

O projecto utiliza dados fictícios, sem backend nem autenticação. Não há evidência de integração com agendas externas, envio de notificações ou utilização por uma clínica. Não são apresentados resultados de negócio, testes clínicos ou métricas de utilização.

As duas capturas em português foram reutilizadas e comparadas com os ficheiros da aplicação independente. Não há comando de testes nem suite automatizada configurada nessa aplicação; não se atribuem os testes dos outros projectos a este caso. Não foi confirmado um URL público de demonstração ou repositório específico.

## Aprendizagens e próximos passos

O exercício permite analisar a passagem de um formulário para uma vista de operações, a relação entre estados e contadores e a importância de explicar as limitações do armazenamento local. As capturas mostram também como os avisos e os exemplos fictícios podem fazer parte do próprio percurso visual.

Um próximo passo é acrescentar testes automatizados e voltar a verificar o percurso completo: guardar, procurar, consultar e actualizar um pedido fictício, incluindo navegação por teclado e situações de erro. Estes testes são uma recomendação, não resultados já obtidos.
