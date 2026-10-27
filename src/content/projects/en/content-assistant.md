---
locale: en
kind: Personal project · Functional demonstration
title: Pauta — Content Assistant
caseStudy: true
translationKey: content-assistant
description: A local editorial tool with briefs, deterministic templates, an editor, library and planning. Browser persistence and validated backups, without generative AI or automatic publishing.
tags:
  - JavaScript
  - Deterministic templates
  - localStorage
  - Node.js
images:
  - src: /images/projects/pauta-editor.jpg
    alt: Actual Pauta editor showing fictional text, editable fields, the template-assistance notice, status controls and exports.
---

## Context and problem

Pauta is a personal editorial-productivity application for small businesses, marketing professionals and content creators. It addresses the journey from an initial idea to a reviewed draft organised by publication date.

The first version runs entirely in the browser. Assistance comes from **deterministic rules and templates**, not generative AI. AI-assisted development must not be confused with an AI integration in the delivered application.

## Editorial workflow

The brief collects a brand, product, audience, channel, objective, tone, topic, call to action and additional information. The chosen informative, promotional or educational approach determines the template's blocks.

These inputs feed three titles and a structure suited to Instagram, Facebook, LinkedIn or a blog. Tone is guidance in the notes rather than an automatic language transformation. Explicit placeholders ask for verifiable details. The result is a starting point for human writing and review, not an autonomous or fact-checked response.

## Implemented features

The editor supports title, body, CTA, channel, format, notes, status and date changes. Character counts come with the project's own editorial guidance rather than claimed official platform limits.

The library provides accent-insensitive search, filters, sorting, CSV selection, duplication and manual variants. Copies receive a new ID, Draft status and no planned date. Planning uses a chronological list with an undated group. “Published manually” is a user-entered record: the application does not publish.

Exports include clipboard copy, individual TXT, CSV and JSON backup. TXT omits editorial notes; CSV neutralises text cells that could become spreadsheet formulas. Import validates schema, IDs, metadata and size. Adding rejects conflicts; replacing the library and deleting content require confirmation.

## Architecture and persistence

Configuration/data models, validation, suggestions, content management, storage, export and UI components are separate modules. The local provider has an isolated contract so it could be replaced without rewriting the library or editor. HTML, CSS and JavaScript use native Node.js tools without npm dependencies.

A versioned `localStorage` repository preserves the library, brief and work-in-progress editor. Preserving work in progress is distinct from adding it to the library. There is a previous-save copy, corruption/quota handling and protection against silent overwrites from another window. Planned dates remain calendar strings rather than being shifted through UTC conversions.

## Tests and validation

**24 tests passed when rerun during the integration on 27 October 2026.** They cover briefs, input influence, determinism, creation/updates, copies, statuses, search, dates, exports, imports, corruption, quota and conflicts using an in-memory storage adapter.

Earlier records document the complete browser journey, actual downloads, deletion confirmation and JSON restoration. The current capture shows the local editor with fictional content. In-memory storage tests do not mean every failure has been induced in a real browser.

## Limitations and availability

`localStorage` is not secure storage for sensitive data and does not sync devices. Technical limits include 200 items and a 2 MB backup; actual browser quota may be lower. The interface is PT-PT, with no user or screen-reader validation performed.

There are no external API integrations, backend, generative AI, publishing, notifications or external calendar. No public demo or project-specific repository has been confirmed to link here.

## Learning and next steps

The central decision was to separate editorial assistance from language generation: organising information is useful without promising automatic creativity. Distinguishing work in progress, saved library items and backups avoids false persistence guarantees.

Future AI integration would require a secure backend, server-side credentials, informed consent to send content, cost controls and explicit labelling of generated responses. That architecture is documented only; nothing has been configured. English translation, screen-reader testing and revision history are other possible developments.
