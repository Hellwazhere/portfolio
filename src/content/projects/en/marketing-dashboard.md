---
locale: en
kind: Personal project · Functional demonstration
title: PRISMA — Marketing Dashboard
caseStudy: true
translationKey: marketing-dashboard
demoUrl: https://tiagoapsantos.github.io/marketing-dashboard/
sourceUrl: https://github.com/tiagoapsantos/marketing-dashboard
description: A dashboard with eight metrics, combined filters, charts and CSV export built on seven fictional campaigns. Testable calculations and local data, with no advertising-platform connection.
tags:
  - JavaScript
  - Data analysis
  - SVG
  - Node.js
images:
  - src: /images/projects/prisma-dashboard.jpg
    width: 1440
    height: 2400
    alt: "PRISMA overview with eight metrics, charts, channel comparisons and a table of seven fictional campaigns."
  - src: /images/projects/prisma-filtered.jpg
    width: 1440
    height: 2400
    alt: "PRISMA with Paid search and Last 7 days filters applied, recalculated metrics and two campaigns sorted by name."
---

## Context and objectives

PRISMA is a personal project exploring a digital marketing problem: turning campaign observations into a consistent view of spend, interactions and conversions. Its demonstration audience is a professional who needs to filter data and understand what each metric means.

All values are **synthetic and local**. They are not historical results, client work or evidence of commercial performance. The application is not connected to advertising platforms.

## Data model and approach

The model separates seven campaigns from their daily records: three generic channels and **210 observations for September 2026**. Spend is stored in integer cents; impressions, clicks and conversions are counts. Data is constructed deterministically without an external source.

Inclusive date-range, channel, campaign and status filters select observations first. Cards, time series, channel totals and table rows are then derived from that selection, keeping every view on the same calculation basis.

## Metrics and analytical reasoning

The eight metrics are spend, impressions, clicks, conversions, CTR, CPC, conversion rate and cost per conversion.

- **CTR:** clicks ÷ impressions × 100.
- **CPC:** spend in EUR ÷ clicks.
- **Conversion rate:** conversions ÷ clicks × 100.
- **Cost per conversion:** spend in EUR ÷ conversions.

Aggregated rates use sums of absolute values rather than averaging individual campaign rates. A zero denominator returns `null`, displayed as “—”. Zero-activity observations are distinguished from a selection with no observations: the former retains absolute values, while the latter shows an empty state.

## Implemented features

Two SVG charts show spend and conversions with independent scales and units, alongside a daily-value table. Bars compare channels and a percentage distribution shows their share of spend.

Filters can be combined, with date shortcuts and a reset option. Invalid dates prevent stale data from being displayed and disable CSV export. The table sorts eleven columns, keeps nulls last and scrolls within its own region on smaller screens. Export includes filtered campaigns in the displayed order, the date range and a synthetic-data label, with spreadsheet-formula protection for text cells.

## Architecture and validation

Data, calculations, formatting, charts, presentation and export are separate modules. Analytical functions do not depend on the DOM. HTML, CSS and JavaScript modules are served by native Node.js tools, without npm dependencies or a charting library.

**19 automated tests passed.** They cover formulas, weighted aggregation, data integrity, filters, cross-view consistency, sorting, zero denominators, CSV and the server. Verification records document browser interactions, a real download and responsive checks; the public demonstration captures show the overview and a filtered selection.

## Limitations

A conversion is a fictional action attributed to the same day and campaign. The model does not represent unique users, deduplication, attribution windows, revenue or ROAS. Actual platforms may use different definitions. Campaign status is fixed within the dataset rather than a history.

There is no data import, editing or persistence, backend, synchronisation or task management. The interface is PT-PT.

## Learning and possible development

The central capability demonstrated is consistency between metrics, filters and visualisations, with verifiable definitions. Distinguishing missing data, zero activity and an undefined metric prevents misleading visual conclusions.

Validated imports, period comparisons and an English interface are possible developments, not implemented features. Any real source would require schema validation and an attribution definition before reusing the calculations.
