---
locale: en
kind: Local demonstration
title: Smart Clinic Assistant
caseStudy: true
description: A fictional local appointment-management demo with a request form and admin dashboard for search, filtering, appointment details and status updates. It persists data in localStorage; there is no backend or authentication, and it uses no real patient data.
tags:
  - Astro
  - TypeScript
  - CSS
  - localStorage
images:
  - src: /images/projects/smart-clinic-form.png
    alt: Screenshot of the Smart Clinic Assistant appointment request form.
  - src: /images/projects/smart-clinic-dashboard.png
    alt: Screenshot of the admin dashboard with totals, search, filters and appointment status controls.
---

## Context and goal

Smart Clinic Assistant is a **fictional, local demonstration** of an appointment-request workflow. The exercise connects two digital operations tasks: collecting a structured request and making it easier to review in an administrative dashboard.

It does not represent work for a clinic, a production booking service or a clinically validated product. Its focus is information organisation and interface clarity.

## Problem and approach

A request needs contact details, a service and preferred availability; an administrative view needs a way to find that request and recognise its status. The proposal separates these needs into two views: a **request form** and a **management dashboard**.

In the captures, the first view prioritises form completion and explains where data stays. The second brings together totals, search, a status filter and a list of fictional requests. This separation makes the workflow visible without combining collection and management in one interface.

## Features confirmed in code

The standalone application code has now been inspected: Astro components, TypeScript types, form/dashboard scripts and a storage module confirm the form, search, filters, details, statuses and `localStorage` persistence. The reused captures show:

- **Structured requests:** fields for name, email, phone, service, date, time and an optional administrative message, with an action to save the request.
- **Overview:** counts for total, pending, confirmed and cancelled requests.
- **Administrative review:** a search field for contact details or services and a status selector.
- **Request actions:** controls to view details, change status and delete, plus a control to restore demonstration data.
- **On-screen transparency:** notices identifying a fictional demo, explaining that nothing is sent to a clinic and asking people not to enter health information.

The scripts implement request creation, counters, combined search/status filtering, a details dialog, status changes and confirmed deletion/reset. This review confirms implementation by reading code; it did not rerun those browser interactions. The application remains separate from the portfolio.

## Technical decisions and implications

Configuration and source code confirm **Astro, TypeScript, CSS and localStorage**. Browser persistence supports exploration of the described local workflow without a backend. However, it is neither secure storage nor a shared system for multiple people or devices.

The demonstration is documented as having no authentication. An administrative dashboard should therefore not be mistaken for access control. The form uses HTML validation, an additional email check and a minimum date based on the local day. Storage reads validate fields, dates, times and known statuses. If a valid JSON array has an invalid structure, the code restores fictional examples; read failures return in-memory examples. There is no versioned backup or recovery of original data.

## Limitations and scope

The project uses fictional data, with no backend or authentication. There is no evidence of external calendar integration, notification delivery or use by a clinic. No business results, clinical tests or usage metrics are claimed.

Both Portuguese captures were reused and compared with the standalone application files. That application has no configured test command or automated suite; tests from other projects are not attributed to it. No public demo URL or project-specific repository has been confirmed.

## Learning and next steps

The exercise offers a way to examine the transition from a form to an operations view, the relationship between statuses and counters, and the importance of explaining local storage limitations. The captures also show how notices and fictional examples can be part of the visual journey itself.

A useful next step is to add automated tests and rerun the complete journey: saving, searching, reviewing and updating a fictional request, including keyboard navigation and error conditions. These tests are a recommendation, not results already obtained.
