---
locale: pt
kind: Projecto pessoal · Demonstração funcional
title: Forma & Grão — Business Website
caseStudy: true
translationKey: business-website
demoUrl: https://tiagoapsantos.github.io/business-website/
sourceUrl: https://github.com/tiagoapsantos/business-website
description: Website de um atelier fictício, com quatro páginas, formulário validado e pedido descarregável em TXT. Uma demonstração de desenvolvimento Web sem backend ou envio de mensagens.
tags:
  - HTML
  - CSS
  - JavaScript
  - Node.js
images:
  - src: /images/projects/forma-grao-home.webp
    width: 1440
    height: 2643
    alt: "Homepage do Forma & Grão com apresentação do atelier fictício, imagem de um interior com mobiliário de madeira, serviços e percurso de contacto."
  - src: /images/projects/forma-grao-services.webp
    width: 1440
    height: 2723
    alt: "Página de serviços do Forma & Grão, com mobiliário por medida, restauro e planeamento de interiores, acesso ao pedido de exemplo."
---

## Contexto e problema

Um pequeno negócio precisa de explicar o que faz, como trabalha e qual o próximo passo para quem chega ao website. O Forma & Grão transforma esse problema num projecto pessoal: um atelier **inteiramente fictício** de mobiliário por medida, restauro e planeamento de interiores.

O objectivo foi construir uma experiência completa e verificável, da descoberta dos serviços à preparação de um pedido. Não é trabalho contratado, nem representa uma empresa em actividade, clientes ou resultados comerciais.

## Solução e percurso de utilização

A aplicação tem quatro páginas: início, serviços, sobre e contacto. A homepage apresenta a proposta e a abordagem; a página de serviços explica o âmbito de cada oferta; a página sobre identifica a natureza fictícia do negócio.

O contacto fecha o percurso com uma alternativa honesta a um formulário sem backend: **preparar, rever e descarregar um pedido em TXT**. A interface esclarece que nada é enviado ao atelier e recomenda dados de exemplo. Os links de cada serviço pré-seleccionam a opção correspondente no formulário.

## Funcionalidades implementadas

- Navegação entre quatro páginas, com página 404 para endereços inexistentes.
- Validação de nome, email, serviço e descrição, incluindo campos vazios e limites de tamanho.
- Erros associados aos campos, resumo focável e mensagens de estado acessíveis.
- Resumo textual e download real em UTF-8; alterações posteriores invalidam o resumo para evitar exportar uma versão desactualizada.
- Limpeza dos campos e apresentação de texto com `textContent`, sem interpretar HTML introduzido.
- Layout responsivo, foco visível, imagem principal em WebP e ilustração SVG na página sobre, com texto alternativo e dimensões definidas.

## Arquitectura e decisões técnicas

HTML semântico é gerado por módulos JavaScript que partilham navegação, rodapé e componentes de apresentação. O conteúdo dos serviços está separado da renderização. A lógica de validação e criação do resumo é um módulo puro, reutilizado nos testes.

O Node.js nativo gera os ficheiros estáticos e serve o preview. Não há dependências npm, fontes remotas ou biblioteca de interface. Esta escolha mantém a execução simples e deixa claro o que efectivamente é implementado. Não foi acrescentado um servidor de aplicação para simular um contacto comercial.

## Testes e validação

**12 testes automatizados aprovados.** A suite cobre validação, limites, normalização, resumo, rotas, recursos, âncoras, estrutura acessível e comportamento do servidor local.

Os registos de verificação da aplicação documentam ensaios do formulário e do ficheiro descarregado, teclado e quatro larguras de ecrã. As capturas mostram a homepage e a página de serviços da demonstração publicada. Testes técnicos e revisão visual não equivalem a testes com utilizadores ou a uma auditoria integral de acessibilidade.

## Limitações e disponibilidade

Não há envio de email, backend, encomendas, orçamento ou armazenamento persistente. O pedido fica na página até limpar ou recarregar; só o ficheiro descarregado permanece no dispositivo. A interface é PT-PT. A demonstração pública e o código estão disponíveis nos links no início deste estudo.

## Aprendizagens e próximos passos

A decisão mais importante foi alinhar a promessa da interface com a capacidade real do sistema: um ficheiro local é uma função demonstrável; uma mensagem de “envio concluído” sem envio não seria. A separação entre conteúdo, renderização e validação torna esse percurso mais fácil de testar.

Tradução inglesa e ensaios com leitores de ecrã são evoluções possíveis. Um backend exigiria requisitos reais de entrega, privacidade e validação no servidor; não faz parte da implementação.
