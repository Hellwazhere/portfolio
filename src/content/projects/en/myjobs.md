---
locale: en
kind: Personal project · Functional demonstration
title: MyJobs — Job Search & Application Tracker
caseStudy: true
translationKey: myjobs
demoUrl: https://tiagoapsantos.github.io/myjobs/
sourceUrl: https://github.com/tiagoapsantos/myjobs
description: Search fictional listings, save favorites and searches, and track applications with a local archive, statuses and notes. A dynamic dashboard without real vacancy search or device synchronisation.
tags:
  - Astro
  - TypeScript
  - localStorage
  - Automated tests
images:
  - src: /images/projects/myjobs-dashboard.jpg
    width: 1440
    height: 1542
    alt: "MyJobs dashboard with four archived opportunities, three active favorites, one interview and recent activity based on local fictional data."
  - src: /images/projects/myjobs-search.jpg
    width: 1440
    height: 1031
    alt: "MyJobs search for Frontend, with combined filters and one fictional web development listing."
  - src: /images/projects/myjobs-applications.jpg
    width: 1440
    height: 1000
    alt: "Fictional MyJobs application with Interview status, editable notes, an update date and access to the saved listing."
---

## Context and goals

MyJobs is a personal project for organising a job search: exploring opportunities, selecting listings and tracking applications without scattering notes and statuses across tools. The public demo is interactive and uses fictional listings exclusively. It does not search for real vacancies or submit applications.

## Search and selection

Text search combines filters for professional area, location, country, work arrangement, contract, experience, salary and posting date. Results can be sorted by text relevance, date or salary, with progressive loading. Relevance uses text matching without AI analysis. Salary sorting does not convert currencies.

Searches can be saved, rerun, renamed and removed. Profile preferences can suggest filters. Favorites are shared between search and the Saved page.

## Archive and application tracking

The archive stores a complete snapshot of the available listing information, identified by source and ID together. Opportunities remain accessible after reloading even when they are no longer in the catalogue. Missing fields are not filled with invented information.

Saved supports searching, sorting and reviewing favorites. Applications brings together the archive and six statuses: To review, Planning to apply, Application sent, Interview, Offer and Closed. Notes and status are saved explicitly with an update date. Removing a favorite retains the listing and notes in the archive. A status never means that the application itself submitted anything.

## Dashboard and data consistency

The dashboard calculates archive totals, active favorites and counts for the current Application sent, Interview and Offer statuses. Favorites are a subset of the archive; status changes do not accumulate historical counts.

Recent activity shows the latest snapshot of up to five records, sorted by the available date and linked to the corresponding listing. It is not a full event history. Views update when returning, reloading or receiving changes from another browser window.

## Architecture and validation

Astro generates static pages; TypeScript structures the models, search, storage and presentation. A versioned localStorage archive preserves complete listings, while profiles and saved searches use separate keys. Incomplete records are retained and flagged; unknown formats block writes instead of silently replacing data.

**60 automated tests passed**, covering search, persistence, statuses, counts, example resets, invalid data and storage failures. TypeScript and the production build were also validated. The published demo was checked on desktop and mobile, including direct route access, filters, favorites, notes and persistence after reloading. Storage blocking and quota failures were simulated in tests.

## Public demo and limitations

The demo is statically hosted under /myjobs/. Visitors can start with an empty archive or restore four examples after confirmation. Restoring or removing examples affects fictional listings and their notes and statuses, preserving the profile and saved searches. Clearing the profile is a separate action.

Data stays in the browser, without device synchronisation or automatic backups. localStorage is unsuitable for sensitive information and can be cleared by the visitor or browser. Only invented information should be used in the profile and notes. Management screens are in Portuguese; some areas offer PT/EN switching.

There is no active external search, authentication, application submission or AI integration. The source includes isolated preparation for ITJobs and a Cloudflare Worker, neither activated in the public demo. AI Assistant and Settings are illustrative areas, not delivered AI or configuration features.

## Lessons and possible improvements

The central decision was to distinguish an archived listing, a favorite and an application status, with a shared data source across views. Composite identifiers avoid collisions between sources, and a local snapshot keeps listings accessible independently of search results.

Archive backup and restoration, full translation and user testing are possible improvements. Real vacancy search would require its own integration and privacy review; it is outside this demo.
