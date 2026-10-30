---
locale: en
kind: Public demonstration · Fictional data
title: Smart Clinic Assistant
caseStudy: true
demoUrl: https://tiagoapsantos.github.io/smart-clinic-assistant/
sourceUrl: https://github.com/tiagoapsantos/smart-clinic-assistant
description: A public fictional request-management demo with preset identities and messages, search, filters, details and statuses. Only simulation options persist in the browser; no freely entered contacts, backend or authentication.
tags:
  - Astro
  - TypeScript
  - CSS
  - localStorage
images:
  - src: /images/projects/smart-clinic-form.jpg
    width: 1440
    height: 1800
    alt: "Public simulation form with a fictional-person selector, fixed contact details and message, service, date and time, plus a notice that no real booking is created."
  - src: /images/projects/smart-clinic-dashboard.jpg
    width: 1440
    height: 1800
    alt: "Public demo dashboard with four fictional requests, summary counts, search, a status filter and controls for details, status changes and deletion."
  - src: /images/projects/smart-clinic-detail.jpg
    width: 1440
    height: 1800
    alt: "Complete details of Ana Demonstração's fictional request, with preset contact details and message, availability and status, over the dashboard."
---

## Context and goal

Smart Clinic Assistant is a **public fictional demonstration**, available on GitHub Pages, of a request and administrative-management workflow. It is not intended for real bookings or real clinical or personal data. The exercise combines a simulation form with a dashboard for search and status management, exploring information organisation and interface clarity.

It does not represent work for a clinic, a production booking service or a clinically validated product. The dashboard is public and has no access control.

## Problem and approach

The design separates simulating a request from reviewing it in the dashboard. Visitors choose one of three fictional identities; the name, email, phone number and administrative message are fixed, read-only examples. They can select a service and enter a date and time to explore the workflow, without freely entering contact details.

The captures show the complete form, a dashboard with four fictional requests and Ana Demonstração's request details. The four requests include the three initial examples and an additional Rui Exemplo simulation; they do not represent four real people.

## Features confirmed in code

The standalone application's form, administrative scripts and storage were consulted and compared with the public interface. Real captures of the published version show:

- **Restricted simulation:** a fictional-person selector, read-only contacts and message, and service, date and time options. Saving does not create a real booking.
- **Overview:** counts for total, pending, confirmed and cancelled requests.
- **Administrative review:** search by fictional contact or service, combined with a status filter.
- **Request management:** details, status changes and deletion; restoration of the three fictional examples, with confirmation for destructive operations.
- **Transparency:** demonstration notices, no delivery to a clinic and instructions against using real data.

Creating fictional requests, search, filters, details and status changes persisting after reload were checked in the public demonstration. The application remains independent of the Portfolio.

## Technical decisions and implications

The application uses **Astro, TypeScript, CSS and localStorage**. Its static build runs under /smart-clinic-assistant/, without an application server, backend or authentication. There are no calendar integrations, notifications or request submissions to a clinic.

Submission constructs the identity and message from the known scenario, ignoring the contact values displayed in the form. Storage validates canonical examples, allowed services and statuses, dates, times and identifiers, with a limit of 50 requests. The document security policy blocks data connections and form submissions.

The v2 demo key stores only an identifier, scenario reference, service, date, time, status and timestamp. Contacts and messages are reconstructed from the examples. The old v1 key, which accepted free text, is not read, migrated or automatically deleted. Any data previously entered in an older version needs manual removal in the corresponding origin and browser profile.

## Limitations and scope

localStorage is not secure, encrypted or synchronised storage. Subpaths on the same domain share an origin; a dedicated key prevents accidental mixing but is not a security boundary. The fictional mode reduces accidental entry of real data without preventing manual changes through developer tools. The dashboard is unsuitable for real patient information.

The application has **12 essential automated tests that passed**: preset scenarios, rejection of arbitrary data, validation, persistence, limits, isolation of the old key, static resources and delete/reset operations. Four tests execute the real handlers with simulated accept/cancel responses, checking data, counts and feedback. This is not a comprehensive audit or native-dialog testing across every browser.

The three captures were taken directly from the public Portuguese demonstration, using fictional identities and contacts at the same resolution and scale. No clinical use, clinical tests or business results are claimed.

## Learning and next steps

The project demonstrates the transition from a simulated form to an operations view, consistency between statuses and counts, and the importance of restricting the data accepted by a public demonstration.

Possible next steps include broader browser, keyboard, screen-reader and error-state coverage. A real system would require its own security and privacy requirements; this demonstration's static hosting and local storage do not meet that purpose.
