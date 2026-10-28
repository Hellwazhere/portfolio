---
locale: pt
kind: Projecto pessoal · Demonstração funcional
title: MyJobs — Job Search & Application Tracker
caseStudy: true
translationKey: myjobs
demoUrl: https://tiagoapsantos.github.io/myjobs/
sourceUrl: https://github.com/tiagoapsantos/myjobs
description: Pesquisa de anúncios fictícios, favoritos, pesquisas guardadas e arquivo local com estados e notas de candidaturas. Dashboard dinâmico, sem pesquisa de vagas reais nem sincronização.
tags:
  - Astro
  - TypeScript
  - localStorage
  - Testes automatizados
images:
  - src: /images/projects/myjobs-dashboard.jpg
    width: 1440
    height: 1542
    alt: "Dashboard do MyJobs com quatro oportunidades no arquivo, três favoritos activos, uma entrevista e actividade recente baseada em dados fictícios locais."
  - src: /images/projects/myjobs-search.jpg
    width: 1440
    height: 1031
    alt: "Pesquisa do MyJobs por Frontend, com filtros combináveis e um anúncio fictício de desenvolvimento Web."
  - src: /images/projects/myjobs-applications.jpg
    width: 1440
    height: 1000
    alt: "Candidatura fictícia no MyJobs com estado Entrevista, notas editáveis, data de actualização e consulta do anúncio guardado."
---

## Contexto e objectivos

O MyJobs é um projecto pessoal para organizar uma procura de emprego: explorar oportunidades, seleccionar anúncios e acompanhar candidaturas sem dispersar notas e estados por várias ferramentas. A demonstração pública é interactiva e usa exclusivamente anúncios fictícios; não procura vagas reais nem envia candidaturas.

## Pesquisa e selecção

A pesquisa textual combina filtros de área profissional, localização, país, modalidade, contrato, experiência, salário e data. Os resultados podem ser ordenados por relevância textual, data ou salário, com carregamento progressivo. A relevância usa correspondência de texto, sem análise por IA. A ordenação salarial não converte moedas.

É possível guardar, voltar a executar, renomear e remover pesquisas. As preferências do perfil podem orientar a selecção de filtros. Os favoritos são partilhados entre a pesquisa e a página Guardados.

## Arquivo e gestão de candidaturas

O arquivo conserva uma fotografia completa dos dados disponíveis de cada anúncio, identificada pela combinação de origem e ID. Permite consultar a oportunidade depois de recarregar, mesmo que deixe de estar no catálogo. Campos ausentes não são preenchidos com informação inventada.

Guardados permite pesquisar, ordenar e consultar os favoritos. Candidaturas reúne o arquivo e permite gerir seis estados: Por analisar, Pretendo candidatar-me, Candidatura enviada, Entrevista, Proposta e Encerrada. Notas e estado são guardados explicitamente, com data de actualização. Retirar um favorito conserva o anúncio e as notas no arquivo. Nenhum destes estados implica uma candidatura efectivamente enviada pela aplicação.

## Dashboard e coerência dos dados

O dashboard calcula o total do arquivo, favoritos activos e contagens dos estados actuais de candidatura enviada, entrevista e proposta. Os favoritos são um subconjunto do arquivo; mudar de estado não acumula contagens históricas.

A actividade recente apresenta a última fotografia de até cinco registos, ordenada pela data disponível, com ligações ao anúncio correspondente. Não é um histórico completo de eventos. As vistas actualizam-se ao regressar, recarregar ou receber alterações de outra janela.

## Arquitectura e validação

Astro gera páginas estáticas; TypeScript organiza modelos, pesquisa, armazenamento e apresentação. O arquivo versionado em localStorage preserva anúncios completos, enquanto o perfil e as pesquisas têm chaves próprias. Registos incompletos são preservados e sinalizados; formatos desconhecidos bloqueiam escrita em vez de substituir silenciosamente os dados.

**60 testes automatizados aprovados**, incluindo pesquisa, persistência, estados, contagens, reposição, dados inválidos e falhas de armazenamento. TypeScript e build também foram validados. A demonstração publicada foi verificada em desktop e mobile, com acesso directo às rotas, filtros, favoritos, notas e persistência após recarregamento. As falhas de quota e bloqueio de armazenamento foram simuladas em testes.

## Demonstração pública e limitações

A demonstração está alojada estaticamente sob /myjobs/. Pode começar com arquivo vazio ou repor quatro exemplos mediante confirmação. Repor ou retirar exemplos afecta anúncios fictícios e respectivas notas e estados, preservando perfil e pesquisas. Limpar o perfil é uma operação separada.

Os dados ficam apenas no navegador, sem sincronização ou backup automático. localStorage não é seguro para informação sensível e pode ser apagado pelo visitante ou pelo browser. Deve usar-se apenas informação inventada no perfil e nas notas. A interface de gestão está em português; algumas áreas permitem alternar PT/EN.

Não há pesquisa externa activa, autenticação, envio de candidaturas ou integração de IA. O código inclui preparação isolada para ITJobs e Cloudflare Worker, sem activação na demonstração pública. Assistente IA e Definições são áreas ilustrativas, não funcionalidades entregues de IA ou configuração.

## Aprendizagens e próximos passos

A decisão central foi distinguir anúncio arquivado, favorito e estado de candidatura, usando a mesma fonte de dados para as diferentes vistas. Identificadores compostos evitam colisões entre origens e uma fotografia local mantém o anúncio consultável sem depender dos resultados de pesquisa.

Backup e restauração do arquivo, tradução integral e validação com utilizadores são melhorias possíveis. Qualquer pesquisa real exigiria uma integração e revisão de privacidade próprias; não faz parte desta demonstração.
