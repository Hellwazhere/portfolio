---
locale: pt
kind: Demonstração pública · Dados fictícios
title: Smart Clinic Assistant
caseStudy: true
demoUrl: https://tiagoapsantos.github.io/smart-clinic-assistant/
sourceUrl: https://github.com/tiagoapsantos/smart-clinic-assistant
description: Demonstração pública e fictícia de gestão de pedidos, com identidades e mensagens predefinidas, pesquisa, filtros, detalhes e estados. Guarda apenas opções de simulação no navegador; sem contactos livres, backend ou autenticação.
tags:
  - Astro
  - TypeScript
  - CSS
  - localStorage
images:
  - src: /images/projects/smart-clinic-form.jpg
    width: 1440
    height: 1800
    alt: "Formulário público de simulação com selector de pessoa fictícia, contactos e mensagem fixos, serviço, data e hora, e aviso de que não cria marcações reais."
  - src: /images/projects/smart-clinic-dashboard.jpg
    width: 1440
    height: 1800
    alt: "Dashboard da demonstração pública com quatro pedidos fictícios, contadores, pesquisa, filtro de estado e controlos de detalhe, alteração e remoção."
  - src: /images/projects/smart-clinic-detail.jpg
    width: 1440
    height: 1800
    alt: "Detalhe completo do pedido fictício de Ana Demonstração, com contacto e mensagem predefinidos, disponibilidade e estado, sobre o dashboard."
---

## Contexto e objectivo

O Smart Clinic Assistant é uma **demonstração pública e fictícia**, disponível no GitHub Pages, de um fluxo de pedidos e gestão administrativa. Não se destina a marcações reais nem a dados clínicos ou pessoais reais. O exercício permite explorar a organização da informação e a clareza da interface.

Não representa trabalho para uma clínica, um serviço de marcações em produção ou um produto clínico validado. O dashboard é público e não tem controlo de acesso.

## Problema e abordagem

A proposta separa a simulação de um pedido da sua consulta no painel. O visitante escolhe uma das três identidades fictícias; nome, email, telefone e mensagem administrativa são exemplos fixos, não editáveis. Pode seleccionar o serviço e indicar data e hora para explorar o fluxo, sem introduzir contactos livres.

As capturas mostram o formulário completo, o dashboard com quatro pedidos fictícios e o detalhe de Ana Demonstração. Os quatro pedidos incluem os três exemplos iniciais e uma simulação adicional de Rui Exemplo; não representam quatro pessoas reais.

## Funcionalidades confirmadas no código

O formulário, os scripts administrativos e o armazenamento da aplicação independente foram consultados e comparados com a interface pública. As capturas reais da versão publicada mostram:

- **Simulação restrita:** selector de pessoa fictícia, contactos e mensagem de leitura e opções de serviço, data e hora. Guardar não cria uma marcação real.
- **Visão de conjunto:** contadores de pedidos totais, pendentes, confirmados e cancelados.
- **Consulta administrativa:** pesquisa por contacto fictício ou serviço, combinada com filtro de estado.
- **Gestão por pedido:** detalhe, alteração de estado e remoção; reposição dos três exemplos fictícios, com confirmação nas operações destrutivas.
- **Transparência:** avisos de demonstração, ausência de envio para uma clínica e proibição de dados reais.

A criação de pedidos fictícios, a pesquisa, os filtros, o detalhe e a alteração de estado com persistência após recarregamento foram verificados na demonstração pública. A aplicação mantém-se independente do Portfolio.

## Decisões técnicas e implicações

A aplicação usa **Astro, TypeScript, CSS e localStorage**. O build estático funciona sob /smart-clinic-assistant/, sem servidor de aplicação, backend ou autenticação. Não existem integrações de agendas, envio de notificações ou submissão dos pedidos a uma clínica.

A submissão constrói a identidade e a mensagem a partir do cenário conhecido, ignorando os contactos apresentados no formulário. A gravação valida os exemplos canónicos, as listas de serviço e estado, datas, horas e identificadores, com limite de 50 pedidos. A política de segurança dos documentos bloqueia ligações de dados e submissões de formulários.

A chave de demonstração v2 guarda apenas identificador, referência ao cenário, serviço, data, hora, estado e timestamp. Os contactos e mensagens são reconstruídos a partir dos exemplos. A chave antiga v1, que aceitava texto livre, não é lida, migrada ou apagada automaticamente. Dados antigos eventualmente introduzidos numa versão anterior exigem remoção manual na origem e perfil correspondentes.

## Limitações e alcance

localStorage não é armazenamento seguro, encriptado ou sincronizado. As subpastas do mesmo domínio partilham a origem; a chave própria evita mistura acidental, mas não constitui uma fronteira de segurança. O modo fictício reduz a introdução acidental de dados reais, sem impedir alterações manuais nas ferramentas de desenvolvimento. O painel não é adequado a informação real de pacientes.

A aplicação possui **12 testes automatizados essenciais aprovados**: cenários predefinidos, rejeição de dados arbitrários, validação, persistência, limites, isolamento da chave antiga, recursos estáticos e operações de apagar/repor. Quatro testes executam os handlers reais com aceitar/cancelar simulados, verificando dados, contadores e feedback. Isto não equivale a uma auditoria integral ou a testes nativos em todos os browsers.

As três capturas foram recolhidas directamente da demonstração pública em português, com identidades e contactos fictícios, à mesma resolução e escala. Não se reivindicam utilização por uma clínica, testes clínicos ou resultados de negócio.

## Aprendizagens e próximos passos

O projecto demonstra a passagem de uma simulação de formulário para uma vista de operações, a coerência entre estados e contadores e a importância de limitar os dados aceites por uma demonstração pública.

Próximos passos possíveis são ampliar a cobertura de browser, teclado, leitores de ecrã e situações de erro. Um eventual sistema real exigiria requisitos próprios de segurança e privacidade; o alojamento estático e o armazenamento local desta demonstração não satisfazem esse objectivo.
